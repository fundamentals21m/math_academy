import type { QuizQuestion } from './types';

export const section52Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The tensor product $M \\otimes_R N$ of $R$-modules is characterized by:',
    options: [
      'Direct sum of $M$ and $N$',
      'Universal property for bilinear maps from $M \\times N$',
      'The set of all pairs $(m, n)$',
      'The intersection $M \\cap N$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$M \\otimes_R N$ is defined by a universal property: bilinear maps $M \\times N \\to P$ correspond bijectively to linear maps $M \\otimes_R N \\to P$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For vector spaces over a field $F$, $\\dim(V \\otimes_F W) = $',
    options: [
      '$\\dim(V) + \\dim(W)$',
      '$\\dim(V) \\cdot \\dim(W)$',
      '$\\max(\\dim(V), \\dim(W))$',
      '$\\min(\\dim(V), \\dim(W))$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'For finite-dimensional vector spaces, $\\dim(V \\otimes W) = \\dim(V) \\cdot \\dim(W)$. If $\\{v_i\\}$ and $\\{w_j\\}$ are bases, then $\\{v_i \\otimes w_j\\}$ is a basis of $V \\otimes W$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In $M \\otimes_R N$, the basic relation is:',
    options: [
      '$m \\otimes n = n \\otimes m$',
      '$(rm) \\otimes n = m \\otimes (rn)$ for $r \\in R$',
      '$m \\otimes n = 0$ always',
      '$m \\otimes n = m + n$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The tensor product satisfies $(rm) \\otimes n = m \\otimes (rn)$ and bilinearity: $(m_1 + m_2) \\otimes n = m_1 \\otimes n + m_2 \\otimes n$ and $m \\otimes (n_1 + n_2) = m \\otimes n_1 + m \\otimes n_2$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: '$\\mathbb{Z}_2 \\otimes_{\\mathbb{Z}} \\mathbb{Z}_3 = $',
    options: [
      '$\\mathbb{Z}_6$',
      '$\\mathbb{Z}_2 \\oplus \\mathbb{Z}_3$',
      '$0$ (the zero module)',
      '$\\mathbb{Z}$'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$\\mathbb{Z}_2 \\otimes_{\\mathbb{Z}} \\mathbb{Z}_3 = 0$ because for any $a \\otimes b$: $a \\otimes b = a \\otimes (3b) = (3a) \\otimes b = 0 \\otimes b = 0$ since $3a = 0$ in $\\mathbb{Z}_2$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: '$R \\otimes_R M \\cong$',
    options: [
      '$R$',
      '$M$',
      '$R \\oplus M$',
      '$0$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The natural map $R \\otimes_R M \\to M$ given by $r \\otimes m \\mapsto rm$ is an isomorphism. So $R$ acts as an identity for tensor products.',
  },
];
