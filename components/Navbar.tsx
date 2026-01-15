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
    { label: 'Home', path: '/', id: '01' },
    { label: 'Corporate', path: '/corporate', id: '02' },
    { label: 'Services', path: '/services', id: '03' },
    { label: 'Projects', path: '/projects', id: '04' },
    { label: 'Contact', path: '/contact', id: '05' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex justify-between items-center transition-all duration-500 ${scrolled ? 'bg-black border-b border-slate-800 py-3 shadow-2xl' : 'bg-transparent py-6'
          }`}
      >
        {/* Logo */}
        <NavLink to="/">
          {/* Logo Container: Clean, modern, glassmorphism-ready if needed */}
          <div className="py-2 px-3 rounded-lg hover:bg-white/5 transition-colors duration-300">
            <Logo variant="light" className="h-12" showText={true} />
          </div>
        </NavLink>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-1 bg-black/40 p-1 rounded-full border border-white/10 backdrop-blur-md">
          {routes.map((route) => (
            <NavLink
              key={route.path}
              to={route.path}
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
            <button className="group relative overflow-hidden bg-brand-orange text-white px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:scale-105 transition-all duration-300 shadow-[0_0_20px_rgba(255,59,0,0.3)]">
              <span className="relative z-10">Get Quote</span>
              <div className="absolute inset-0 bg-white transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300 mix-blend-overlay"></div>
            </button>
          </NavLink>
        </div>

        {/* Mobile Trigger */}
        <button onClick={() => setIsMenuOpen(true)} className="lg:hidden text-white p-3 bg-white/10 rounded-full border border-white/10 backdrop-blur-sm">
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="fixed inset-0 bg-black z-[60] flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-10">
              <div className="font-tech text-2xl font-bold text-white tracking-widest">NAVIGATE</div>
              <button onClick={() => setIsMenuOpen(false)} className="text-white p-2 bg-white/10 rounded-full hover:bg-brand-orange transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-2">
              {routes.map((route, i) => (
                <NavLink
                  key={route.path}
                  to={route.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => `
                        text-3xl sm:text-4xl md:text-5xl font-display font-medium border-b border-white/10 pb-4 sm:pb-6 pt-2 transition-all duration-300 flex items-start
                        ${isActive ? 'text-brand-orange pl-4 border-l-4 border-l-brand-orange' : 'text-white hover:text-gray-400'}
                    `}
                >
                  <span className="text-xs font-mono text-gray-500 mt-2 mr-4">0{i + 1}</span>
                  {route.label}
                </NavLink>
              ))}
            </div>

            <div className="mt-auto grid grid-cols-2 gap-4">
              <div className="bg-white/5 p-3 sm:p-4 rounded-xl border border-white/10">
                <p className="text-xs text-gray-500 mb-1">Email</p>
                <p className="text-white">info@mkg.com</p>
              </div>
              <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                <p className="text-xs text-gray-500 mb-1">Support</p>
                <p className="text-white">+90 224 000</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;