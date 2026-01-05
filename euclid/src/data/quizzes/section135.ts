import type { QuizQuestion } from './types';

export const section135Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What transformation does "alternando" (V.16) perform?',
    options: [
      'If A:B = C:D, then (A+B):B = (C+D):D',
      'If A:B = C:D, then A:C = B:D',
      'If A:B = C:D, then A-B:B = C-D:D',
      'If A:B = C:D, then B:A = D:C'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Alternando swaps the means: from A:B = C:D to A:C = B:D (antecedent to antecedent, consequent to consequent).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For alternando to be valid, what requirement must be met?',
    options: [
      'A and B must be equal',
      'A and C must be magnitudes of the same kind',
      'All magnitudes must be integers',
      'No requirements'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Alternando requires A and C to be comparable (same kind) and B and D to be comparable. Otherwise A:C and B:D would be meaningless.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If 6:9 = 8:12 (both equal 2:3), what does alternando give?',
    options: [
      '6:8 = 9:12',
      '6:12 = 8:9',
      '15:9 = 20:12',
      '3:9 = 4:12'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'From A:B = C:D (6:9 = 8:12), alternando gives A:C = B:D, so 6:8 = 9:12 (both equal 3:4).',
  },
];
