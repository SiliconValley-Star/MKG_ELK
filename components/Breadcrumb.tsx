import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path?: string;
}

interface BreadcrumbProps {
  items?: BreadcrumbItem[];
  currentPageTitle?: string;
}

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items, currentPageTitle }) => {
  const location = useLocation();
  
  // Otomatik breadcrumb oluştur (items yoksa)
  const generateBreadcrumbs = (): BreadcrumbItem[] => {
    if (items) return items;
    
    const paths = location.pathname.split('/').filter(Boolean);
    const breadcrumbs: BreadcrumbItem[] = [{ label: 'Ana Sayfa', path: '/' }];
    
    let currentPath = '';
    paths.forEach((path, index) => {
      currentPath += `/${path}`;
      
      // URL'den label oluştur
      let label = path
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      
      // Türkçe karşılıklar
      const translations: Record<string, string> = {
        'corporate': 'Kurumsal',
        'services': 'Hizmetler',
        'projects': 'Projeler',
        'blog': 'Blog',
        'contact': 'İletişim',
        'faq': 'S.S.S',
        'security': 'Güvenlik',
        'privacy': 'Gizlilik Politikası',
        'terms': 'Kullanım Koşulları',
        'cookies': 'Çerez Politikası'
      };
      
      label = translations[path] || label;
      
      // Son eleman için path ekleme (current page)
      breadcrumbs.push({
        label: index === paths.length - 1 && currentPageTitle ? currentPageTitle : label,
        path: index === paths.length - 1 ? undefined : currentPath
      });
    });
    
    return breadcrumbs;
  };
  
  const breadcrumbs = generateBreadcrumbs();
  
  // Sadece ana sayfa varsa breadcrumb gösterme
  if (breadcrumbs.length <= 1 && location.pathname === '/') {
    return null;
  }
  
  return (
    <nav 
      aria-label="Breadcrumb" 
      className="bg-black/20 backdrop-blur-sm border-b border-white/10 py-3"
    >
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <ol 
          className="flex items-center gap-2 text-xs flex-wrap"
          itemScope
          itemType="https://schema.org/BreadcrumbList"
        >
          {breadcrumbs.map((item, index) => (
            <li
              key={index}
              className="flex items-center gap-2"
              itemProp="itemListElement"
              itemScope
              itemType="https://schema.org/ListItem"
            >
              {index > 0 && (
                <ChevronRight size={12} className="text-gray-600" aria-hidden="true" />
              )}
              
              {item.path ? (
                <Link
                  to={item.path}
                  className="text-gray-400 hover:text-white transition-colors flex items-center gap-1.5 group"
                  itemProp="item"
                >
                  {index === 0 && <Home size={12} className="group-hover:scale-110 transition-transform" />}
                  <span itemProp="name">{item.label}</span>
                  <meta itemProp="position" content={String(index + 1)} />
                </Link>
              ) : (
                <span 
                  className="text-white font-medium flex items-center gap-1.5"
                  itemProp="item"
                  aria-current="page"
                >
                  <span itemProp="name">{item.label}</span>
                  <meta itemProp="position" content={String(index + 1)} />
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};

export default Breadcrumb;