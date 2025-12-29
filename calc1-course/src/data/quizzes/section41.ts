import type { QuizQuestion } from './types';

export const section41Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The exponential function $e^x$ is defined as:',
    options: [
      'The derivative of $\\ln x$',
      'The inverse of $\\ln x$',
      '$x$ raised to power $e$',
      'A polynomial'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The exponential $e^x$ is defined as the inverse function of $\\ln x$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The derivative of $e^x$ is:',
    options: [
      '$xe^{x-1}$',
      '$e^x$',
      '$e^{x-1}$',
      '$1/e^x$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The exponential function is its own derivative: $(e^x)\' = e^x$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'What is $e^0$?',
    correctAnswer: 1,
    numericRange: { min: 0, max: 10, precision: 0 },
    difficulty: 'easy',
    explanation: '$e^0 = 1$ for any base.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For any real $a$, $a^x$ can be written as:',
    options: [
      '$x \\ln a$',
      '$e^{x \\ln a}$',
      '$\\ln(ax)$',
      '$a \\cdot e^x$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$a^x = e^{x\\ln a}$ allows us to differentiate general exponentials.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The derivative of $a^x$ (for constant $a > 0$) is:',
    options: [
      '$xa^{x-1}$',
      '$a^x$',
      '$a^x \\ln a$',
      '$\\ln a$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$(a^x)\' = a^x \\ln a$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The range of $e^x$ is:',
    options: [
      'All real numbers',
      '$(0, \\infty)$',
      '$[0, \\infty)$',
      '$(-\\infty, 0)$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$e^x > 0$ for all $x$, and takes all positive values.',
  },
];
