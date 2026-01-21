import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface SEOHeadProps {
  title?: string;
  description?: string;
  keywords?: string;
  image?: string;
  type?: 'website' | 'article' | 'profile' | 'product';
  author?: string;
  publishedTime?: string;
  modifiedTime?: string;
  canonical?: string;
  noindex?: boolean;
  nofollow?: boolean;
  schema?: Record<string, any>;
}

const SEOHead: React.FC<SEOHeadProps> = ({
  title,
  description,
  keywords,
  image,
  type = 'website',
  author,
  publishedTime,
  modifiedTime,
  canonical,
  noindex = false,
  nofollow = false,
  schema,
}) => {
  const location = useLocation();
  const baseUrl = 'https://mkgelektromekanik.com';
  
  // Varsayılan değerler
  const defaultTitle = 'MKG Elektromekanik Otomasyon - Endüstriyel Elektrik ve Otomasyon Çözümleri';
  const defaultDescription = 'Yüksek gerilim, alçak gerilim, jeneratör, UPS, topraklama, paratoner, otomasyon ve zayıf akım sistemlerinde uzman. 15+ yıllık deneyim ile anahtar teslim projeler.';
  const defaultImage = `${baseUrl}/logo.png`;
  const defaultKeywords = 'endüstriyel otomasyon, elektrik tesisatı, yüksek gerilim, alçak gerilim, jeneratör, UPS, topraklama, paratoner, PLC programlama, SCADA, otomasyon sistemleri';

  // Final değerler
  const finalTitle = title || defaultTitle;
  const finalDescription = description || defaultDescription;
  const finalImage = image ? `${baseUrl}${image}` : defaultImage;
  const finalKeywords = keywords || defaultKeywords;
  const currentUrl = `${baseUrl}${location.pathname}${location.hash}`;
  const canonicalUrl = canonical || currentUrl;

  useEffect(() => {
    // Title güncelle
    document.title = finalTitle;

    // Meta description
    updateMetaTag('name', 'description', finalDescription);
    
    // Meta keywords
    updateMetaTag('name', 'keywords', finalKeywords);

    // Author
    if (author) {
      updateMetaTag('name', 'author', author);
    }

    // Robots
    const robotsContent = `${noindex ? 'noindex' : 'index'},${nofollow ? 'nofollow' : 'follow'}`;
    updateMetaTag('name', 'robots', robotsContent);

    // Open Graph Meta Tags
    updateMetaTag('property', 'og:title', finalTitle);
    updateMetaTag('property', 'og:description', finalDescription);
    updateMetaTag('property', 'og:image', finalImage);
    updateMetaTag('property', 'og:url', currentUrl);
    updateMetaTag('property', 'og:type', type);
    updateMetaTag('property', 'og:site_name', 'MKG Elektromekanik');
    updateMetaTag('property', 'og:locale', 'tr_TR');

    // Article specific (Blog için)
    if (type === 'article') {
      if (publishedTime) {
        updateMetaTag('property', 'article:published_time', publishedTime);
      }
      if (modifiedTime) {
        updateMetaTag('property', 'article:modified_time', modifiedTime);
      }
      if (author) {
        updateMetaTag('property', 'article:author', author);
      }
      updateMetaTag('property', 'article:section', 'Teknoloji');
    }

    // Twitter Card Meta Tags
    updateMetaTag('name', 'twitter:card', 'summary_large_image');
    updateMetaTag('name', 'twitter:title', finalTitle);
    updateMetaTag('name', 'twitter:description', finalDescription);
    updateMetaTag('name', 'twitter:image', finalImage);
    updateMetaTag('name', 'twitter:site', '@mkg_otomasyon');
    updateMetaTag('name', 'twitter:creator', '@mkg_otomasyon');

    // Canonical URL
    updateLinkTag('canonical', canonicalUrl);

    // Schema.org JSON-LD
    if (schema) {
      updateSchema(schema);
    }

  }, [
    finalTitle,
    finalDescription,
    finalImage,
    finalKeywords,
    type,
    author,
    publishedTime,
    modifiedTime,
    currentUrl,
    canonicalUrl,
    noindex,
    nofollow,
    schema,
  ]);

  return null;
};

// Helper function: Meta tag güncelle veya oluştur
function updateMetaTag(attribute: 'name' | 'property', value: string, content: string) {
  let element = document.querySelector(`meta[${attribute}="${value}"]`);
  
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attribute, value);
    document.head.appendChild(element);
  }
  
  element.setAttribute('content', content);
}

// Helper function: Link tag güncelle veya oluştur
function updateLinkTag(rel: string, href: string) {
  let element = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
  
  if (!element) {
    element = document.createElement('link');
    element.setAttribute('rel', rel);
    document.head.appendChild(element);
  }
  
  element.setAttribute('href', href);
}

// Helper function: JSON-LD Schema güncelle veya oluştur
function updateSchema(schema: Record<string, any>) {
  const schemaId = 'seo-schema';
  let scriptElement = document.getElementById(schemaId);
  
  if (!scriptElement) {
    scriptElement = document.createElement('script');
    scriptElement.id = schemaId;
    scriptElement.type = 'application/ld+json';
    document.head.appendChild(scriptElement);
  }
  
  scriptElement.textContent = JSON.stringify(schema);
}

export default SEOHead;