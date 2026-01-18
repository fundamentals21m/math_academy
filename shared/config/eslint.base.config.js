/**
 * Shared ESLint configuration for Math Academy courses.
 *
 * Usage in course eslint.config.js:
 * ```js
 * import { createEslintConfig } from '../shared/config/eslint.base.config.js';
 * export default createEslintConfig();
 * ```
 *
 * Or with course-specific overrides:
 * ```js
 * import { createEslintConfig } from '../shared/config/eslint.base.config.js';
 * export default createEslintConfig({
 *   rules: {
 *     // Additional rules
 *   }
 * });
 * ```
 */
import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

/**
 * Creates a standardized ESLint config for Math Academy courses.
 * @param {object} [overrides] - Course-specific overrides to merge
 * @returns {import('typescript-eslint').Config}
 */
export function createEslintConfig(overrides = {}) {
  const { rules: extraRules = {}, ...otherOverrides } = overrides;

  return tseslint.config(
    { ignores: ['dist'] },
    {
      extends: [js.configs.recommended, ...tseslint.configs.recommended],
      files: ['**/*.{ts,tsx}'],
      languageOptions: {
        ecmaVersion: 2020,
        globals: globals.browser,
      },
      plugins: {
        'react-hooks': reactHooks,
        'react-refresh': reactRefresh,
      },
      rules: {
        ...reactHooks.configs.recommended.rules,
        'react-refresh/only-export-components': [
          'warn',
          { allowConstantExport: true },
        ],
        ...extraRules,
      },
      ...otherOverrides,
    },
  )
}

// Also export a default config for simple re-export
export default createEslintConfig();
