import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X, Check, Shield } from 'lucide-react';
import { NavLink } from 'react-router-dom';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // LocalStorage'da onay kontrolü
    const consent = localStorage.getItem('mkg_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('mkg_cookie_consent', 'accepted');
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem('mkg_cookie_consent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "100%", opacity: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className="fixed bottom-0 left-0 w-full z-[80] pointer-events-none"
        >
          <div className="max-w-[1920px] mx-auto px-4 sm:px-6 pb-4 sm:pb-6 pointer-events-auto">
            <div className="bg-black/95 backdrop-blur-xl border border-white/10 border-t-2 border-t-brand-orange p-4 sm:p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 shadow-2xl">
              
              {/* Sol: İkon & Metin */}
              <div className="flex items-start gap-3 sm:gap-6 max-w-3xl">
                <div className="p-3 sm:p-4 bg-zinc-900 border border-white/10 hidden sm:block flex-shrink-0">
                  <Cookie className="text-brand-orange animate-pulse" size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Shield size={12} className="text-zinc-500"/>
                    <span className="text-[10px] font-mono text-zinc-500 uppercase tracking-widest">
                      Sistem_Bildirimi: Gizlilik_Protokolü_Aktif
                    </span>
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-2">Çerez ve Veri Kullanımı</h3>
                  <p className="text-zinc-400 text-xs sm:text-sm leading-relaxed">
                    Sitemiz, kullanıcı deneyimini iyileştirmek, tercihlerinizi hatırlamak ve site trafiğini analiz etmek için çerezler kullanmaktadır. 
                    Verilerinizi üçüncü taraflara satmıyoruz. Detaylı bilgi için{' '}
                    <NavLink to="/cerez-politikasi" className="text-brand-orange hover:underline" onClick={() => setIsVisible(false)}>
                      Çerez Politikası
                    </NavLink>
                    {' '}sayfamızı ziyaret edebilirsiniz.
                  </p>
                </div>
              </div>

              {/* Sağ: Butonlar */}
              <div className="flex flex-col sm:flex-row w-full md:w-auto gap-3 sm:gap-4">
                 <button 
                   onClick={handleDecline}
                   className="px-4 sm:px-6 py-3 border border-white/20 text-white font-mono text-[10px] sm:text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors tap-target"
                 >
                   Reddet
                 </button>
                 <button 
                   onClick={handleAccept}
                   className="px-6 sm:px-8 py-3 bg-brand-orange text-black font-bold font-mono text-[10px] sm:text-xs uppercase tracking-widest hover:bg-white transition-colors flex items-center justify-center gap-2 tap-target"
                 >
                   <Check size={14} /> Kabul Et
                 </button>
              </div>

            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;