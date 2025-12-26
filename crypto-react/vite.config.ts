import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// =============================================================================
// COURSE CONFIGURATION - Cryptography Mathematics
// =============================================================================
const COURSE_ID = 'crypto'
const BASE_PATH = '/cryptography/'
// =============================================================================

export default defineConfig({
  plugins: [react()],
  base: BASE_PATH,
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@shared': path.resolve(__dirname, './src/shared'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@data': path.resolve(__dirname, './src/data'),
      // Monorepo shared package
      '@magic-internet-math/shared': path.resolve(__dirname, '../shared'),
      // Ensure shared package can resolve katex from this package's node_modules
      'katex': path.resolve(__dirname, './node_modules/katex'),
    },
  },
  optimizeDeps: {
    include: ['katex'],
  },
  build: {
    chunkSizeWarningLimit: 1000,
  },
})
