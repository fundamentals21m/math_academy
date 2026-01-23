#!/usr/bin/env node
/**
 * Runtime validation script for Math Academy courses
 * Uses Playwright to load each course and check for JavaScript errors
 *
 * Usage:
 *   node scripts/validate-runtime.js           # Check all hub courses
 *   node scripts/validate-runtime.js --all     # Include standalone courses
 *   node scripts/validate-runtime.js --verbose # Show detailed output
 */

import { chromium } from 'playwright';
import { COURSES } from './courses.js';

const HUB_BASE_URL = 'https://mathacademy-cyan.vercel.app/';
const TIMEOUT = 30000; // 30 seconds per course

// Parse command line arguments
const args = process.argv.slice(2);
const includeStandalone = args.includes('--all');
const verbose = args.includes('--verbose');

// Categorize courses
function categorizeCourses() {
  const hubCourses = [];
  const standaloneCourses = [];

  for (const course of COURSES) {
    if (course.url.startsWith('http')) {
      standaloneCourses.push(course);
    } else {
      hubCourses.push(course);
    }
  }

  return { hubCourses, standaloneCourses };
}

// Check a single course for runtime errors
async function checkCourse(page, course, isHub) {
  const url = isHub ? `${HUB_BASE_URL}${course.url}` : course.url;
  const errors = [];
  const warnings = [];

  // Collect console errors
  const errorHandler = (msg) => {
    const type = msg.type();
    const text = msg.text();

    if (type === 'error') {
      // Filter out common non-breaking errors and warnings
      if (
        text.includes('net::ERR_') ||
        text.includes('favicon') ||
        text.includes('Failed to load resource: the server responded with a status of 404') ||
        // CSP warnings for external stylesheets - not breaking errors
        text.includes('Content Security Policy') ||
        text.includes('violates the following Content Security Policy')
      ) {
        if (verbose) warnings.push(text);
        return;
      }
      errors.push(text);
    }
  };

  page.on('console', errorHandler);

  // Collect uncaught exceptions
  const errorPageHandler = (error) => {
    errors.push(`Uncaught: ${error.message}`);
  };
  page.on('pageerror', errorPageHandler);

  try {
    if (verbose) console.log(`  Loading ${url}...`);

    await page.goto(url, {
      waitUntil: 'networkidle',
      timeout: TIMEOUT,
    });

    // Wait a bit for React to render
    await page.waitForTimeout(1000);

    // Check for React error boundary content
    const content = await page.textContent('body');
    const errorPatterns = [
      'Something went wrong',
      'Error boundary',
      'An error occurred',
      'Application error',
      'Cannot read properties of',
      'Cannot destructure property',
    ];

    for (const pattern of errorPatterns) {
      if (content.includes(pattern)) {
        errors.push(`Error boundary triggered: "${pattern}" found in page content`);
      }
    }

    // Check that main content rendered (not stuck on loading)
    const hasContent = await page.evaluate(() => {
      const main = document.querySelector('main') || document.querySelector('#root');
      return main && main.children.length > 0;
    });

    if (!hasContent) {
      errors.push('Main content did not render (empty #root or no <main>)');
    }

  } catch (error) {
    errors.push(`Navigation failed: ${error.message}`);
  } finally {
    page.off('console', errorHandler);
    page.off('pageerror', errorPageHandler);
  }

  return { course, url, errors, warnings };
}

async function main() {
  console.log('\nCourse Runtime Validation');
  console.log('='.repeat(50));

  const { hubCourses, standaloneCourses } = categorizeCourses();
  const coursesToCheck = includeStandalone
    ? [...hubCourses, ...standaloneCourses]
    : hubCourses;

  console.log(`\nChecking ${coursesToCheck.length} courses${includeStandalone ? ' (including standalone)' : ' (hub only)'}...\n`);

  const browser = await chromium.launch({
    headless: true,
  });

  const context = await browser.newContext({
    viewport: { width: 1280, height: 720 },
  });

  const page = await context.newPage();

  const results = {
    passed: [],
    failed: [],
    warnings: [],
  };

  for (const course of coursesToCheck) {
    const isHub = !course.url.startsWith('http');
    const result = await checkCourse(page, course, isHub);

    if (result.errors.length > 0) {
      results.failed.push(result);
      console.log(`  ❌ ${course.id}: ${result.errors.length} error(s)`);
      if (verbose) {
        for (const err of result.errors) {
          console.log(`     - ${err.substring(0, 100)}${err.length > 100 ? '...' : ''}`);
        }
      }
    } else if (result.warnings.length > 0) {
      results.warnings.push(result);
      console.log(`  ⚠️  ${course.id}: ${result.warnings.length} warning(s)`);
    } else {
      results.passed.push(result);
      console.log(`  ✅ ${course.id}`);
    }
  }

  await browser.close();

  // Summary
  console.log('\n' + '='.repeat(50));
  console.log('Summary');
  console.log('='.repeat(50));
  console.log(`  ✅ Passed: ${results.passed.length}`);
  console.log(`  ⚠️  Warnings: ${results.warnings.length}`);
  console.log(`  ❌ Failed: ${results.failed.length}`);

  // Detailed failure report
  if (results.failed.length > 0) {
    console.log('\n' + '-'.repeat(50));
    console.log('Failed Courses');
    console.log('-'.repeat(50));
    for (const result of results.failed) {
      console.log(`\n  ${result.course.id} (${result.url})`);
      for (const error of result.errors) {
        console.log(`    - ${error}`);
      }
    }
  }

  // Exit with error code if failures
  if (results.failed.length > 0) {
    console.log(`\n❌ ${results.failed.length} course(s) have runtime errors`);
    process.exit(1);
  } else {
    console.log('\n✅ All courses passed runtime validation');
    process.exit(0);
  }
}

main().catch((error) => {
  console.error('Runtime validation failed:', error);
  process.exit(1);
});
