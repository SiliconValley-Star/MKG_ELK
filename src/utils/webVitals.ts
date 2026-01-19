/**
 * Core Web Vitals Tracking Utility
 * Tracks and reports performance metrics (LCP, FID, CLS, FCP, TTFB)
 */

export interface WebVitalsMetric {
  name: 'CLS' | 'FID' | 'FCP' | 'LCP' | 'TTFB' | 'INP';
  value: number;
  rating: 'good' | 'needs-improvement' | 'poor';
  delta: number;
  id: string;
  navigationType: string;
}

export interface WebVitalsConfig {
  reportAllChanges?: boolean;
  onReport?: (metric: WebVitalsMetric) => void;
  endpoint?: string;
}

// Thresholds for Core Web Vitals (based on Google's recommendations)
const THRESHOLDS = {
  LCP: { good: 2500, poor: 4000 },      // Largest Contentful Paint
  FID: { good: 100, poor: 300 },        // First Input Delay
  CLS: { good: 0.1, poor: 0.25 },       // Cumulative Layout Shift
  FCP: { good: 1800, poor: 3000 },      // First Contentful Paint
  TTFB: { good: 800, poor: 1800 },      // Time to First Byte
  INP: { good: 200, poor: 500 },        // Interaction to Next Paint
};

// Get rating based on value and thresholds
function getRating(name: keyof typeof THRESHOLDS, value: number): 'good' | 'needs-improvement' | 'poor' {
  const threshold = THRESHOLDS[name];
  if (value <= threshold.good) return 'good';
  if (value <= threshold.poor) return 'needs-improvement';
  return 'poor';
}

// Format metric for logging
function formatMetric(metric: WebVitalsMetric): string {
  const emoji = metric.rating === 'good' ? '✅' : metric.rating === 'needs-improvement' ? '⚠️' : '❌';
  return `${emoji} ${metric.name}: ${metric.value.toFixed(2)}ms (${metric.rating})`;
}

// Send metric to analytics endpoint
async function sendToAnalytics(metric: WebVitalsMetric, endpoint?: string): Promise<void> {
  if (!endpoint) return;

  const body = JSON.stringify({
    name: metric.name,
    value: metric.value,
    rating: metric.rating,
    delta: metric.delta,
    id: metric.id,
    navigationType: metric.navigationType,
    url: window.location.href,
    userAgent: navigator.userAgent,
    timestamp: Date.now(),
  });

  // Use `navigator.sendBeacon()` if available, falling back to `fetch()`
  if (navigator.sendBeacon) {
    navigator.sendBeacon(endpoint, body);
  } else {
    fetch(endpoint, {
      body,
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      keepalive: true,
    }).catch(console.error);
  }
}

// Report Web Vitals
export async function reportWebVitals(config: WebVitalsConfig = {}): Promise<void> {
  const { reportAllChanges = false, onReport, endpoint } = config;

  try {
    // Dynamically import web-vitals library
    const { onCLS, onFID, onFCP, onLCP, onTTFB, onINP } = await import('web-vitals');

    const handleMetric = (metric: any) => {
      const formattedMetric: WebVitalsMetric = {
        name: metric.name,
        value: metric.value,
        rating: getRating(metric.name, metric.value),
        delta: metric.delta,
        id: metric.id,
        navigationType: metric.navigationType || 'unknown',
      };

      // Log to console in development
      if (import.meta.env.DEV) {
        console.log(formatMetric(formattedMetric));
      }

      // Custom callback
      onReport?.(formattedMetric);

      // Send to analytics endpoint
      if (endpoint) {
        sendToAnalytics(formattedMetric, endpoint);
      }
    };

    // Track Core Web Vitals
    onCLS(handleMetric, { reportAllChanges });
    onFID(handleMetric, { reportAllChanges });
    onFCP(handleMetric, { reportAllChanges });
    onLCP(handleMetric, { reportAllChanges });
    onTTFB(handleMetric, { reportAllChanges });
    
    // Track INP (Interaction to Next Paint) - newer metric
    if (typeof onINP === 'function') {
      onINP(handleMetric, { reportAllChanges });
    }

  } catch (error) {
    console.error('[Web Vitals] Failed to load web-vitals library:', error);
  }
}

// Get current performance metrics
export function getPerformanceMetrics(): Record<string, number> {
  const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
  const paint = performance.getEntriesByType('paint');

  return {
    // Navigation timing
    dns: navigation?.domainLookupEnd - navigation?.domainLookupStart || 0,
    tcp: navigation?.connectEnd - navigation?.connectStart || 0,
    ttfb: navigation?.responseStart - navigation?.requestStart || 0,
    download: navigation?.responseEnd - navigation?.responseStart || 0,
    domInteractive: navigation?.domInteractive - navigation?.fetchStart || 0,
    domComplete: navigation?.domComplete - navigation?.fetchStart || 0,
    
    // Paint timing
    fcp: paint.find(entry => entry.name === 'first-contentful-paint')?.startTime || 0,
    
    // Load timing
    loadComplete: navigation?.loadEventEnd - navigation?.fetchStart || 0,
  };
}

// Log performance summary
export function logPerformanceSummary(): void {
  if (!import.meta.env.DEV) return;

  const metrics = getPerformanceMetrics();
  
  console.group('📊 Performance Metrics');
  console.table({
    'DNS Lookup': `${metrics.dns.toFixed(2)}ms`,
    'TCP Connection': `${metrics.tcp.toFixed(2)}ms`,
    'TTFB': `${metrics.ttfb.toFixed(2)}ms`,
    'Download': `${metrics.download.toFixed(2)}ms`,
    'DOM Interactive': `${metrics.domInteractive.toFixed(2)}ms`,
    'DOM Complete': `${metrics.domComplete.toFixed(2)}ms`,
    'FCP': `${metrics.fcp.toFixed(2)}ms`,
    'Load Complete': `${metrics.loadComplete.toFixed(2)}ms`,
  });
  console.groupEnd();
}

// Track custom performance marks
export function measurePerformance(name: string, startMark?: string, endMark?: string): void {
  try {
    if (startMark && endMark) {
      performance.measure(name, startMark, endMark);
    } else {
      performance.mark(name);
    }
  } catch (error) {
    console.error(`[Performance] Failed to measure "${name}":`, error);
  }
}

// Get all custom performance measures
export function getCustomMeasures(): PerformanceMeasure[] {
  return performance.getEntriesByType('measure') as PerformanceMeasure[];
}

// Clear performance data
export function clearPerformanceData(): void {
  performance.clearMarks();
  performance.clearMeasures();
  performance.clearResourceTimings();
}