import type { QuizQuestion } from './types';

export const section28Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'numeric',
    question: 'How many groups of order 4 are there (up to isomorphism)?',
    correctAnswer: 2,
    numericRange: { min: 1, max: 10, precision: 0 },
    difficulty: 'easy',
    explanation: 'There are 2 groups of order 4: $\\mathbb{Z}_4$ (cyclic) and $\\mathbb{Z}_2 \\times \\mathbb{Z}_2$ (Klein four-group).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Every group of order $p$ (prime) is:',
    options: [
      'Non-abelian',
      'Simple but not cyclic',
      'A direct product',
      'Cyclic (isomorphic to $\\mathbb{Z}_p$)',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'By Lagrange, the only subgroups have order 1 or $p$. Any $g \\neq e$ generates $G$, so $G \\cong \\mathbb{Z}_p$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Every group of order $p^2$ (p prime) is:',
    options: [
      'Abelian',
      'Cyclic',
      'Non-abelian',
      'Simple',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Groups of order $p^2$ are abelian: either $\\mathbb{Z}_{p^2}$ or $\\mathbb{Z}_p \\times \\mathbb{Z}_p$. (The center is nontrivial by the class equation.)',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'How many groups of order 6 are there (up to isomorphism)?',
    correctAnswer: 2,
    numericRange: { min: 1, max: 10, precision: 0 },
    difficulty: 'medium',
    explanation: 'Order 6: $\\mathbb{Z}_6$ (abelian/cyclic) and $S_3 \\cong D_6$ (non-abelian). So 2 groups.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A group of order 15 is:',
    options: [
      'Always non-abelian',
      'Either cyclic or isomorphic to $\\mathbb{Z}_3 \\times \\mathbb{Z}_5
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$15 = 3 \\cdot 5$. By Sylow, $n_3 | 5$ and $n_3 \\equiv 1 \\pmod 3$, so $n_3 = 1$. Similarly $n_5 = 1$. Both Sylow subgroups are normal, and $G \\cong \\mathbb{Z}_3 \\times \\mathbb{Z}_5 \\cong \\mathbb{Z}_{15}$.',
  },
      'Simple',
      'Always cyclic',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$15 = 3 \\cdot 5$. By Sylow, $n_3 | 5$ and $n_3 \\equiv 1 \\pmod 3$, so $n_3 = 1$. Similarly $n_5 = 1$. Both Sylow subgroups are normal, and $G \\cong \\mathbb{Z}_3 \\times \\mathbb{Z}_5 \\cong \\mathbb{Z}_{15}$.',
  },
];
