import type { QuizQuestion } from './types';

export const section61Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition II.12 is the geometric form of which modern formula?',
    options: [
      'Pythagorean theorem',
      'Law of cosines for obtuse triangles',
      'Law of sines',
      'Heron\'s formula'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'II.12 proves the law of cosines for obtuse triangles: c² = a² + b² + 2ab·cos(180° - C).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In II.12, why must the perpendicular be drawn to the side produced (extended)?',
    options: [
      'To use the Pythagorean theorem',
      'Because the angle is obtuse, so the foot falls outside the triangle',
      'To apply II.4',
      'To create a rectangle'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When an angle is obtuse, the perpendicular from the opposite vertex falls outside the triangle, requiring the side to be extended.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Compared to the Pythagorean theorem (I.47), in II.12 the square on the side opposite the obtuse angle is:',
    options: [
      'Equal to the sum of the other squares',
      'Less than the sum of the other squares',
      'Greater than the sum of the other squares',
      'Unrelated to the other squares'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'In an obtuse triangle, c² > a² + b², with the excess being twice the rectangle mentioned in II.12.',
  },
];
