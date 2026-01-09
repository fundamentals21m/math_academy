import type { QuizQuestion } from './types';

export const section90Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Wedderburn\'s theorem states that every semisimple ring is isomorphic to:',
    options: [
      'A field',
      'A polynomial ring',
      'A finite product of matrix rings over division rings',
      'A group ring'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Wedderburn-Artin: Every semisimple ring is isomorphic to $\\prod_{i=1}^r M_{n_i}(D_i)$ where each $D_i$ is a division ring.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A ring $R$ is semisimple if and only if:',
    options: [
      'Every ideal is principal',
      'Every $R$-module is projective',
      '$R$ is a field',
      'Every $R$-module is injective'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A ring is semisimple if and only if every module is projective, equivalently if every module is injective, equivalently if every module is a direct sum of simple modules.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The group algebra $\\mathbb{C}S_3$ decomposes as:',
    options: [
      '$\\mathbb{C}^6$',
      '$\\mathbb{C} \\times \\mathbb{C} \\times M_2(\\mathbb{C})$',
      '$M_3(\\mathbb{C}) \\times M_3(\\mathbb{C})$',
      '$\\mathbb{C}^3 \\times M_3(\\mathbb{C})$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$S_3$ has three irreducible representations: trivial (dim $1$), sign (dim $1$), and standard (dim $2$). By Wedderburn, $\\mathbb{C}S_3 \\cong \\mathbb{C} \\times \\mathbb{C} \\times M_2(\\mathbb{C})$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The number of simple components in the Wedderburn decomposition of $\\mathbb{C}G$ equals:',
    options: [
      '$|G|$',
      'The number of elements of order $2$ in $G$',
      'The number of conjugacy classes in $G$',
      '$1$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The number of simple components equals the number of irreducible representations, which equals the number of conjugacy classes of $G$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For the cyclic group $C_n = \\langle g \\rangle$, $\\mathbb{C}C_n \\cong$:',
    options: [
      '$\\mathbb{C}[x]/(x^n - 1)$',
      '$\\mathbb{C}^n$',
      'Both A and B (they are isomorphic)',
      '$M_n(\\mathbb{C})$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$\\mathbb{C}C_n \\cong \\mathbb{C}[x]/(x^n - 1) \\cong \\prod_{d|n} \\mathbb{C}[x]/(\\Phi_d(x)) \\cong \\mathbb{C}^n$ since $x^n - 1$ splits into $n$ distinct linear factors over $\\mathbb{C}$.',
  },
];
