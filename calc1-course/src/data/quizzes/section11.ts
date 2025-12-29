import type { QuizQuestion } from './types';

export const section11Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A function $f$ is monotonically increasing if:',
    options: [
      '$f(x) > 0$ for all $x$',
      '$x_1 < x_2$ implies $f(x_1) \\leq f(x_2)$',
      '$f$ is continuous',
      '$f$ has a derivative'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Monotonically increasing means larger inputs give larger (or equal) outputs.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Every bounded monotonic function on $[a, b]$ is:',
    options: [
      'Continuous',
      'Differentiable',
      'Integrable',
      'A polynomial'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A key theorem: bounded monotonic functions are always integrable.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which function is monotonically decreasing on $[0, \\infty)$?',
    options: [
      '$f(x) = x^2$',
      '$f(x) = e^x$',
      '$f(x) = 1/x$ for $x > 0$',
      '$f(x) = \\sin x$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$1/x$ decreases as $x$ increases (for $x > 0$).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $f$ is increasing and $g$ is increasing, then $f + g$ is:',
    options: [
      'Decreasing',
      'Increasing',
      'Neither',
      'Cannot determine'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The sum of increasing functions is increasing.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A step function is:',
    options: [
      'Always monotonic',
      'Never monotonic',
      'Monotonic if its values don\'t decrease across subintervals',
      'Only monotonic if constant'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A step function is monotonic if its constant values are non-decreasing (or non-increasing) from left to right.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'If $f(x) = x^3$ on $[-1, 2]$, and we compute lower sums, we use minimum values on each subinterval. What is $f(-1)$?',
    correctAnswer: -1,
    numericRange: { min: -10, max: 10, precision: 0 },
    difficulty: 'easy',
    explanation: '$f(-1) = (-1)^3 = -1$.',
  },
];
