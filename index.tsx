import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { registerServiceWorker } from './src/utils/serviceWorker';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Register Service Worker for PWA functionality
registerServiceWorker({
  onSuccess: () => {
    console.log('[PWA] Content cached for offline use');
  },
  onUpdate: () => {
    console.log('[PWA] New content available, reload to update');
  },
  onOfflineReady: () => {
    console.log('[PWA] App ready to work offline');
  }
});
