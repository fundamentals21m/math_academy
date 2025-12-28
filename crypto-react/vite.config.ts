import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// =============================================================================
// COURSE CONFIGURATION - Cryptography Mathematics
// =============================================================================
const BASE_PATH = '/cryptography/'
// =============================================================================

export default defineConfig({
  plugins: [react()],
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
          // Firebase - only loaded when auth/leaderboard features are used
          'vendor-firebase': [
            'firebase/app',
            'firebase/auth',
            'firebase/firestore',
            'firebase/functions',
          ],
        },
      },
    },
  },
})
