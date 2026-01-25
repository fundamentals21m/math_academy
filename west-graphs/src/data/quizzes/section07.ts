import type { QuizQuestion } from './types';

export const section07Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Kruskal\'s algorithm for minimum spanning tree works by:',
    options: [
      'Adding edges in order of increasing weight, avoiding cycles',
      'Starting from a root and adding nearest vertices',
      'Removing edges in order of decreasing weight',
      'Using matrix multiplication',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Kruskal\'s algorithm sorts edges by weight and greedily adds them if they don\'t create a cycle.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Prim\'s algorithm for MST differs from Kruskal\'s by:',
    options: [
      'Using depth-first search',
      'Processing edges in decreasing weight order',
      'Finding the longest path',
      'Growing a single tree from a starting vertex',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Prim\'s algorithm grows a single tree, always adding the minimum-weight edge connecting the tree to a new vertex.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The greedy algorithm gives an optimal solution for MST because:',
    options: [
      'Trees are always optimal',
      'The matroid structure of spanning trees allows greedy optimization',
      'The graph is connected',
      'Edge weights are always positive',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Graphic matroids (forests as independent sets) satisfy the greedy algorithm optimality property.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A shortest path tree rooted at $s$ contains:',
    options: [
      'All edges of minimum weight',
      'The minimum number of edges possible',
      'A shortest path from $s$ to every other vertex',
      'Only edges of weight 1',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'An SPT rooted at $s$ gives shortest paths from $s$ to all vertices simultaneously.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Dijkstra\'s algorithm requires:',
    options: [
      'Non-negative edge weights',
      'Negative edge weights',
      'All edge weights equal',
      'A directed acyclic graph',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Dijkstra\'s algorithm requires non-negative weights. For negative weights, use Bellman-Ford.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The time complexity of Kruskal\'s algorithm with union-find is:',
    options: [
      '$O(n^2)$',
      '$O(m \\log n)$',
      '$O(m \\log m)$',
      '$O(n^3)$'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Sorting edges takes $O(m \\log m)$; union-find operations are nearly $O(m)$ with path compression.',
  },
];
