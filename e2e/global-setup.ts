import { FullConfig } from '@playwright/test';
import { COURSES, TOTAL_SECTIONS } from './config/courses';

/**
 * Global setup for Playwright tests
 *
 * Runs once before all tests to validate configuration
 * and log test environment information.
 */
async function globalSetup(config: FullConfig) {
  console.log('\n=== Math Academy E2E Tests ===\n');
  console.log(`Courses: ${COURSES.length}`);
  console.log(`Total Sections: ${TOTAL_SECTIONS}`);
  console.log(`Workers: ${config.workers}`);
  console.log(`Projects: ${config.projects.map(p => p.name).join(', ')}`);
  console.log(`Base URL: ${config.projects[0]?.use?.baseURL || 'Not set'}`);
  console.log('');

  // Validate course URLs are reachable (optional, can be slow)
  if (process.env.VALIDATE_URLS === 'true') {
    console.log('Validating course URLs...');
    for (const course of COURSES) {
      try {
        const response = await fetch(course.baseUrl, { method: 'HEAD' });
        if (!response.ok) {
          console.warn(`  Warning: ${course.id} returned ${response.status}`);
        }
      } catch (error) {
        console.warn(`  Warning: ${course.id} is not reachable`);
      }
    }
    console.log('');
  }
}

export default globalSetup;
