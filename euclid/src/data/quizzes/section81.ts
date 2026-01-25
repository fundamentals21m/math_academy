import type { QuizQuestion } from './types';

export const section81Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition III.17 is a construction. What does it construct?',
    options: [
      'A circle through three points',
      'A tangent line from an external point to a circle',
      'A chord of given length',
      'The center of a circle',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'III.17 shows how to draw a tangent line from a point outside a circle to the circle.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How many tangent lines can be drawn from an external point to a circle?',
    options: [
      'One',
      'Three',
      'Two',
      'Infinitely many',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'From any external point, exactly two tangent lines can be drawn to a circle (one on each "side").',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The construction in III.17 uses what auxiliary circle?',
    options: [
      'A circle centered at the external point',
      'A circle tangent to the given circle',
      'No auxiliary circle is needed',
      'A circle with the line from external point to center as diameter',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'III.17 draws a circle with AE (external point to center) as diameter. Where this intersects the given circle gives the tangent points (by III.31).',
  },
];
