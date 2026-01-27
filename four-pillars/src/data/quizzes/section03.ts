import type { QuizQuestion } from './types';

export const section03Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'To multiply and divide line segments, we first need:',
    options: [
      'A protractor',
      'Numerical coordinates',
      'A ruler with markings',
      'A unit length segment'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A chosen unit length 1 is required so that 1 · a = a for any length a.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'To construct the product ab geometrically, we use:',
    options: [
      'Similar triangles and parallel lines',
      'Circle intersection',
      'Angle bisection',
      'A calculator'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The construction uses a triangle with sides 1 and a, then parallel lines to extend to product ab.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The diagonal of the unit square has length:',
    options: [
      '1',
      '$\\sqrt{2}$',
      '2',
      '$\\sqrt{3}$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By the Pythagorean theorem: d² = 1² + 1² = 2, so d = √2.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The Pythagoreans proved that $\\sqrt{2}$ is:',
    options: [
      'A natural number',
      'A rational number m/n',
      'Irrational (not a ratio of integers)',
      'Negative'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'If √2 = m/n in lowest terms, then both m and n would be even—a contradiction.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The Greeks viewed the product of two lengths a and b as:',
    options: [
      'Another line segment',
      'A cube',
      'A numerical value',
      'A rectangle with sides a and b'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Greeks interpreted ab as the area of a rectangle, not a length. Descartes later changed this.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The discovery of irrational lengths showed that:',
    options: [
      'Geometry includes more than rational numbers',
      'Geometry is simpler than arithmetic',
      'All lengths are ratios of integers',
      'The Pythagorean theorem is false'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The diagonal of the unit square is constructible but irrational, expanding geometry beyond rationals.',
  },
];
