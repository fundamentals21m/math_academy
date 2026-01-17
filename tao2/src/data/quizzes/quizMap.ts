/**
 * Quiz Map - Maps section IDs to their quiz questions
 * This allows LessonLayout to automatically load quizzes
 */

import type { QuizQuestion } from './types';

// Chapter 12: Metric Spaces (Sections 0-4)
import { section00Questions } from './section00';
import { section01Questions } from './section01';
import { section02Questions } from './section02';
import { section03Questions } from './section03';
import { section04Questions } from './section04';

// Chapter 13: Continuous Functions on Metric Spaces (Sections 5-9)
import { section05Questions } from './section05';
import { section06Questions } from './section06';
import { section07Questions } from './section07';
import { section08Questions } from './section08';
import { section09Questions } from './section09';

// Chapter 14: Uniform Convergence (Sections 10-17)
import { section10Questions } from './section10';
import { section11Questions } from './section11';
import { section12Questions } from './section12';
import { section13Questions } from './section13';
import { section14Questions } from './section14';
import { section15Questions } from './section15';
import { section16Questions } from './section16';
import { section17Questions } from './section17';

// Chapter 15: Power Series (Sections 18-24)
import { section18Questions } from './section18';
import { section19Questions } from './section19';
import { section20Questions } from './section20';
import { section21Questions } from './section21';
import { section22Questions } from './section22';
import { section23Questions } from './section23';
import { section24Questions } from './section24';

// Chapter 16: Fourier Series (Sections 25-29)
import { section25Questions } from './section25';
import { section26Questions } from './section26';
import { section27Questions } from './section27';
import { section28Questions } from './section28';
import { section29Questions } from './section29';

// Chapter 17: Several Variable Differential Calculus (Sections 30-37)
import { section30Questions } from './section30';
import { section31Questions } from './section31';
import { section32Questions } from './section32';
import { section33Questions } from './section33';
import { section34Questions } from './section34';
import { section35Questions } from './section35';
import { section36Questions } from './section36';
import { section37Questions } from './section37';

// Chapter 18: Lebesgue Measure (Sections 38-42)
import { section38Questions } from './section38';
import { section39Questions } from './section39';
import { section40Questions } from './section40';
import { section41Questions } from './section41';
import { section42Questions } from './section42';

// Chapter 19: Lebesgue Integration (Sections 43-47)
import { section43Questions } from './section43';
import { section44Questions } from './section44';
import { section45Questions } from './section45';
import { section46Questions } from './section46';
import { section47Questions } from './section47';

const quizMap: Record<number, QuizQuestion[]> = {
  // Chapter 12: Metric Spaces
  0: section00Questions,
  1: section01Questions,
  2: section02Questions,
  3: section03Questions,
  4: section04Questions,

  // Chapter 13: Continuous Functions on Metric Spaces
  5: section05Questions,
  6: section06Questions,
  7: section07Questions,
  8: section08Questions,
  9: section09Questions,

  // Chapter 14: Uniform Convergence
  10: section10Questions,
  11: section11Questions,
  12: section12Questions,
  13: section13Questions,
  14: section14Questions,
  15: section15Questions,
  16: section16Questions,
  17: section17Questions,

  // Chapter 15: Power Series
  18: section18Questions,
  19: section19Questions,
  20: section20Questions,
  21: section21Questions,
  22: section22Questions,
  23: section23Questions,
  24: section24Questions,

  // Chapter 16: Fourier Series
  25: section25Questions,
  26: section26Questions,
  27: section27Questions,
  28: section28Questions,
  29: section29Questions,

  // Chapter 17: Several Variable Differential Calculus
  30: section30Questions,
  31: section31Questions,
  32: section32Questions,
  33: section33Questions,
  34: section34Questions,
  35: section35Questions,
  36: section36Questions,
  37: section37Questions,

  // Chapter 18: Lebesgue Measure
  38: section38Questions,
  39: section39Questions,
  40: section40Questions,
  41: section41Questions,
  42: section42Questions,

  // Chapter 19: Lebesgue Integration
  43: section43Questions,
  44: section44Questions,
  45: section45Questions,
  46: section46Questions,
  47: section47Questions,
};

export function getQuizQuestions(sectionId: number): QuizQuestion[] | null {
  return quizMap[sectionId] ?? null;
}

export default quizMap;
