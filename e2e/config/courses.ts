/**
 * Course configuration for E2E testing
 *
 * This registry maps course IDs to their deployed URLs and metadata.
 * Used by test fixtures to dynamically generate tests for all courses.
 */

export interface CourseConfig {
  id: string;
  name: string;
  baseUrl: string;
  totalSections: number;
  progressPrefix: string;
  icon: string;
  hasQuizzes: boolean;
  hasVisualizers: boolean;
  hasLeaderboard: boolean;
}

/**
 * Hub base URL - used for relative course URLs
 */
const HUB_URL = 'https://mathacademy-cyan.vercel.app';

/**
 * Resolve course URL - handles both relative and absolute URLs
 */
function resolveUrl(url: string): string {
  if (url.startsWith('http')) {
    return url;
  }
  return `${HUB_URL}/${url}`;
}

/**
 * All 26 Math Academy courses
 */
export const COURSES: CourseConfig[] = [
  // Featured
  {
    id: 'crypto',
    name: 'Cryptography Math',
    baseUrl: 'https://cryptography-xi.vercel.app',
    totalSections: 12,
    progressPrefix: 'crypto:',
    icon: '🔐',
    hasQuizzes: true,
    hasVisualizers: true,
    hasLeaderboard: true,
  },
  {
    id: 'islr',
    name: 'Intro to Statistical Learning',
    baseUrl: resolveUrl('islr-deploy/'),
    totalSections: 62,
    progressPrefix: 'islr:',
    icon: '📊',
    hasQuizzes: true,
    hasVisualizers: true,
    hasLeaderboard: true,
  },

  // Beginners
  {
    id: 'calc_easy',
    name: 'Beginner Calculus',
    baseUrl: resolveUrl('calceasy-deploy/'),
    totalSections: 26,
    progressPrefix: 'calc_easy:',
    icon: '∂',
    hasQuizzes: true,
    hasVisualizers: true,
    hasLeaderboard: true,
  },
  {
    id: 'ba',
    name: 'Basic Algebra',
    baseUrl: resolveUrl('basic-algebra-deploy/'),
    totalSections: 64,
    progressPrefix: 'ba:',
    icon: 'x²',
    hasQuizzes: true,
    hasVisualizers: true,
    hasLeaderboard: true,
  },
  {
    id: 'wm',
    name: 'Why Math?',
    baseUrl: resolveUrl('why-math-deploy/'),
    totalSections: 13,
    progressPrefix: 'wm:',
    icon: '📚',
    hasQuizzes: true,
    hasVisualizers: true,
    hasLeaderboard: true,
  },

  // Calculus
  {
    id: 'calc1',
    name: 'Intermediate Calculus',
    baseUrl: resolveUrl('calc1-deploy/'),
    totalSections: 101,
    progressPrefix: 'calc1:',
    icon: '∫',
    hasQuizzes: true,
    hasVisualizers: true,
    hasLeaderboard: true,
  },
  {
    id: 'calc_lib_art',
    name: 'Calculus as a Liberal Art',
    baseUrl: resolveUrl('calc-lib-art-deploy/'),
    totalSections: 10,
    progressPrefix: 'calc_lib_art:',
    icon: '📚',
    hasQuizzes: true,
    hasVisualizers: true,
    hasLeaderboard: true,
  },
  {
    id: 'ra',
    name: 'Introduction to Real Analysis',
    baseUrl: resolveUrl('ra-deploy/'),
    totalSections: 15,
    progressPrefix: 'ra:',
    icon: '📐',
    hasQuizzes: true,
    hasVisualizers: true,
    hasLeaderboard: true,
  },

  // Algebra
  {
    id: 'linalg',
    name: 'Linear Algebra',
    baseUrl: resolveUrl('linalg-deploy/'),
    totalSections: 50,
    progressPrefix: 'linalg:',
    icon: '📐',
    hasQuizzes: true,
    hasVisualizers: true,
    hasLeaderboard: true,
  },
  {
    id: 'advlinalg',
    name: 'Advanced Linear Algebra',
    baseUrl: resolveUrl('advlinalg-deploy/'),
    totalSections: 59,
    progressPrefix: 'advlinalg:',
    icon: 'ℳ',
    hasQuizzes: true,
    hasVisualizers: true,
    hasLeaderboard: true,
  },
  {
    id: 'aa',
    name: 'Abstract Algebra',
    baseUrl: resolveUrl('aa-deploy/'),
    totalSections: 50,
    progressPrefix: 'aa:',
    icon: 'G',
    hasQuizzes: true,
    hasVisualizers: true,
    hasLeaderboard: true,
  },

  // Geometry
  {
    id: 'four_pillars',
    name: 'The Four Pillars of Geometry',
    baseUrl: resolveUrl('four-pillars-deploy/'),
    totalSections: 66,
    progressPrefix: 'four_pillars:',
    icon: '🔺',
    hasQuizzes: true,
    hasVisualizers: true,
    hasLeaderboard: true,
  },
  {
    id: 'numbers_geometry',
    name: 'Numbers and Geometry',
    baseUrl: resolveUrl('numbers-geometry-deploy/'),
    totalSections: 79,
    progressPrefix: 'numbers_geometry:',
    icon: '🔢',
    hasQuizzes: true,
    hasVisualizers: true,
    hasLeaderboard: true,
  },

  // Seminal Works
  {
    id: 'euclid',
    name: "Euclid's Elements",
    baseUrl: 'https://euclid-deploy.vercel.app',
    totalSections: 219,
    progressPrefix: 'euclid:',
    icon: '📜',
    hasQuizzes: true,
    hasVisualizers: true,
    hasLeaderboard: true,
  },
  {
    id: 'gauss',
    name: 'Disquisitiones Arithmeticae',
    baseUrl: resolveUrl('gauss-deploy/'),
    totalSections: 7,
    progressPrefix: 'gauss:',
    icon: '🔢',
    hasQuizzes: true,
    hasVisualizers: true,
    hasLeaderboard: true,
  },
  {
    id: 'only_the_strong_survive',
    name: 'Only The Strong Survive',
    baseUrl: resolveUrl('only-the-strong-survive-deploy/'),
    totalSections: 20,
    progressPrefix: 'only_the_strong_survive:',
    icon: '₿',
    hasQuizzes: true,
    hasVisualizers: false,
    hasLeaderboard: true,
  },
  {
    id: 'bfi',
    name: 'Bitcoin for Institutions',
    baseUrl: 'https://bfi-liart.vercel.app',
    totalSections: 15,
    progressPrefix: 'bfi:',
    icon: '₿',
    hasQuizzes: true,
    hasVisualizers: false,
    hasLeaderboard: true,
  },

  // Math History
  {
    id: 'mom',
    name: 'Men of Mathematics',
    baseUrl: resolveUrl('mom-deploy/'),
    totalSections: 34,
    progressPrefix: 'mom:',
    icon: '📜',
    hasQuizzes: true,
    hasVisualizers: true,
    hasLeaderboard: true,
  },
  {
    id: 'thales',
    name: 'The Heritage of Thales',
    baseUrl: resolveUrl('thales-deploy/'),
    totalSections: 66,
    progressPrefix: 'thales:',
    icon: '🏛️',
    hasQuizzes: true,
    hasVisualizers: true,
    hasLeaderboard: true,
  },

  // Austrian Economics
  {
    id: 'human_action',
    name: 'Human Action',
    baseUrl: resolveUrl('human-action-deploy/'),
    totalSections: 40,
    progressPrefix: 'human_action:',
    icon: '📖',
    hasQuizzes: true,
    hasVisualizers: false,
    hasLeaderboard: true,
  },
  {
    id: 'atlas_shrugged',
    name: 'Atlas Shrugged',
    baseUrl: 'https://atlas-shrugged-deploy.vercel.app',
    totalSections: 30,
    progressPrefix: 'atlas_shrugged:',
    icon: '🔥',
    hasQuizzes: true,
    hasVisualizers: false,
    hasLeaderboard: true,
  },
  {
    id: 'man_econ_state',
    name: 'Man, Economy, and State',
    baseUrl: 'https://man-econ-state.vercel.app',
    totalSections: 19,
    progressPrefix: 'man_econ_state:',
    icon: '⚖️',
    hasQuizzes: true,
    hasVisualizers: false,
    hasLeaderboard: true,
  },
  {
    id: 'road_to_serfdom',
    name: 'The Road to Serfdom',
    baseUrl: 'https://road-to-serfdom-deploy.vercel.app',
    totalSections: 16,
    progressPrefix: 'road_to_serfdom:',
    icon: '🔗',
    hasQuizzes: true,
    hasVisualizers: false,
    hasLeaderboard: true,
  },
  {
    id: 'orange_btc',
    name: 'Orange is the New Green',
    baseUrl: 'https://orange-is-new-green.vercel.app',
    totalSections: 15,
    progressPrefix: 'orange_btc:',
    icon: '🟠',
    hasQuizzes: true,
    hasVisualizers: false,
    hasLeaderboard: true,
  },

  // Discrete Mathematics
  {
    id: 'west_graphs',
    name: 'Introduction to Graph Theory',
    baseUrl: resolveUrl('west-graphs-deploy/'),
    totalSections: 28,
    progressPrefix: 'west_graphs:',
    icon: '🕸️',
    hasQuizzes: true,
    hasVisualizers: true,
    hasLeaderboard: true,
  },
  {
    id: 'coding_theory',
    name: 'Algebraic Coding Theory',
    baseUrl: resolveUrl('coding-theory-deploy/'),
    totalSections: 41,
    progressPrefix: 'coding_theory:',
    icon: '🔢',
    hasQuizzes: true,
    hasVisualizers: true,
    hasLeaderboard: true,
  },

  // Number Theory
  {
    id: 'koblitz',
    name: 'Advanced Number Theory and Cryptography',
    baseUrl: resolveUrl('koblitz-course-deploy/'),
    totalSections: 22,
    progressPrefix: 'koblitz:',
    icon: '🔑',
    hasQuizzes: true,
    hasVisualizers: true,
    hasLeaderboard: true,
  },
];

