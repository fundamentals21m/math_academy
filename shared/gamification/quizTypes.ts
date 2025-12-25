import type { Difficulty } from './types';

/**
 * Standardized quiz question type definition
 * Used across all section quizzes in all courses
 */
export interface QuizQuestion {
  id: string | number;
  question: string;
  options: string[];
  correctIndex: number;  // Index of the correct answer in options array
  difficulty: Difficulty;
  explanation?: string;
}

/**
 * Type for section quiz exports
 */
export type SectionQuestions = QuizQuestion[];
