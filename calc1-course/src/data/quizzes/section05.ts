import type { QuizQuestion } from './types';

export const section05Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does $\\sum_{k=1}^{n} a_k$ represent?',
    options: [
      '$a_1 \\cdot a_2 \\cdot ... \\cdot a_n
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Sigma notation: $\\sum_{k=1}^{n} a_k = a_1 + a_2 + ... + a_n$.',
  },
      '$a_1 + a_2 + ... + a_n
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Sigma notation: $\\sum_{k=1}^{n} a_k = a_1 + a_2 + ... + a_n$.',
  },
      '$\\frac{a_1 + a_n}{2}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Sigma notation: $\\sum_{k=1}^{n} a_k = a_1 + a_2 + ... + a_n$.',
  },
      '$a_n - a_1
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Sigma notation: $\\sum_{k=1}^{n} a_k = a_1 + a_2 + ... + a_n$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Sigma notation: $\\sum_{k=1}^{n} a_k = a_1 + a_2 + ... + a_n$.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'Compute $\\sum_{k=1}^{4} k$.',
    correctAnswer: 10,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: '$1 + 2 + 3 + 4 = 10$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'Compute $\\sum_{k=0}^{3} 2^k$.',
    correctAnswer: 15,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: '$2^0 + 2^1 + 2^2 + 2^3 = 1 + 2 + 4 + 8 = 15$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is $\\sum_{k=1}^{n} c$ where $c$ is a constant?',
    options: [
      '$nc$',
      '$c$',
      '$c^n$',
      '$n + c$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Adding $c$ a total of $n$ times gives $nc$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The triangle inequality states that:',
    options: [
      '$|a + b| = |a| + |b|
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The triangle inequality: $|a + b| \\leq |a| + |b|$.',
  },
      '$|a + b| \\geq |a| + |b|
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The triangle inequality: $|a + b| \\leq |a| + |b|$.',
  },
      '$|a + b| \\leq |a| + |b|
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The triangle inequality: $|a + b| \\leq |a| + |b|$.',
  },
      '$|ab| = |a| \\cdot |b|
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The triangle inequality: $|a + b| \\leq |a| + |b|$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The triangle inequality: $|a + b| \\leq |a| + |b|$.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'If $|x - 3| < 2$, what is the largest integer value of $x$?',
    correctAnswer: 4,
    numericRange: { min: 0, max: 20, precision: 0 },
    difficulty: 'medium',
    explanation: '$|x - 3| < 2$ means $1 < x < 5$. The largest integer is $4$.',
  },
];
