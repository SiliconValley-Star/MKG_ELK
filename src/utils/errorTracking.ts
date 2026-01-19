/**
 * Error Tracking Utility
 * Template for Sentry or custom error tracking
 */

export interface ErrorTrackingConfig {
  enabled: boolean;
  dsn?: string; // Sentry DSN
  environment?: string;
  release?: string;
  debug?: boolean;
  sampleRate?: number;
  ignoreErrors?: string[];
}

export interface ErrorContext {
  user?: {
    id?: string;
    email?: string;
    username?: string;
  };
  tags?: Record<string, string>;
  extra?: Record<string, any>;
}

let config: ErrorTrackingConfig = {
  enabled: false,
  debug: false,
  sampleRate: 1.0,
  ignoreErrors: [
    'ResizeObserver loop limit exceeded',
    'Non-Error promise rejection captured',
  ],
};

// Initialize error tracking
export async function initErrorTracking(userConfig: ErrorTrackingConfig): Promise<void> {
  config = { ...config, ...userConfig };

  if (!config.enabled) {
    if (config.debug) {
      console.log('[Error Tracking] Error tracking disabled');
    }
    return;
  }

  // Initialize Sentry if DSN is provided
  if (config.dsn) {
    await initSentry();
  } else {
    // Fallback to custom error handling
    setupCustomErrorHandling();
  }

  if (config.debug) {
    console.log('[Error Tracking] Initialized with config:', config);
  }
}

// Initialize Sentry
async function initSentry(): Promise<void> {
  try {
    // Dynamically import Sentry
    const Sentry = await import('@sentry/react');

    Sentry.init({
      dsn: config.dsn,
      environment: config.environment || import.meta.env.MODE,
      release: config.release || import.meta.env.VITE_APP_VERSION,
      integrations: [
        Sentry.browserTracingIntegration(),
        Sentry.replayIntegration({
          maskAllText: true,
          blockAllMedia: true,
        }),
      ],
      tracesSampleRate: config.sampleRate,
      replaysSessionSampleRate: 0.1,
      replaysOnErrorSampleRate: 1.0,
      ignoreErrors: config.ignoreErrors,
      beforeSend(event, hint) {
        // Filter out errors we don't want to track
        if (config.ignoreErrors?.some(pattern => 
          hint.originalException?.toString().includes(pattern)
        )) {
          return null;
        }
        return event;
      },
    });

    console.log('[Error Tracking] Sentry initialized');
  } catch (error) {
    console.error('[Error Tracking] Failed to initialize Sentry:', error);
    setupCustomErrorHandling();
  }
}

// Setup custom error handling
function setupCustomErrorHandling(): void {
  // Global error handler
  window.addEventListener('error', (event) => {
    logError(event.error, {
      extra: {
        message: event.message,
        filename: event.filename,
        lineno: event.lineno,
        colno: event.colno,
      },
    });
  });

  // Unhandled promise rejection handler
  window.addEventListener('unhandledrejection', (event) => {
    logError(event.reason, {
      extra: {
        type: 'unhandledrejection',
        promise: event.promise,
      },
    });
  });

  console.log('[Error Tracking] Custom error handling enabled');
}

// Log error
export function logError(error: Error | string, context?: ErrorContext): void {
  if (!config.enabled) {
    if (config.debug) {
      console.error('[Error Tracking] Error (disabled):', error, context);
    }
    return;
  }

  const errorMessage = error instanceof Error ? error.message : error;
  const errorStack = error instanceof Error ? error.stack : undefined;

  // Check if error should be ignored
  if (config.ignoreErrors?.some(pattern => errorMessage.includes(pattern))) {
    return;
  }

  if (config.debug) {
    console.error('[Error Tracking] Error:', error, context);
  }

  // Send to Sentry if available
  if (window.Sentry) {
    if (error instanceof Error) {
      window.Sentry.captureException(error, {
        user: context?.user,
        tags: context?.tags,
        extra: context?.extra,
      });
    } else {
      window.Sentry.captureMessage(errorMessage, {
        level: 'error',
        user: context?.user,
        tags: context?.tags,
        extra: context?.extra,
      });
    }
  } else {
    // Send to custom endpoint
    sendToCustomEndpoint({
      message: errorMessage,
      stack: errorStack,
      context,
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent,
    });
  }
}

