import type { QuizQuestion } from './types';

export const section05Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'numeric',
    question: 'What is the order of the permutation $(1\\ 2\\ 3)(4\\ 5)$ in $S_5$?',
    correctAnswer: 6,
    numericRange: { min: 1, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: 'The order of a product of disjoint cycles is the lcm of their lengths. Here $\\text{lcm}(3, 2) = 6$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How is the permutation $\\sigma = \\begin{pmatrix} 1 & 2 & 3 & 4 \\\\ 2 & 4 & 1 & 3 \\end{pmatrix}$ written in cycle notation?',
    options: [
      '$(1\\ 2)(3\\ 4)$',
      '$(1\\ 2\\ 4\\ 3)$',
      '$(1\\ 2\\ 3\\ 4)$',
      '$(1\\ 3)(2\\ 4)$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Following the permutation: $1 \\to 2 \\to 4 \\to 3 \\to 1$. This is the 4-cycle $(1\\ 2\\ 4\\ 3)$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'How many elements are in $S_4$?',
    correctAnswer: 24,
    numericRange: { min: 1, max: 200, precision: 0 },
    difficulty: 'easy',
    explanation: '$|S_n| = n!$. So $|S_4| = 4! = 24$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A permutation is even if and only if it can be written as a product of:',
    options: [
      'An odd number of transpositions',
      'An even number of transpositions',
      'An even number of cycles',
      'An odd number of cycles'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A permutation is even if it can be written as a product of an even number of transpositions (2-cycles).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the sign (parity) of the 5-cycle $(1\\ 2\\ 3\\ 4\\ 5)$?',
    options: [
      'Even',
      'Odd',
      'Neither even nor odd',
      'Depends on the specific cycle'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'An $n$-cycle can be written as $n-1$ transpositions. A 5-cycle equals 4 transpositions, which is even. Generally, an $n$-cycle has sign $(-1)^{n-1}$.',
  },
];
