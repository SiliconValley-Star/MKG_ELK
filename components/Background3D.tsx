import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Optimized 3D Background Component
const Background3D: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  if (!mounted) return null;

  // Balanced item count for visibility and performance
  const itemCount = isMobile ? 6 : 15;

  const getRandomPos = (i: number) => {
    const seed = i * 123.45;
    return {
      left: `${(seed % 90) + 5}%`,
      top: `${((seed * 7) % 95) + 2}%`,
      size: isMobile ? 50 + (i % 30) : 80 + (i % 80),
      duration: 30 + (i % 20), // Slower = less CPU
      delay: i * 0.5,
      type: i % 3
    };
  };

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none perspective-1000">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-900/30 via-black to-black z-0" />

      {/* 3D Floating Elements */}
      {Array.from({ length: itemCount }).map((_, i) => {
        const settings = getRandomPos(i);

        return (
          <motion.div
            key={i}
            className="absolute border border-white/20 shadow-[0_0_15px_rgba(255,255,255,0.05)] backdrop-blur-[1px]"
            style={{
              left: settings.left,
              top: settings.top,
              width: settings.size,
              height: settings.size,
              borderWidth: settings.type === 1 ? '2px' : '1px',
              borderStyle: settings.type === 2 ? 'dashed' : 'solid',
              opacity: isMobile ? 0.12 : 0.18, // Visible but not heavy
            }}
            initial={{
              rotateX: 0,
              rotateY: 0,
              rotateZ: 0,
              y: 0,
              scale: 0.8
            }}
            animate={{
              rotateX: [0, 180, 360],
              rotateY: [0, 180, 0],
              rotateZ: [0, 90, 180],
              y: [0, -100, 0], // Floating upward
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: settings.duration,
              repeat: Infinity,
              ease: "linear",
              delay: settings.delay
            }}
          >
            {/* Inner details for "Engineering" look */}
            {settings.type === 0 && (
              <div className="absolute inset-4 border border-white/10 rounded-full"></div>
            )}
            {settings.type === 1 && (
              <div className="absolute inset-0 border-t border-b border-brand-orange/20"></div>
            )}
            {settings.type === 2 && (
              <>
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-white/20"></div>
                <div className="absolute left-1/2 top-0 h-full w-[1px] bg-white/20"></div>
              </>
            )}

            {/* Corner Accents */}
            <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-brand-orange/50"></div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-brand-orange/50"></div>
          </motion.div>
        );
      })}

      {/* Particles - balanced count */}
      {Array.from({ length: isMobile ? 10 : 25 }).map((_, i) => (
        <motion.div
          key={`p-${i}`}
          className="absolute w-1 h-1 bg-brand-orange rounded-full"
          style={{
            left: `${(i * 8.3) % 100}%`, // Deterministic positions (no Math.random on render)
            top: `${(i * 13.7) % 110}%`,
            opacity: 0.3
          }}
          animate={{
            y: [0, -150],
            opacity: [0, 0.5, 0]
          }}
          transition={{
            duration: 10 + (i % 5),
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeOut"
          }}
        />
      ))}
    </div>
  );
};

export default Background3D;