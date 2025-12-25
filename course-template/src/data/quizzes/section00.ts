import type { QuizQuestion } from './types';

export const section00Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is $x^2$ when $x=3$?',
    options: ['$3$', '$6$', '$9$', '$12$'],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$3^2 = 9$',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which of the following is a linear function?',
    options: [
      '$f(x) = x^2$',
      '$f(x) = 2^x$',
      '$f(x) = mx + b$',
      '$f(x) = x/x$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A linear function has the form $f(x) = mx + b$ where $m$ and $b$ are constants.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'Calculate: $3 \\times 5 + 2$',
    correctAnswer: 17,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: '$3 \\times 5 = 15$, then $15 + 2 = 17$',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'What is the value of $\\int_0^1 2x \\, dx$?',
    correctAnswer: 1,
    numericRange: { min: 0, max: 100, precision: 2 },
    difficulty: 'medium',
    explanation: '$$\\int_0^1 2x \\, dx = x^2 \\Big|_0^1 = 1 - 0 = 1$$',
  },
  {
    id: 5,
    type: 'text',
    question: 'What is the name of the function $f(x) = \\log_a(x)$?',
    correctAnswer: 'logarithm',
    difficulty: 'medium',
    explanation: 'A function of the form $f(x) = \\log_a(x)$ is called a logarithm.',
  },
  {
    id: 6,
    type: 'text',
    question: 'In the equation $y = mx + b$, what letter represents the slope?',
    correctAnswer: 'm',
    difficulty: 'easy',
    explanation: 'The slope is represented by the letter $m$ in the linear equation $y = mx + b$.',
  },
];
