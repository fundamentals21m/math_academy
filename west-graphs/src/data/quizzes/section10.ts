import type { QuizQuestion } from './types';

export const section10Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Tutte\'s Theorem characterizes graphs with perfect matchings using:',
    options: [
      'The number of edges',
      'The chromatic number',
      'The maximum degree',
      'The number of odd components after removing any vertex set',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Tutte\'s condition: $G$ has a perfect matching iff $o(G-S) \\leq |S|$ for all $S \\subseteq V$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'An $f$-factor of a graph is:',
    options: [
      'A subgraph where each vertex has degree exactly $f
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'An $f$-factor is a spanning subgraph where each vertex $v$ has degree exactly $f(v)$.',
  },
      'A subgraph with $f$ edges',
      'A spanning subgraph where vertex $v$ has degree $f(v)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'An $f$-factor is a spanning subgraph where each vertex $v$ has degree exactly $f(v)$.',
  },
      'A collection of $f$ edge-disjoint matchings',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'An $f$-factor is a spanning subgraph where each vertex $v$ has degree exactly $f(v)$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A 1-factor is the same as:',
    options: [
      'A Hamiltonian path',
      'A perfect matching',
      'A spanning tree',
      'A vertex cover',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A 1-factor is a spanning subgraph with all degrees equal to 1, which is exactly a perfect matching.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Edmonds\' blossom algorithm handles:',
    options: [
      'General graphs by shrinking odd cycles',
      'Only bipartite graphs',
      'Only regular graphs',
      'Only planar graphs',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The blossom algorithm contracts odd cycles (blossoms) to find augmenting paths in general graphs.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The deficiency of a graph $G$ is:',
    options: [
      '$|V| - 2\\nu(G)
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Deficiency $= n - 2\\nu(G)$ = number of vertices not covered by maximum matching.',
  },
      'The number of isolated vertices',
      '$|E| - |V|
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Deficiency $= n - 2\\nu(G)$ = number of vertices not covered by maximum matching.',
  },
      'The minimum degree',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Deficiency $= n - 2\\nu(G)$ = number of vertices not covered by maximum matching.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Petersen\'s Theorem states that every:',
    options: [
      '2-connected graph has a Hamiltonian path',
      'Bipartite graph has a perfect matching',
      'Bridgeless cubic graph has a perfect matching',
      'Planar graph is 4-colorable',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Petersen: every bridgeless (2-edge-connected) 3-regular graph has a perfect matching.',
  },
];
