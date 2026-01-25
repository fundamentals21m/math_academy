import type { QuizQuestion } from './types';

export const section09Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'An augmenting path with respect to a matching $M$ is:',
    options: [
      'Any path in the graph',
      'A path of maximum length',
      'An $M$-alternating path between two $M$-unsaturated vertices',
      'A path using only edges in $M
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'An augmenting path alternates between non-matching and matching edges, with unmatched endpoints.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'An augmenting path alternates between non-matching and matching edges, with unmatched endpoints.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Hungarian algorithm finds:',
    options: [
      'Shortest paths in weighted graphs',
      'Minimum spanning trees',
      'Maximum weighted matching in bipartite graphs',
      'Graph colorings',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Hungarian algorithm solves the assignment problem: maximum weight matching in bipartite graphs.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Berge\'s Theorem states that a matching $M$ is maximum iff:',
    options: [
      'It is a perfect matching',
      'All vertices have degree at least 1',
      'The graph is bipartite',
      'There is no $M$-augmenting path',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Berge\'s Theorem: $M$ is maximum $\\Leftrightarrow$ no augmenting path exists.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In the stable marriage problem, Gale-Shapley produces:',
    options: [
      'A stable matching (no blocking pairs)',
      'A matching maximizing total preference',
      'The unique optimal matching',
      'A random matching',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Gale-Shapley produces a stable matching: no unmatched pair would prefer each other over current partners.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The time complexity of the Hopcroft-Karp algorithm for maximum bipartite matching is:',
    options: [
      '$O(n^2)
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Hopcroft-Karp achieves $O(m\\sqrt{n})$ by finding maximal sets of shortest augmenting paths.',
  },
      '$O(n^3)
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Hopcroft-Karp achieves $O(m\\sqrt{n})$ by finding maximal sets of shortest augmenting paths.',
  },
      '$O(m \\sqrt{n})
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Hopcroft-Karp achieves $O(m\\sqrt{n})$ by finding maximal sets of shortest augmenting paths.',
  },
      '$O(m \\cdot n)
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Hopcroft-Karp achieves $O(m\\sqrt{n})$ by finding maximal sets of shortest augmenting paths.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Hopcroft-Karp achieves $O(m\\sqrt{n})$ by finding maximal sets of shortest augmenting paths.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'A transversal (system of distinct representatives) corresponds to:',
    options: [
      'A vertex cover',
      'A matching in a bipartite graph',
      'A Hamiltonian path',
      'A spanning tree',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'An SDR for sets $S_1, \\ldots, S_n$ exists iff the bipartite graph (sets vs elements) has a matching saturating all sets.',
  },
];
