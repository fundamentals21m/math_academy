import type { QuizQuestion } from './types';

export const section74Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition III.10 concerns two circles that:',
    options: [
      'Are concentric',
      'Are tangent',
      'Cut (intersect) each other',
      'Are parallel',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'III.10 proves a limit on how many times two circles can intersect: they cannot cut each other at more than two points.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'According to III.10, two circles can cut each other at:',
    options: [
      'Zero, one, or two points',
      'Exactly two points only',
      'Any number of points',
      'At most two points',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'III.10 proves the maximum is two intersection points. Circles may also have 0 (disjoint) or 1 (tangent) points in common.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The proof of III.10 uses which earlier proposition?',
    options: [
      'III.5 (intersecting circles have different centers)',
      'III.1 (finding the center)',
      'I.47 (Pythagorean theorem)',
      'III.3 (perpendicular bisector)',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The proof relies on III.5, which states that intersecting circles cannot share the same center.',
  },
];
