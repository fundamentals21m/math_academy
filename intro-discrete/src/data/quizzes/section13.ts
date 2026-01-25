import type { QuizQuestion } from './types';

export const section13Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A permutation of a set $X$ is:',
    options: [
      'Any function from $X$ to $X
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A permutation is a bijection (one-to-one and onto function) from a set to itself.',
  },
      'A bijection from $X$ to $X
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A permutation is a bijection (one-to-one and onto function) from a set to itself.',
  },
      'A subset of $X
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A permutation is a bijection (one-to-one and onto function) from a set to itself.',
  },
      'An equivalence relation on $X
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A permutation is a bijection (one-to-one and onto function) from a set to itself.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A permutation is a bijection (one-to-one and onto function) from a set to itself.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How many permutations are in $S_4$?',
    options: [
      '4',
      '8',
      '24',
      '16',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$|S_n| = n!$, so $|S_4| = 4! = 24$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The cycle $(1 \\, 3 \\, 4)$ in $S_5$ sends $3$ to:',
    options: [
      '4',
      '1',
      '3',
      '5',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'In the cycle $(1 \\, 3 \\, 4)$, we have $1 \\to 3 \\to 4 \\to 1$, so $3$ maps to $4$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'When computing $\\sigma\\tau$ (composition), which permutation is applied first?',
    options: [
      '$\\sigma
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'In $(\\sigma\\tau)(x) = \\sigma(\\tau(x))$, we apply $\\tau$ first, then $\\sigma$.',
  },
      '$\\tau
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'In $(\\sigma\\tau)(x) = \\sigma(\\tau(x))$, we apply $\\tau$ first, then $\\sigma$.',
  },
      'They are applied simultaneously',
      'It depends on the context',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'In $(\\sigma\\tau)(x) = \\sigma(\\tau(x))$, we apply $\\tau$ first, then $\\sigma$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the order of the permutation $(1 \\, 3)(2 \\, 4 \\, 5)$?',
    options: [
      '2',
      '6',
      '3',
      '5',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The order is the lcm of the cycle lengths: $\\text{lcm}(2, 3) = 6$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The inverse of the cycle $(1 \\, 2 \\, 3 \\, 4)$ is:',
    options: [
      '$(1 \\, 2 \\, 3 \\, 4)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The inverse of $(a_1 \\, a_2 \\, \\cdots \\, a_k)$ is $(a_k \\, \\cdots \\, a_2 \\, a_1)$.',
  },
      '$(1 \\, 4)(2 \\, 3)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The inverse of $(a_1 \\, a_2 \\, \\cdots \\, a_k)$ is $(a_k \\, \\cdots \\, a_2 \\, a_1)$.',
  },
      'The identity',
      '$(4 \\, 3 \\, 2 \\, 1)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The inverse of $(a_1 \\, a_2 \\, \\cdots \\, a_k)$ is $(a_k \\, \\cdots \\, a_2 \\, a_1)$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The inverse of $(a_1 \\, a_2 \\, \\cdots \\, a_k)$ is $(a_k \\, \\cdots \\, a_2 \\, a_1)$.',
  },
];
