import React from 'react';
import { motion } from 'framer-motion';

const SuspenseFallback: React.FC = () => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <div className="relative inline-block">
          <div className="text-2xl font-tech font-bold text-white tracking-widest mb-4">
            YÜKLENİYOR
          </div>
          <div className="w-32 h-[2px] bg-gray-800 mx-auto">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ duration: 1, ease: "easeInOut", repeat: Infinity }}
              className="h-full bg-brand-orange"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default SuspenseFallback;