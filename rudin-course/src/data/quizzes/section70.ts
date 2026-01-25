import type { QuizQuestion } from './types';

export const section70Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A partition of unity subordinate to an open cover $\\{U_\\alpha\\}$ of a set $K$ is:',
    options: [
      'A collection of functions $\\{\\psi_i\\}$ with $\\sum \\psi_i = 1$, each supported in some $U_\\alpha
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A partition of unity is a collection of non-negative smooth functions that sum to 1, with each function\'s support contained in one of the open sets of the cover.',
  },
      'A single function that equals 1 on $K
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A partition of unity is a collection of non-negative smooth functions that sum to 1, with each function\'s support contained in one of the open sets of the cover.',
  },
      'A division of $K$ into disjoint pieces',
      'A collection of characteristic functions',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A partition of unity is a collection of non-negative smooth functions that sum to 1, with each function\'s support contained in one of the open sets of the cover.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Partitions of unity exist for any open cover of a compact set $K$ in $\\mathbb{R}^n$ because:',
    options: [
      'Continuous functions can always be constructed',
      '$\\mathbb{R}^n$ is paracompact and smooth bump functions exist',
      '$K$ is finite',
      'The cover has only finitely many sets',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The existence relies on paracompactness (every open cover has a locally finite refinement) and the existence of smooth bump functions in $\\mathbb{R}^n$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A key property required of each function $\\psi_i$ in a smooth partition of unity is:',
    options: [
      '$\\psi_i$ takes only values 0 and 1',
      '$\\psi_i$ is linear',
      '$\\psi_i$ has compact support equal to $K
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Each $\\psi_i$ must be non-negative, smooth, and have compact support contained in one of the open sets. The functions sum to 1.',
  },
      '$\\psi_i \\geq 0$ and $\\psi_i \\in C^\\infty
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Each $\\psi_i$ must be non-negative, smooth, and have compact support contained in one of the open sets. The functions sum to 1.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Each $\\psi_i$ must be non-negative, smooth, and have compact support contained in one of the open sets. The functions sum to 1.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Partitions of unity are used in analysis to:',
    options: [
      'Prove the Mean Value Theorem',
      'Define the Riemann integral',
      'Construct polynomial approximations',
      'Localize problems and patch together local solutions',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Partitions of unity allow breaking a global problem into local pieces, solving locally, and combining solutions. They are essential in differential geometry and PDE theory.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $\\{\\psi_1, \\ldots, \\psi_N\\}$ is a partition of unity and $f$ is continuous on $K$, then:',
    options: [
      '$\\int_K f = \\sum_i \\int_K \\psi_i$',
      '$f = \\max_i \\psi_i f$',
      '$f = \\sum_{i=1}^N \\psi_i f$ on $K$',
      '$f$ must be smooth'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Since $\\sum \\psi_i = 1$, we have $f = f \\cdot 1 = f \\cdot \\sum \\psi_i = \\sum \\psi_i f$. This decomposes $f$ into pieces supported in each open set.',
  },
];
