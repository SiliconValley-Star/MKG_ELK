import React, { useEffect, useRef, memo } from 'react';

/**
 * High-Performance Canvas-based 3D Particle Network
 * Optimized for both Web and Mobile.
 * Uses a single Canvas element to avoid DOM overhead.
 * Represents "Engineering", "Connectivity", "Automation".
 */
const Background3D: React.FC = memo(() => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // Mobil cihazlarda ve reduced-motion tercihinde animasyon çalıştırma
    const isMobile = window.innerWidth < 768;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (isMobile || prefersReducedMotion) {
      return; // Animasyonu başlatma
    }

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let connections: Connection[] = [];

    // Configuration - Optimized for desktop only
    const config = {
      particleCount: 50, // Optimized: 80 → 50 for better performance
      connectionDistance: 150,
      mouseDistance: 200,
      baseSpeed: 0.2, // "Sweet" slow movement
      colors: {
        background: '#000000', // Managed by CSS actually
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
      config.particleCount = window.innerWidth < 768 ? 35 : 80;
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

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Update and Draw Particles
      particles.forEach(p => {
        p.update(canvas.width, canvas.height);
        p.draw(ctx);
      });

      // Draw Connections
      ctx.strokeStyle = config.colors.line;
      ctx.lineWidth = 1;

      // Optimized connection check: O(N^2) but N is small
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];

          // Only connect if Z-depth is similar (true 3D feel)
          // if (Math.abs(p1.z - p2.z) > 0.5) continue; 
          // Actually, connecting across depths looks cool too (constellation)

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
        }
      }

      animationFrameId = requestAnimationFrame(animate);
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
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      {/* Background Gradient Layer */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-slate-950 to-black z-[-1]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900/40 via-transparent to-transparent z-[-1]" />

      {/* Canvas Layer */}
      <canvas
        ref={canvasRef}
        className="block w-full h-full opacity-60"
      />
    </div>
  );
});

Background3D.displayName = 'Background3D';

export default Background3D;