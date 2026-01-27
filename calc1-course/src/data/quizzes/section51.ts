import type { QuizQuestion } from './types';

export const section51Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: '$\\lim_{x \\to \\infty} \\frac{\\ln x}{x}$ equals:',
    options: [
      '$\\infty$',
      '$0$',
      '$1$',
      'Does not exist'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By L\'Hôpital: $\\frac{1/x}{1} = 1/x \\to 0$. Log grows slower than any power.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: '$\\lim_{x \\to \\infty} \\frac{e^x}{x^n}$ for any fixed $n$ equals:',
    options: [
      '$0$',
      '$1$',
      '$\\infty$',
      '$n$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Exponential grows faster than any polynomial.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: '$\\lim_{x \\to \\infty} \\frac{x^{100}}{e^x}$ equals:',
    options: [
      '$\\infty$',
      '$100$',
      '$1$',
      '$0$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Any polynomial divided by $e^x$ goes to 0.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The growth rate hierarchy (slowest to fastest) is:',
    options: [
      'logarithm < polynomial < exponential',
      'polynomial < exponential < logarithm',
      'exponential < logarithm < polynomial',
      'polynomial < logarithm < exponential'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$\\ln x < x^n < e^x$ for large $x$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: '$\\lim_{x \\to 0^+} x \\ln x$ equals:',
    options: [
      '$-\\infty$',
      '$0$',
      '$\\infty$',
      '$1$'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Rewrite as $\\frac{\\ln x}{1/x}$ (form $-\\infty/\\infty$). L\'Hôpital gives $\\frac{1/x}{-1/x^2} = -x \\to 0$.',
  },
  {
    id: 6,
    type: 'numeric',
    question: '$\\lim_{x \\to \\infty} \\frac{\\ln x}{\\sqrt{x}}$ equals:',
    correctAnswer: 0,
    numericRange: { min: -1, max: 1, precision: 0 },
    difficulty: 'medium',
    explanation: 'L\'Hôpital: $\\frac{1/x}{1/(2\\sqrt{x})} = \\frac{2\\sqrt{x}}{x} = \\frac{2}{\\sqrt{x}} \\to 0$.',
  },
];
