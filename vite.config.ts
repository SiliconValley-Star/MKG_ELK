import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      },
      build: {
        // Enable minification
        minify: 'terser',
        terserOptions: {
          compress: {
            drop_console: true, // Remove console.logs in production
            drop_debugger: true,
            pure_funcs: ['console.log', 'console.info', 'console.debug'],
          },
        },
        // Source maps for production debugging (can be disabled)
        sourcemap: false,
        // Chunk size warning limit (500kb)
        chunkSizeWarningLimit: 500,
        // CSS code splitting
        cssCodeSplit: true,
        // Asset inline threshold (4kb)
        assetsInlineLimit: 4096,
        // Rollup options for advanced chunking
        rollupOptions: {
          output: {
            // Manual chunk strategy for optimal caching
            manualChunks: {
              // React core (rarely changes, cache-friendly)
              'react-vendor': ['react', 'react-dom'],
              // Framer Motion (large animation library)
              'framer': ['framer-motion'],
              // Router (stable dependency)
              'router': ['react-router-dom'],
              // Lucide icons (large icon set)
              'icons': ['lucide-react'],
            },
            // Naming strategy for chunks
            chunkFileNames: 'assets/[name]-[hash].js',
            entryFileNames: 'assets/[name]-[hash].js',
            assetFileNames: 'assets/[name]-[hash].[ext]',
          },
        },
        // Report compressed size
        reportCompressedSize: true,
        // Target modern browsers for smaller bundles
        target: 'es2015',
      },
    };
});
