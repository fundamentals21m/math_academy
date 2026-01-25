import type { QuizQuestion } from './types';

export const section19Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How many non-isomorphic groups of order 4 are there?',
    options: [
      '1',
      '3',
      '4',
      '2',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'There are exactly two: $\\mathbb{Z}_4$ (cyclic) and $V_4$ (Klein four-group).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Klein four-group $V_4$ is characterized by:',
    options: [
      'Having an element of order 4',
      'Being non-abelian',
      'Every non-identity element has order 2',
      'Being cyclic',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'In $V_4$, every non-identity element has order 2, making it non-cyclic but abelian.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The smallest non-abelian group is:',
    options: [
      '$S_3
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$S_3$ with 6 elements is the smallest non-abelian group.',
  },
      '$\\mathbb{Z}_6
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$S_3$ with 6 elements is the smallest non-abelian group.',
  },
      '$S_2
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$S_3$ with 6 elements is the smallest non-abelian group.',
  },
      '$V_4
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$S_3$ with 6 elements is the smallest non-abelian group.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$S_3$ with 6 elements is the smallest non-abelian group.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'How many non-isomorphic groups of order 6 are there?',
    options: [
      '1',
      '2',
      '3',
      '6',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'There are two: $\\mathbb{Z}_6$ (cyclic, abelian) and $S_3$ (non-abelian).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A group of prime order is always:',
    options: [
      'Non-abelian',
      'The trivial group',
      'Cyclic and abelian',
      'Isomorphic to $S_3
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Groups of prime order are cyclic (hence abelian) and unique up to isomorphism.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Groups of prime order are cyclic (hence abelian) and unique up to isomorphism.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: '$\\mathbb{Z}_4$ and $V_4$ can be distinguished because:',
    options: [
      '$\\mathbb{Z}_4$ has an element of order 4, $V_4$ does not',
      '$\\mathbb{Z}_4$ is not abelian',
      '$V_4$ is cyclic',
      'They have different orders',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\mathbb{Z}_4$ has elements of order 4 (generators), while the maximum order in $V_4$ is 2.',
  },
];
