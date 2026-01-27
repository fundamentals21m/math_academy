import type { QuizQuestion } from './types';

export const section64Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A sequence $\\{a_n\\}$ converges to $L$ if:',
    options: [
      '$a_n = L$ for all $n$',
      'For every $\\varepsilon > 0$, $|a_n - L| < \\varepsilon$ for all large enough $n$',
      '$a_n$ is increasing',
      '$a_n < L$ for all $n$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Convergence: $a_n$ gets arbitrarily close to $L$ for large $n$.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'What is $\\lim_{n \\to \\infty} \\frac{1}{n}$?',
    correctAnswer: 0,
    numericRange: { min: -1, max: 1, precision: 0 },
    difficulty: 'easy',
    explanation: '$1/n \\to 0$ as $n \\to \\infty$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A monotonically increasing sequence that is bounded above:',
    options: [
      'Diverges',
      'Oscillates',
      'Converges',
      'Is constant'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Monotone Convergence Theorem: bounded monotonic sequences converge.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Zeno\'s paradox involves:',
    options: [
      'Divergent series',
      'Complex numbers',
      'Differential equations',
      'The sum of an infinite geometric series'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Zeno\'s paradox relates to $1/2 + 1/4 + 1/8 + ... = 1$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The sequence $a_n = (-1)^n$:',
    options: [
      'Diverges (oscillates)',
      'Converges to 0',
      'Converges to 1',
      'Converges to $-1$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$a_n = 1, -1, 1, -1, ...$ oscillates and does not converge.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'What is $\\lim_{n \\to \\infty} \\frac{n}{n+1}$?',
    correctAnswer: 1,
    numericRange: { min: 0, max: 2, precision: 0 },
    difficulty: 'easy',
    explanation: '$\\frac{n}{n+1} = \\frac{1}{1 + 1/n} \\to 1$.',
  },
];
