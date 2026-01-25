import type { QuizQuestion } from './types';

export const section14Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A transposition is a cycle of length:',
    options: [
      '2',
      '1',
      '3',
      'Any length',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A transposition is a 2-cycle, swapping exactly two elements.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How many transpositions are needed to write a $k$-cycle?',
    options: [
      '$k
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A $k$-cycle can be written as a product of $k - 1$ transpositions.',
  },
      '$k - 1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A $k$-cycle can be written as a product of $k - 1$ transpositions.',
  },
      '$k + 1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A $k$-cycle can be written as a product of $k - 1$ transpositions.',
  },
      '$2k
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A $k$-cycle can be written as a product of $k - 1$ transpositions.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A $k$-cycle can be written as a product of $k - 1$ transpositions.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The sign of a 4-cycle is:',
    options: [
      '+1 (even)',
      '-1 (odd)',
      '0',
      'It depends on the specific elements',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A $k$-cycle has sign $(-1)^{k-1}$. For $k=4$: $(-1)^3 = -1$ (odd).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The alternating group $A_n$ consists of:',
    options: [
      'All permutations in $S_n
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$A_n = \\{\\sigma \\in S_n : \\text{sgn}(\\sigma) = +1\\}$, the even permutations.',
  },
      'Only transpositions',
      'All odd permutations',
      'All even permutations',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$A_n = \\{\\sigma \\in S_n : \\text{sgn}(\\sigma) = +1\\}$, the even permutations.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is $|A_4|$?',
    options: [
      '4',
      '6',
      '24',
      '12',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$|A_n| = n!/2$, so $|A_4| = 24/2 = 12$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'If $\\text{sgn}(\\sigma) = -1$ and $\\text{sgn}(\\tau) = -1$, what is $\\text{sgn}(\\sigma\\tau)$?',
    options: [
      '-1',
      '0',
      '+1',
      'Cannot determine',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Sign is multiplicative: $\\text{sgn}(\\sigma\\tau) = \\text{sgn}(\\sigma) \\cdot \\text{sgn}(\\tau) = (-1)(-1) = +1$.',
  },
];
