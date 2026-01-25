import type { QuizQuestion } from './types';

export const section111Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In IV.9, how is the center of the circumscribed circle found?',
    options: [
      'By bisecting the sides',
      'By drawing tangent lines',
      'By finding the intersection of the diagonals',
      'By constructing perpendicular bisectors',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The diagonals of a square bisect each other at the center. This center is equidistant from all four vertices.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If a square has side length s, what is the radius of its circumscribed circle?',
    options: [
      's/2',
      's√2/2',
      's',
      's√2',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The circumscribed circle\'s radius is half the diagonal. The diagonal is s√2, so the radius is s√2/2.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Do the inscribed and circumscribed circles of a square share the same center?',
    options: [
      'Yes, both are centered at the square\\'s center',
      'No, they have different centers',
      'It depends on the side length',
      'Only for special squares',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Both the inscribed and circumscribed circles of a square share the same center—the center of the square (intersection of diagonals).',
  },
];
