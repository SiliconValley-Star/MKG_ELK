import React, { useState, useEffect, lazy, Suspense } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Layout from './components/Layout';
import LoadingScreen from './components/LoadingScreen';
import SuspenseFallback from './components/SuspenseFallback';
import ErrorBoundary from './components/ErrorBoundary';

// Code splitting: Lazy load all pages
const HomePage = lazy(() => import('./pages/HomePage'));
const CorporatePage = lazy(() => import('./pages/CorporatePage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const SecurityPage = lazy(() => import('./pages/SecurityPage'));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage'));
const TermsPage = lazy(() => import('./pages/TermsPage'));
const CookiePolicyPage = lazy(() => import('./pages/CookiePolicyPage'));
const BlogPage = lazy(() => import('./pages/BlogPage'));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage'));
const NotFoundPage = lazy(() => import('./pages/NotFoundPage'));

// Wrapper to handle AnimatePresence logic
const AnimatedRoutes: React.FC = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <div key={location.pathname}>
        <Suspense fallback={<SuspenseFallback />}>
          <Routes location={location}>
            <Route path="/" element={<HomePage />} />
            <Route path="/corporate" element={<CorporatePage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* New Enterprise Routes */}
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/security" element={<SecurityPage />} />
            <Route path="/privacy" element={<PrivacyPage />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/cookies" element={<CookiePolicyPage />} />

            {/* Blog Routes */}
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />

            {/* 404 Not Found */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const MIN_LOADING_TIME = 800; // Minimum 800ms (flash önleme)
    const MAX_LOADING_TIME = 5000; // Maximum 5sn (timeout)
    const startTime = Date.now();
    let assetsLoaded = false;
    let minTimeElapsed = false;

    // Font yükleme takibi
    const checkFonts = async () => {
      try {
        await document.fonts.ready;
        return true;
      } catch (error) {
        return false;
      }
    };

    // Görsellerin yüklenmesini kontrol et
    const checkImages = () => {
      const images = Array.from(document.images);
      return Promise.all(
        images.map(img => {
          if (img.complete) return Promise.resolve();
          return new Promise((resolve) => {
            img.onload = resolve;
            img.onerror = resolve; // Hata olsa bile devam et
          });
        })
      );
    };

    // Tüm assetlerin yüklenmesini bekle
    const loadAssets = async () => {
      try {
        await Promise.all([
          checkFonts(),
          checkImages()
        ]);
        assetsLoaded = true;
        checkReadyToShow();
      } catch (error) {
        assetsLoaded = true;
        checkReadyToShow();
      }
    };

    // Minimum sürenin geçmesini bekle
    const minTimeTimer = setTimeout(() => {
      minTimeElapsed = true;
      checkReadyToShow();
    }, MIN_LOADING_TIME);

    // Maximum süre timeout
    const maxTimeTimer = setTimeout(() => {
      setIsLoading(false);
    }, MAX_LOADING_TIME);

    // Hem assetler yüklendi hem minimum süre geçti mi kontrol et
    const checkReadyToShow = () => {
      if (assetsLoaded && minTimeElapsed) {
        setIsLoading(false);
      }
    };

    // Asset yüklemeyi başlat
    loadAssets();

    return () => {
      clearTimeout(minTimeTimer);
      clearTimeout(maxTimeTimer);
    };
  }, []);

  return (
    <ErrorBoundary>
      <AnimatePresence>
        {isLoading && <LoadingScreen key="loader" />}
      </AnimatePresence>

      {!isLoading && (
        <HashRouter>
          <Layout>
            <AnimatedRoutes />
          </Layout>
        </HashRouter>
      )}
    </ErrorBoundary>
  );
};

export default App;