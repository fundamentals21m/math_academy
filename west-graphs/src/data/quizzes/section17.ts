import type { QuizQuestion } from './types';

export const section17Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A planar graph is one that:',
    options: [
      'Has at most 4 vertices',
      'Can be drawn in the plane without edge crossings',
      'Has no cycles',
      'Is bipartite',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A planar graph admits a plane embedding (drawing with no edge crossings).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Euler\'s Formula for connected plane graphs states:',
    options: [
      '$n + m = f
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Euler\'s Formula: $n - m + f = 2$ where $n$ = vertices, $m$ = edges, $f$ = faces.',
  },
      '$n + m + f = 2
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Euler\'s Formula: $n - m + f = 2$ where $n$ = vertices, $m$ = edges, $f$ = faces.',
  },
      '$n \\cdot m = f
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Euler\'s Formula: $n - m + f = 2$ where $n$ = vertices, $m$ = edges, $f$ = faces.',
  },
      '$n - m + f = 2
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Euler\'s Formula: $n - m + f = 2$ where $n$ = vertices, $m$ = edges, $f$ = faces.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Euler\'s Formula: $n - m + f = 2$ where $n$ = vertices, $m$ = edges, $f$ = faces.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'A connected plane graph has 6 vertices and 9 edges. How many faces?',
    correctAnswer: 5,
    numericRange: { min: 0, max: 20, precision: 0 },
    difficulty: 'medium',
    explanation: 'By Euler: $f = 2 - n + m = 2 - 6 + 9 = 5$ faces.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The dual graph $G^*$ of a plane graph $G$ has:',
    options: [
      'A vertex for each face of $G$ and edges crossing $G$\\'s edges',
      'Complementary edges to $G
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The dual has one vertex per face of $G$; two dual vertices are adjacent if the faces share an edge.',
  },
      'The same vertices as $G
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The dual has one vertex per face of $G$; two dual vertices are adjacent if the faces share an edge.',
  },
      'Twice as many edges as $G
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The dual has one vertex per face of $G$; two dual vertices are adjacent if the faces share an edge.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The dual has one vertex per face of $G$; two dual vertices are adjacent if the faces share an edge.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A simple planar graph with $n \\geq 3$ vertices has at most:',
    options: [
      '$n$ edges',
      '$2n - 4$ edges',
      '$n^2$ edges',
      '$3n - 6$ edges',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'From Euler + each face bounded by $\\geq 3$ edges: $m \\leq 3n - 6$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'If $G$ is planar and triangle-free, then:',
    options: [
      '$m \\leq n - 1
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Triangle-free means each face has $\\geq 4$ edges, giving $m \\leq 2n - 4$.',
  },
      '$m \\leq 2n - 4
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Triangle-free means each face has $\\geq 4$ edges, giving $m \\leq 2n - 4$.',
  },
      '$m \\leq 3n - 6
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Triangle-free means each face has $\\geq 4$ edges, giving $m \\leq 2n - 4$.',
  },
      '$m \\leq 4n - 8
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Triangle-free means each face has $\\geq 4$ edges, giving $m \\leq 2n - 4$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Triangle-free means each face has $\\geq 4$ edges, giving $m \\leq 2n - 4$.',
  },
];
