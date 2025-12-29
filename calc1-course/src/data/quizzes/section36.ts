import type { QuizQuestion } from './types';

export const section36Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Second Fundamental Theorem states that if $F\' = f$, then $\\int_a^b f(x)\\,dx = ?$',
    options: [
      '$F(a) - F(b)$',
      '$F(b) - F(a)$',
      '$F(a) + F(b)$',
      '$F\'(b) - F\'(a)$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'FTC II: $\\int_a^b f(x)\\,dx = F(b) - F(a)$ where $F$ is any antiderivative of $f$.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'Compute $\\int_0^2 x\\,dx$ using FTC II. (Antiderivative: $x^2/2$)',
    correctAnswer: 2,
    numericRange: { min: 0, max: 10, precision: 0 },
    difficulty: 'easy',
    explanation: '$\\int_0^2 x\\,dx = \\frac{x^2}{2}\\Big|_0^2 = 2 - 0 = 2$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'Compute $\\int_1^3 2x\\,dx$.',
    correctAnswer: 8,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: '$\\int_1^3 2x\\,dx = x^2\\Big|_1^3 = 9 - 1 = 8$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A primitive (antiderivative) of $f$ is a function $F$ such that:',
    options: [
      '$F = f$',
      '$F\' = f$',
      '$\\int F = f$',
      '$F\'\' = f$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'An antiderivative $F$ satisfies $F\'(x) = f(x)$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The notation $F(x)\\Big|_a^b$ means:',
    options: [
      '$F(a) \\cdot F(b)$',
      '$F(b) - F(a)$',
      '$F(a) - F(b)$',
      '$F(a) + F(b)$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The evaluation notation: $F(x)\\Big|_a^b = F(b) - F(a)$.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'Compute $\\int_0^{\\pi} \\cos x\\,dx$.',
    correctAnswer: 0,
    numericRange: { min: -10, max: 10, precision: 0 },
    difficulty: 'medium',
    explanation: '$\\int_0^{\\pi} \\cos x\\,dx = \\sin x\\Big|_0^{\\pi} = 0 - 0 = 0$.',
  },
];
