import { useEffect, useRef } from 'react';
import { useLocation, useNavigationType } from 'react-router-dom';

/**
 * Scroll pozisyonlarını otomatik olarak saklar ve geri dönüşte geri yükler
 * Forward navigation: Scroll'u en üste götürür
 * Back/Pop navigation: Önceki scroll pozisyonunu geri yükler
 */
export const useScrollMemory = () => {
  const location = useLocation();
  const navigationType = useNavigationType();
  const scrollPositions = useRef<Map<string, number>>(new Map());
  const isRestoringRef = useRef(false);

  useEffect(() => {
    const currentPath = location.pathname;

    // Navigation tipine göre aksiyon al
    if (navigationType === 'POP') {
      // Geri butonuna basıldı - kaydedilmiş pozisyonu geri yükle
      isRestoringRef.current = true;
      const savedPosition = scrollPositions.current.get(currentPath) || 0;
      
      // Restore işlemini biraz geciktir (DOM'un render edilmesini bekle)
      requestAnimationFrame(() => {
        setTimeout(() => {
          window.scrollTo(0, savedPosition);
          isRestoringRef.current = false;
        }, 10);
      });
    } else {
      // İleri navigasyon (PUSH veya REPLACE) - en üste git
      isRestoringRef.current = false;
      window.scrollTo(0, 0);
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    }
  }, [location.pathname, navigationType]);

  useEffect(() => {
    const handleScroll = () => {
      // Sadece restore işlemi sırasında değilse scroll pozisyonunu kaydet
      if (!isRestoringRef.current) {
        const currentPath = location.pathname;
        const scrollY = window.scrollY;
        scrollPositions.current.set(currentPath, scrollY);
      }
    };

    // Scroll olayını dinle
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [location.pathname]);

  return null;
};