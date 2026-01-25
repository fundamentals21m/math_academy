import type { QuizQuestion } from './types';

export const section157Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition VI.12 shows how to find what given three straight lines?',
    options: [
      'A line parallel to all three',
      'The geometric mean of the three',
      'A fourth proportional to the three lines',
      'A line bisecting all three',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'VI.12 constructs a fourth line X such that if the given lines are A, B, C, then A:B = C:X.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If lines of length 2, 3, and 6 are given, what is the fourth proportional?',
    options: [
      '4',
      '12',
      '18',
      '9',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'If 2:3 = 6:X, then X = (3 × 6)/2 = 9. The fourth proportional maintains the ratio.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The construction in VI.12 uses which key technique?',
    options: [
      'Drawing a circle through three points',
      'Constructing parallel lines to create similar triangles',
      'Bisecting an angle',
      'Drawing perpendicular lines'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'VI.12 arranges the three given lines and uses a parallel line. By VI.2, parallels cut proportional segments, yielding the fourth proportional.',
  },
];
