import type { QuizQuestion } from './types';

export const section16Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The chromatic polynomial $P(G, k)$ counts:',
    options: [
      'The number of edges using $k$ colors',
      'The number of proper $k$-colorings',
      'The chromatic number',
      'The number of cliques of size $k$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$P(G, k)$ = number of ways to properly color $G$ with at most $k$ colors.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The chromatic polynomial of $K_n$ is:',
    options: [
      '$k^n$',
      '$k(k-1)^{n-1}$',
      '$k(k-1)(k-2)\\cdots(k-n+1)$',
      '$(k-1)^n$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'For $K_n$: first vertex gets $k$ choices, second $k-1$, ..., giving $k(k-1)\\cdots(k-n+1)$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The deletion-contraction formula for chromatic polynomials is:',
    options: [
      '$P(G) = P(G-e) + P(G/e)$',
      '$P(G) = P(G-e) - P(G/e)$',
      '$P(G) = P(G-e) \\cdot P(G/e)$',
      '$P(G) = P(G-e) / P(G/e)$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For edge $e$: $P(G, k) = P(G-e, k) - P(G/e, k)$ (delete minus contract).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A chordal graph is one where:',
    options: [
      'Every vertex is in a triangle',
      'Every cycle of length $\\geq 4$ has a chord',
      'It has no triangles',
      'It is planar'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Chordal = every cycle of length 4 or more has a chord (edge between non-consecutive vertices).',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'What is $P(C_4, 3)$ (3-colorings of the 4-cycle)?',
    correctAnswer: 18,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'hard',
    explanation: '$P(C_n, k) = (k-1)^n + (-1)^n(k-1)$. For $C_4$: $(3-1)^4 + (3-1) = 16 + 2 = 18$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'A graph is perfect if for every induced subgraph $H$:',
    options: [
      '$\\chi(H) = \\Delta(H)$',
      '$\\chi(H) = \\omega(H)$',
      '$\\chi(H) = |V(H)|$',
      '$H$ is bipartite'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Perfect: $\\chi(H) = \\omega(H)$ for every induced subgraph $H$.',
  },
];
