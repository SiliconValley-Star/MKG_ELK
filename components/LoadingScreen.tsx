import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Radio, Zap } from 'lucide-react';

const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [bootStep, setBootStep] = useState(0);

  const bootSequence = [
    "INITIALIZING_KERNEL...",
    "LOADING_MODULES [CORE]...",
    "MOUNTING_VIRTUAL_DOM...",
    "CONNECTING_TO_SATELLITE_UPLINK...",
    "DECRYPTING_ASSETS...",
    "CALIBRATING_SENSORS...",
    "SYSTEM_READY"
  ];

  useEffect(() => {
    // Non-linear progress simulation for a "realistic" feel
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        // Random increment between 1 and 15
        const increment = Math.random() * 15;
        // Slow down as we get closer to 100
        const probability = prev > 80 ? 0.95 : 0.7; 
        
        return Math.min(prev + (Math.random() > probability ? 0.5 : increment), 100);
      });
    }, 150);

    return () => clearInterval(interval);
  }, []);

  // Sync text steps with progress percentage
  useEffect(() => {
    const stepIndex = Math.floor((progress / 100) * (bootSequence.length - 1));
    setBootStep(stepIndex);
  }, [progress]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center overflow-hidden cursor-wait"
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] sm:bg-[size:60px_60px]"></div>
      
      {/* Central HUD Container */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-md px-4 sm:px-6">
          
          {/* 1. Main Spinner & Icon */}
          <div className="relative mb-8 sm:mb-12">
              {/* Outer Ring */}
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border border-white/10 border-t-brand-orange border-r-brand-orange/50"
              />
              {/* Inner Ring (Reverse) */}
              <motion.div 
                animate={{ rotate: -360 }}
                transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                className="absolute inset-1.5 sm:inset-2 rounded-full border border-white/5 border-b-white/30"
              />
              
              {/* Center Logo/Icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                  <Cpu className="text-white animate-pulse w-7 h-7 sm:w-8 sm:h-8" />
              </div>

              {/* Orbital Blips */}
              <div className="absolute -inset-3 sm:-inset-4 border border-dashed border-white/5 rounded-full animate-spin-slow"></div>
          </div>

          {/* 2. Big Percentage Number */}
          <div className="flex items-baseline gap-1 mb-2">
              <span className="text-5xl sm:text-6xl md:text-7xl font-display font-bold text-white tracking-tighter tabular-nums">
                  {Math.round(progress)}
              </span>
              <span className="text-lg sm:text-xl text-brand-orange font-mono">%</span>
          </div>

          {/* 3. Progress Bar */}
          <div className="w-full h-1 bg-zinc-900 rounded-full overflow-hidden mb-4 sm:mb-6 relative">
              <motion.div 
                  className="h-full bg-brand-orange relative"
                  style={{ width: `${progress}%` }}
              >
                  {/* Glow effect on the leading edge */}
                  <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-20 bg-gradient-to-r from-transparent to-white/50"></div>
              </motion.div>
          </div>

          {/* 4. Terminal Text Output */}
          <div className="h-5 sm:h-6 flex items-center justify-center overflow-hidden w-full">
              <AnimatePresence mode="wait">
                  <motion.div
                    key={bootStep}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -20, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="text-[10px] sm:text-xs font-mono text-zinc-500 uppercase tracking-widest flex items-center gap-1.5 sm:gap-2"
                  >
                      <Radio size={8} className="sm:w-2.5 sm:h-2.5 text-brand-orange animate-pulse" />
                      <span className="truncate">{bootSequence[bootStep]}</span>
                  </motion.div>
              </AnimatePresence>
          </div>

          {/* 5. Bottom Metadata */}
          <div className="absolute bottom-8 sm:bottom-[-100px] flex gap-4 sm:gap-8 text-[9px] sm:text-[10px] font-mono text-zinc-700 uppercase">
              <div className="flex items-center gap-1.5 sm:gap-2">
                  <Zap size={8} className="sm:w-2.5 sm:h-2.5" /> MEM_OK
              </div>
              <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-green-500 rounded-full"></div> NET_SECURE
              </div>
          </div>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;