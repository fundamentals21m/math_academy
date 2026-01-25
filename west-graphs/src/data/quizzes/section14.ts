import type { QuizQuestion } from './types';

export const section14Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The chromatic number $\\chi(G)$ is:',
    options: [
      'The number of edges',
      'The minimum colors needed to properly color vertices',
      'The maximum degree plus one',
      'The number of components',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\chi(G)$ is the minimum $k$ such that $G$ has a proper $k$-coloring (adjacent vertices get different colors).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A graph is bipartite if and only if:',
    options: [
      '$\\chi(G) = 1
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Bipartite $\\Leftrightarrow$ 2-colorable $\\Leftrightarrow$ no odd cycles.',
  },
      '$\\chi(G) \\leq 2
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Bipartite $\\Leftrightarrow$ 2-colorable $\\Leftrightarrow$ no odd cycles.',
  },
      '$\\chi(G) = 3
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Bipartite $\\Leftrightarrow$ 2-colorable $\\Leftrightarrow$ no odd cycles.',
  },
      'It has an even number of vertices',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Bipartite $\\Leftrightarrow$ 2-colorable $\\Leftrightarrow$ no odd cycles.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The greedy coloring algorithm colors vertices using at most:',
    options: [
      '$\\chi(G)$ colors',
      '$\\Delta(G)$ colors',
      '$n$ colors',
      '$\\Delta(G) + 1$ colors',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Greedy uses at most $\\Delta + 1$ colors (at each step, at most $\\Delta$ colors are forbidden).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Brooks\' Theorem states that $\\chi(G) \\leq \\Delta(G)$ unless:',
    options: [
      '$G$ is bipartite',
      '$G$ is planar',
      '$G$ is a complete graph or odd cycle',
      '$G$ is a tree',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Brooks: $\\chi(G) \\leq \\Delta$ for connected graphs except $K_n$ and odd cycles.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'What is $\\chi(K_6)$?',
    correctAnswer: 6,
    numericRange: { min: 0, max: 20, precision: 0 },
    difficulty: 'hard',
    explanation: '$K_n$ requires $n$ colors since every pair of vertices is adjacent.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The clique number $\\omega(G)$ satisfies:',
    options: [
      '$\\omega(G) = \\chi(G)$ always',
      '$\\omega(G) \\geq \\chi(G)$ always',
      '$\\omega(G) \\leq \\chi(G)$ always',
      '$\\omega(G) = \\Delta(G)
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'A clique of size $k$ needs $k$ colors, so $\\omega(G) \\leq \\chi(G)$. Equality holds for perfect graphs.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'A clique of size $k$ needs $k$ colors, so $\\omega(G) \\leq \\chi(G)$. Equality holds for perfect graphs.',
  },
];
