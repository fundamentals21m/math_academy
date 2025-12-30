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

// Example: Uncomment and add as you create more sections
// export { section01Questions } from './section01';
// export { section02Questions } from './section02';
// ... etc

// =============================================================================
// QUIZ MAP - Maps section IDs to their quiz questions
// =============================================================================

export const quizMap: Record<number, QuizQuestion[]> = {
  0: section00Questions,
  // Add more sections here as quizzes are created
  // 1: section01Questions,
  // 2: section02Questions,
};
