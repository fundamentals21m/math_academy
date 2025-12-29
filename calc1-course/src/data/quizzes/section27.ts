import type { QuizQuestion } from './types';

export const section27Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The derivative $f\'(x)$ is defined as:',
    options: [
      '$f(x+h) - f(x)$',
      '$\\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}$',
      '$\\frac{f(x)}{x}$',
      '$\\int f(x)\\,dx$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The derivative is the limit of the difference quotient as $h \\to 0$.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'If $f(x) = x^2$, what is $f\'(3)$?',
    correctAnswer: 6,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: '$f\'(x) = 2x$, so $f\'(3) = 6$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $f(x) = c$ (constant), then $f\'(x) = ?$',
    options: [
      '$c$',
      '$1$',
      '$0$',
      '$x$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The derivative of a constant is zero.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The power rule states that if $f(x) = x^n$, then $f\'(x) = ?$',
    options: [
      '$x^{n-1}$',
      '$nx^{n-1}$',
      '$nx^n$',
      '$x^n/n$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Power rule: $(x^n)\' = nx^{n-1}$.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'If $f(x) = x^5$, what is $f\'(x)$ evaluated at $x = 1$?',
    correctAnswer: 5,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: '$f\'(x) = 5x^4$, so $f\'(1) = 5$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'If $f$ is differentiable at $a$, then $f$ is:',
    options: [
      'Discontinuous at $a$',
      'Continuous at $a$',
      'Not defined at $a$',
      'Unbounded at $a$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Differentiability implies continuity.',
  },
];
