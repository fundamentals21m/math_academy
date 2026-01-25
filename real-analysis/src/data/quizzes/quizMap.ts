/**
 * Quiz Map - Maps section IDs to their quiz questions
 * This allows LessonLayout to automatically load quizzes
 *
 * This course uses structured quizzes with { easy, medium, hard } format.
 * The getQuizQuestions function flattens these into a single array.
 */

import type { QuizQuestion } from './types';

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
import { section13Quiz } from './section13';
import { section14Quiz } from './section14';
import { section15Quiz } from './section15';

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

const quizMap: Record<number, StructuredQuiz> = {
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
  13: section13Quiz,
  14: section14Quiz,
  15: section15Quiz,
};

export function getQuizQuestions(sectionId: number): QuizQuestion[] | null {
  const quiz = quizMap[sectionId];
  if (!quiz) return null;
  return flattenQuiz(quiz);
}

// Also export the structured version for components that need it
export function getStructuredQuiz(sectionId: number): StructuredQuiz | null {
  return quizMap[sectionId] ?? null;
}

export default quizMap;
