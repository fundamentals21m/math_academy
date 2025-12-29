import type { QuizQuestion } from './types';

export const section40Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The functional equation $\\ln(ab) = ?$',
    options: [
      '$\\ln a \\cdot \\ln b$',
      '$\\ln a + \\ln b$',
      '$\\ln a - \\ln b$',
      '$(\\ln a)^{\\ln b}$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Log of a product: $\\ln(ab) = \\ln a + \\ln b$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: '$\\ln(a/b) = ?$',
    options: [
      '$\\ln a / \\ln b$',
      '$\\ln a \\cdot \\ln b$',
      '$\\ln a - \\ln b$',
      '$\\ln a + \\ln b$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Log of a quotient: $\\ln(a/b) = \\ln a - \\ln b$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: '$\\ln(a^r) = ?$',
    options: [
      '$a^r \\ln a$',
      '$r \\ln a$',
      '$(\\ln a)^r$',
      '$\\ln a + r$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Log of a power: $\\ln(a^r) = r\\ln a$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The change of base formula: $\\log_a x = ?$',
    options: [
      '$\\frac{\\ln a}{\\ln x}$',
      '$\\frac{\\ln x}{\\ln a}$',
      '$\\ln x - \\ln a$',
      '$\\ln x \\cdot \\ln a$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Change of base: $\\log_a x = \\frac{\\ln x}{\\ln a}$.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'Simplify $\\ln(e^3)$.',
    correctAnswer: 3,
    numericRange: { min: 0, max: 10, precision: 0 },
    difficulty: 'easy',
    explanation: '$\\ln(e^3) = 3\\ln e = 3 \\cdot 1 = 3$.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'If $\\ln x = 2$, what is $x$? (Round to 2 decimals; $e \\approx 2.718$)',
    correctAnswer: 7.39,
    numericRange: { min: 7, max: 8, precision: 2 },
    difficulty: 'medium',
    explanation: '$\\ln x = 2$ means $x = e^2 \\approx 7.39$.',
  },
];
