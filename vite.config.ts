import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    const isProduction = mode === 'production';
    
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [
        react()
      ],
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
        // Output directory
        outDir: 'dist',
        // Generate source maps for debugging
        sourcemap: !isProduction,
        // Minification
        minify: 'terser',
        terserOptions: {
          compress: {
            drop_console: isProduction,
            drop_debugger: isProduction,
            pure_funcs: isProduction ? ['console.log', 'console.info'] : []
          },
          format: {
            comments: false
          }
        },
        // Chunk size warning limit (500kb)
        chunkSizeWarningLimit: 500,
        // Rollup options for advanced optimization
        rollupOptions: {
          output: {
            // Manual chunk splitting for better caching
            manualChunks: {
              // React vendor chunk
              'react-vendor': ['react', 'react-dom', 'react-router-dom'],
              // Animation libraries
              'animation-vendor': ['framer-motion'],
              // Other utilities
              'utils': ['./hooks/useForm', './hooks/useIsMobile', './hooks/useScrollMemory']
            },
            // Asset file naming
            assetFileNames: (assetInfo) => {
              const info = assetInfo.name?.split('.') || [];
              const ext = info[info.length - 1];
              if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
                return `assets/images/[name]-[hash][extname]`;
              } else if (/woff|woff2|eot|ttf|otf/i.test(ext)) {
                return `assets/fonts/[name]-[hash][extname]`;
              }
              return `assets/[name]-[hash][extname]`;
            },
            // Chunk file naming
            chunkFileNames: 'assets/js/[name]-[hash].js',
            entryFileNames: 'assets/js/[name]-[hash].js',
          }
        },
        // CSS code splitting
        cssCodeSplit: true,
        // Report compressed size (disable for faster builds)
        reportCompressedSize: isProduction,
        // Target modern browsers for better optimization
        target: 'es2020',
        // Optimize dependencies
        commonjsOptions: {
          transformMixedEsModules: true
        }
      },
      // Dependency optimization
      optimizeDeps: {
        include: [
          'react',
          'react-dom',
          'react-router-dom',
          'framer-motion'
        ],
        exclude: []
      },
      // Enable tree-shaking for better bundle size
      esbuild: {
        treeShaking: true,
        legalComments: 'none',
        drop: isProduction ? ['console', 'debugger'] : []
      }
    };
});