// Log warning
export function logWarning(message: string, context?: ErrorContext): void {
  if (!config.enabled) {
    if (config.debug) {
      console.warn('[Error Tracking] Warning (disabled):', message, context);
    }
    return;
  }

  if (config.debug) {
    console.warn('[Error Tracking] Warning:', message, context);
  }

  if (window.Sentry) {
    window.Sentry.captureMessage(message, {
      level: 'warning',
      user: context?.user,
      tags: context?.tags,
      extra: context?.extra,
    });
  }
}

// Log info message
export function logInfo(message: string, context?: ErrorContext): void {
  if (!config.enabled) {
    if (config.debug) {
      console.info('[Error Tracking] Info (disabled):', message, context);
    }
    return;
  }

  if (config.debug) {
    console.info('[Error Tracking] Info:', message, context);
  }

  if (window.Sentry) {
    window.Sentry.captureMessage(message, {
      level: 'info',
      user: context?.user,
      tags: context?.tags,
      extra: context?.extra,
    });
  }
}

// Set user context
export function setUser(user: ErrorContext['user']): void {
  if (!config.enabled) return;

  if (window.Sentry) {
    window.Sentry.setUser(user || null);
  }
}

// Set custom tag
export function setTag(key: string, value: string): void {
  if (!config.enabled) return;

  if (window.Sentry) {
    window.Sentry.setTag(key, value);
  }
}

// Set custom context
export function setContext(name: string, context: Record<string, any>): void {
  if (!config.enabled) return;

  if (window.Sentry) {
    window.Sentry.setContext(name, context);
  }
}

// Add breadcrumb
export function addBreadcrumb(breadcrumb: {
  message: string;
  category?: string;
  level?: 'debug' | 'info' | 'warning' | 'error';
  data?: Record<string, any>;
}): void {
  if (!config.enabled) return;

  if (window.Sentry) {
    window.Sentry.addBreadcrumb(breadcrumb);
  }
}

// Send to custom error tracking endpoint
function sendToCustomEndpoint(data: any): void {
  const endpoint = import.meta.env.VITE_ERROR_TRACKING_ENDPOINT;
  
  if (!endpoint) return;

  const payload = {
    ...data,
    timestamp: Date.now(),
    url: window.location.href,
    userAgent: navigator.userAgent,
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

// React Error Boundary helper
export function getErrorBoundaryFallback(error: Error, resetError: () => void) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black p-6">
      <div className="max-w-md w-full bg-zinc-900 border border-zinc-800 rounded-lg p-8">
        <div className="text-center">
          <div className="text-brand-orange text-6xl mb-4">⚠️</div>
          <h1 className="text-2xl font-bold text-white mb-2">Bir Hata Oluştu</h1>
          <p className="text-gray-400 mb-6">
            Üzgünüz, bir şeyler yanlış gitti. Lütfen sayfayı yenileyin veya daha sonra tekrar deneyin.
          </p>
          {import.meta.env.DEV && (
            <div className="mb-6 p-4 bg-red-950/50 border border-red-900 rounded text-left">
              <p className="text-sm text-red-400 font-mono">{error.message}</p>
            </div>
          )}
          <button
            onClick={resetError}
            className="px-6 py-3 bg-brand-orange text-black font-semibold rounded-lg hover:bg-brand-orange/90 transition-colors"
          >
            Tekrar Dene
          </button>
        </div>
      </div>
    </div>
  );
}

// Declare global types
declare global {
  interface Window {
    Sentry: any;
  }
}