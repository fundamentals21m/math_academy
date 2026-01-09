import type { QuizQuestion } from './types';

export const section14Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The lattice of subgroups of a group $G$ is ordered by:',
    options: [
      'Group order $|H|$',
      'Inclusion $H \\subseteq K$',
      'Normality',
      'Index $[G:H]$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The subgroup lattice is partially ordered by inclusion: $H \\leq K$ means $H \\subseteq K$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In the subgroup lattice, the meet (greatest lower bound) of two subgroups $H$ and $K$ is:',
    options: [
      '$H \\cup K$',
      '$H \\cap K$',
      '$\\langle H, K \\rangle$',
      '$HK$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The meet is $H \\cap K$, the largest subgroup contained in both $H$ and $K$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In the subgroup lattice, the join (least upper bound) of two subgroups $H$ and $K$ is:',
    options: [
      '$H \\cup K$',
      '$H \\cap K$',
      '$\\langle H, K \\rangle$',
      '$H + K$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The join is $\\langle H, K \\rangle$, the smallest subgroup containing both $H$ and $K$.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'How many subgroups does $\\mathbb{Z}/6\\mathbb{Z}$ have?',
    correctAnswer: 4,
    numericRange: { min: 1, max: 20, precision: 0 },
    difficulty: 'medium',
    explanation: 'The divisors of 6 are 1, 2, 3, 6. For each divisor $d$, there is exactly one subgroup of order $d$. So there are 4 subgroups.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In the lattice of subgroups of $\\mathbb{Z}/12\\mathbb{Z}$, which subgroup is directly above $\\langle 6 \\rangle$ (order 2)?',
    options: [
      '$\\langle 4 \\rangle$ (order 3)',
      '$\\langle 3 \\rangle$ (order 4)',
      '$\\langle 2 \\rangle$ (order 6)',
      'Both $\\langle 4 \\rangle$ and $\\langle 2 \\rangle$'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'A subgroup $H$ is directly above $K$ if $K \\subset H$ with no subgroups between them. $\\langle 6 \\rangle \\subset \\langle 2 \\rangle$ (since $6 = 3 \\cdot 2$), and $[\\langle 2 \\rangle : \\langle 6 \\rangle] = 3$ is prime.',
  },
];
