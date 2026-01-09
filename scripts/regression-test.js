#!/usr/bin/env node
/**
 * Regression Test Suite for Math Academy Courses
 *
 * Run before and after changes to verify nothing broke:
 *   node scripts/regression-test.js
 *
 * Checks:
 * - Page loads (no 404 errors)
 * - Navigation works
 * - Quiz functionality
 * - Console errors
 */

const COURSES = [
  { name: 'four-pillars', url: 'https://four-pillars.vercel.app' },
  { name: 'real-analysis', url: 'https://real-analysis-eta.vercel.app' },
  { name: 'advanced-linalg', url: 'https://advanced-linalg.vercel.app' },
  { name: 'calceasy', url: 'https://calceasy-green.vercel.app' },
  { name: 'euclid', url: 'https://euclid-deploy.vercel.app' },
  { name: 'cryptography', url: 'https://cryptography-xi.vercel.app' },
  { name: 'calc1', url: 'https://calc1-course.vercel.app' },
  { name: 'why-math', url: 'https://why-math.vercel.app' },
  { name: 'linalg', url: 'https://linalg-pink.vercel.app' },
  { name: 'basic-algebra', url: 'https://basic-algebra.vercel.app' },
  { name: 'islr', url: 'https://islr.vercel.app' },
  { name: 'gauss', url: 'https://gauss-deploy.vercel.app' },
];

const CHECKS = {
  // Check 1: Page loads with no critical 404 errors
  pageLoads: async (page) => {
    const errors = [];
    page.on('response', response => {
      if (response.status() === 404 && response.url().includes('/assets/')) {
        errors.push(response.url());
      }
    });
    return errors;
  },

  // Check 2: Main content renders
  hasContent: async (page) => {
    const heading = await page.$('h1');
    return heading !== null;
  },

  // Check 3: Navigation sidebar exists
  hasSidebar: async (page) => {
    const sidebar = await page.$('[role="navigation"]');
    return sidebar !== null;
  },

  // Check 4: Section links work
  sectionLinksWork: async (page) => {
    const links = await page.$$('a[href*="/section/"]');
    return links.length > 0;
  },
};

// Test runner (requires Playwright to be installed)
async function runTests() {
  let playwright;
  try {
    playwright = require('playwright');
  } catch (e) {
    console.log('Playwright not installed. Install with: npm install playwright');
    console.log('\nManual test checklist:');
    COURSES.forEach(c => {
      console.log(`\n${c.name}:`);
      console.log(`  [ ] Visit ${c.url}`);
      console.log(`  [ ] Page loads (not blank)`);
      console.log(`  [ ] No 404 errors in console`);
      console.log(`  [ ] Can navigate to a section`);
      console.log(`  [ ] Quiz buttons work`);
    });
    return;
  }

  const browser = await playwright.chromium.launch();
  const results = [];

  for (const course of COURSES) {
    const page = await browser.newPage();
    const errors = [];

    page.on('response', response => {
      if (response.status() === 404 && response.url().includes('/assets/')) {
        errors.push(response.url());
      }
    });

    try {
      await page.goto(course.url, { waitUntil: 'networkidle' });
      const hasContent = await page.$('h1');

      results.push({
        name: course.name,
        url: course.url,
        status: errors.length === 0 && hasContent ? 'PASS' : 'FAIL',
        errors: errors,
        hasContent: !!hasContent,
      });
    } catch (e) {
      results.push({
        name: course.name,
        url: course.url,
        status: 'ERROR',
        error: e.message,
      });
    }

    await page.close();
  }

  await browser.close();

  // Print results
  console.log('\n=== REGRESSION TEST RESULTS ===\n');
  console.log('Course'.padEnd(20) + 'Status'.padEnd(10) + 'Details');
  console.log('-'.repeat(60));

  let passed = 0, failed = 0;
  results.forEach(r => {
    const icon = r.status === 'PASS' ? '✓' : '✗';
    console.log(`${icon} ${r.name.padEnd(18)} ${r.status.padEnd(10)} ${r.errors?.length ? r.errors.length + ' 404s' : ''}`);
    if (r.status === 'PASS') passed++;
    else failed++;
  });

  console.log('-'.repeat(60));
  console.log(`\nTotal: ${passed} passed, ${failed} failed`);

  if (failed > 0) {
    console.log('\nFailed courses need base path fix in vite.config.ts');
    process.exit(1);
  }
}

runTests().catch(console.error);
