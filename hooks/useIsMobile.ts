import { useState, useEffect } from 'react';

/**
 * Device detection hook for mobile/desktop optimization
 * Returns true if viewport width is less than 768px (mobile/tablet)
 * Returns false for desktop devices
 */
export const useIsMobile = (): boolean => {
  const [isMobile, setIsMobile] = useState(() => {
    // Initial state - check window width if available
    if (typeof window !== 'undefined') {
      return window.innerWidth < 768;
    }
    return false;
  });

  useEffect(() => {
    // Only run on client side
    if (typeof window === 'undefined') return;

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    // Set initial value
    checkMobile();

    // Add resize listener with debounce for performance
    let timeoutId: NodeJS.Timeout;
    const handleResize = () => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(checkMobile, 150);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return isMobile;
};

/**
 * Hook to check if user prefers reduced motion
 * Used for accessibility - disable animations if user prefers
 */
export const usePrefersReducedMotion = (): boolean => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    if (typeof window !== 'undefined') {
      return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    }
    return false;
  });

  useEffect(() => {
    if (typeof window === 'undefined') return;

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    
    const handleChange = (event: MediaQueryListEvent) => {
      setPrefersReducedMotion(event.matches);
    };

    // Set initial value
    setPrefersReducedMotion(mediaQuery.matches);

    // Listen for changes
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  return prefersReducedMotion;
};

/**
 * Combined hook - returns true if animations should be disabled
 * Disables animations on mobile OR if user prefers reduced motion
 */
export const useShouldReduceMotion = (): boolean => {
  const isMobile = useIsMobile();
  const prefersReducedMotion = usePrefersReducedMotion();
  
  return isMobile || prefersReducedMotion;
};