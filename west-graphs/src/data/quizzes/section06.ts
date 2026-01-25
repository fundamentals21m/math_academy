import type { QuizQuestion } from './types';

export const section06Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A spanning tree of a connected graph $G$ is:',
    options: [
      'Any subgraph that is a tree',
      'The unique shortest path tree',
      'A tree with maximum number of edges',
      'A tree subgraph containing all vertices of $G
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A spanning tree is a subgraph that is a tree and includes every vertex of $G$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A spanning tree is a subgraph that is a tree and includes every vertex of $G$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Cayley\'s Formula states that the number of labeled trees on $n$ vertices is:',
    options: [
      '$n!$',
      '$2^n$',
      '$n^{n-2}$',
      '$\\binom{2n-2}{n-1}$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Cayley\'s Formula: there are exactly $n^{n-2}$ labeled trees on $n$ vertices.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'How many labeled trees are there on 4 vertices?',
    correctAnswer: 16,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: 'By Cayley\'s Formula: $4^{4-2} = 4^2 = 16$ labeled trees on 4 vertices.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The Matrix Tree Theorem computes the number of spanning trees using:',
    options: [
      'The determinant of the adjacency matrix',
      'The determinant of a cofactor of the Laplacian matrix',
      'The eigenvalues of the incidence matrix',
      'The trace of the adjacency matrix',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Matrix Tree Theorem: $\\tau(G)$ equals any cofactor of the Laplacian $L = D - A$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A Prüfer sequence for a labeled tree on $n$ vertices has length:',
    options: [
      '$n - 2$',
      '$n - 1$',
      '$n$',
      '$2n - 2$'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Prüfer sequences have length $n-2$. The bijection with $[n]^{n-2}$ proves Cayley\'s formula.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'How many spanning trees does the cycle $C_n$ have? If $n=5$, how many?',
    correctAnswer: 5,
    numericRange: { min: 0, max: 20, precision: 0 },
    difficulty: 'hard',
    explanation: '$C_n$ has exactly $n$ spanning trees (remove any one of the $n$ edges).',
  },
];
