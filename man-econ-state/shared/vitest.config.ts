import { defineConfig } from 'vitest/config';

export default defineConfig({
  esbuild: {
    jsx: 'automatic',
  },
  test: {
    environment: 'happy-dom',
    setupFiles: ['./test/setup.ts'],
    globals: true,
    testTimeout: 10000,
    include: [
      '**/*.{test,spec}.{js,ts,jsx,tsx}',
      '**/test/**/*.{test,spec}.{js,ts,jsx,tsx}',
      '**/test/regression/**/*.{test,spec}.{js,ts,jsx,tsx}',
      '**/test/integration/**/*.{test,spec}.{js,ts,jsx,tsx}',
      '**/test/snapshots/**/*.{test,spec}.{js,ts,jsx,tsx}',
    ],
  },
  coverage: {
    provider: 'v8',
    reporter: ['text', 'json', 'html'],
    exclude: [
      'node_modules/',
      'test/',
      '**/*.test.ts',
      '**/*.test.tsx',
      '**/*.spec.ts',
      '**/*.spec.tsx',
    ],
    thresholds: {
      lines: 85,
      functions: 85,
      branches: 80,
      statements: 85,
    },
  },
});
