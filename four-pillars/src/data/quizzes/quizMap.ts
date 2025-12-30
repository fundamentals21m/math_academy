/**
 * Quiz Map - Maps section IDs to their quiz questions
 * This allows LessonLayout to automatically load quizzes
 *
 * When adding new sections:
 * 1. Create a new sectionXX.ts file with questions
 * 2. Import it here
 * 3. Add it to the quizMap
 */

import type { QuizQuestion } from './types';

import { section00Questions } from './section00';
// Import additional sections as they are created:
// import { section01Questions } from './section01';
// import { section02Questions } from './section02';

const quizMap: Record<number, QuizQuestion[]> = {
  0: section00Questions,
  // Add additional sections as they are created:
  // 1: section01Questions,
  // 2: section02Questions,
};

export function getQuizQuestions(sectionId: number): QuizQuestion[] | null {
  return quizMap[sectionId] ?? null;
}

export default quizMap;
