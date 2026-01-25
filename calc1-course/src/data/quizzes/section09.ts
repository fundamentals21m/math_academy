import type { QuizQuestion } from './types';

export const section09Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The integral of a step function is defined as:',
    options: [
      'The sum of (value × subinterval length) over all subintervals',
      'The maximum value times the length',
      'The average value',
      'The derivative of the function'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The integral of a step function sums up the areas of rectangles on each subinterval.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'If $s(x) = 4$ for $x \\in [0, 3]$, what is $\\int_0^3 s(x)\\,dx$?',
    correctAnswer: 12,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: '$\\int_0^3 4\\,dx = 4 \\cdot 3 = 12$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For step functions, the integral is linear. This means:',
    options: [
      '$\\int (s + t) = \\int s \\cdot \\int t
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Linearity: the integral of a sum is the sum of integrals, and constants factor out.',
  },
      'The integral is always positive',
      'The integral equals the maximum value',
      '$\\int (s + t) = \\int s + \\int t$ and $\\int cs = c \\int s
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Linearity: the integral of a sum is the sum of integrals, and constants factor out.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Linearity: the integral of a sum is the sum of integrals, and constants factor out.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'If $\\int_0^2 s = 6$ and $\\int_2^5 s = 9$, what is $\\int_0^5 s$?',
    correctAnswer: 15,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: 'By additivity: $\\int_0^5 s = \\int_0^2 s + \\int_2^5 s = 6 + 9 = 15$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $s(x) \\leq t(x)$ for all $x \\in [a, b]$, then:',
    options: [
      '$\\int_a^b s \\geq \\int_a^b t$',
      '$\\int_a^b s = \\int_a^b t$',
      '$\\int_a^b s \\leq \\int_a^b t$',
      'Cannot compare'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Comparison property: if $s \\leq t$ pointwise, then $\\int s \\leq \\int t$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The integral of a step function depends on:',
    options: [
      'Only the endpoints of the interval',
      'The values of the function and subinterval lengths',
      'The derivative of the function',
      'The number of subintervals only',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The integral depends on what value the function takes on each subinterval and the length of that subinterval.',
  },
];
