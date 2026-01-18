// =============================================================================
// COURSE CONFIGURATION
// =============================================================================
// This is the central configuration file for your course.
// Update these values when creating a new course.
// =============================================================================

import type { CourseId } from '@shared/gamification';

/**
 * Course identifier - used for XP tracking, URLs, and storage keys
 */
export const COURSE_ID: CourseId = 'df';

/**
 * Human-readable course name
 */
export const COURSE_NAME = 'Abstract Algebra (Dummit & Foote)';

/**
 * Short description for meta tags and headers
 */
export const COURSE_DESCRIPTION = "The definitive graduate-level abstract algebra textbook covering groups, rings, modules, fields, Galois theory, algebraic geometry, and representation theory.";

/**
 * Course accent color (used in headers, buttons, etc.)
 * Options: 'indigo', 'emerald', 'amber', 'rose', 'cyan'
 */
export const COURSE_ACCENT = 'rose';

/**
 * Course icon/emoji for visual identification
 */
export const COURSE_ICON = 'G';

/**
 * Base path for routing (must match vite.config.ts)
 */
export const BASE_PATH = '/';

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
  nostrAuth: true,
  quizzes: true,
  interactiveModules: true,
  theoremIndex: true,
  problemSets: true,
} as const;
