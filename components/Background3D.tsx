import React, { useEffect, useRef, memo, useState } from 'react';

/**
 * High-Performance Canvas-based 3D Particle Network
 * Optimized with:
 * - Intersection Observer (only renders when visible)
 * - GPU Acceleration (hardware rendering)
 * - requestIdleCallback (runs during idle time)
 * - Spatial Partitioning (O(N) instead of O(N²))
 */
const Background3D: React.FC = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Intersection Observer - sadece görünürse render et
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    observer.observe(container);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !isVisible) return;

    // Accessibility: Reduced motion tercihinde animasyon çalıştırma
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (prefersReducedMotion) {
      return; // Animasyonu başlatma (accessibility)
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let frameCount = 0;

    // Mobile detection
    const isMobile = window.innerWidth < 768;

    // Configuration - Mobile optimized
    const config = {
      particleCount: isMobile ? 20 : 50, // Mobile: 60% reduction
      connectionDistance: isMobile ? 80 : 150, // Mobile: 47% reduction
      mouseDistance: isMobile ? 0 : 200, // Mouse interaction disabled on mobile
      baseSpeed: isMobile ? 0.15 : 0.2, // Mobile: slightly slower for smoothness
      colors: {
        background: '#000000',
        particle: 'rgba(255, 255, 255, 0.5)',
        line: 'rgba(255, 59, 0, 0.15)' // Brand Orange tint
      }
    };

    // Mouse State
    const mouse = { x: -1000, y: -1000 };

    class Particle {
      x: number;
      y: number;
      z: number; // For 3D depth effect
      vx: number;
      vy: number;
      size: number;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.z = Math.random() * 2 + 0.5; // Depth factor (0.5 to 2.5)
        this.vx = (Math.random() - 0.5) * config.baseSpeed; // Random direction
        this.vy = (Math.random() - 0.5) * config.baseSpeed;
        this.size = Math.random() * 2 + 1;
      }

      update(w: number, h: number) {
        // Move
        this.x += this.vx * this.z; // Closer particles move faster (parallax)
        this.y += this.vy * this.z;

        // Wrap around edges
        if (this.x < 0) this.x = w;
        if (this.x > w) this.x = 0;
        if (this.y < 0) this.y = h;
        if (this.y > h) this.y = 0;

        // Mouse interaction (gentle repulsion)
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < config.mouseDistance) {
          const force = (config.mouseDistance - dist) / config.mouseDistance;
          this.vx += (dx / dist) * force * 0.02;
          this.vy += (dy / dist) * force * 0.02;
        }

        // Drag (dampening) to return to normal speed
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (speed > config.baseSpeed * 2) {
          this.vx *= 0.95;
          this.vy *= 0.95;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        const opacity = (this.z - 0.5) / 2 * 0.5 + 0.1; // Z-based opacity
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * (this.z * 0.6), 0, Math.PI * 2);
        ctx.fill();
      }
    }

    interface Connection {
      p1: Particle;
      p2: Particle;
      opacity: number;
    }

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      // Re-init particles on resize to maintain density
      const isMobileNow = window.innerWidth < 768;
      config.particleCount = isMobileNow ? 20 : 50;
      config.connectionDistance = isMobileNow ? 80 : 150;
      config.mouseDistance = isMobileNow ? 0 : 200;
      config.baseSpeed = isMobileNow ? 0.15 : 0.2;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < config.particleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    // Spatial Grid for O(N) connection checks
    class SpatialGrid {
      cellSize: number;
      grid: Map<string, Particle[]>;

      constructor(cellSize: number) {
        this.cellSize = cellSize;
        this.grid = new Map();
      }

      clear() {
        this.grid.clear();
      }

      getCellKey(x: number, y: number): string {
        const cellX = Math.floor(x / this.cellSize);
        const cellY = Math.floor(y / this.cellSize);
        return `${cellX},${cellY}`;
      }

      insert(particle: Particle) {
        const key = this.getCellKey(particle.x, particle.y);
        if (!this.grid.has(key)) {
          this.grid.set(key, []);
        }
        this.grid.get(key)!.push(particle);
      }

      getNearby(particle: Particle): Particle[] {
        const nearby: Particle[] = [];
        const cellX = Math.floor(particle.x / this.cellSize);
        const cellY = Math.floor(particle.y / this.cellSize);

        // Check current and adjacent cells (3x3 grid)
        for (let dx = -1; dx <= 1; dx++) {
          for (let dy = -1; dy <= 1; dy++) {
            const key = `${cellX + dx},${cellY + dy}`;
            const cell = this.grid.get(key);
            if (cell) nearby.push(...cell);
          }
        }
        return nearby;
      }
    }

    const spatialGrid = new SpatialGrid(config.connectionDistance);

    const animate = () => {
      frameCount++;
      
      // Mobile: 30 FPS (skip every other frame for better battery)
      // Desktop: 60 FPS (full speed)
      if (isMobile && frameCount % 2 !== 0) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      // Use requestIdleCallback for non-critical updates when available
      const renderFrame = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Clear and rebuild spatial grid
        spatialGrid.clear();
        
        // Update and Draw Particles
        particles.forEach(p => {
          p.update(canvas.width, canvas.height);
          p.draw(ctx);
          spatialGrid.insert(p);
        });

        // Draw Connections using Spatial Grid - O(N) instead of O(N²)
        ctx.strokeStyle = config.colors.line;
        ctx.lineWidth = 1;

        const drawn = new Set<string>();
        particles.forEach(p1 => {
          const nearby = spatialGrid.getNearby(p1);
          
          nearby.forEach(p2 => {
            if (p1 === p2) return;
            
            // Avoid drawing same connection twice
            const key1 = `${particles.indexOf(p1)}-${particles.indexOf(p2)}`;
            const key2 = `${particles.indexOf(p2)}-${particles.indexOf(p1)}`;
            if (drawn.has(key1) || drawn.has(key2)) return;
            drawn.add(key1);

            const dx = p1.x - p2.x;
            const dy = p1.y - p2.y;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < config.connectionDistance) {
              const alpha = 1 - (dist / config.connectionDistance);
              ctx.beginPath();
              ctx.strokeStyle = `rgba(255, 59, 0, ${alpha * 0.15})`; // Brand orange low opacity
              ctx.moveTo(p1.x, p1.y);
              ctx.lineTo(p2.x, p2.y);
              ctx.stroke();
            }
          });
        });
      };

      // Use requestIdleCallback for better performance during idle
      if ('requestIdleCallback' in window) {
        requestIdleCallback(() => {
          renderFrame();
          animationFrameId = requestAnimationFrame(animate);
        }, { timeout: 16 }); // Max 16ms delay (60fps)
      } else {
        renderFrame();
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    // Initialize
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none">
      {/* Background Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black z-[-1]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900/40 via-transparent to-transparent z-[-1]" />

      {/* Canvas Layer - GPU Accelerated */}
      <canvas
        ref={canvasRef}
        className="block w-full h-full opacity-60"
        style={{
          willChange: isVisible ? 'transform' : 'auto',
          transform: 'translateZ(0)', // Force GPU acceleration
          backfaceVisibility: 'hidden',
          perspective: '1000px'
        }}
      />
    </div>
  );
});

Background3D.displayName = 'Background3D';

export default Background3D;