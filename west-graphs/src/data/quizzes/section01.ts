import type { QuizQuestion } from './types';

export const section01Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A graph $G$ consists of a vertex set $V(G)$ and an edge set $E(G)$. What is true about a simple graph?',
    options: [
      'It has no loops or multiple edges',
      'It can have loops and multiple edges',
      'It must be connected',
      'It must have at least 3 vertices',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A simple graph has no loops (edges from a vertex to itself) and no multiple edges (more than one edge between the same pair of vertices).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The complete graph $K_n$ has how many edges?',
    options: [
      '$n
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'In $K_n$, every pair of distinct vertices is connected by an edge. There are $\\binom{n}{2}$ ways to choose 2 vertices from $n$.',
  },
      '$\\binom{n}{2} = \\frac{n(n-1)}{2}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'In $K_n$, every pair of distinct vertices is connected by an edge. There are $\\binom{n}{2}$ ways to choose 2 vertices from $n$.',
  },
      '$n^2
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'In $K_n$, every pair of distinct vertices is connected by an edge. There are $\\binom{n}{2}$ ways to choose 2 vertices from $n$.',
  },
      '$2^n
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'In $K_n$, every pair of distinct vertices is connected by an edge. There are $\\binom{n}{2}$ ways to choose 2 vertices from $n$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'In $K_n$, every pair of distinct vertices is connected by an edge. There are $\\binom{n}{2}$ ways to choose 2 vertices from $n$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Two graphs $G$ and $H$ are isomorphic if and only if:',
    options: [
      'There exists a bijection $f: V(G) \\to V(H)$ preserving adjacency',
      'They have the same number of vertices',
      'They have the same number of edges',
      'They have the same maximum degree',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Graph isomorphism requires a bijection between vertex sets that preserves the edge relation: $uv \\in E(G)$ iff $f(u)f(v) \\in E(H)$.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'How many edges does the complete graph $K_5$ have?',
    correctAnswer: 10,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: '$K_5$ has $\\binom{5}{2} = \\frac{5 \\cdot 4}{2} = 10$ edges.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The complete bipartite graph $K_{3,4}$ has how many edges?',
    options: [
      '$7
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$K_{m,n}$ has $m \\cdot n$ edges. So $K_{3,4}$ has $3 \\times 4 = 12$ edges.',
  },
      '$21
    correctIndex: 0,
    difficulty: 'hard',
    explanation: '$K_{m,n}$ has $m \\cdot n$ edges. So $K_{3,4}$ has $3 \\times 4 = 12$ edges.',
  },
      '$12
    correctIndex: 0,
    difficulty: 'hard',
    explanation: '$K_{m,n}$ has $m \\cdot n$ edges. So $K_{3,4}$ has $3 \\times 4 = 12$ edges.',
  },
      '$24
    correctIndex: 0,
    difficulty: 'hard',
    explanation: '$K_{m,n}$ has $m \\cdot n$ edges. So $K_{3,4}$ has $3 \\times 4 = 12$ edges.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: '$K_{m,n}$ has $m \\cdot n$ edges. So $K_{3,4}$ has $3 \\times 4 = 12$ edges.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Which statement about graph complements is TRUE?',
    options: [
      'The complement of $K_n$ is $K_n
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The complement $\\overline{G}$ has an edge $uv$ iff $uv \\notin E(G)$. Since $K_n$ has all possible edges, $\\overline{K_n}$ has no edges.',
  },
      'The complement of $K_n$ has $\\binom{n}{2}$ edges',
      '$G$ and $\\overline{G}$ always have the same number of edges',
      'The complement of $K_n$ is the empty graph $\\overline{K_n}
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The complement $\\overline{G}$ has an edge $uv$ iff $uv \\notin E(G)$. Since $K_n$ has all possible edges, $\\overline{K_n}$ has no edges.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The complement $\\overline{G}$ has an edge $uv$ iff $uv \\notin E(G)$. Since $K_n$ has all possible edges, $\\overline{K_n}$ has no edges.',
  },
];
