import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const routes = [
    { label: 'Ana Sayfa', path: '/', id: '01' },
    { label: 'Kurumsal', path: '/corporate', id: '02' },
    { label: 'Hizmetler', path: '/services', id: '03' },
    { label: 'Projeler', path: '/projects', id: '04' },
    { label: 'Blog', path: '/blog', id: '05' },
    { label: 'İletişim', path: '/contact', id: '06' },
  ];

  return (
    <>
      <nav
        role="navigation"
        aria-label="Ana navigasyon"
        className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-500 ${scrolled ? 'bg-black border-b border-slate-800 py-3 shadow-2xl' : 'bg-transparent py-6'
          }`}
      >
        {/* Logo */}
        <NavLink to="/" aria-label="Ana sayfa">
          {/* Logo Container: Clean, modern, glassmorphism-ready if needed */}
          <div className="py-2 px-3 rounded-lg hover:bg-white/5 transition-colors duration-300">
            <Logo variant="light" className="h-12" showText={true} />
          </div>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1 bg-black/40 p-1 rounded-full border border-white/10 backdrop-blur-md" role="menubar" aria-label="Ana menü">
          {routes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
              role="menuitem"
              aria-label={`${route.label} sayfasına git`}
              className={({ isActive }) =>
                `px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 relative overflow-hidden ${isActive
                  ? 'bg-white text-black font-bold shadow-lg'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`
              }
            >
              {route.label}
            </NavLink>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-6">
          <NavLink to="/contact">
            <button
              aria-label="Teklif almak için iletişim sayfasına git"
              className="group relative overflow-hidden bg-brand-orange text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,59,0,0.3)]"
            >
              <span className="relative z-10">Teklif Al</span>
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 mix-blend-overlay"></div>
            </button>
          </NavLink>
        </div>

        {/* Mobile Trigger */}
        <button
          onClick={() => setIsMenuOpen(true)}
          aria-label="Mobil menüyü aç"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-menu"
          className="lg:hidden text-white p-3 bg-white/10 rounded-full border border-white/10 backdrop-blur-sm"
        >
          <Menu size={24} aria-hidden="true" />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobil navigasyon menüsü"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed inset-0 bg-black z-[60] flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-10">
              <div className="font-tech text-2xl font-bold text-white tracking-widest">MENÜ</div>
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Menüyü kapat"
                className="text-white p-2 bg-white/10 rounded-full hover:bg-brand-orange transition-colors"
              >
                <X size={24} aria-hidden="true" />
              </button>
            </div>

            <nav className="flex flex-col gap-2" role="navigation" aria-label="Mobil menü linkleri">
              {routes.map((route, i) => (
                <NavLink
                  key={route.path}
                  to={route.path}
                  onClick={() => setIsMenuOpen(false)}
                  aria-label={`${route.label} sayfasına git`}
                  className={({ isActive }) => `
                        text-3xl sm:text-4xl md:text-5xl font-display font-medium border-b border-white/10 pb-4 sm:pb-6 pt-2 transition-all duration-300 flex items-start
                        ${isActive ? 'text-brand-orange pl-4 border-l-4 border-l-brand-orange' : 'text-white hover:text-gray-400'}
                    `}
                >
                  <span className="text-xs font-mono text-gray-500 mt-2 mr-4" aria-hidden="true">0{i + 1}</span>
                  {route.label}
                </NavLink>
              ))}
            </nav>

            <div className="mt-auto grid grid-cols-2 gap-4" role="complementary" aria-label="İletişim bilgileri">
              <div className="bg-white/5 p-3 sm:p-4 rounded-xl border border-white/10">
                <p className="text-xs text-gray-500 mb-1">E-posta</p>
                <a href="mailto:info@mkg.com" className="text-white hover:text-brand-orange transition-colors" aria-label="E-posta gönder: info@mkg.com">
                  info@mkg.com
                </a>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <p className="text-xs text-gray-500 mb-1">Destek</p>
                <a href="tel:+90224000" className="text-white hover:text-brand-orange transition-colors" aria-label="Telefon: +90 224 000">
                  +90 224 000
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;