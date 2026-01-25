import type { QuizQuestion } from './types';

export const section05Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A tree is a connected graph that:',
    options: [
      'Has no cycles',
      'Has at least one cycle',
      'Is bipartite',
      'Has maximum degree 2',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A tree is a connected acyclic graph. It has no cycles.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A tree on $n$ vertices has exactly how many edges?',
    options: [
      '$n - 1
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Every tree on $n$ vertices has exactly $n-1$ edges. This is a fundamental characterization of trees.',
  },
      '$n
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Every tree on $n$ vertices has exactly $n-1$ edges. This is a fundamental characterization of trees.',
  },
      '$n + 1
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Every tree on $n$ vertices has exactly $n-1$ edges. This is a fundamental characterization of trees.',
  },
      '$2n - 2
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Every tree on $n$ vertices has exactly $n-1$ edges. This is a fundamental characterization of trees.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Every tree on $n$ vertices has exactly $n-1$ edges. This is a fundamental characterization of trees.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which is NOT equivalent to "$G$ is a tree"?',
    options: [
      '$G$ is connected and has $n-1$ edges',
      '$G$ is connected and every edge is a bridge',
      '$G$ has no cycles and has $n-1$ edges',
      'Between any two vertices there is exactly one path',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'All four are equivalent characterizations of trees! The question is tricky - they are all valid.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'A forest with 10 vertices and 3 connected components has how many edges?',
    correctAnswer: 7,
    numericRange: { min: 0, max: 20, precision: 0 },
    difficulty: 'medium',
    explanation: 'A forest with $n$ vertices and $k$ components has $n-k$ edges. Here: $10 - 3 = 7$ edges.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Every tree with at least 2 vertices has:',
    options: [
      'A vertex of degree at least 3',
      'An Eulerian trail',
      'At least two leaves (vertices of degree 1)',
      'A perfect matching',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'A tree with $n \\geq 2$ vertices has at least 2 leaves. This follows from the degree sum being $2(n-1)$ with all degrees $\\geq 1$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The center of a tree is:',
    options: [
      'Always a single vertex',
      'The vertex with maximum degree',
      'The set of all leaves',
      'Either 1 or 2 adjacent vertices',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The center of a tree (vertices minimizing eccentricity) consists of either one vertex or two adjacent vertices.',
  },
];
