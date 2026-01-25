import type { QuizQuestion } from './types';

export const section114Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A partition $P$ of a rectangle $Q = [a, b] \\times [c, d]$ is:',
    options: [
      'A single point in $Q
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A partition of the rectangle $Q$ is $P = P_1 \\times P_2$, where $P_1$ partitions $[a, b]$ and $P_2$ partitions $[c, d]$. This decomposes $Q$ into subrectangles.',
  },
      'A curve dividing $Q$ in half',
      'The boundary of $Q
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A partition of the rectangle $Q$ is $P = P_1 \\times P_2$, where $P_1$ partitions $[a, b]$ and $P_2$ partitions $[c, d]$. This decomposes $Q$ into subrectangles.',
  },
      'The Cartesian product $P_1 \\times P_2$ of partitions of $[a, b]$ and $[c, d]
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A partition of the rectangle $Q$ is $P = P_1 \\times P_2$, where $P_1$ partitions $[a, b]$ and $P_2$ partitions $[c, d]$. This decomposes $Q$ into subrectangles.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A partition of the rectangle $Q$ is $P = P_1 \\times P_2$, where $P_1$ partitions $[a, b]$ and $P_2$ partitions $[c, d]$. This decomposes $Q$ into subrectangles.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $P_1$ has $n$ subintervals and $P_2$ has $m$ subintervals, then the partition $P$ decomposes $Q$ into:',
    options: [
      '$n \\cdot m$ subrectangles',
      '$n + m$ subrectangles',
      '$n^m$ subrectangles',
      '$\\max(n, m)$ subrectangles',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The partition $P = P_1 \\times P_2$ creates $n \\cdot m$ subrectangles (each subinterval of $P_1$ paired with each subinterval of $P_2$).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A function $f$ on a rectangle $Q$ is a step function if:',
    options: [
      '$f$ is constant on all of $Q
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A step function on $Q$ is constant on the open subrectangles of some partition $P$. The values on the boundaries of subrectangles do not affect the integral.',
  },
      '$f$ is continuous',
      'There exists a partition $P$ such that $f$ is constant on each open subrectangle of $P
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A step function on $Q$ is constant on the open subrectangles of some partition $P$. The values on the boundaries of subrectangles do not affect the integral.',
  },
      '$f$ takes only integer values',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A step function on $Q$ is constant on the open subrectangles of some partition $P$. The values on the boundaries of subrectangles do not affect the integral.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A partition $P\'$ is finer than $P$ if:',
    options: [
      '$P\' = P$',
      '$P \\subseteq P\'$ (every point of $P$ is also in $P\'$)',
      '$P\' \\subseteq P$',
      '$P\'$ has fewer points than $P$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A partition $P\'$ is finer than $P$ if $P \\subseteq P\'$, meaning $P\'$ includes all points of $P$ and possibly more. A finer partition creates more (and smaller) subrectangles.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The set of step functions on a rectangle $Q$ forms:',
    options: [
      'An empty set',
      'A single function',
      'A bounded set',
      'A linear space',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Step functions form a linear space: if $f$ and $g$ are step functions, so is $c_1 f + c_2 g$. The common refinement of their partitions works for the linear combination.',
  },
];
