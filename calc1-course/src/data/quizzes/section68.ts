import type { QuizQuestion } from './types';

export const section68Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'An improper integral with infinite limit is:',
    options: [
      '$\\int_a^b f(x)\\,dx$',
      '$\\int_a^{\\infty} f(x)\\,dx$',
      'Any definite integral',
      '$\\int f(x)\\,dx$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Improper: one or both limits infinite, or integrand unbounded.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: '$\\int_a^{\\infty} f(x)\\,dx$ is defined as:',
    options: [
      '$\\lim_{b \\to \\infty} \\int_a^b f(x)\\,dx$',
      '$\\int_a^{\\infty} f\'(x)\\,dx$',
      '$f(\\infty) - f(a)$',
      'Cannot be defined'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Improper integrals are limits of proper integrals.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'Evaluate $\\int_1^{\\infty} \\frac{1}{x^2}\\,dx$.',
    correctAnswer: 1,
    numericRange: { min: 0, max: 2, precision: 0 },
    difficulty: 'medium',
    explanation: '$\\int_1^b x^{-2}\\,dx = -x^{-1}\\Big|_1^b = 1 - 1/b \\to 1$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: '$\\int_1^{\\infty} \\frac{1}{x}\\,dx$:',
    options: [
      'Converges to 1',
      'Converges to $\\ln 2$',
      'Diverges',
      'Converges to $e$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$\\int_1^b \\frac{dx}{x} = \\ln b \\to \\infty$. Diverges.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: '$\\int_1^{\\infty} \\frac{1}{x^p}\\,dx$ converges when:',
    options: [
      '$p > 0$',
      '$p > 1$',
      '$p \\geq 1$',
      '$p < 1$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Like the $p$-series, converges iff $p > 1$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'An integral $\\int_0^1 \\frac{1}{\\sqrt{x}}\\,dx$ is improper because:',
    options: [
      'Upper limit is $\\infty$',
      'Integrand is unbounded at $x = 0$',
      'Integrand is negative',
      'It is not improper'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$1/\\sqrt{x} \\to \\infty$ as $x \\to 0^+$. This converges to 2.',
  },
];
