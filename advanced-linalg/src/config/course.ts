// =============================================================================
// COURSE CONFIGURATION
// =============================================================================
// Advanced Linear Algebra Course - Based on Hoffman & Kunze
// =============================================================================

import type { CourseId } from '@shared/gamification';

/**
 * Course identifier - used for XP tracking, URLs, and storage keys
 */
export const COURSE_ID: CourseId = 'advlinalg';

/**
 * Human-readable course name
 */
export const COURSE_NAME = 'Advanced Linear Algebra';

/**
 * Short description for meta tags and headers
 */
export const COURSE_DESCRIPTION = 'A rigorous treatment of linear algebra based on Hoffman & Kunze, covering vector spaces, linear transformations, and canonical forms.';

/**
 * Course accent color (used in headers, buttons, etc.)
 * Options: 'indigo', 'emerald', 'amber', 'rose', 'cyan'
 */
export const COURSE_ACCENT = 'emerald';

/**
 * Course icon/emoji for visual identification
 */
export const COURSE_ICON = 'λ';

/**
 * Base path for routing (must match vite.config.ts)
 * For standalone Vercel deployment, use '/'
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
  leaderboard: '/#/leaderboard',
  theorems: '/#/theorems',
  interactive: '/#/interactive',
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
} as const;
