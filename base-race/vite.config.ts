import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// Self-contained config for standalone Vercel deployment
export default defineConfig({
  plugins: [react()],
  base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@shared': path.resolve(__dirname, '../shared'),
      '@components': path.resolve(__dirname, './src/components'),
      '@pages': path.resolve(__dirname, './src/pages'),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@data': path.resolve(__dirname, './src/data'),
    },
    dedupe: ['react', 'react-dom', 'katex'],
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
          'vendor-firebase-core': ['firebase/app'],
          'vendor-firebase-auth': ['firebase/auth'],
          'vendor-firebase-functions': ['firebase/functions'],
        },
      },
    },
  },
})
