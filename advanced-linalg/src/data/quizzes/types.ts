/**
 * Quiz types - Re-exported from shared module
 */
export type { QuizQuestion, SectionQuestions, Difficulty } from '@magic-internet-math/shared';

/**
 * Quiz data structure with questions organized by difficulty
 */
export interface DifficultyQuizData {
  easy: import('@magic-internet-math/shared').QuizQuestion[];
  medium: import('@magic-internet-math/shared').QuizQuestion[];
  hard: import('@magic-internet-math/shared').QuizQuestion[];
}
