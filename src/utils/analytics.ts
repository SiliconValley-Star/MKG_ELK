/**
 * Analytics Tracking Utility
 * Template for Google Analytics, Plausible, or custom analytics
 */

export interface AnalyticsConfig {
  enabled: boolean;
  trackingId?: string;
  debug?: boolean;
}

export interface PageViewData {
  path: string;
  title: string;
  referrer?: string;
}

export interface EventData {
  category: string;
  action: string;
  label?: string;
  value?: number;
  [key: string]: any;
}

let config: AnalyticsConfig = {
  enabled: false,
  debug: false,
};

// Initialize analytics
export function initAnalytics(userConfig: AnalyticsConfig): void {
  config = { ...config, ...userConfig };

  if (!config.enabled) {
    if (config.debug) {
      console.log('[Analytics] Analytics disabled');
    }
    return;
  }

  if (config.debug) {
    console.log('[Analytics] Initialized with config:', config);
  }

  // Initialize Google Analytics (gtag.js) if tracking ID is provided
  if (config.trackingId && config.trackingId.startsWith('G-')) {
    initGoogleAnalytics(config.trackingId);
  }
  
  // Initialize Plausible if configured
  if (config.trackingId && config.trackingId === 'plausible') {
    initPlausible();
  }
}

// Google Analytics initialization
function initGoogleAnalytics(trackingId: string): void {
  // Load gtag.js script
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${trackingId}`;
  document.head.appendChild(script);

  // Initialize gtag
  window.dataLayer = window.dataLayer || [];
  function gtag(...args: any[]) {
    window.dataLayer.push(args);
  }
  window.gtag = gtag;

  gtag('js', new Date());
  gtag('config', trackingId, {
    send_page_view: false, // We'll send manually
    anonymize_ip: true,
  });
}

// Plausible Analytics initialization
function initPlausible(): void {
  const script = document.createElement('script');
  script.defer = true;
  script.setAttribute('data-domain', window.location.hostname);
  script.src = 'https://plausible.io/js/plausible.js';
  document.head.appendChild(script);
}

// Track page view
export function trackPageView(data: PageViewData): void {
  if (!config.enabled) {
    if (config.debug) {
      console.log('[Analytics] Page view (disabled):', data);
    }
    return;
  }

  if (config.debug) {
    console.log('[Analytics] Page view:', data);
  }

  // Google Analytics
  if (window.gtag) {
    window.gtag('event', 'page_view', {
      page_path: data.path,
      page_title: data.title,
      page_referrer: data.referrer,
    });
  }

  // Plausible (automatic tracking via script)
  // Custom analytics endpoint
  sendToCustomEndpoint('pageview', data);
}

// Track custom event
export function trackEvent(data: EventData): void {
  if (!config.enabled) {
    if (config.debug) {
      console.log('[Analytics] Event (disabled):', data);
    }
    return;
  }

  if (config.debug) {
    console.log('[Analytics] Event:', data);
  }

  // Google Analytics
  if (window.gtag) {
    window.gtag('event', data.action, {
      event_category: data.category,
      event_label: data.label,
      value: data.value,
      ...data,
    });
  }

  // Plausible custom events
  if (window.plausible) {
    window.plausible(data.action, {
      props: {
        category: data.category,
        label: data.label,
        ...data,
      },
    });
  }

  // Custom analytics endpoint
  sendToCustomEndpoint('event', data);
}

// Common event tracking helpers
export const analytics = {
  // Navigation events
  clickLink: (label: string, url: string) => {
    trackEvent({
      category: 'Navigation',
      action: 'Click Link',
      label,
      url,
    });
  },

  // Form events
  submitForm: (formName: string) => {
    trackEvent({
      category: 'Form',
      action: 'Submit',
      label: formName,
    });
  },

  formError: (formName: string, errorMessage: string) => {
    trackEvent({
      category: 'Form',
      action: 'Error',
      label: formName,
      errorMessage,
    });
  },

  // Button clicks
  clickButton: (buttonName: string, location: string) => {
    trackEvent({
      category: 'Button',
      action: 'Click',
      label: buttonName,
      location,
    });
  },

  // Downloads
  downloadFile: (fileName: string, fileType: string) => {
    trackEvent({
      category: 'Download',
      action: 'File',
      label: fileName,
      fileType,
    });
  },

  // Video events
  playVideo: (videoId: string) => {
    trackEvent({
      category: 'Video',
      action: 'Play',
      label: videoId,
    });
  },

  // Search
  search: (query: string, resultsCount?: number) => {
    trackEvent({
      category: 'Search',
      action: 'Query',
      label: query,
      value: resultsCount,
    });
  },

  // Social shares
  share: (platform: string, url: string) => {
    trackEvent({
      category: 'Social',
      action: 'Share',
      label: platform,
      url,
    });
  },

  // Outbound links
  outboundClick: (url: string) => {
    trackEvent({
      category: 'Outbound',
      action: 'Click',
      label: url,
    });
  },

  // Newsletter
  newsletterSubscribe: (location: string) => {
    trackEvent({
      category: 'Newsletter',
      action: 'Subscribe',
      label: location,
    });
  },

  // Contact
  contactSubmit: (department: string) => {
    trackEvent({
      category: 'Contact',
      action: 'Submit',
      label: department,
    });
  },
};

// Send to custom analytics endpoint
function sendToCustomEndpoint(type: string, data: any): void {
  const endpoint = import.meta.env.VITE_ANALYTICS_ENDPOINT;
  
  if (!endpoint) return;

  const payload = {
    type,
    data,
    timestamp: Date.now(),
    url: window.location.href,
    userAgent: navigator.userAgent,
    screen: {
      width: window.screen.width,
      height: window.screen.height,
    },
  };

  // Use sendBeacon for reliability
  if (navigator.sendBeacon) {
    navigator.sendBeacon(endpoint, JSON.stringify(payload));
  } else {
    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
      keepalive: true,
    }).catch(console.error);
  }
}

// Declare global types
declare global {
  interface Window {
    dataLayer: any[];
    gtag: (...args: any[]) => void;
    plausible: (event: string, options?: any) => void;
  }
}