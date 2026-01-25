import type { QuizQuestion } from './types';

export const section75Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition III.11 prove about internally tangent circles?',
    options: [
      'They have parallel tangent lines',
      'They have the same radius',
      'The line joining their centers passes through the point of tangency',
      'They share a common chord',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'III.11 proves that when one circle touches another internally, the line joining their centers passes through the point of tangency.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For internally tangent circles, the point of tangency lies:',
    options: [
      'At the midpoint of the line of centers',
      'Outside the line of centers',
      'On the line of centers, with both centers on the same side',
      'Between the two centers',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For internal tangency, the point of tangency lies between the centers, on the line joining them.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The proof of III.11 uses contradiction. What false assumption leads to contradiction?',
    options: [
      'Assuming the line of centers does not pass through the tangent point',
      'Assuming the circles intersect at two points',
      'Assuming the circles are concentric',
      'Assuming the circles have equal radii',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Euclid assumes the line of centers does not pass through the point of tangency, then derives a contradiction.',
  },
];
