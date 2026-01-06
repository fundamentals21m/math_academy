import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// =============================================================================
// COURSE CONFIGURATION - Advanced Linear Algebra
// =============================================================================
// Deployed as subdirectory of main HUB for localStorage sharing
// =============================================================================

export default defineConfig({
  plugins: [react()],
  base: '/advlinalg-deploy/',
  resolve: {
    alias: {
        '@': path.resolve(__dirname, './src'),
        '@shared': path.resolve(__dirname, '../shared'),
        '@components': path.resolve(__dirname, './src/components'),
        '@pages': path.resolve(__dirname, './src/pages'),
        '@lib': path.resolve(__dirname, './src/lib'),
        '@data': path.resolve(__dirname, './src/data'),
        // Shared package (root shared directory)
        '@magic-internet-math/shared': path.resolve(__dirname, '../shared'),
        // Ensure shared package can resolve katex from this package's node_modules
        'katex': path.resolve(__dirname, './node_modules/katex'),
    },
  },
  optimizeDeps: {
    include: ['katex'],
  },
  build: {
    chunkSizeWarningLimit: 500,
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-math': ['katex'],
          'vendor-animation': ['framer-motion'],
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
  define: {
    // Firebase environment variables
    'import.meta.env.VITE_FIREBASE_API_KEY': JSON.stringify(process.env.VITE_FIREBASE_API_KEY || ''),
    'import.meta.env.VITE_FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.VITE_FIREBASE_AUTH_DOMAIN || ''),
    'import.meta.env.VITE_FIREBASE_PROJECT_ID': JSON.stringify(process.env.VITE_FIREBASE_PROJECT_ID || ''),
    'import.meta.env.VITE_FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.VITE_FIREBASE_STORAGE_BUCKET || ''),
    'import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.VITE_FIREBASE_MESSAGING_SENDER_ID || ''),
    'import.meta.env.VITE_FIREBASE_APP_ID': JSON.stringify(process.env.VITE_FIREBASE_APP_ID || ''),
  },
})
