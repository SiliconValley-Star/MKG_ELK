import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, ArrowRight, AlertTriangle } from 'lucide-react';
import SEOHead from '../components/SEOHead';
import { SERVICES_DATA } from '../data/servicesData';
import { PROJECTS } from '../data/projectsData';
import { blogPosts } from '../data/blogPosts';

const NotFoundPage: React.FC = () => {
  const popularLinks = [
    { label: 'Ana Sayfa', path: '/', icon: Home },
    { label: 'Hizmetler', path: '/services', icon: Search },
    { label: 'Projeler', path: '/projects', icon: Search },
    { label: 'Blog', path: '/blog', icon: Search },
    { label: 'İletişim', path: '/contact', icon: Search },
  ];

  const recentServices = SERVICES_DATA.slice(0, 3);
  const recentProjects = PROJECTS.slice(0, 3);
  const recentBlogs = blogPosts.slice(0, 3);

  return (
    <>
      <SEOHead
        title="Sayfa Bulunamadı (404) | MKG Elektromekanik"
        description="Aradığınız sayfa bulunamadı. Ana sayfaya dönün veya diğer sayfalarımızı keşfedin."
        robots="noindex, nofollow"
      />

      <div className="min-h-[calc(100vh-160px)] pt-32 pb-24 px-6 md:px-12 relative overflow-hidden">
        
        {/* Background Grid */}
        <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          
          {/* Hero Section */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-brand-orange/10 border-2 border-brand-orange/20 mb-8 animate-pulse">
              <AlertTriangle size={64} className="text-brand-orange" />
            </div>
            
            <h1 className="text-8xl md:text-9xl font-black tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-600">
              404
            </h1>
            
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-white">
              Sayfa Bulunamadı
            </h2>
            
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
              Aradığınız sayfa taşınmış, silinmiş veya hiç var olmamış olabilir. 
              Ana sayfaya dönebilir veya aşağıdaki bağlantılardan site içeriğimizi keşfedebilirsiniz.
            </p>

            {/* Quick Links */}
            <div className="flex flex-wrap justify-center gap-4 mt-12">
              {popularLinks.map((link, idx) => {
                const Icon = link.icon;
                return (
                  <Link
                    key={idx}
                    to={link.path}
                    className="group flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-brand-orange/10 border border-white/10 hover:border-brand-orange/50 rounded-lg transition-all duration-300"
                  >
                    <Icon size={18} className="text-gray-400 group-hover:text-brand-orange transition-colors" />
                    <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors">
                      {link.label}
                    </span>
                    <ArrowRight size={14} className="text-gray-600 group-hover:text-brand-orange group-hover:translate-x-1 transition-all" />
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Suggested Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            
            {/* Services */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-4">
                Hizmetlerimiz
              </h3>
              <ul className="space-y-3">
                {recentServices.map((service, idx) => (
                  <li key={idx}>
                    <Link
                      to={`/services/${service.slug}`}
                      className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-gray-700 rounded-full group-hover:bg-brand-orange transition-colors"></span>
                      <span className="line-clamp-1">{service.title}</span>
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <Link
                    to="/services"
                    className="text-xs text-brand-orange hover:text-white transition-colors flex items-center gap-1"
                  >
                    Tüm Hizmetler <ArrowRight size={12} />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Projects */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-4">
                Projelerimiz
              </h3>
              <ul className="space-y-3">
                {recentProjects.map((project, idx) => (
                  <li key={idx}>
                    <Link
                      to={`/projects/${project.slug}`}
                      className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-gray-700 rounded-full group-hover:bg-brand-orange transition-colors"></span>
                      <span className="line-clamp-1">{project.title}</span>
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <Link
                    to="/projects"
                    className="text-xs text-brand-orange hover:text-white transition-colors flex items-center gap-1"
                  >
                    Tüm Projeler <ArrowRight size={12} />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Blog */}
            <div className="bg-white/5 border border-white/10 rounded-xl p-6">
              <h3 className="text-xs font-bold uppercase tracking-widest text-brand-orange mb-4">
                Blog Yazıları
              </h3>
              <ul className="space-y-3">
                {recentBlogs.map((blog, idx) => (
                  <li key={idx}>
                    <Link
                      to={`/blog/${blog.slug}`}
                      className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-gray-700 rounded-full group-hover:bg-brand-orange transition-colors"></span>
                      <span className="line-clamp-1">{blog.title}</span>
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <Link
                    to="/blog"
                    className="text-xs text-brand-orange hover:text-white transition-colors flex items-center gap-1"
                  >
                    Tüm Yazılar <ArrowRight size={12} />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gradient-to-r from-brand-orange/10 to-transparent border border-brand-orange/20 rounded-2xl p-12">
            <p className="text-gray-400 mb-6">
              Yine de aradığınızı bulamadınız mı?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-brand-orange text-white px-8 py-4 rounded-full font-bold uppercase tracking-widest text-sm hover:bg-white hover:text-black transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105"
            >
              Bize Ulaşın
              <ArrowRight size={16} />
            </Link>
          </div>

        </div>
      </div>
    </>
  );
};

export default NotFoundPage;