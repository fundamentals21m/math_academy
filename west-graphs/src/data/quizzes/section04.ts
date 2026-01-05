import type { QuizQuestion } from './types';

export const section04Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In a directed graph (digraph), an arc from $u$ to $v$ contributes:',
    options: [
      '1 to the degree of both $u$ and $v$',
      '1 to the out-degree of $u$ and 1 to the in-degree of $v$',
      '1 to the in-degree of $u$ and 1 to the out-degree of $v$',
      '2 to the degree of $u$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'An arc $(u,v)$ goes out from $u$ (contributing to $d^+(u)$) and into $v$ (contributing to $d^-(v)$).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A tournament is:',
    options: [
      'A complete bipartite graph with orientation',
      'An orientation of a complete graph',
      'A directed cycle',
      'A directed tree'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A tournament is $K_n$ where each edge is oriented in exactly one direction (every pair of vertices has exactly one arc between them).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In any digraph $D$, the sum of all in-degrees equals:',
    options: [
      'The number of vertices',
      'The number of arcs',
      'The sum of all out-degrees',
      'Both the number of arcs and the sum of out-degrees'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Each arc contributes 1 to exactly one in-degree and one out-degree, so $\\sum d^-(v) = \\sum d^+(v) = |A|$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A digraph is strongly connected if:',
    options: [
      'The underlying undirected graph is connected',
      'There is a directed path from every vertex to every other vertex',
      'Every vertex has equal in-degree and out-degree',
      'It has a directed Hamiltonian path'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Strong connectivity requires a directed path between every ordered pair of vertices.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'A tournament on 5 vertices has how many arcs?',
    correctAnswer: 10,
    numericRange: { min: 0, max: 50, precision: 0 },
    difficulty: 'hard',
    explanation: 'A tournament orients $K_n$, which has $\\binom{n}{2}$ edges. So a tournament on 5 vertices has $\\binom{5}{2} = 10$ arcs.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Every tournament has:',
    options: [
      'A directed Hamiltonian cycle',
      'A directed Hamiltonian path',
      'A vertex with in-degree 0',
      'All vertices with equal in-degree'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Rédei\'s theorem: every tournament has a directed Hamiltonian path (vertices can be linearly ordered by the tournament).',
  },
];
