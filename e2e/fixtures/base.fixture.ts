import { test as base, Page, expect } from '@playwright/test';
import { CourseConfig, COURSES, getCourseById } from '../config/courses';

/**
 * Extended test fixture with course context
 */
export interface CourseTestFixtures {
  /** Current course configuration */
  course: CourseConfig;

  /** Navigate to a specific section */
  navigateToSection: (sectionId: number) => Promise<void>;

  /** Navigate to the course homepage */
  navigateToHome: () => Promise<void>;

  /** Navigate to the leaderboard */
  navigateToLeaderboard: () => Promise<void>;

  /** Wait for page to be fully loaded */
  waitForPageReady: () => Promise<void>;

  /** Wait for math (KaTeX) to render */
  waitForMathRendered: () => Promise<void>;

  /** Get count of KaTeX elements on page */
  getKaTeXCount: () => Promise<number>;

  /** Clear localStorage for fresh state */
  clearProgress: () => Promise<void>;
}

/**
 * Extended test with course fixtures
 */
export const test = base.extend<CourseTestFixtures>({
  // Determine course from environment or test file path
  course: async ({}, use, testInfo) => {
    // Try environment variable first
    let courseId = process.env.COURSE_ID;

    // Otherwise try to infer from test file path
    if (!courseId) {
      const match = testInfo.file.match(/courses\/(\w+)\./);
      if (match) {
        courseId = match[1];
      }
    }

    // Default to first course
    const course = courseId ? getCourseById(courseId) : COURSES[0];
    if (!course) {
      throw new Error(`Course not found: ${courseId}`);
    }

    await use(course);
  },

  navigateToSection: async ({ page, course }, use) => {
    const navigate = async (sectionId: number) => {
      await page.goto(`${course.baseUrl}#/section/${sectionId}`);
      await page.waitForLoadState('networkidle');
    };
    await use(navigate);
  },

  navigateToHome: async ({ page, course }, use) => {
    const navigate = async () => {
      await page.goto(course.baseUrl);
      await page.waitForLoadState('networkidle');
    };
    await use(navigate);
  },

  navigateToLeaderboard: async ({ page, course }, use) => {
    const navigate = async () => {
      await page.goto(`${course.baseUrl}#/leaderboard`);
      await page.waitForLoadState('networkidle');
    };
    await use(navigate);
  },

  waitForPageReady: async ({ page }, use) => {
    const wait = async () => {
      await page.waitForLoadState('networkidle');
      // Wait for main content to be visible
      await page.waitForSelector('main, [role="main"], #root', { state: 'visible' });
    };
    await use(wait);
  },

  waitForMathRendered: async ({ page }, use) => {
    const wait = async () => {
      // Wait for KaTeX to render all math elements
      await page.waitForFunction(() => {
        const katexElements = document.querySelectorAll('.katex');
        if (katexElements.length === 0) return true; // No math on page
        return Array.from(katexElements).every(el => {
          const html = el.querySelector('.katex-html');
          const mathml = el.querySelector('.katex-mathml');
          return (html && html.children.length > 0) || mathml;
        });
      }, { timeout: 10_000 });
    };
    await use(wait);
  },

  getKaTeXCount: async ({ page }, use) => {
    const getCount = async () => {
      return page.locator('.katex').count();
    };
    await use(getCount);
  },

  clearProgress: async ({ page, course }, use) => {
    const clear = async () => {
      await page.evaluate((prefix) => {
        // Clear gamification state
        localStorage.removeItem('magic-internet-math-gamification');
        // Clear any course-specific keys
        const keys = Object.keys(localStorage);
        for (const key of keys) {
          if (key.includes(prefix) || key.includes('gamification')) {
            localStorage.removeItem(key);
          }
        }
      }, course.progressPrefix);
    };
    await use(clear);
  },
});

export { expect };

/**
 * Test helper to run tests for all courses
 */
export function forEachCourse(
  testFn: (course: CourseConfig) => void,
  filter?: (course: CourseConfig) => boolean
) {
  const courses = filter ? COURSES.filter(filter) : COURSES;
  for (const course of courses) {
    testFn(course);
  }
}

/**
 * Test helper to run tests for a subset of courses
 */
export function forCourses(
  courseIds: string[],
  testFn: (course: CourseConfig) => void
) {
  for (const id of courseIds) {
    const course = getCourseById(id);
    if (course) {
      testFn(course);
    }
  }
}
