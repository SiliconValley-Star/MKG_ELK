import React, { useState, useEffect, useRef, useCallback, memo } from 'react';
import { Logo } from './Logo';
import { NavLink, useLocation, useNavigate, Link } from 'react-router-dom';
import { useIsMobile } from '../hooks/useIsMobile';
import { PROJECTS } from '../data/projectsData';
import { blogPosts } from '../data/blogPosts';
import { SERVICES_DATA } from '../data/servicesData';

const NAV_ITEMS = [
  { label: 'ANA SAYFA', href: '/', id: '01' },
  { label: 'KURUMSAL', href: '/corporate', id: '02' },
  { label: 'HİZMETLER', href: '/services', id: '03', megaMenu: true },
  { label: 'PROJELER', href: '/projects', id: '04', megaMenu: true },
  { label: 'BLOG', href: '/blog', id: '05', megaMenu: true },
  { label: 'İLETİŞİM', href: '/contact', id: '06' },
];

const Navbar: React.FC = memo(() => {
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const location = useLocation();
  const navigate = useNavigate();
  const isMobile = useIsMobile();

  // Scroll Effect - Optimized
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll on mobile menu
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const handleNavClick = useCallback((href: string) => {
    setIsMobileMenuOpen(false);
    setHoveredItem(null);
    navigate(href);
  }, [navigate]);

  // HOVER HANDLERS WITH TIMEOUT
  const handleMouseEnter = useCallback((label: string) => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
      closeTimeoutRef.current = null;
    }
    setHoveredItem(label);
  }, []);

  const handleMouseLeave = useCallback(() => {
    closeTimeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
    }, 150); // 150ms tolerans
  }, []);

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  // Dinamik Mega Menu İçeriği
  const renderMegaMenuContent = () => {
    switch (hoveredItem) {
      case 'HİZMETLER':
        const topServices = SERVICES_DATA.slice(0, 3);
        return (
          <div className="max-w-[1920px] mx-auto px-12 py-12 grid grid-cols-12 gap-12 h-full animate-in fade-in duration-300">
            <div className="col-span-3 border-r border-black/10 pr-8">
              <span className="text-brand-orange font-mono text-xs mb-4 block">UZMANLIK ALANLARI</span>
              <div className="text-3xl font-medium tracking-tight mb-4 text-black">
                Endüstriyel<br />Çözümler
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Orta gerilim, trafo merkezleri, otomasyon ve akıllı bina sistemleri için anahtar teslim mühendislik hizmetleri.
              </p>
              <Link 
                to="/services" 
                onClick={() => setHoveredItem(null)} 
                className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest cursor-pointer text-black hover:text-brand-orange transition-colors"
              >
                <span>Tüm Hizmetler</span>
                <span>→</span>
              </Link>
            </div>
            <div className="col-span-9 grid grid-cols-3 gap-6">
              {topServices.map((service, idx) => (
                <Link 
                  key={idx}
                  to={`/services/${service.slug}`} 
                  onClick={() => setHoveredItem(null)} 
                  className="group bg-white rounded-xl p-6 border border-black/5 hover:border-brand-orange/50 transition-all cursor-pointer shadow-sm"
                >
                  <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg mb-4 overflow-hidden relative flex items-center justify-center">
                    <span className="text-4xl font-bold text-gray-300 group-hover:text-brand-orange transition-colors">
                      {service.id.split('-')[0]}
                    </span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-500 group-hover:text-black transition-colors line-clamp-2">
                    {service.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        );

      case 'PROJELER':
        const latestProjects = PROJECTS.slice(0, 3);
        return (
          <div className="max-w-[1920px] mx-auto px-12 py-12 grid grid-cols-12 gap-12 h-full animate-in fade-in duration-300">
            <div className="col-span-3 border-r border-black/10 pr-8">
              <span className="text-brand-orange font-mono text-xs mb-4 block">PORTFOLYO</span>
              <div className="text-3xl font-medium tracking-tight mb-4 text-black">
                Başarı<br />Hikayeleri
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Türkiye'nin önde gelen sanayi kuruluşları, bankalar ve enerji tesisleri için geliştirdiğimiz çözümler.
              </p>
              <Link 
                to="/projects" 
                onClick={() => setHoveredItem(null)} 
                className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest cursor-pointer text-black hover:text-brand-orange transition-colors"
              >
                <span>Tüm Projeler</span>
                <span>→</span>
              </Link>
            </div>
            <div className="col-span-9 grid grid-cols-3 gap-6">
              {latestProjects.map((project, idx) => (
                <Link 
                  key={idx}
                  to={`/projects/${project.slug}`} 
                  onClick={() => setHoveredItem(null)} 
                  className="group bg-white rounded-xl p-6 border border-black/5 hover:border-brand-orange/50 transition-all cursor-pointer shadow-sm"
                >
                  <div className="aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden relative">
                    <img 
                      src={project.image} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0" 
                      alt={project.title}
                      loading="lazy"
                    />
                  </div>
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-orange">
                      {project.category}
                    </span>
                    <span className="text-[10px] text-gray-400">{project.year}</span>
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-900 group-hover:text-black transition-colors line-clamp-1 block">
                    {project.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        );

      case 'BLOG':
        const latestBlogs = blogPosts.slice(0, 3);
        return (
          <div className="max-w-[1920px] mx-auto px-12 py-12 grid grid-cols-12 gap-12 h-full animate-in fade-in duration-300">
            <div className="col-span-3 border-r border-black/10 pr-8">
              <span className="text-brand-orange font-mono text-xs mb-4 block">BİLGİ MERKEZİ</span>
              <div className="text-3xl font-medium tracking-tight mb-4 text-black">
                Güncel<br />İçerikler
              </div>
              <p className="text-sm text-gray-500 leading-relaxed">
                Endüstri 5.0, otomasyon trendleri ve enerji sektörü ile ilgili teknik makaleler ve içgörüler.
              </p>
              <Link 
                to="/blog" 
                onClick={() => setHoveredItem(null)} 
                className="mt-8 flex items-center gap-2 text-xs font-bold uppercase tracking-widest cursor-pointer text-black hover:text-brand-orange transition-colors"
              >
                <span>Tüm Yazılar</span>
                <span>→</span>
              </Link>
            </div>
            <div className="col-span-9 grid grid-cols-3 gap-6">
              {latestBlogs.map((blog, idx) => (
                <Link 
                  key={idx}
                  to={`/blog/${blog.slug}`} 
                  onClick={() => setHoveredItem(null)} 
                  className="group bg-white rounded-xl p-6 border border-black/5 hover:border-brand-orange/50 transition-all cursor-pointer shadow-sm"
                >
                  <div className="aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden relative">
                    <img 
                      src={blog.image} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 filter grayscale group-hover:grayscale-0" 
                      alt={blog.title}
                      loading="lazy"
                    />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-orange block mb-2">
                    {blog.category}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-gray-900 group-hover:text-black transition-colors line-clamp-2 leading-relaxed block">
                    {blog.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <>
      {/* Skip to Content Link - Accessibility */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[1000] focus:bg-black focus:text-white focus:px-4 focus:py-2 focus:rounded focus:text-sm focus:font-medium"
      >
        Ana İçeriğe Atla
      </a>
      
      <header
        role="banner"
        className={`fixed top-0 left-0 w-full h-[80px] z-[900] transition-all duration-500 ${
          scrolled || isMobileMenuOpen 
            ? 'bg-white/80 backdrop-blur-xl border-b border-black/5' 
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="relative z-[910] max-w-[1920px] mx-auto h-full px-6 md:px-12 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="flex-shrink-0 cursor-pointer group relative z-50 hover:scale-[1.02] transition-transform duration-300"
            onClick={() => {
              setIsMobileMenuOpen(false);
              setHoveredItem(null);
            }}
          >
            <div className={`py-1.5 px-2 sm:px-3 rounded-lg transition-colors duration-300 ${
              isMobileMenuOpen ? 'bg-white/5' : scrolled ? 'hover:bg-black/5' : 'hover:bg-white/5'
            }`}>
              <Logo
                variant={isMobileMenuOpen ? "light" : scrolled ? "dark" : "light"}
                showText={true}
                className="h-10 md:h-12"
              />
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav role="navigation" aria-label="Ana navigasyon" className="h-full hidden md:flex items-center gap-10">
            {NAV_ITEMS.map((item) => (
              <div
                key={item.label}
                className="h-full flex items-center relative group"
                onMouseEnter={() => item.megaMenu ? handleMouseEnter(item.label) : handleMouseEnter('')}
                onMouseLeave={handleMouseLeave}
              >
                <Link
                  to={item.href}
                  onClick={() => setHoveredItem(null)}
                  className={`text-[11px] font-bold tracking-widest uppercase transition-colors duration-300 py-2 relative ${
                    scrolled
                      ? (location.pathname === item.href ? 'text-black' : 'text-gray-500 hover:text-black')
                      : (location.pathname === item.href ? 'text-white' : 'text-gray-300 hover:text-white')
                  }`}
                >
                  {item.label}
                  <span className={`absolute bottom-0 left-0 w-full h-[2px] transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                    scrolled ? 'bg-black' : 'bg-white'
                  } ${location.pathname === item.href ? 'scale-x-100' : ''}`}></span>
                </Link>
              </div>
            ))}
          </nav>

          {/* Desktop CTA & Mobile Toggle */}
          <div className="flex items-center gap-4 relative z-50">
            <Link
              to="/contact"
              className={`hidden md:block border px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all duration-300 ${
                scrolled
                  ? 'border-black/10 text-black hover:bg-black hover:text-white'
                  : 'border-white/20 text-white hover:bg-white hover:text-black'
              }`}
            >
              TEKLİF İSTE
            </Link>

            {/* Mobile Hamburger */}
            <button
              className="md:hidden flex flex-col justify-center gap-1.5 w-10 h-10 items-end group tap-target"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
            >
              <span className={`block h-[2px] bg-current transition-all duration-300 ${
                isMobileMenuOpen
                  ? 'w-6 rotate-45 translate-y-2 bg-white'
                  : scrolled
                    ? 'w-6 bg-black group-hover:w-8'
                    : 'w-6 bg-white group-hover:w-8'
              }`}></span>
              <span className={`block h-[2px] bg-current transition-all duration-300 ${
                isMobileMenuOpen
                  ? 'opacity-0'
                  : scrolled
                    ? 'w-4 bg-black group-hover:w-8'
                    : 'w-4 bg-white group-hover:w-8'
              }`}></span>
              <span className={`block h-[2px] bg-current transition-all duration-300 ${
                isMobileMenuOpen
                  ? 'w-6 -rotate-45 -translate-y-2 bg-white'
                  : scrolled
                    ? 'w-5 bg-black group-hover:w-8'
                    : 'w-5 bg-white group-hover:w-8'
              }`}></span>
            </button>
          </div>
        </div>
      </header>

      {/* Mega Menu Dropdown (Desktop Only) */}
      <div
        className={`hidden md:block fixed top-[80px] left-0 w-full bg-[#F5F5F7]/95 backdrop-blur-3xl border-b border-black/5 z-[890] overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          (hoveredItem === 'HİZMETLER' || hoveredItem === 'PROJELER' || hoveredItem === 'BLOG') 
            ? 'h-[400px] opacity-100 visible' 
            : 'h-0 opacity-0 invisible'
        }`}
        onMouseEnter={() => {
          if (closeTimeoutRef.current) clearTimeout(closeTimeoutRef.current);
        }}
        onMouseLeave={handleMouseLeave}
      >
        {renderMegaMenuContent()}
      </div>

      {/* MOBILE MENU OVERLAY (Full Screen) */}
      <div
        className={`fixed inset-0 bg-[#0D0D0D] z-[850] flex flex-col pt-32 px-6 transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        {/* Decorative Grid */}
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <nav role="navigation" aria-label="Mobil menü" className="flex flex-col gap-6 relative z-10 pl-4 border-l border-white/10">
          {NAV_ITEMS.map((item, i) => (
            <Link
              key={item.label}
              to={item.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className={`text-4xl xs:text-5xl font-light tracking-tighter text-white/50 hover:text-white transition-colors duration-300 transform ${
                isMobileMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${(i + 1) * 50}ms` }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={`mt-auto mb-12 border-t border-white/20 pt-8 transition-all duration-700 delay-300 ${
          isMobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="flex flex-col gap-4">
            <span className="text-xs font-mono text-brand-orange uppercase tracking-widest">
              Sistem Durumu: ONLİNE
            </span>
            <p className="text-gray-500 text-sm max-w-xs">
              MKG Elektromekanik Otomasyon<br />
              Nilüfer Organize Sanayi Bölgesi<br />
              123 Otomasyon Cad. Bursa / TÜRKİYE 16000
            </p>
            <Link 
              to="/contact" 
              onClick={() => setIsMobileMenuOpen(false)} 
              className="bg-white text-black py-4 rounded-full font-bold uppercase tracking-widest text-xs mt-4 text-center hover:bg-brand-orange hover:text-white transition-colors"
            >
              Teklif Talep Edin
            </Link>
          </div>
        </div>
      </div>
    </>
  );
});

Navbar.displayName = 'Navbar';

export default Navbar;