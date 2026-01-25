import type { QuizQuestion } from './types';

export const section53Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A partition $P$ of the interval $[a, b]$ is:',
    options: [
      'Any subset of $[a, b]
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A partition of $[a,b]$ is a finite sequence of points $a = x_0 < x_1 < x_2 < \\cdots < x_n = b$ that divides the interval into $n$ subintervals.',
  },
      'A finite sequence $a = x_0 < x_1 < \\cdots < x_n = b
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A partition of $[a,b]$ is a finite sequence of points $a = x_0 < x_1 < x_2 < \\cdots < x_n = b$ that divides the interval into $n$ subintervals.',
  },
      'A countable set of points in $[a, b]
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A partition of $[a,b]$ is a finite sequence of points $a = x_0 < x_1 < x_2 < \\cdots < x_n = b$ that divides the interval into $n$ subintervals.',
  },
      'The set $\\{a, b\\}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A partition of $[a,b]$ is a finite sequence of points $a = x_0 < x_1 < x_2 < \\cdots < x_n = b$ that divides the interval into $n$ subintervals.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A partition of $[a,b]$ is a finite sequence of points $a = x_0 < x_1 < x_2 < \\cdots < x_n = b$ that divides the interval into $n$ subintervals.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $P$ and $Q$ are partitions of $[a,b]$, then $Q$ is a refinement of $P$ if:',
    options: [
      '$Q \\subseteq P
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A refinement $Q$ of partition $P$ contains all points of $P$ plus possibly additional points. That is, $P \\subseteq Q$.',
  },
      '$P$ and $Q$ have the same number of points',
      '$P = Q
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A refinement $Q$ of partition $P$ contains all points of $P$ plus possibly additional points. That is, $P \\subseteq Q$.',
  },
      '$P \\subseteq Q
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A refinement $Q$ of partition $P$ contains all points of $P$ plus possibly additional points. That is, $P \\subseteq Q$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A refinement $Q$ of partition $P$ contains all points of $P$ plus possibly additional points. That is, $P \\subseteq Q$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'The partition $P = \\{0, 1, 2, 3, 4\\}$ of $[0, 4]$ has how many subintervals?',
    correctAnswer: 4,
    numericRange: { min: 0, max: 10, precision: 0 },
    difficulty: 'easy',
    explanation: 'A partition with $n+1$ points creates $n$ subintervals. Here we have $5$ points, so there are $4$ subintervals: $[0,1], [1,2], [2,3], [3,4]$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The common refinement of partitions $P$ and $Q$ is:',
    options: [
      '$P \\cup Q
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The common refinement of $P$ and $Q$ is $P \\cup Q$, which is a refinement of both $P$ and $Q$. Every partition has a common refinement with any other partition.',
  },
      '$P \\cap Q
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The common refinement of $P$ and $Q$ is $P \\cup Q$, which is a refinement of both $P$ and $Q$. Every partition has a common refinement with any other partition.',
  },
      'The smaller of $P$ and $Q
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The common refinement of $P$ and $Q$ is $P \\cup Q$, which is a refinement of both $P$ and $Q$. Every partition has a common refinement with any other partition.',
  },
      'Only defined when $P \\subseteq Q$ or $Q \\subseteq P
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The common refinement of $P$ and $Q$ is $P \\cup Q$, which is a refinement of both $P$ and $Q$. Every partition has a common refinement with any other partition.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The common refinement of $P$ and $Q$ is $P \\cup Q$, which is a refinement of both $P$ and $Q$. Every partition has a common refinement with any other partition.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'Let $P = \\{0, 2, 4\\}$ and $Q = \\{0, 1, 3, 4\\}$ be partitions of $[0, 4]$. How many points are in the common refinement $P \\cup Q$?',
    correctAnswer: 5,
    numericRange: { min: 0, max: 10, precision: 0 },
    difficulty: 'medium',
    explanation: '$P \\cup Q = \\{0, 1, 2, 3, 4\\}$, which has $5$ points.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The mesh (or norm) of a partition $P = \\{x_0, x_1, \\ldots, x_n\\}$ is defined as:',
    options: [
      '$x_n - x_0
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The mesh of a partition is the length of the longest subinterval: $\\|P\\| = \\max_{1 \\leq i \\leq n}(x_i - x_{i-1})$. It measures how "fine" the partition is.',
  },
      '$\\min_{i}(x_{i} - x_{i-1})
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The mesh of a partition is the length of the longest subinterval: $\\|P\\| = \\max_{1 \\leq i \\leq n}(x_i - x_{i-1})$. It measures how "fine" the partition is.',
  },
      '$\\max_{i}(x_{i} - x_{i-1})
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The mesh of a partition is the length of the longest subinterval: $\\|P\\| = \\max_{1 \\leq i \\leq n}(x_i - x_{i-1})$. It measures how "fine" the partition is.',
  },
      '$\\frac{x_n - x_0}{n}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The mesh of a partition is the length of the longest subinterval: $\\|P\\| = \\max_{1 \\leq i \\leq n}(x_i - x_{i-1})$. It measures how "fine" the partition is.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The mesh of a partition is the length of the longest subinterval: $\\|P\\| = \\max_{1 \\leq i \\leq n}(x_i - x_{i-1})$. It measures how "fine" the partition is.',
  },
];
