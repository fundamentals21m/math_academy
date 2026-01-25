import type { QuizQuestion } from './types';

export const section141Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What powerful result does V.22 (ex aequali, ordered) prove?',
    options: [
      'Ratios cannot be combined',
      'Only adjacent ratios can be compared',
      'All ratios are 1:1',
      'If A:B = D:E and B:C = E:F, then A:C = D:F',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Ex aequali allows us to "compose" ratios: chained proportions give a proportion relating first to last terms.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Ex aequali is like "multiplying" ratios because:',
    options: [
      'It increases all magnitudes',
      '(A:B) · (B:C) = A:C, eliminating the middle term B',
      'It doubles the ratio',
      'Ratios cannot be multiplied',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Just as (a/b) · (b/c) = a/c in fractions, ex aequali composes ratios by eliminating the common middle term.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If 2:3 and 3:5 are chained ratios, what is the ex aequali result?',
    options: [
      '5:2',
      '3:3',
      '2:5',
      '6:15',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A:B = 2:3 and B:C = 3:5 gives A:C = 2:5 by ex aequali (the 3s cancel).',
  },
];
