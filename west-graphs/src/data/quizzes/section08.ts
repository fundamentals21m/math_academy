import type { QuizQuestion } from './types';

export const section08Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A matching in a graph is:',
    options: [
      'A set of adjacent vertices',
      'A set of vertices with no common edges',
      'A connected subgraph',
      'A set of edges with no common vertices',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A matching is a set of pairwise non-adjacent edges (no two share a vertex).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A perfect matching in a graph $G$ covers:',
    options: [
      'All edges of $G
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A perfect matching saturates (covers) every vertex of $G$.',
  },
      'Half the vertices of $G
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A perfect matching saturates (covers) every vertex of $G$.',
  },
      'All vertices of $G
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A perfect matching saturates (covers) every vertex of $G$.',
  },
      'All cycles of $G
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A perfect matching saturates (covers) every vertex of $G$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A perfect matching saturates (covers) every vertex of $G$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Hall\'s Theorem states that a bipartite graph $G$ with parts $X, Y$ has a matching saturating $X$ iff:',
    options: [
      '$|X| = |Y|
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Hall\'s condition: for every subset $S$ of $X$, the neighborhood $N(S)$ in $Y$ satisfies $|N(S)| \\geq |S|$.',
  },
      'Every vertex in $X$ has degree at least 1',
      'The graph is connected',
      '$|N(S)| \\geq |S|$ for all $S \\subseteq X
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Hall\'s condition: for every subset $S$ of $X$, the neighborhood $N(S)$ in $Y$ satisfies $|N(S)| \\geq |S|$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Hall\'s condition: for every subset $S$ of $X$, the neighborhood $N(S)$ in $Y$ satisfies $|N(S)| \\geq |S|$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A vertex cover is:',
    options: [
      'A set of vertices incident to every edge',
      'A spanning subgraph',
      'A set of edges incident to every vertex',
      'A dominating set',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A vertex cover is a set $S$ such that every edge has at least one endpoint in $S$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'König\'s Theorem states that in bipartite graphs:',
    options: [
      'Maximum matching equals minimum edge cover',
      'Every vertex cover is a matching',
      'Maximum matching equals minimum vertex cover',
      'Chromatic number equals 2',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'König-Egerváry: in bipartite graphs, $\\nu(G) = \\tau(G)$ (max matching = min vertex cover).',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'In $K_{3,3}$, what is the size of a maximum matching?',
    correctAnswer: 3,
    numericRange: { min: 0, max: 10, precision: 0 },
    difficulty: 'hard',
    explanation: '$K_{3,3}$ is a bipartite graph with 3 vertices on each side. A perfect matching exists, matching all 3 pairs.',
  },
];
