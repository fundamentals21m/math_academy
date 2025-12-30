/**
 * Quiz Questions Index
 *
 * Export all section quizzes from this file.
 * Add new exports as you create quiz files for each section.
 *
 * Usage in section components:
 *   import { quizMap } from '@/data/quizzes';
 *   <SectionQuiz sectionId={0} questions={quizMap[0] || []} />
 */

import type { QuizQuestion } from './types';

export type { QuizQuestion, SectionQuestions } from './types';

// =============================================================================
// SECTION QUIZ EXPORTS
// Add new section exports here as you create them
// =============================================================================

export { section00Questions } from './section00';
import { section00Questions } from './section00';

// Chapter 3: Coordinates (Sections 15-22)
export {
  section15Questions,
  section16Questions,
  section17Questions,
  section18Questions,
  section19Questions,
  section20Questions,
  section21Questions,
  section22Questions,
} from './chapter03';
import {
  section15Questions,
  section16Questions,
  section17Questions,
  section18Questions,
  section19Questions,
  section20Questions,
  section21Questions,
  section22Questions,
} from './chapter03';

// Chapter 4: Vectors and Euclidean Spaces (Sections 23-30)
export {
  section23Questions,
  section24Questions,
  section25Questions,
  section26Questions,
  section27Questions,
  section28Questions,
  section29Questions,
  section30Questions,
} from './chapter04';
import {
  section23Questions,
  section24Questions,
  section25Questions,
  section26Questions,
  section27Questions,
  section28Questions,
  section29Questions,
  section30Questions,
} from './chapter04';

// Chapter 5: Perspective (Sections 31-39)
export {
  section31Questions,
  section32Questions,
  section33Questions,
  section34Questions,
  section35Questions,
  section36Questions,
  section37Questions,
  section38Questions,
  section39Questions,
} from './chapter05';
import {
  section31Questions,
  section32Questions,
  section33Questions,
  section34Questions,
  section35Questions,
  section36Questions,
  section37Questions,
  section38Questions,
  section39Questions,
} from './chapter05';

// Chapter 6: Projective Planes (Sections 40-47)
export {
  section40Questions,
  section41Questions,
  section42Questions,
  section43Questions,
  section44Questions,
  section45Questions,
  section46Questions,
  section47Questions,
} from './chapter06';
import {
  section40Questions,
  section41Questions,
  section42Questions,
  section43Questions,
  section44Questions,
  section45Questions,
  section46Questions,
  section47Questions,
} from './chapter06';

// Chapter 7: Transformations (Sections 48-56)
export {
  section48Questions,
  section49Questions,
  section50Questions,
  section51Questions,
  section52Questions,
  section53Questions,
  section54Questions,
  section55Questions,
  section56Questions,
} from './chapter07';
import {
  section48Questions,
  section49Questions,
  section50Questions,
  section51Questions,
  section52Questions,
  section53Questions,
  section54Questions,
  section55Questions,
  section56Questions,
} from './chapter07';

// Chapter 8: Non-Euclidean Geometry (Sections 57-65)
export {
  section57Questions,
  section58Questions,
  section59Questions,
  section60Questions,
  section61Questions,
  section62Questions,
  section63Questions,
  section64Questions,
  section65Questions,
} from './chapter08';
import {
  section57Questions,
  section58Questions,
  section59Questions,
  section60Questions,
  section61Questions,
  section62Questions,
  section63Questions,
  section64Questions,
  section65Questions,
} from './chapter08';

// =============================================================================
// QUIZ MAP - Maps section IDs to their quiz questions
// =============================================================================

export const quizMap: Record<number, QuizQuestion[]> = {
  0: section00Questions,
  // Chapter 3: Coordinates
  15: section15Questions,
  16: section16Questions,
  17: section17Questions,
  18: section18Questions,
  19: section19Questions,
  20: section20Questions,
  21: section21Questions,
  22: section22Questions,
  // Chapter 4: Vectors and Euclidean Spaces
  23: section23Questions,
  24: section24Questions,
  25: section25Questions,
  26: section26Questions,
  27: section27Questions,
  28: section28Questions,
  29: section29Questions,
  30: section30Questions,
  // Chapter 5: Perspective
  31: section31Questions,
  32: section32Questions,
  33: section33Questions,
  34: section34Questions,
  35: section35Questions,
  36: section36Questions,
  37: section37Questions,
  38: section38Questions,
  39: section39Questions,
  // Chapter 6: Projective Planes
  40: section40Questions,
  41: section41Questions,
  42: section42Questions,
  43: section43Questions,
  44: section44Questions,
  45: section45Questions,
  46: section46Questions,
  47: section47Questions,
  // Chapter 7: Transformations
  48: section48Questions,
  49: section49Questions,
  50: section50Questions,
  51: section51Questions,
  52: section52Questions,
  53: section53Questions,
  54: section54Questions,
  55: section55Questions,
  56: section56Questions,
  // Chapter 8: Non-Euclidean Geometry
  57: section57Questions,
  58: section58Questions,
  59: section59Questions,
  60: section60Questions,
  61: section61Questions,
  62: section62Questions,
  63: section63Questions,
  64: section64Questions,
  65: section65Questions,
};
