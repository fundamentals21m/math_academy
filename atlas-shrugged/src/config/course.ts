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
export const COURSE_ID: CourseId = 'atlas_shrugged';

/**
 * Human-readable course name
 */
export const COURSE_NAME = 'Atlas Shrugged';

/**
 * Short description for meta tags and headers
 */
export const COURSE_DESCRIPTION = 'An interactive course exploring Atlas Shrugged by Ayn Rand';

/**
 * Course accent color (used in headers, buttons, etc.)
 * Options: 'indigo', 'emerald', 'amber', 'rose', 'cyan'
 */
export const COURSE_ACCENT = 'amber';

/**
 * Course icon/emoji for visual identification
 */
export const COURSE_ICON = '🔥';

/**
 * Base path for routing (must match vite.config.ts)
 */
export const BASE_PATH = `/math_academy/${COURSE_ID}/`;

/**
 * Hub URL - main Magic Internet Math landing page
 */
export const HUB_URL = 'https://mathacademy-cyan.vercel.app';

/**
 * YouTube playlist URL (optional)
 */
export const YOUTUBE_PLAYLIST_URL = 'https://www.youtube.com/playlist?list=PLaAxhhFb7OVFUoynHr-Thg3yv1Bf6paNd';

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
