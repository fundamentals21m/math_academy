import type { QuizQuestion } from './types';

export const section12Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A graph is $k$-connected if:',
    options: [
      'It has at least $k$ vertices',
      'Every vertex has degree at least $k
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$k$-connected means $\\kappa(G) \\geq k$: removing fewer than $k$ vertices leaves the graph connected.',
  },
      'It has $k$ components',
      'It remains connected after removing any $k-1$ vertices',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$k$-connected means $\\kappa(G) \\geq k$: removing fewer than $k$ vertices leaves the graph connected.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Menger\'s Theorem (vertex version) states that the maximum number of internally disjoint $u$-$v$ paths equals:',
    options: [
      'The degree of $u
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Menger: max internally disjoint paths = min vertex cut size separating $u$ from $v$.',
  },
      'The minimum size of a $u$-$v$ vertex cut',
      '$\\kappa(G)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Menger: max internally disjoint paths = min vertex cut size separating $u$ from $v$.',
  },
      'The distance from $u$ to $v
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Menger: max internally disjoint paths = min vertex cut size separating $u$ from $v$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Menger: max internally disjoint paths = min vertex cut size separating $u$ from $v$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'An ear decomposition of a 2-connected graph starts with:',
    options: [
      'A spanning tree',
      'A single vertex',
      'A cycle',
      'A matching',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Ear decomposition starts with a cycle, then adds \"ears\" (paths connecting existing vertices).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Whitney\'s Theorem states that $G$ is 2-connected iff:',
    options: [
      'It has no cut vertices',
      'It has a Hamiltonian cycle',
      'Every pair of edges lies on a common cycle',
      'It is planar',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Whitney: 2-connected $\\Leftrightarrow$ every two edges lie on a common cycle.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'What is the vertex connectivity $\\kappa(K_5)$?',
    correctAnswer: 4,
    numericRange: { min: 0, max: 10, precision: 0 },
    difficulty: 'hard',
    explanation: 'In $K_n$, any $n-1$ vertices can be removed while keeping it connected, so $\\kappa(K_n) = n-1$. Thus $\\kappa(K_5) = 4$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The edge version of Menger\'s Theorem relates to:',
    options: [
      'Edge-disjoint paths and edge cuts',
      'Vertex connectivity',
      'Matchings',
      'Chromatic number',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Edge Menger: max edge-disjoint paths = min edge cut size.',
  },
];
