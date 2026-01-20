import React from 'react';
import { Loader2 } from 'lucide-react';

interface SuspenseFallbackProps {
  message?: string;
}

const SuspenseFallback: React.FC<SuspenseFallbackProps> = ({ message = "Yükleniyor..." }) => {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="w-12 h-12 text-brand-orange animate-spin mx-auto mb-4" />
        <p className="text-slate-400 font-mono text-sm">{message}</p>
      </div>
    </div>
  );
};

export default SuspenseFallback;