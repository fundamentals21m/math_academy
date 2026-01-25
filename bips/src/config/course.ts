// =============================================================================
// COURSE CONFIGURATION - Bitcoin Improvement Proposals
// =============================================================================
// This is the central configuration file for the BIPs course.
// =============================================================================

import type { CourseId } from '@shared/gamification';

/**
 * Course identifier - used for XP tracking, URLs, and storage keys
 */
export const COURSE_ID: CourseId = 'bips';

/**
 * Human-readable course name
 */
export const COURSE_NAME = 'Bitcoin Improvement Proposals';

/**
 * Short description for meta tags and headers
 */
export const COURSE_DESCRIPTION = 'A comprehensive interactive course covering 100+ Bitcoin Improvement Proposals (BIPs) - from consensus rules to wallet standards';

/**
 * Course accent color (used in headers, buttons, etc.)
 * Using amber for Bitcoin orange
 */
export const COURSE_ACCENT = 'amber';

/**
 * Course icon/emoji for visual identification
 */
export const COURSE_ICON = '\u20BF';

/**
 * Base path for routing (must match vite.config.ts)
 */
export const BASE_PATH = `/math_academy/${COURSE_ID}/`;

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
  transcripts: `${BASE_PATH}#/transcripts`,
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
  transcripts: true,
} as const;
