import type { QuizQuestion } from './types';

export const section27Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Fundamental Theorem of Finitely Generated Abelian Groups (FTFGAG) states that every finitely generated abelian group is isomorphic to:',
    options: [
      'A direct product of cyclic groups only',
      '$\\mathbb{Z}^r \\times \\mathbb{Z}_{n_1} \\times \\cdots \\times \\mathbb{Z}_{n_k}$ where $n_i | n_{i+1}$',
      'A free abelian group',
      'A finite group'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'FTFGAG: $G \\cong \\mathbb{Z}^r \\times \\mathbb{Z}_{n_1} \\times \\cdots \\times \\mathbb{Z}_{n_k}$ with $n_1 | n_2 | \\cdots | n_k$ (invariant factors).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The invariant factors of an abelian group are:',
    options: [
      'The orders of all elements',
      'A sequence $n_1 | n_2 | \\cdots | n_k$ giving $G \\cong \\mathbb{Z}_{n_1} \\times \\cdots \\times \\mathbb{Z}_{n_k}$',
      'The prime divisors of $|G|$',
      'The indices of maximal subgroups'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Invariant factors are the unique sequence $n_1 | n_2 | \\cdots | n_k$ (each divides the next) in the decomposition.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The elementary divisors of a finite abelian group are:',
    options: [
      'The same as invariant factors',
      'Prime powers $p^a$ giving $G \\cong \\prod \\mathbb{Z}_{p^{a_i}}$',
      'All prime divisors of $|G|$',
      'The orders of generators'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Elementary divisors are prime powers: $G \\cong \\mathbb{Z}_{p_1^{a_1}} \\times \\cdots \\times \\mathbb{Z}_{p_m^{a_m}}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'How many abelian groups of order 8 are there (up to isomorphism)?',
    options: ['$1$', '$2$', '$3$', '$4$'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$8 = 2^3$. Partitions of 3: $(3), (2,1), (1,1,1)$ give $\\mathbb{Z}_8$, $\\mathbb{Z}_4 \\times \\mathbb{Z}_2$, $\\mathbb{Z}_2^3$. So 3 groups.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'How many abelian groups of order 12 are there (up to isomorphism)?',
    correctAnswer: 2,
    numericRange: { min: 1, max: 20, precision: 0 },
    difficulty: 'medium',
    explanation: '$12 = 2^2 \\cdot 3$. For $2^2$: partitions $(2), (1,1)$. For $3$: partition $(1)$. Combinations: $2 \\times 1 = 2$ groups: $\\mathbb{Z}_{12}$ and $\\mathbb{Z}_6 \\times \\mathbb{Z}_2$.',
  },
];
