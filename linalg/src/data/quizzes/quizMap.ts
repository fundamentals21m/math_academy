/**
 * Quiz Map - Maps section IDs to their quiz questions
 * This allows LessonLayout to automatically load quizzes
 *
 * This course uses chapter-based quizzes that map to sections.
 * Uses the existing getSectionQuiz function from index.ts.
 */

import type { QuizQuestion } from '@shared/gamification';
import { getSectionQuiz } from './index';

// Type for structured quiz data
interface StructuredQuiz {
  easy?: QuizQuestion[];
  medium?: QuizQuestion[];
  hard?: QuizQuestion[];
}

// Flatten a structured quiz into a single array
function flattenQuiz(quiz: QuizQuestion[] | StructuredQuiz | undefined): QuizQuestion[] | null {
  if (!quiz) return null;

  // Check if it's already a flat array
  if (Array.isArray(quiz)) {
    return quiz;
  }

  // Handle structured format with easy/medium/hard
  const structured = quiz as StructuredQuiz;
  return [
    ...(structured.easy || []),
    ...(structured.medium || []),
    ...(structured.hard || []),
  ];
}

export function getQuizQuestions(sectionId: number): QuizQuestion[] | null {
  const quiz = getSectionQuiz(sectionId);
  return flattenQuiz(quiz);
}

export default { getQuizQuestions };
