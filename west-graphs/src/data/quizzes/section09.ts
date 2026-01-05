import type { QuizQuestion } from './types';

export const section09Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'An augmenting path with respect to a matching $M$ is:',
    options: [
      'Any path in the graph',
      'An $M$-alternating path between two $M$-unsaturated vertices',
      'A path of maximum length',
      'A path using only edges in $M$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'An augmenting path alternates between non-matching and matching edges, with unmatched endpoints.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Hungarian algorithm finds:',
    options: [
      'Shortest paths in weighted graphs',
      'Maximum weighted matching in bipartite graphs',
      'Minimum spanning trees',
      'Graph colorings'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Hungarian algorithm solves the assignment problem: maximum weight matching in bipartite graphs.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Berge\'s Theorem states that a matching $M$ is maximum iff:',
    options: [
      'It is a perfect matching',
      'There is no $M$-augmenting path',
      'All vertices have degree at least 1',
      'The graph is bipartite'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Berge\'s Theorem: $M$ is maximum $\\Leftrightarrow$ no augmenting path exists.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In the stable marriage problem, Gale-Shapley produces:',
    options: [
      'A matching maximizing total preference',
      'A stable matching (no blocking pairs)',
      'A random matching',
      'The unique optimal matching'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Gale-Shapley produces a stable matching: no unmatched pair would prefer each other over current partners.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The time complexity of the Hopcroft-Karp algorithm for maximum bipartite matching is:',
    options: [
      '$O(n^2)$',
      '$O(m \\sqrt{n})$',
      '$O(n^3)$',
      '$O(m \\cdot n)$'
    ],
    correctIndex: 1,
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
      'A spanning tree'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'An SDR for sets $S_1, \\ldots, S_n$ exists iff the bipartite graph (sets vs elements) has a matching saturating all sets.',
  },
];