/**
 * Get a course by ID
 */
export function getCourseById(id: string): CourseConfig | undefined {
  return COURSES.find(c => c.id === id);
}

/**
 * Get courses that have visualizers
 */
export function getCoursesWithVisualizers(): CourseConfig[] {
  return COURSES.filter(c => c.hasVisualizers);
}

/**
 * Get courses that have quizzes
 */
export function getCoursesWithQuizzes(): CourseConfig[] {
  return COURSES.filter(c => c.hasQuizzes);
}

/**
 * Get the section URL for a course
 */
export function getSectionUrl(courseId: string, sectionId: number): string {
  const course = getCourseById(courseId);
  if (!course) throw new Error(`Course not found: ${courseId}`);
  return `${course.baseUrl}#/section/${sectionId}`;
}

/**
 * Get the quiz URL for a course section
 */
export function getQuizUrl(courseId: string, sectionId: number): string {
  const course = getCourseById(courseId);
  if (!course) throw new Error(`Course not found: ${courseId}`);
  return `${course.baseUrl}#/quiz/section/${sectionId}`;
}

/**
 * Get the leaderboard URL for a course
 */
export function getLeaderboardUrl(courseId: string): string {
  const course = getCourseById(courseId);
  if (!course) throw new Error(`Course not found: ${courseId}`);
  return `${course.baseUrl}#/leaderboard`;
}

/**
 * Total number of sections across all courses
 */
export const TOTAL_SECTIONS = COURSES.reduce((sum, c) => sum + c.totalSections, 0);
