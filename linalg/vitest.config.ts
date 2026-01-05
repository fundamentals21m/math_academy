import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'happy-dom',
    setupFiles: ['./test/setup.ts'],
    include: [
      '**/*.{test,spec}.{js,ts,jsx,tsx}',
      '**/test/**/*.{test,spec}.{js,ts,jsx,tsx}',
      '**/test/regression/**/*.{test,spec}.{js,ts,jsx,tsx}',
      '**/.storybook/**/*.stories.@(js|jsx|mjs|tsx|ts)',
      '**/components/**/*.stories.@(js|jsx|mjs|tsx|ts)',
    ],
  },
});