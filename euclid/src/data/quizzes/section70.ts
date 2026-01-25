import type { QuizQuestion } from './types';

export const section70Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition III.6 prove about internally tangent circles?',
    options: [
      'They have equal radii',
      'They cannot have the same center',
      'They share a common chord',
      'They have parallel tangent lines',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'III.6 proves that if one circle touches another internally, they cannot share the same center.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the difference between circles "touching" internally versus externally?',
    options: [
      'Internal touching means the circles intersect at two points',
      'There is no difference',
      'Internal touching means one circle is inside the other at the point of tangency',
      'External touching means the circles overlap',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Internal tangency means one circle lies inside the other and they share exactly one point. External tangency means the circles are outside each other and share one point.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For internally tangent circles, what is true about the distance between their centers?',
    options: [
      'It equals the absolute difference of the radii',
      'It equals the sum of the radii',
      'It equals zero (same center)',
      'It equals the product of the radii',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For internally tangent circles, the distance between centers equals |R - r|, the difference of the radii.',
  },
];
