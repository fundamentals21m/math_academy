import type { QuizQuestion } from './types';

export const section26Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Erdős-Stone theorem determines the asymptotic extremal number for:',
    options: [
      'All graphs',
      'Non-bipartite graphs',
      'Only complete graphs',
      'Only cycles'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Erdős-Stone: $ex(n, H) = (1 - 1/(\\chi(H)-1) + o(1))\\binom{n}{2}$ for $\\chi(H) \\geq 2$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Wiener index of a connected graph is:',
    options: [
      'The number of edges',
      'The sum of all pairwise distances',
      'The diameter',
      'The chromatic number'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Wiener index $W(G) = \\sum_{\\{u,v\\}} d(u,v)$ over all vertex pairs.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Among $n$-vertex trees, the Wiener index is minimized by:',
    options: [
      'The path $P_n$',
      'The star $K_{1,n-1}$',
      'A random tree',
      'The binary tree'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Star minimizes Wiener index (center at distance 1 from all others).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The list chromatic number $ch(G)$ satisfies:',
    options: [
      '$ch(G) = \\chi(G)$ always',
      '$ch(G) \\geq \\chi(G)$ always',
      '$ch(G) \\leq \\chi(G)$ always',
      '$ch(G) = \\Delta(G)$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'List coloring is at least as hard as ordinary coloring: $ch(G) \\geq \\chi(G)$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The circumference $c(G)$ of a graph is:',
    options: [
      'The number of cycles',
      'The length of the longest cycle',
      'The girth',
      'The diameter'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Circumference is the maximum cycle length (0 if acyclic).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'For $K_{n,n}$, the list chromatic number is:',
    options: [
      '$2$',
      '$n$',
      '$(1+o(1))\\log_2 n$',
      '$n^2$'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$ch(K_{n,n}) \\approx \\log_2 n$, much larger than $\\chi(K_{n,n}) = 2$.',
  },
];
