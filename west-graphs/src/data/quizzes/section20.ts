import type { QuizQuestion } from './types';

export const section20Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The line graph $L(G)$ has:',
    options: [
      'Vertices for each edge of $G$, adjacent when edges share a vertex',
      'Vertices for each vertex of $G$',
      'The same number of edges as $G$',
      'Complementary edges to $G$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$L(G)$ has edges of $G$ as vertices; two are adjacent if the original edges share an endpoint.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The chromatic index $\\chi\'(G)$ is:',
    options: [
      'The vertex chromatic number',
      'The number of edges',
      'The minimum colors for proper edge-coloring',
      'The maximum degree',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$\\chi\'(G)$ = minimum colors to color edges so no two edges sharing a vertex have the same color.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Vizing\'s Theorem states that $\\chi\'(G)$ is either:',
    options: [
      '$\\Delta$ or $\\Delta - 1
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Vizing: $\\Delta(G) \\leq \\chi\'(G) \\leq \\Delta(G) + 1$ (Class 1 or Class 2 graphs).',
  },
      '$\\Delta$ exactly',
      '$2\\Delta
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Vizing: $\\Delta(G) \\leq \\chi\'(G) \\leq \\Delta(G) + 1$ (Class 1 or Class 2 graphs).',
  },
      '$\\Delta$ or $\\Delta + 1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Vizing: $\\Delta(G) \\leq \\chi\'(G) \\leq \\Delta(G) + 1$ (Class 1 or Class 2 graphs).',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Vizing: $\\Delta(G) \\leq \\chi\'(G) \\leq \\Delta(G) + 1$ (Class 1 or Class 2 graphs).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A graph $G$ is Class 1 if:',
    options: [
      '$\\chi\\'(G) = \\Delta(G) - 1
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Class 1: $\\chi\' = \\Delta$. Class 2: $\\chi\' = \\Delta + 1$.',
  },
      '$\\chi\\'(G) = \\Delta(G)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Class 1: $\\chi\' = \\Delta$. Class 2: $\\chi\' = \\Delta + 1$.',
  },
      '$\\chi\\'(G) = 2
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Class 1: $\\chi\' = \\Delta$. Class 2: $\\chi\' = \\Delta + 1$.',
  },
      '$\\chi\\'(G) = \\Delta(G) + 1
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Class 1: $\\chi\' = \\Delta$. Class 2: $\\chi\' = \\Delta + 1$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Class 1: $\\chi\' = \\Delta$. Class 2: $\\chi\' = \\Delta + 1$.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'What is $\\chi\'(K_5)$?',
    correctAnswer: 5,
    numericRange: { min: 0, max: 10, precision: 0 },
    difficulty: 'hard',
    explanation: '$K_n$ has $\\chi\' = n$ if $n$ odd (Class 2), $\\chi\' = n-1$ if $n$ even (Class 1). So $\\chi\'(K_5) = 5$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'For bipartite graphs, König\'s edge-coloring theorem states:',
    options: [
      '$\\chi\\'(G) = \\chi(G)
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Every bipartite graph is Class 1: $\\chi\' = \\Delta$.',
  },
      '$\\chi\\'(G) = \\Delta(G)
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Every bipartite graph is Class 1: $\\chi\' = \\Delta$.',
  },
      '$\\chi\\'(G) = 2
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Every bipartite graph is Class 1: $\\chi\' = \\Delta$.',
  },
      '$\\chi\\'(G) = n
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Every bipartite graph is Class 1: $\\chi\' = \\Delta$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Every bipartite graph is Class 1: $\\chi\' = \\Delta$.',
  },
];
