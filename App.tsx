import React, { useState, useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, MotionConfig } from 'framer-motion';
import Layout from './components/Layout';
import LoadingScreen from './components/LoadingScreen';
import ErrorBoundary from './components/ErrorBoundary';
import SuspenseFallback from './components/SuspenseFallback';
import { useIsMobile } from './hooks/useIsMobile';

// Lazy-loaded pages for code splitting and better performance
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
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage'));
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
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/projects/:slug" element={<ProjectDetailPage />} />
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

            {/* 404 Page */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </div>
    </AnimatePresence>
  );
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const isMobile = useIsMobile();

  useEffect(() => {
    let assetsLoaded = false;
    let minTimeElapsed = false;

    // Check if fonts and critical assets are loaded
    const checkAssets = async () => {
      try {
        // Wait for document to be ready
        if (document.readyState === 'complete') {
          assetsLoaded = true;
        } else {
          await new Promise(resolve => {
            window.addEventListener('load', resolve, { once: true });
          });
          assetsLoaded = true;
        }
        
        // Also check if fonts are loaded (if using web fonts)
        if ('fonts' in document) {
          await document.fonts.ready;
        }
        
        checkIfReady();
      } catch (error) {
        console.error('Asset loading error:', error);
        // Fallback: still show content after timeout
        assetsLoaded = true;
        checkIfReady();
      }
    };

    // Minimum time for animation - Optimized by device type
    const isMobile = window.innerWidth < 768;
    const minLoadTime = isMobile ? 500 : 1000; // Mobile: 500ms, Desktop: 1000ms
    const minTimer = setTimeout(() => {
      minTimeElapsed = true;
      checkIfReady();
    }, minLoadTime);

    const checkIfReady = () => {
      // Only hide loading when BOTH conditions are met
      if (assetsLoaded && minTimeElapsed) {
        setIsLoading(false);
      }
    };

    checkAssets();

    return () => clearTimeout(minTimer);
  }, []);

  return (
    <ErrorBoundary>
      <MotionConfig reducedMotion={isMobile ? "always" : "never"}>
        <AnimatePresence>
          {isLoading && <LoadingScreen key="loader" />}
        </AnimatePresence>

        {!isLoading && (
          <BrowserRouter>
            <Layout>
              <AnimatedRoutes />
            </Layout>
          </BrowserRouter>
        )}
      </MotionConfig>
    </ErrorBoundary>
  );
};

export default App;