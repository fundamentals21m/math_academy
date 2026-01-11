// =============================================================================
// COURSE CONFIGURATION
// =============================================================================
// This is the central configuration file for your course.
// Update these values when creating a new course.
// =============================================================================

import type { CourseId } from '@shared/gamification';

/**
 * Course identifier - used for XP tracking, URLs, and storage keys
 * Examples: 'ba' (Basic Algebra), 'aa' (Abstract Algebra), 'crypto' (Cryptography)
 */
export const COURSE_ID: CourseId = 'mom';

/**
 * Human-readable course name
 */
export const COURSE_NAME = 'Men of Mathematics';

/**
 * Short description for meta tags and headers
 */
export const COURSE_DESCRIPTION = 'An interactive journey through 2500 years of mathematical history with E.T. Bell';

/**
 * Course accent color (used in headers, buttons, etc.)
 * Options: 'indigo', 'emerald', 'amber', 'rose', 'cyan'
 */
export const COURSE_ACCENT = 'indigo';

/**
 * Course icon/emoji for visual identification
 */
export const COURSE_ICON = '📚';

/**
 * Base path for routing (must match vite.config.ts)
 * Note: Uses hyphenated version for URLs while COURSE_ID uses underscore for storage
 */
export const BASE_PATH = '/men-of-math/';

/**
 * Hub URL - main Magic Internet Math landing page
 */
export const HUB_URL = 'https://mathacademy-cyan.vercel.app';

/**
 * External links
 */
export const LINKS = {
  hub: HUB_URL,
  home: '/',
  leaderboard: `${BASE_PATH}#/leaderboard`,
  theorems: `${BASE_PATH}#/theorems`,
  interactive: `${BASE_PATH}#/interactive`,
} as const;

/**
 * Feature flags - enable/disable features per course
 */
export const FEATURES = {
  gamification: true,
  leaderboard: true,
  nostrAuth: false,
  quizzes: true,
  interactiveModules: true,
  theoremIndex: true,
} as const;
