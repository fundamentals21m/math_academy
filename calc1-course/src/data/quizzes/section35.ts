import type { QuizQuestion } from './types';

export const section35Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The First Fundamental Theorem of Calculus states that if $A(x) = \\int_a^x f(t)\\,dt$, then:',
    options: [
      '$A(x) = f(x)$',
      '$A\'(x) = F(x)$',
      '$A\'(x) = f(x)$',
      '$A(x) = f\'(x)$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'FTC I: the derivative of the integral (with variable upper limit) is the integrand.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $F(x) = \\int_0^x \\cos t\\,dt$, then $F\'(x) = ?$',
    options: [
      '$\\sin x$',
      '$-\\cos x$',
      '$-\\sin x$',
      '$\\cos x$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'By FTC I: $F\'(x) = \\cos x$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'If $G(x) = \\int_1^x t^2\\,dt$, what is $G\'(4)$?',
    correctAnswer: 16,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: '$G\'(x) = x^2$, so $G\'(4) = 16$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'FTC I shows that differentiation and integration are:',
    options: [
      'Inverse operations',
      'Unrelated operations',
      'The same operation',
      'Only valid for polynomials'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'FTC I establishes that differentiation undoes integration.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $H(x) = \\int_a^{x^2} f(t)\\,dt$, then by chain rule, $H\'(x) = ?$',
    options: [
      '$f(x^2)$',
      '$f(x^2) \\cdot 2x$',
      '$2xf(x)$',
      '$f\'(x^2)$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Chain rule with FTC I: $H\'(x) = f(x^2) \\cdot \\frac{d}{dx}(x^2) = 2xf(x^2)$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The FTC I requires $f$ to be:',
    options: [
      'Differentiable',
      'Polynomial',
      'Continuous',
      'Bounded'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'FTC I requires $f$ to be continuous for the integral to be differentiable.',
  },
];
