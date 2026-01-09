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
import { section07Questions } from './section07';
import { section08Questions } from './section08';
import { section09Questions } from './section09';
import { section10Questions } from './section10';
import { section11Questions } from './section11';
import { section12Questions } from './section12';
import { section13Questions } from './section13';
import { section14Questions } from './section14';
import { section15Questions } from './section15';
import { section16Questions } from './section16';
import { section17Questions } from './section17';
import { section18Questions } from './section18';
import { section19Questions } from './section19';

const quizMap: Record<number, QuizQuestion[]> = {
  0: section00Questions,
  1: section01Questions,
  2: section02Questions,
  3: section03Questions,
  4: section04Questions,
  5: section05Questions,
  6: section06Questions,
  7: section07Questions,
  8: section08Questions,
  9: section09Questions,
  10: section10Questions,
  11: section11Questions,
  12: section12Questions,
  13: section13Questions,
  14: section14Questions,
  15: section15Questions,
  16: section16Questions,
  17: section17Questions,
  18: section18Questions,
  19: section19Questions,
};

export function getQuizQuestions(sectionId: number): QuizQuestion[] | null {
  return quizMap[sectionId] ?? null;
}

export default quizMap;
