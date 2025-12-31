// =============================================================================
// COURSE CONFIGURATION
// =============================================================================
// This is the central configuration file for your course.
// Update these values when creating a new course.
// =============================================================================

import type { CourseId } from '@magic-internet-math/shared';

/**
 * Course identifier - used for XP tracking, URLs, and storage keys
 * Examples: 'ba' (Basic Algebra), 'aa' (Abstract Algebra), 'crypto' (Cryptography)
 */
export const COURSE_ID: CourseId = 'ra';

/**
 * Human-readable course name
 */
export const COURSE_NAME = 'Introduction to Real Analysis';

/**
 * Short description for meta tags and headers
 */
export const COURSE_DESCRIPTION = 'A rigorous introduction to real analysis covering limits, continuity, differentiation, and integration through formal proofs';

/**
 * Course accent color (used in headers, buttons, etc.)
 * Options: 'indigo', 'emerald', 'amber', 'rose', 'cyan'
 */
export const COURSE_ACCENT = 'emerald';

/**
 * Course icon/emoji for visual identification
 */
export const COURSE_ICON = 'ε';

/**
 * Base path for routing (must match vite.config.ts)
 * Use '/' for standalone Vercel deployment
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
  leaderboard: '/leaderboard',
  theorems: '/theorems',
  interactive: '/interactive',
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
