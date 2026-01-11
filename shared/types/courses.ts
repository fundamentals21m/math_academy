/**
 * Course type definitions - Single source of truth for CourseId
 */

/**
 * Valid course identifiers for production use
 * 
 * Mathematics:
 *   - ba: Basic Algebra
 *   - aa: Abstract Algebra
 *   - linalg: Introduction to Linear Algebra (Strang)
 *   - advlinalg: Advanced Linear Algebra (Hoffman & Kunze)
 *   - ra: Real Analysis
 *   - calc1: Calculus (Apostol)
 *   - calc_lib_art: Calculus as a Liberal Art
 *   - calc_easy: Calculus Made Easy
 *   - crypto: Cryptography Mathematics
 *   - koblitz: Number Theory and Cryptography (Koblitz)
 *   - coding: Algebraic Coding Theory (Vermani)
 *   - islr: Introduction to Statistical Learning
 *   - west_graphs: Graph Theory (West)
 *   - wm: Why Math? (Driver)
 *   - numbers-geometry: Numbers and Geometry
 * 
 * Geometry & History:
 *   - euclid: Euclid's Elements
 *   - gauss: Disquisitiones Arithmeticae
 *   - four_pillars: Four Pillars of Geometry (Stillwell)
 *   - thales: Heritage of Thales
 *   - mom: Men of Mathematics (Bell)
 * 
 * Economics & Philosophy:
 *   - human_action: Human Action (Mises)
 *   - man_econ_state: Man, Economy, and State (Rothbard)
 *   - road_to_serfdom: The Road to Serfdom (Hayek)
 *   - atlas_shrugged: Atlas Shrugged (Rand)
 * 
 * Bitcoin & Special:
 *   - only-the-strong-survive: Only The Strong Survive
 *   - orange_btc: Orange is the New Green
 *   - mod-race: Modular Arithmetic Racing
 * 
 * Other:
 *   - template: Course template
 */
export type CourseId =
  // Mathematics
  | 'ba' | 'aa' | 'linalg' | 'advlinalg' | 'ra'
  | 'calc1' | 'calc_lib_art' | 'calc_easy'
  | 'crypto' | 'koblitz' | 'coding'
  | 'islr' | 'west_graphs' | 'wm' | 'numbers-geometry'
  | 'ross-prob' | 'intro-discrete' | 'rudin' | 'df' | 'euler-intro'
  // Geometry & History
  | 'euclid' | 'gauss' | 'four_pillars' | 'thales' | 'mom'
  // Economics & Philosophy
  | 'human_action' | 'man_econ_state' | 'road_to_serfdom' | 'atlas_shrugged'
  // Bitcoin & Special
  | 'only-the-strong-survive' | 'orange_btc' | 'mod-race' | 'bfi'
  // History of Mathematics
  | 'math_history'
  // Other
  | 'template';

/**
 * Array of valid course IDs for runtime validation
 */
export const VALID_COURSE_IDS: readonly CourseId[] = [
  // Mathematics
  'ba', 'aa', 'linalg', 'advlinalg', 'ra',
  'calc1', 'calc_lib_art', 'calc_easy',
  'crypto', 'koblitz', 'coding',
  'islr', 'west_graphs', 'wm', 'numbers-geometry', 'ross-prob', 'intro-discrete',
  'rudin', 'df', 'euler-intro',
  // Geometry & History
  'euclid', 'gauss', 'four_pillars', 'thales', 'mom',
  // Economics & Philosophy
  'human_action', 'man_econ_state', 'road_to_serfdom', 'atlas_shrugged',
  // Bitcoin & Special
  'only-the-strong-survive', 'orange_btc', 'mod-race', 'bfi',
  // History of Mathematics
  'math_history',
  // Other
  'template',
] as const;

/**
 * Type guard to check if a string is a valid CourseId
 */
export function isValidCourseId(value: string): value is CourseId {
  return VALID_COURSE_IDS.includes(value as CourseId);
}
