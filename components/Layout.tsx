import React, { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import Background3D from './Background3D';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    // 1. Modern tarayıcıların otomatik scroll hafızasını kapat
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // 2. Hem window hem document seviyesinde en tepeye zorla
    const scrollToTop = () => {
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    };

    // Anında çalıştır
    scrollToTop();

    // 3. Çok kısa bir gecikmeyle tekrarla (React render döngüsünü garantiye almak için)
    const timeoutId = setTimeout(scrollToTop, 10);

    return () => clearTimeout(timeoutId);
  }, [pathname]);

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased bg-black text-white selection:bg-brand-orange selection:text-black relative">
      {/* Skip to main content link for keyboard navigation */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[10001] focus:px-6 focus:py-3 focus:bg-brand-orange focus:text-black focus:font-semibold focus:rounded-lg focus:shadow-2xl focus:outline-none focus:ring-4 focus:ring-brand-orange/50"
        aria-label="Ana içeriğe geç"
      >
        Ana İçeriğe Geç
      </a>

      {/* 3D Animated Background - Rendered once, persists across routes */}
      <Background3D />
      
      <Navbar />
      <main id="main-content" className="flex-grow w-full relative z-10" tabIndex={-1}>
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;