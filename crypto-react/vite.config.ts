import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'
import path from 'path'

// =============================================================================
// COURSE CONFIGURATION - Cryptography Mathematics
// =============================================================================
const BASE_PATH = '/'
// =============================================================================

export default defineConfig({
  plugins: [
    react(),
    // Bundle analyzer for performance monitoring
    visualizer({
      filename: 'dist/bundle-analysis.html',
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  base: BASE_PATH,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@shared': path.resolve(__dirname, '../shared'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@data': path.resolve(__dirname, './src/data'),
      // Keep for backward compatibility
      '@magic-internet-math/shared': path.resolve(__dirname, '../shared'),
      // Ensure shared package can resolve katex from this package's node_modules
      'katex': path.resolve(__dirname, './node_modules/katex'),
    },
  },
  optimizeDeps: {
    include: ['katex'],
  },
  build: {
    chunkSizeWarningLimit: 500, // Lower threshold to catch issues
    rollupOptions: {
      output: {
        // Manual chunks for better caching and smaller initial load
        manualChunks: {
          // Core React libraries - changes rarely
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // Math rendering - large but essential
          'vendor-math': ['katex'],
          // Animation library
          'vendor-animation': ['framer-motion'],
          // Firebase - split into granular chunks for better tree-shaking
          'vendor-firebase-core': ['firebase/app'],
          'vendor-firebase-auth': ['firebase/auth'],
          'vendor-firebase-firestore': ['firebase/firestore'],
          'vendor-firebase-functions': ['firebase/functions'],
        },
      },
    },
  },
})
