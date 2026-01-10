import { defineConfig, type UserConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export interface CourseViteOptions {
  courseId: string
  courseDir: string  // __dirname from the course's vite.config.ts
}

/**
 * Creates a standardized Vite config for Math Academy courses.
 *
 * Usage in course vite.config.ts:
 * ```ts
 * import { createCourseViteConfig } from '../shared/vite.base.config'
 * export default createCourseViteConfig({
 *   courseId: 'basic-algebra',
 *   courseDir: __dirname,
 * })
 * ```
 */
export function createCourseViteConfig(options: CourseViteOptions): UserConfig {
  const { courseId, courseDir } = options

  // Base path is determined by deployment type:
  // - Standalone deploy (STANDALONE_DEPLOY=true): '/' - for individual *.vercel.app domains
  // - Hub deploy (default): '/{course-id}-deploy/' - for hub subdirectory deployment
  const isStandalone = process.env.STANDALONE_DEPLOY === 'true'
  const basePath = isStandalone ? '/' : `/${courseId}-deploy/`

  return defineConfig({
    plugins: [react()],
    base: basePath,
    resolve: {
      alias: {
        '@': path.resolve(courseDir, './src'),
        '@shared': path.resolve(courseDir, '../shared'),
        '@components': path.resolve(courseDir, './src/components'),
        '@pages': path.resolve(courseDir, './src/pages'),
        '@lib': path.resolve(courseDir, './src/lib'),
        '@data': path.resolve(courseDir, './src/data'),
        '@magic-internet-math/shared': path.resolve(courseDir, '../shared'),
        // Ensure dependencies resolve from course's node_modules to prevent duplicates
        'react': path.resolve(courseDir, './node_modules/react'),
        'react-dom': path.resolve(courseDir, './node_modules/react-dom'),
        'katex': path.resolve(courseDir, './node_modules/katex'),
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
    define: {
      'import.meta.env.VITE_FIREBASE_API_KEY': JSON.stringify(process.env.VITE_FIREBASE_API_KEY || ''),
      'import.meta.env.VITE_FIREBASE_AUTH_DOMAIN': JSON.stringify(process.env.VITE_FIREBASE_AUTH_DOMAIN || ''),
      'import.meta.env.VITE_FIREBASE_PROJECT_ID': JSON.stringify(process.env.VITE_FIREBASE_PROJECT_ID || ''),
      'import.meta.env.VITE_FIREBASE_STORAGE_BUCKET': JSON.stringify(process.env.VITE_FIREBASE_STORAGE_BUCKET || ''),
      'import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(process.env.VITE_FIREBASE_MESSAGING_SENDER_ID || ''),
      'import.meta.env.VITE_FIREBASE_APP_ID': JSON.stringify(process.env.VITE_FIREBASE_APP_ID || ''),
    },
  })
}
