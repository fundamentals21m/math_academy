import type { QuizQuestion } from './types';

export const section08Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A partition of $[a, b]$ is:',
    options: [
      'A single point in $[a, b]$',
      'A finite set of points $a = x_0 < x_1 < ... < x_n = b$',
      'The midpoint of $[a, b]$',
      'An infinite sequence'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A partition divides $[a, b]$ into subintervals using finitely many points.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A step function on $[a, b]$ is:',
    options: [
      'A continuous function',
      'A function constant on each subinterval of some partition',
      'A linear function',
      'A polynomial'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A step function has a constant value on each subinterval of some partition.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'If a step function has value $3$ on $[0, 2]$ and value $5$ on $(2, 4]$, what is the integral over $[0, 4]$?',
    correctAnswer: 16,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: 'Integral $= 3 \\cdot 2 + 5 \\cdot 2 = 6 + 10 = 16$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $s$ and $t$ are step functions, then $s + t$ is:',
    options: [
      'Not always a step function',
      'Always a step function',
      'A polynomial',
      'Undefined'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The sum of step functions is a step function (use the common refinement of their partitions).',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'A step function equals $2$ on $[1, 3]$. What is the integral from $1$ to $3$?',
    correctAnswer: 4,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: 'Integral $= 2 \\times (3 - 1) = 2 \\times 2 = 4$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'A refinement of partition $P$ is:',
    options: [
      'A partition with fewer points',
      'A partition containing all points of $P$ (and possibly more)',
      'The same as $P$',
      'An approximation of $P$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A refinement adds more points to the partition.',
  },
];
