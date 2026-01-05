import type { QuizQuestion } from './types';

export const section11Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A cut vertex (articulation point) is:',
    options: [
      'A vertex of maximum degree',
      'A vertex whose removal increases the number of components',
      'A vertex in a minimum vertex cover',
      'A vertex of degree 1'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A cut vertex is one whose deletion disconnects the graph (increases component count).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A bridge in a graph is:',
    options: [
      'An edge in every spanning tree',
      'An edge whose removal disconnects the graph',
      'An edge between two cut vertices',
      'The shortest edge'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A bridge (cut edge) is an edge whose deletion increases the number of components.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The vertex connectivity $\\kappa(G)$ is:',
    options: [
      'The minimum number of vertices to remove to disconnect $G$',
      'The number of cut vertices',
      'The maximum degree',
      'The number of components'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\kappa(G)$ is the minimum size of a vertex cut (or $n-1$ if $G = K_n$).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For any graph $G$: $\\kappa(G) \\leq \\kappa\'(G) \\leq \\delta(G)$. What are $\\kappa\'$ and $\\delta$?',
    options: [
      'Edge connectivity and average degree',
      'Edge connectivity and minimum degree',
      'Chromatic number and maximum degree',
      'Independence number and minimum degree'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\kappa\' =$ edge connectivity, $\\delta =$ minimum degree. Whitney\'s inequality.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A block of a graph is:',
    options: [
      'A connected component',
      'A maximal 2-connected subgraph or bridge or isolated vertex',
      'A clique',
      'A bipartite subgraph'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Blocks are the maximal subgraphs with no cut vertex. They partition the edges.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Tarjan\'s algorithm finds:',
    options: [
      'Shortest paths',
      'Strongly connected components in linear time',
      'Maximum matchings',
      'Chromatic numbers'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Tarjan\'s DFS-based algorithm finds SCCs (and blocks) in $O(n+m)$ time.',
  },
];
