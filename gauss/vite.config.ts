import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// =============================================================================
// COURSE CONFIGURATION - Update these values for your course
// =============================================================================
const COURSE_ID = 'gauss'  // Short ID: 'ba', 'aa', 'crypto', etc.

// Base path is determined by deployment type:
// - Standalone deploy (default): '/' - works on *.vercel.app domains
// - Hub deploy (HUB_DEPLOY=true): '/{course-id}-deploy/' - for hub subdirectory
const isHubDeploy = process.env.HUB_DEPLOY === 'true'
const BASE_PATH = isHubDeploy ? `/${COURSE_ID}-deploy/` : '/'
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
        // Monorepo shared package (also maps to local shared folder)
        '@magic-internet-math/shared': path.resolve(__dirname, '../shared'),
    },
  },
  build: {
    chunkSizeWarningLimit: 500,
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
          // Firebase - split into granular chunks for tree-shaking
          'vendor-firebase-core': ['firebase/app'],
          'vendor-firebase-auth': ['firebase/auth'],
          'vendor-firebase-functions': ['firebase/functions'],
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
