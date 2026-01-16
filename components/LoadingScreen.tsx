import React from 'react';
import { motion } from 'framer-motion';

const LoadingScreen: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center"
    >
      <div className="relative">
        <div className="text-4xl sm:text-5xl md:text-6xl font-tech font-bold text-white tracking-widest animate-pulse">
          YÜKLENİYOR
        </div>
        <div className="absolute -bottom-4 left-0 w-full h-[2px] bg-gray-800">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="h-full bg-brand-orange"
          />
        </div>
      </div>

      <div className="mt-8 font-mono text-xs text-brand-orange">
        SİSTEM ÇEKİRDEĞİ BAŞLATILIYOR...
      </div>
    </motion.div>
  );
};

export default LoadingScreen;