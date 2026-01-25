import type { QuizQuestion } from './types';

export const section28Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'For a finite series $\\sum_{i=m}^{n} a_i$, which property always holds?',
    options: [
      '$\\sum_{i=m}^{n} |a_i| = \\left|\\sum_{i=m}^{n} a_i\\right|
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Finite sums are linear: the sum of sums equals the sum of the combined terms. The product formula $(\\sum a_i)(\\sum b_i) \\neq \\sum a_i b_i$ in general.',
  },
      '$\\sum_{i=m}^{n} a_i b_i = \\left(\\sum_{i=m}^{n} a_i\\right)\\left(\\sum_{i=m}^{n} b_i\\right)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Finite sums are linear: the sum of sums equals the sum of the combined terms. The product formula $(\\sum a_i)(\\sum b_i) \\neq \\sum a_i b_i$ in general.',
  },
      '$\\sum_{i=m}^{n} (a_i + b_i) = \\sum_{i=m}^{n} a_i + \\sum_{i=m}^{n} b_i
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Finite sums are linear: the sum of sums equals the sum of the combined terms. The product formula $(\\sum a_i)(\\sum b_i) \\neq \\sum a_i b_i$ in general.',
  },
      '$\\sum_{i=m}^{n} a_i^2 = \\left(\\sum_{i=m}^{n} a_i\\right)^2
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Finite sums are linear: the sum of sums equals the sum of the combined terms. The product formula $(\\sum a_i)(\\sum b_i) \\neq \\sum a_i b_i$ in general.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Finite sums are linear: the sum of sums equals the sum of the combined terms. The product formula $(\\sum a_i)(\\sum b_i) \\neq \\sum a_i b_i$ in general.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'What is $\\sum_{k=1}^{5} k$?',
    correctAnswer: 15,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: '$\\sum_{k=1}^{5} k = 1 + 2 + 3 + 4 + 5 = 15$. Using the formula: $\\frac{n(n+1)}{2} = \\frac{5 \\cdot 6}{2} = 15$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The formula $\\sum_{k=1}^{n} k = \\frac{n(n+1)}{2}$ can be proved by:',
    options: [
      'Only direct computation',
      'Mathematical induction',
      'The ratio test',
      'The comparison test',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'This formula is classically proved by induction. Base case: $n=1$ gives $1 = \\frac{1 \\cdot 2}{2}$. The inductive step adds $(n+1)$ to both sides.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'What is $\\sum_{k=0}^{4} 2^k$?',
    correctAnswer: 31,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: '$\\sum_{k=0}^{4} 2^k = 1 + 2 + 4 + 8 + 16 = 31$. Using the geometric series formula: $\\frac{2^5 - 1}{2 - 1} = 31$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For the geometric series $\\sum_{k=0}^{n} r^k$ with $r \\neq 1$, the closed form is:',
    options: [
      '$\\frac{1 - r^{n+1}}{1 - r}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The finite geometric series sums to $\\sum_{k=0}^{n} r^k = \\frac{1 - r^{n+1}}{1 - r}$. This can be derived by multiplying the sum by $r$ and subtracting.',
  },
      '$\\frac{1 - r^n}{1 - r}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The finite geometric series sums to $\\sum_{k=0}^{n} r^k = \\frac{1 - r^{n+1}}{1 - r}$. This can be derived by multiplying the sum by $r$ and subtracting.',
  },
      '$\\frac{r^{n+1} - 1}{r}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The finite geometric series sums to $\\sum_{k=0}^{n} r^k = \\frac{1 - r^{n+1}}{1 - r}$. This can be derived by multiplying the sum by $r$ and subtracting.',
  },
      '$n \\cdot r
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The finite geometric series sums to $\\sum_{k=0}^{n} r^k = \\frac{1 - r^{n+1}}{1 - r}$. This can be derived by multiplying the sum by $r$ and subtracting.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The finite geometric series sums to $\\sum_{k=0}^{n} r^k = \\frac{1 - r^{n+1}}{1 - r}$. This can be derived by multiplying the sum by $r$ and subtracting.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'What is $\\sum_{k=1}^{4} k^2$?',
    correctAnswer: 30,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: '$\\sum_{k=1}^{4} k^2 = 1 + 4 + 9 + 16 = 30$. The formula is $\\frac{n(n+1)(2n+1)}{6} = \\frac{4 \\cdot 5 \\cdot 9}{6} = 30$.',
  },
];
