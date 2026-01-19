import React, { useEffect, useRef, useState } from 'react';

/**
 * ULTRA-OPTIMIZED Canvas-based 3D Particle Network
 * - Spatial Hashing (O(N) instead of O(N²))
 * - Intersection Observer (pause when not visible)
 * - FPS-based adaptive particle count
 * - GPU-accelerated rendering
 * - will-change CSS optimization
 */
const Background3D: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', {
      alpha: true,
      desynchronized: true, // GPU optimization
    });
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let lastFrameTime = performance.now();
    let fps = 60;
    let frameCount = 0;
    let fpsCheckTime = performance.now();

    // Adaptive configuration based on device capability
    const isMobile = window.innerWidth < 768;
    const config = {
      baseParticleCount: isMobile ? 30 : 70,
      currentParticleCount: isMobile ? 30 : 70,
      connectionDistance: isMobile ? 100 : 150,
      mouseDistance: 200,
      baseSpeed: 0.2,
      gridCellSize: isMobile ? 100 : 150, // Spatial hashing grid size
      targetFPS: 50, // If FPS drops below this, reduce particles
      colors: {
        particle: 'rgba(255, 255, 255, 0.5)',
        line: 'rgba(255, 59, 0, 0.15)',
      }
    };

    // Mouse state
    const mouse = { x: -1000, y: -1000 };

    // Spatial Hash Grid for O(N) connection detection
    class SpatialHashGrid {
      private cellSize: number;
      private grid: Map<string, Particle[]>;

      constructor(cellSize: number) {
        this.cellSize = cellSize;
        this.grid = new Map();
      }

      private getKey(x: number, y: number): string {
        const cellX = Math.floor(x / this.cellSize);
        const cellY = Math.floor(y / this.cellSize);
        return `${cellX},${cellY}`;
      }

      clear() {
        this.grid.clear();
      }

      insert(particle: Particle) {
        const key = this.getKey(particle.x, particle.y);
        if (!this.grid.has(key)) {
          this.grid.set(key, []);
        }
        this.grid.get(key)!.push(particle);
      }

      getNearby(particle: Particle): Particle[] {
        const nearby: Particle[] = [];
        const cellX = Math.floor(particle.x / this.cellSize);
        const cellY = Math.floor(particle.y / this.cellSize);

        // Check 9 cells (current + 8 neighbors)
        for (let dx = -1; dx <= 1; dx++) {
          for (let dy = -1; dy <= 1; dy++) {
            const key = `${cellX + dx},${cellY + dy}`;
            const cell = this.grid.get(key);
            if (cell) {
              nearby.push(...cell);
            }
          }
        }

        return nearby;
      }
    }

    const spatialGrid = new SpatialHashGrid(config.gridCellSize);

    class Particle {
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      size: number;

      constructor(w: number, h: number) {
        this.x = Math.random() * w;
        this.y = Math.random() * h;
        this.z = Math.random() * 2 + 0.5;
        this.vx = (Math.random() - 0.5) * config.baseSpeed;
        this.vy = (Math.random() - 0.5) * config.baseSpeed;
        this.size = Math.random() * 2 + 1;
      }

      update(w: number, h: number) {
        // Move with parallax
        this.x += this.vx * this.z;
        this.y += this.vy * this.z;

        // Wrap around edges
        if (this.x < 0) this.x = w;
        if (this.x > w) this.x = 0;
        if (this.y < 0) this.y = h;
        if (this.y > h) this.y = 0;

        // Mouse interaction
        const dx = this.x - mouse.x;
        const dy = this.y - mouse.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < config.mouseDistance) {
          const force = (config.mouseDistance - dist) / config.mouseDistance;
          this.vx += (dx / dist) * force * 0.02;
          this.vy += (dy / dist) * force * 0.02;
        }

        // Damping
        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy);
        if (speed > config.baseSpeed * 2) {
          this.vx *= 0.95;
          this.vy *= 0.95;
        }
      }

      draw(ctx: CanvasRenderingContext2D) {
        const opacity = (this.z - 0.5) / 2 * 0.5 + 0.1;
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * (this.z * 0.6), 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const handleResize = () => {
      if (!canvas) return;
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < config.currentParticleCount; i++) {
        particles.push(new Particle(canvas.width, canvas.height));
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    // FPS tracking and adaptive particle count
    const updateFPS = () => {
      frameCount++;
      const now = performance.now();
      const elapsed = now - fpsCheckTime;

      if (elapsed >= 1000) {
        fps = Math.round((frameCount * 1000) / elapsed);
        frameCount = 0;
        fpsCheckTime = now;

        // Adaptive particle count based on FPS
        if (fps < config.targetFPS && config.currentParticleCount > 20) {
          config.currentParticleCount = Math.max(20, config.currentParticleCount - 5);
          initParticles();
        } else if (fps > config.targetFPS + 10 && config.currentParticleCount < config.baseParticleCount) {
          config.currentParticleCount = Math.min(config.baseParticleCount, config.currentParticleCount + 5);
          initParticles();
        }
      }
    };

    const animate = () => {
      if (!isVisible) {
        animationFrameId = requestAnimationFrame(animate);
        return; // Pause rendering when not visible
      }

      const now = performance.now();
      const deltaTime = now - lastFrameTime;
      lastFrameTime = now;

      updateFPS();

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Clear and populate spatial grid
      spatialGrid.clear();
      
      // Update and draw particles
      particles.forEach(p => {
        p.update(canvas.width, canvas.height);
        p.draw(ctx);
        spatialGrid.insert(p);
      });

      // Draw connections using spatial hashing (O(N) instead of O(N²))
      ctx.lineWidth = 1;

      particles.forEach(p1 => {
        const nearbyParticles = spatialGrid.getNearby(p1);
        
        nearbyParticles.forEach(p2 => {
          if (p1 === p2) return;

          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < config.connectionDistance) {
            const alpha = 1 - (dist / config.connectionDistance);
            ctx.strokeStyle = `rgba(255, 59, 0, ${alpha * 0.15})`;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        });
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    // Intersection Observer - pause when not visible
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          setIsVisible(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    if (container) {
      observer.observe(container);
    }

    // Initialize
    handleResize();
    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, [isVisible]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none">
      {/* Background Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black z-[-1]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900/40 via-transparent to-transparent z-[-1]" />

      {/* Canvas Layer - GPU optimized */}
      <canvas
        ref={canvasRef}
        className="block w-full h-full opacity-60"
        style={{ willChange: 'transform' }}
      />
    </div>
  );
};

export default Background3D;