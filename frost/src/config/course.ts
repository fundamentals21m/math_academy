// =============================================================================
// COURSE CONFIGURATION - FROST: Threshold Signatures
// =============================================================================
// Central configuration for the FROST course on threshold signatures.
// =============================================================================

import type { CourseId } from '@shared/gamification';

/**
 * Course identifier - used for XP tracking, URLs, and storage keys
 */
export const COURSE_ID: CourseId = 'frost';

/**
 * Human-readable course name
 */
export const COURSE_NAME = 'FROST: Threshold Signatures';

/**
 * Short description for meta tags and headers
 */
export const COURSE_DESCRIPTION = 'Master Flexible Round-Optimized Schnorr Threshold Signatures - from mathematical foundations to Bitcoin applications.';

/**
 * Course accent color (used in headers, buttons, etc.)
 * Options: 'indigo', 'emerald', 'amber', 'rose', 'cyan'
 */
export const COURSE_ACCENT = 'indigo';

/**
 * Course icon/emoji for visual identification
 */
export const COURSE_ICON = '🔐';

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
