/**
 * Shared Tailwind CSS configuration for Math Academy courses.
 *
 * Usage in course tailwind.config.js:
 * ```js
 * import { createTailwindConfig } from '../shared/config/tailwind.base.config.js';
 * export default createTailwindConfig();
 * ```
 *
 * Or with course-specific overrides:
 * ```js
 * import { createTailwindConfig } from '../shared/config/tailwind.base.config.js';
 * export default createTailwindConfig({
 *   theme: {
 *     extend: {
 *       colors: {
 *         // Course-specific color overrides
 *       }
 *     }
 *   }
 * });
 * ```
 */

/**
 * @typedef {import('tailwindcss').Config} TailwindConfig
 */

/**
 * Creates a standardized Tailwind config for Math Academy courses.
 * @param {Partial<TailwindConfig>} [overrides] - Course-specific overrides to merge
 * @returns {TailwindConfig}
 */
export function createTailwindConfig(overrides = {}) {
  const baseConfig = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: 'class',
    theme: {
      extend: {
        colors: {
          // Primary accent color
          primary: {
            50: '#eef2ff',
            100: '#e0e7ff',
            200: '#c7d2fe',
            300: '#a5b4fc',
            400: '#818cf8',
            500: '#6366f1',
            600: '#4f46e5',
            700: '#4338ca',
            800: '#3730a3',
            900: '#312e81',
            950: '#1e1b4b',
          },
          // Dark theme colors
          dark: {
            50: '#f8fafc',
            100: '#f1f5f9',
            200: '#e2e8f0',
            300: '#cbd5e1',
            400: '#94a3b8',
            500: '#64748b',
            600: '#475569',
            700: '#334155',
            800: '#1e293b',
            900: '#0f172a',
            950: '#020617',
          },
        },
        fontFamily: {
          sans: ['Inter', 'system-ui', 'sans-serif'],
          mono: ['JetBrains Mono', 'monospace'],
        },
      },
    },
    plugins: [],
  };

  // Deep merge overrides with base config
  return deepMerge(baseConfig, overrides);
}

/**
 * Simple deep merge utility for config objects
 * @param {object} target
 * @param {object} source
 * @returns {object}
 */
function deepMerge(target, source) {
  const result = { ...target };

  for (const key of Object.keys(source)) {
    if (source[key] instanceof Object && key in target && target[key] instanceof Object) {
      result[key] = deepMerge(target[key], source[key]);
    } else {
      result[key] = source[key];
    }
  }

  return result;
}

// Also export the base config directly for courses that don't need customization
export default createTailwindConfig();
