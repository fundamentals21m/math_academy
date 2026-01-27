import type { QuizQuestion } from './types';

export const section43Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The hyperbolic sine is defined as:',
    options: [
      '$\\sinh x = \\frac{e^x - e^{-x}}{2}$',
      '$\\sinh x = \\frac{e^x + e^{-x}}{2}$',
      '$\\sinh x = e^x - 1$',
      '$\\sinh x = \\ln(\\sin x)$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\sinh x = \\frac{e^x - e^{-x}}{2}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The hyperbolic cosine is defined as:',
    options: [
      '$\\cosh x = \\frac{e^x - e^{-x}}{2}$',
      '$\\cosh x = \\frac{e^x + e^{-x}}{2}$',
      '$\\cosh x = e^x + 1$',
      '$\\cosh x = \\ln(\\cos x)$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\cosh x = \\frac{e^x + e^{-x}}{2}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The fundamental identity for hyperbolic functions is:',
    options: [
      '$\\sinh^2 x + \\cosh^2 x = 1$',
      '$\\sinh x \\cdot \\cosh x = 1$',
      '$\\cosh^2 x - \\sinh^2 x = 1$',
      '$\\cosh^2 x + \\sinh^2 x = 0$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Unlike trig: $\\cosh^2 x - \\sinh^2 x = 1$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The derivative of $\\sinh x$ is:',
    options: [
      '$\\sinh x$',
      '$\\tanh x$',
      '$-\\cosh x$',
      '$\\cosh x$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$(\\sinh x)\' = \\cosh x$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The derivative of $\\cosh x$ is:',
    options: [
      '$\\sinh x$',
      '$\\cosh x$',
      '$-\\sinh x$',
      '$\\tanh x$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$(\\cosh x)\' = \\sinh x$ (no negative sign, unlike $\\cos$).',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'What is $\\sinh(0)$?',
    correctAnswer: 0,
    numericRange: { min: -1, max: 1, precision: 0 },
    difficulty: 'easy',
    explanation: '$\\sinh(0) = \\frac{e^0 - e^0}{2} = \\frac{1-1}{2} = 0$.',
  },
];
