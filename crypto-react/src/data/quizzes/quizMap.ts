/**
 * Quiz Map - Maps section IDs to their quiz questions
 * This allows LessonLayout to automatically load quizzes
 *
 * Note: Section 00 uses flat array format, sections 01-12 use structured format.
 */

import type { QuizQuestion } from './types';

import { section00Questions } from './section00';
import { section01Quiz } from './section01';
import { section02Quiz } from './section02';
import { section03Quiz } from './section03';
import { section04Quiz } from './section04';
import { section05Quiz } from './section05';
import { section06Quiz } from './section06';
import { section07Quiz } from './section07';
import { section08Quiz } from './section08';
import { section09Quiz } from './section09';
import { section10Quiz } from './section10';
import { section11Quiz } from './section11';
import { section12Quiz } from './section12';

// Type for structured quiz data
interface StructuredQuiz {
  easy: QuizQuestion[];
  medium: QuizQuestion[];
  hard: QuizQuestion[];
}

// Flatten a structured quiz into a single array
function flattenQuiz(quiz: StructuredQuiz): QuizQuestion[] {
  return [...quiz.easy, ...quiz.medium, ...quiz.hard];
}

const structuredQuizMap: Record<number, StructuredQuiz> = {
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
export function getStructuredQuiz(sectionId: number): StructuredQuiz | null {
  return structuredQuizMap[sectionId] ?? null;
}

export default structuredQuizMap;
