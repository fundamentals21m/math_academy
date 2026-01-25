import type { QuizQuestion } from './types';

export const section121Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does V.2 prove about adding magnitudes that are different multiples of the same bases?',
    options: [
      'They cannot be added',
      'Only equal multiples can be added',
      'The sums have different ratios',
      'mB + nB = (m+n)B and similarly for the other sequence',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'V.2 shows that if A = mB and E = nB, then A + E = (m+n)B. Different multiples of the same base add to give the sum of the multipliers.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How does V.2 extend V.1?',
    options: [
      'V.1 handles same multiples, V.2 handles different multiples of the same bases',
      'It contradicts V.1',
      'They prove the same thing',
      'V.2 is about subtraction, V.1 is about addition'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'V.1 deals with adding magnitudes that are the same multiple (all m times their bases). V.2 allows different multiples (m and n) of the same bases.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If A = 3B, C = 3D, E = 2B, and F = 2D, what is (A+E):(C+F)?',
    options: [
      '5:5',
      '5B:5D, which simplifies to B:D',
      '3:2',
      'It equals B:D',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A + E = 3B + 2B = 5B and C + F = 3D + 2D = 5D. So (A+E):(C+F) = 5B:5D = B:D.',
  },
];
