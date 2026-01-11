// =============================================================================
// COURSE CONFIGURATION
// =============================================================================
// Cryptography Mathematics Course
// =============================================================================

import type { CourseId } from '@shared/gamification';

/**
 * Course identifier - used for XP tracking, URLs, and storage keys
 */
export const COURSE_ID: CourseId = 'crypto';

/**
 * Human-readable course name
 */
export const COURSE_NAME = 'Cryptography Mathematics';

/**
 * Short description for meta tags and headers
 */
export const COURSE_DESCRIPTION = 'Learn the mathematics that powers modern encryption, from modular arithmetic to elliptic curves.';

/**
 * Course accent color (used in headers, buttons, etc.)
 * Options: 'indigo', 'emerald', 'amber', 'rose', 'cyan'
 */
export const COURSE_ACCENT = 'cyan';

/**
 * Course icon/emoji for visual identification
 */
export const COURSE_ICON = '🔐';

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
} as const;
