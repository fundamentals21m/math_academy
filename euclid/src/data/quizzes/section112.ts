import type { QuizQuestion } from './types';

export const section112Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What famous ratio does IV.10 construct?',
    options: [
      'The golden ratio (φ ≈ 1.618)',
      'The ratio 2:1',
      'The ratio π:1',
      'The ratio √2:1'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'IV.10 constructs the "extreme and mean ratio," now called the golden ratio, where the whole is to the larger part as the larger part is to the smaller.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What are the angles of the isosceles triangle constructed in IV.10?',
    options: [
      '60°, 60°, 60°',
      '45°, 45°, 90°',
      '30°, 60°, 90°',
      '36°, 72°, 72°',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The "golden triangle" has a 36° angle at the apex and two 72° base angles. Each base angle is double the apex angle.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why is IV.10 essential for constructing a regular pentagon?',
    options: [
      'The pentagon requires the 72° angle',
      'The golden ratio appears in pentagon diagonals',
      'All of the above',
      'The 36° angle is one-tenth of a full rotation'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The 36° angle is 1/10 of 360°, the golden ratio is the ratio of diagonal to side in a pentagon, and 72° angles are needed. IV.10 provides all these elements.',
  },
];
