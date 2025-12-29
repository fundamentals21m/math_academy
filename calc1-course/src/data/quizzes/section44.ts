import type { QuizQuestion } from './types';

export const section44Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The inverse sine function $\\arcsin x$ has domain:',
    options: [
      'All real numbers',
      '$[-1, 1]$',
      '$[0, 1]$',
      '$(-\\pi/2, \\pi/2)$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\arcsin x$ is defined for $-1 \\leq x \\leq 1$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The derivative of $\\arcsin x$ is:',
    options: [
      '$\\frac{1}{\\cos(\\arcsin x)}$',
      '$\\frac{1}{\\sqrt{1 - x^2}}$',
      '$\\frac{-1}{\\sqrt{1 - x^2}}$',
      '$\\frac{1}{1 + x^2}$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$(\\arcsin x)\' = \\frac{1}{\\sqrt{1-x^2}}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The derivative of $\\arctan x$ is:',
    options: [
      '$\\frac{1}{\\sqrt{1-x^2}}$',
      '$\\frac{1}{1 + x^2}$',
      '$\\frac{-1}{1 + x^2}$',
      '$\\sec^2(\\arctan x)$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$(\\arctan x)\' = \\frac{1}{1+x^2}$.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'What is $\\arcsin(0)$ in radians?',
    correctAnswer: 0,
    numericRange: { min: -1, max: 1, precision: 0 },
    difficulty: 'easy',
    explanation: '$\\sin(0) = 0$, so $\\arcsin(0) = 0$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: '$\\int \\frac{1}{1 + x^2}\\,dx = ?$',
    options: [
      '$\\arcsin x + C$',
      '$\\arccos x + C$',
      '$\\arctan x + C$',
      '$\\ln(1 + x^2) + C$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The antiderivative of $\\frac{1}{1+x^2}$ is $\\arctan x + C$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: '$\\int \\frac{1}{\\sqrt{1 - x^2}}\\,dx = ?$',
    options: [
      '$\\arctan x + C$',
      '$\\arcsin x + C$',
      '$\\ln|x| + C$',
      '$\\sqrt{1-x^2} + C$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The antiderivative of $\\frac{1}{\\sqrt{1-x^2}}$ is $\\arcsin x + C$.',
  },
];
