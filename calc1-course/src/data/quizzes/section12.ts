import type { QuizQuestion } from './types';

export const section12Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The linearity property of integrals states:',
    options: [
      '$\\int (f + g) = \\int f \\cdot \\int g$',
      '$\\int f/g = \\int f / \\int g$',
      '$\\int f \\cdot g = \\int f \\cdot \\int g$',
      '$\\int (f + g) = \\int f + \\int g$ and $\\int cf = c\\int f$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Linearity: integral of sum = sum of integrals; constants factor out.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'If $\\int_0^1 f = 3$ and $\\int_0^1 g = 5$, what is $\\int_0^1 (f + g)$?',
    correctAnswer: 8,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: 'By linearity: $\\int (f + g) = \\int f + \\int g = 3 + 5 = 8$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'If $\\int_0^2 f = 6$, what is $\\int_0^2 3f$?',
    correctAnswer: 18,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: '$\\int 3f = 3\\int f = 3 \\cdot 6 = 18$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The additivity property over intervals states:',
    options: [
      '$\\int_a^b f = \\int_a^c f + \\int_c^b f$ for $a < c < b$',
      '$\\int_a^b f = \\int_a^c f \\cdot \\int_c^b f$',
      '$\\int_a^b f = \\int_b^a f$',
      '$\\int_a^b f = b - a$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The integral over $[a, b]$ equals the sum of integrals over $[a, c]$ and $[c, b]$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $f(x) \\geq 0$ for all $x \\in [a, b]$, then:',
    options: [
      '$\\int_a^b f < 0$',
      '$\\int_a^b f \\geq 0$',
      '$\\int_a^b f = 0$',
      'Cannot determine the sign'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'If $f \\geq 0$, then the integral (area under curve) is non-negative.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'If $\\int_1^4 f = 10$ and $\\int_1^2 f = 3$, what is $\\int_2^4 f$?',
    correctAnswer: 7,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: 'By additivity: $\\int_2^4 f = \\int_1^4 f - \\int_1^2 f = 10 - 3 = 7$.',
  },
];
