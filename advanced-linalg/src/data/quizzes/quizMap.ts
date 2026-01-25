/**
 * Quiz Map - Maps section IDs to their quiz questions
 * This allows LessonLayout to automatically load quizzes
 *
 * Note: Section 00 uses flat array format, sections 01-12 use structured format.
 * The section exports from index.ts already map chapters to section numbers.
 */

import type { QuizQuestion, DifficultyQuizData } from './types';

import { section00Questions } from './section00';
import {
  section01Quiz,
  section02Quiz,
  section03Quiz,
  section04Quiz,
  section05Quiz,
  section06Quiz,
  section07Quiz,
  section08Quiz,
  section09Quiz,
  section10Quiz,
  section11Quiz,
  section12Quiz,
} from './index';

// Flatten a structured quiz into a single array
function flattenQuiz(quiz: DifficultyQuizData): QuizQuestion[] {
  return [...quiz.easy, ...quiz.medium, ...quiz.hard];
}

const structuredQuizMap: Record<number, DifficultyQuizData> = {
  1: section01Quiz,
  2: section02Quiz,
  3: section03Quiz,
  4: section04Quiz,
  5: section05Quiz,
  6: section06Quiz,
  7: section07Quiz,
  8: section08Quiz,
  9: section09Quiz,
  10: section10Quiz,
  11: section11Quiz,
  12: section12Quiz,
};

export function getQuizQuestions(sectionId: number): QuizQuestion[] | null {
  // Section 0 uses flat array format
  if (sectionId === 0) {
    return section00Questions;
  }

  // Other sections use structured format
  const quiz = structuredQuizMap[sectionId];
  if (!quiz) return null;
  return flattenQuiz(quiz);
}

// Also export the structured version for components that need it
export function getStructuredQuiz(sectionId: number): DifficultyQuizData | null {
  return structuredQuizMap[sectionId] ?? null;
}

export default structuredQuizMap;
