import type { QuizQuestion } from './types';

export const section03Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Handshaking Lemma states that:',
    options: [
      '$\\sum_{v \\in V} d(v) = |E|
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Each edge contributes 2 to the sum of degrees (one for each endpoint), so $\\sum d(v) = 2|E|$.',
  },
      '$\\sum_{v \\in V} d(v) = |V| + |E|
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Each edge contributes 2 to the sum of degrees (one for each endpoint), so $\\sum d(v) = 2|E|$.',
  },
      '$\\sum_{v \\in V} d(v) = 2|E|
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Each edge contributes 2 to the sum of degrees (one for each endpoint), so $\\sum d(v) = 2|E|$.',
  },
      '$\\sum_{v \\in V} d(v) = |V|
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Each edge contributes 2 to the sum of degrees (one for each endpoint), so $\\sum d(v) = 2|E|$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Each edge contributes 2 to the sum of degrees (one for each endpoint), so $\\sum d(v) = 2|E|$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In any graph, the number of vertices with odd degree is:',
    options: [
      'Always zero',
      'Always odd',
      'Could be any number',
      'Always even',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Since $\\sum d(v) = 2|E|$ is even, and odd numbers must pair up to sum to even, the count of odd-degree vertices must be even.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'A $k$-regular graph on $n$ vertices has how many edges? Express as $kn/2$. If $k=4$ and $n=10$, how many edges?',
    correctAnswer: 20,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: 'Sum of degrees $= kn$. By Handshaking Lemma, $|E| = kn/2 = (4)(10)/2 = 20$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A simple graph $G$ with $n$ vertices and $m$ edges satisfies:',
    options: [
      '$m \\leq \\binom{n}{2}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A simple graph has at most one edge per vertex pair. Maximum is $\\binom{n}{2} = n(n-1)/2$ edges (achieved by $K_n$).',
  },
      '$m \\leq n
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A simple graph has at most one edge per vertex pair. Maximum is $\\binom{n}{2} = n(n-1)/2$ edges (achieved by $K_n$).',
  },
      '$m \\leq n^2
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A simple graph has at most one edge per vertex pair. Maximum is $\\binom{n}{2} = n(n-1)/2$ edges (achieved by $K_n$).',
  },
      '$m \\leq n!
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A simple graph has at most one edge per vertex pair. Maximum is $\\binom{n}{2} = n(n-1)/2$ edges (achieved by $K_n$).',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A simple graph has at most one edge per vertex pair. Maximum is $\\binom{n}{2} = n(n-1)/2$ edges (achieved by $K_n$).',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'If a simple graph has 6 vertices and 15 edges, what is the degree of each vertex?',
    correctAnswer: 5,
    numericRange: { min: 0, max: 10, precision: 0 },
    difficulty: 'hard',
    explanation: '$\\binom{6}{2} = 15$, so this is $K_6$. In $K_n$, each vertex has degree $n-1 = 5$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'A degree sequence $(d_1, \\ldots, d_n)$ is graphic (realizable by a simple graph) if and only if:',
    options: [
      'All degrees are even',
      'All degrees are less than $n
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The Erdős-Gallai theorem gives necessary and sufficient conditions: sum is even, and certain inequalities involving partial sums hold.',
  },
      'The sequence is non-increasing',
      'The sum is even and satisfies Erdős-Gallai inequalities',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The Erdős-Gallai theorem gives necessary and sufficient conditions: sum is even, and certain inequalities involving partial sums hold.',
  },
];
