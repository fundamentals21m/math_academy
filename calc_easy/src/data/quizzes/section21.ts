import type { QuizQuestion } from './types';

export const section21Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is a series in mathematics?',
    options: [
      'The sum of the terms of a sequence',
      'A sequence of numbers',
      'A type of function',
      'A geometric shape'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A series is the sum of the terms of a sequence, like $1 + \\frac{1}{2} + \\frac{1}{4} + ...$',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A convergent series:',
    options: [
      'Has terms that get larger and larger',
      'Approaches a finite sum as more terms are added',
      'Always equals zero',
      'Has no pattern'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A convergent series has a finite sum even though it may have infinitely many terms.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The geometric series $1 + r + r^2 + r^3 + ...$ converges when:',
    options: [
      '$r > 1$',
      '$r = 1$',
      '$|r| < 1$',
      '$r < 0$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A geometric series converges if and only if $|r| < 1$, giving sum $\\frac{1}{1-r}$.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'What is the sum of $\\frac{1}{2} + \\frac{1}{4} + \\frac{1}{8} + ...$ (infinite geometric series with $a = 1/2$, $r = 1/2$)?',
    correctAnswer: 1,
    numericRange: { min: 0, max: 10, precision: 0 },
    difficulty: 'medium',
    explanation: 'Sum $= \\frac{a}{1-r} = \\frac{1/2}{1-1/2} = \\frac{1/2}{1/2} = 1$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Taylor series allow us to:',
    options: [
      'Only add whole numbers',
      'Find exact values of $\\pi$',
      'Avoid using calculus',
      'Represent functions as infinite polynomials'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Taylor series express functions as infinite sums of polynomial terms.',
  },
];
