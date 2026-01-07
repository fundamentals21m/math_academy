import { defineConfig, devices } from '@playwright/test';

/**
 * Playwright configuration for Math Academy E2E tests
 *
 * Run all tests: npm test
 * Run smoke tests: npm run test:smoke
 * Run with UI: npm run test:ui
 * Update snapshots: npm run update-snapshots
 */
export default defineConfig({
  testDir: './tests',

  // Timeout settings
  timeout: 30_000,
  expect: {
    timeout: 10_000,
    toHaveScreenshot: {
      maxDiffPixels: 100,
      maxDiffPixelRatio: 0.01,
      threshold: 0.2,
      animations: 'disabled',
    },
  },

  // Parallel execution
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 4 : undefined,

  // Reporters
  reporter: [
    ['html', { outputFolder: 'playwright-report' }],
    ['json', { outputFile: 'test-results/results.json' }],
    process.env.CI ? ['github'] : ['list'],
  ],

  // Global settings
  use: {
    // Base URL - can be overridden per course
    baseURL: process.env.BASE_URL || 'https://mathacademy-cyan.vercel.app',

    // Trace and screenshot settings
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',

    // Navigation settings
    actionTimeout: 10_000,
    navigationTimeout: 30_000,
  },

  // Snapshot directories
  snapshotDir: './baselines',
  snapshotPathTemplate: '{snapshotDir}/{testFileDir}/{arg}{-projectName}{ext}',

  // Output directories
  outputDir: 'test-results',

  // Browser projects
  projects: [
    // Desktop browsers
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    // Mobile browsers
    {
      name: 'mobile-chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'mobile-safari',
      use: { ...devices['iPhone 12'] },
    },

    // Tablet
    {
      name: 'tablet',
      use: { ...devices['iPad (gen 7)'] },
    },
  ],

  // Web server (optional - for local development)
  // webServer: {
  //   command: 'npm run dev',
  //   url: 'http://localhost:5173',
  //   reuseExistingServer: !process.env.CI,
  // },
});
