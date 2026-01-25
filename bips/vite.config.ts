import { createCourseViteConfig } from '../shared/vite.base.config'
import path from 'path'

const baseConfig = createCourseViteConfig({
  courseId: 'bips',
  courseDir: __dirname,
})

// Add firebase alias to resolve from course's node_modules
export default {
  ...baseConfig,
  resolve: {
    ...baseConfig.resolve,
    alias: {
      ...baseConfig.resolve?.alias,
      'firebase': path.resolve(__dirname, './node_modules/firebase'),
      'firebase/app': path.resolve(__dirname, './node_modules/firebase/app'),
      'firebase/auth': path.resolve(__dirname, './node_modules/firebase/auth'),
      'firebase/functions': path.resolve(__dirname, './node_modules/firebase/functions'),
      'framer-motion': path.resolve(__dirname, './node_modules/framer-motion'),
    },
  },
}
