/**
 * Quiz Map - Maps section IDs to their quiz questions
 * This allows LessonLayout to automatically load quizzes
 */

import type { QuizQuestion } from './types';

import { section00Questions } from './section00';
import { section01Questions } from './section01';
import { section02Questions } from './section02';
import { section03Questions } from './section03';
import { section04Questions } from './section04';
import { section05Questions } from './section05';
import { section06Questions } from './section06';

const quizMap: Record<number, QuizQuestion[]> = {
  0: section00Questions,
  1: section01Questions,
  2: section02Questions,
  3: section03Questions,
  4: section04Questions,
  5: section05Questions,
  6: section06Questions,
};

export function getQuizQuestions(sectionId: number): QuizQuestion[] | null {
  return quizMap[sectionId] ?? null;
}

export default quizMap;
