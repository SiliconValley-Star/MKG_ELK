import React from 'react';
import { motion } from 'framer-motion';
import { Home, Search, ArrowLeft } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-transparent flex items-center justify-center px-6 pt-32 pb-24">
      <div className="max-w-2xl w-full text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* 404 Number */}
          <div className="mb-8">
            <h1 className="text-9xl md:text-[200px] font-display font-bold text-transparent bg-clip-text bg-gradient-to-b from-brand-orange to-orange-700 leading-none">
              404
            </h1>
          </div>

          {/* Title */}
          <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-4">
            Sayfa Bulunamadı
          </h2>

          {/* Description */}
          <p className="text-slate-400 text-lg mb-8 max-w-md mx-auto">
            Aradığınız sayfa mevcut değil veya taşınmış olabilir. 
            Lütfen URL'yi kontrol edin veya ana sayfaya dönün.
          </p>

          {/* Search Suggestion */}
          <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-2xl p-6 mb-8">
            <div className="flex items-center justify-center gap-3 text-slate-500 mb-3">
              <Search size={20} />
              <p className="text-sm font-mono">Önerilen Sayfalar</p>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {[
                { label: 'Ana Sayfa', path: '/' },
                { label: 'Hizmetler', path: '/services' },
                { label: 'Projeler', path: '/projects' },
                { label: 'Blog', path: '/blog' },
                { label: 'İletişim', path: '/contact' }
              ].map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className="px-4 py-2 bg-slate-800 hover:bg-brand-orange text-white rounded-lg text-sm font-medium transition-colors"
                >
                  {link.label}
                </NavLink>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavLink to="/" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-black rounded-full font-bold hover:bg-brand-orange hover:text-white transition-all shadow-lg">
              <Home size={20} />
              Ana Sayfaya Dön
            </NavLink>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800 border border-slate-700 text-white rounded-full font-bold hover:bg-slate-700 transition-all"
            >
              <ArrowLeft size={20} />
              Geri Dön
            </button>
          </div>

          {/* Technical Info */}
          <div className="mt-12 text-xs font-mono text-slate-600">
            ERROR_CODE: 404 | RESOURCE_NOT_FOUND
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NotFoundPage;