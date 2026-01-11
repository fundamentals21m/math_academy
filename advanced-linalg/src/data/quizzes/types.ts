/**
 * Quiz types - Re-exported from shared module
 */
export type { QuizQuestion, SectionQuestions, Difficulty } from '@shared/gamification';

/**
 * Quiz data structure with questions organized by difficulty
 */
export interface DifficultyQuizData {
  easy: import('@shared/gamification').QuizQuestion[];
  medium: import('@shared/gamification').QuizQuestion[];
  hard: import('@shared/gamification').QuizQuestion[];
}
