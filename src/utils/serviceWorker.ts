/**
 * Service Worker Registration Utility
 * Handles SW registration, updates, and lifecycle management
 */

export interface ServiceWorkerConfig {
  onSuccess?: (registration: ServiceWorkerRegistration) => void;
  onUpdate?: (registration: ServiceWorkerRegistration) => void;
  onOfflineReady?: () => void;
}

// Check if service workers are supported
export function isServiceWorkerSupported(): boolean {
  return 'serviceWorker' in navigator;
}

// Register service worker
export async function registerServiceWorker(config: ServiceWorkerConfig = {}): Promise<void> {
  if (!isServiceWorkerSupported()) {
    console.log('[SW] Service Workers not supported');
    return;
  }

  // Only register in production
  if (import.meta.env.DEV) {
    console.log('[SW] Service Worker disabled in development mode');
    return;
  }

  try {
    const registration = await navigator.serviceWorker.register('/sw.js', {
      scope: '/',
    });

    console.log('[SW] Service Worker registered successfully', registration.scope);

    // Handle updates
    registration.addEventListener('updatefound', () => {
      const newWorker = registration.installing;
      
      if (!newWorker) {
        return;
      }

      newWorker.addEventListener('statechange', () => {
        if (newWorker.state === 'installed') {
          if (navigator.serviceWorker.controller) {
            // New service worker available
            console.log('[SW] New content available, please refresh');
            config.onUpdate?.(registration);
            
            // Show update notification
            showUpdateNotification();
          } else {
            // Content cached for offline use
            console.log('[SW] Content cached for offline use');
            config.onOfflineReady?.();
            config.onSuccess?.(registration);
          }
        }
      });
    });

    // Check for updates periodically (every hour)
    setInterval(() => {
      registration.update();
    }, 60 * 60 * 1000);

  } catch (error) {
    console.error('[SW] Service Worker registration failed:', error);
  }
}

// Unregister service worker
export async function unregisterServiceWorker(): Promise<boolean> {
  if (!isServiceWorkerSupported()) {
    return false;
  }

  try {
    const registration = await navigator.serviceWorker.ready;
    const success = await registration.unregister();
    
    if (success) {
      console.log('[SW] Service Worker unregistered successfully');
    }
    
    return success;
  } catch (error) {
    console.error('[SW] Service Worker unregistration failed:', error);
    return false;
  }
}

// Show update notification
function showUpdateNotification(): void {
  // Create notification element
  const notification = document.createElement('div');
  notification.id = 'sw-update-notification';
  notification.style.cssText = `
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    background: #FF3B00;
    color: white;
    padding: 16px 24px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(255, 59, 0, 0.3);
    z-index: 10000;
    font-family: system-ui, -apple-system, sans-serif;
    font-size: 14px;
    display: flex;
    align-items: center;
    gap: 12px;
    animation: slideUp 0.3s ease-out;
  `;

  notification.innerHTML = `
    <span>Yeni bir sürüm mevcut!</span>
    <button id="sw-reload-btn" style="
      background: white;
      color: #FF3B00;
      border: none;
      padding: 8px 16px;
      border-radius: 4px;
      font-weight: 600;
      cursor: pointer;
      font-size: 13px;
    ">
      Yenile
    </button>
    <button id="sw-dismiss-btn" style="
      background: transparent;
      color: white;
      border: 1px solid white;
      padding: 8px 16px;
      border-radius: 4px;
      cursor: pointer;
      font-size: 13px;
    ">
      Sonra
    </button>
  `;

  // Add animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes slideUp {
      from {
        transform: translateX(-50%) translateY(100px);
        opacity: 0;
      }
      to {
        transform: translateX(-50%) translateY(0);
        opacity: 1;
      }
    }
  `;
  document.head.appendChild(style);

  document.body.appendChild(notification);

  // Handle reload button
  const reloadBtn = document.getElementById('sw-reload-btn');
  reloadBtn?.addEventListener('click', () => {
    window.location.reload();
  });

  // Handle dismiss button
  const dismissBtn = document.getElementById('sw-dismiss-btn');
  dismissBtn?.addEventListener('click', () => {
    notification.remove();
  });

  // Auto-hide after 10 seconds
  setTimeout(() => {
    if (document.body.contains(notification)) {
      notification.remove();
    }
  }, 10000);
}

// Skip waiting and activate new service worker
export async function skipWaiting(): Promise<void> {
  const registration = await navigator.serviceWorker.ready;
  
  if (registration.waiting) {
    registration.waiting.postMessage({ type: 'SKIP_WAITING' });
  }
}

// Clear all caches
export async function clearCaches(): Promise<void> {
  if ('caches' in window) {
    const cacheNames = await caches.keys();
    await Promise.all(cacheNames.map(name => caches.delete(name)));
    console.log('[SW] All caches cleared');
  }
}

// Check if app is running in standalone mode (installed as PWA)
export function isStandalone(): boolean {
  return window.matchMedia('(display-mode: standalone)').matches ||
         (window.navigator as any).standalone === true;
}

// Prompt user to install PWA
export function promptPWAInstall(): void {
  let deferredPrompt: any;

  window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;

    // Show install button
    const installBtn = document.getElementById('pwa-install-btn');
    if (installBtn) {
      installBtn.style.display = 'block';
      
      installBtn.addEventListener('click', async () => {
        if (deferredPrompt) {
          deferredPrompt.prompt();
          const { outcome } = await deferredPrompt.userChoice;
          
          console.log(`[PWA] User response: ${outcome}`);
          deferredPrompt = null;
          installBtn.style.display = 'none';
        }
      });
    }
  });

  // Log installation
  window.addEventListener('appinstalled', () => {
    console.log('[PWA] App installed successfully');
  });
}