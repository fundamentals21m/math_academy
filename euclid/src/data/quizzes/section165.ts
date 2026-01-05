import type { QuizQuestion } from './types';

export const section165Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition VI.20 extends VI.19 from triangles to:',
    options: [
      'Circles',
      'Similar polygons in general',
      'Solid figures',
      'Curved shapes'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'VI.20 proves that all similar polygons (not just triangles) have areas in the duplicate ratio of corresponding sides.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The proof of VI.20 relies on:',
    options: [
      'Dividing polygons into similar triangles',
      'Circumscribing circles around the polygons',
      'Using the Pythagorean theorem',
      'Constructing parallel lines'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Similar polygons are divided into the same number of similar triangles. Since each pair of triangles has areas in duplicate ratio, so do the whole polygons.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A corollary to VI.20 states that if three lines are proportional, the ratio of similar figures on the first and third equals:',
    options: [
      'The ratio of the first to the second',
      'The ratio of the first to the third',
      'The duplicate ratio of the first to the second',
      'The square root of the first to the third'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'If A:B = B:C (continued proportion), then A:C = A^2:B^2 (duplicate ratio). Similar figures on A and C are in ratio A:C = duplicate of A:B.',
  },
];
