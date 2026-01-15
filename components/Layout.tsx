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
      {/* 3D Animated Background - Rendered once, persists across routes */}
      <Background3D />
      
      <Navbar />
      <main className="flex-grow w-full relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;