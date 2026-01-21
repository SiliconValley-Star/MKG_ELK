import React, { memo } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import Background3D from './Background3D';
import WhatsAppButton from './WhatsAppButton';
import Breadcrumb from './Breadcrumb';
import { useScrollMemory } from '../hooks/useScrollMemory';
import { useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = memo(({ children }) => {
  // Scroll pozisyonlarını otomatik yönet
  useScrollMemory();
  const location = useLocation();
  
  // Ana sayfada breadcrumb gösterme
  const showBreadcrumb = location.pathname !== '/';

  return (
    <div className="min-h-screen flex flex-col font-sans antialiased bg-black text-white selection:bg-brand-orange selection:text-black relative">
      {/* 3D Animated Background - Rendered once, persists across routes */}
      <Background3D />
      
      <Navbar />
      
      {/* Breadcrumb Navigation - SEO & UX */}
      {showBreadcrumb && <Breadcrumb />}
      
      <main id="main-content" className="flex-grow w-full relative z-10">
        {children}
      </main>
      <Footer />
      
      {/* WhatsApp Floating Button */}
      <WhatsAppButton phoneNumber="905301191277" />
    </div>
  );
});

Layout.displayName = 'Layout';

export default Layout;