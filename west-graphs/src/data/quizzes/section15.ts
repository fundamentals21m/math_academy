import type { QuizQuestion } from './types';

export const section15Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Turán\'s Theorem gives the maximum edges in a graph with no:',
    options: [
      'Cycles',
      '$K_{r+1}$ subgraph',
      'Perfect matching',
      'Cut vertices'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Turán: $ex(n, K_{r+1})$ = max edges avoiding $(r+1)$-clique, achieved by $T(n,r)$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Turán graph $T(n,r)$ is:',
    options: [
      'The complete graph $K_n$',
      'A complete $r$-partite graph with parts as equal as possible',
      'A tree on $n$ vertices',
      'A cycle of length $n$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$T(n,r)$ is complete $r$-partite with part sizes differing by at most 1.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A graph is $k$-critical if:',
    options: [
      '$\\chi(G) = k$ and $G$ is connected',
      '$\\chi(G) = k$ and $\\chi(G-e) < k$ for every edge $e$',
      '$G$ has exactly $k$ edges',
      '$G$ is $k$-regular'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A $k$-critical graph has $\\chi(G) = k$ but every proper subgraph has smaller chromatic number.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In a $k$-critical graph, every vertex has degree at least:',
    options: [
      '$1$',
      '$k - 1$',
      '$k$',
      '$2k - 2$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'In a $k$-critical graph, $\\delta(G) \\geq k-1$ (removing low-degree vertex reduces chromatic number).',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'How many edges does $T(6, 2)$ (Turán graph avoiding triangles) have?',
    correctAnswer: 9,
    numericRange: { min: 0, max: 20, precision: 0 },
    difficulty: 'hard',
    explanation: '$T(6,2) = K_{3,3}$ (complete bipartite with equal parts). Edges: $3 \\times 3 = 9$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The degeneracy of a graph is:',
    options: [
      'The minimum degree',
      'The maximum $k$ such that every subgraph has a vertex of degree at most $k$',
      'The chromatic number minus one',
      'The connectivity'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Degeneracy $d$: every subgraph has a vertex of degree $\\leq d$. Implies $\\chi(G) \\leq d + 1$.',
  },
];
