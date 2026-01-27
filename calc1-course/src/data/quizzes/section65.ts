import type { QuizQuestion } from './types';

export const section65Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'An infinite series $\\sum_{n=1}^{\\infty} a_n$ converges if:',
    options: [
      '$a_n \\to 0$',
      'The sequence of partial sums $S_N = \\sum_{n=1}^{N} a_n$ converges',
      '$a_n$ is positive',
      '$a_n$ is decreasing'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Series converges iff partial sums converge.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The geometric series $\\sum_{n=0}^{\\infty} r^n$ converges when:',
    options: [
      '$r > 1$',
      '$r = 1$',
      '$|r| < 1$',
      'For all $r$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Geometric series converges iff $|r| < 1$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $|r| < 1$, the sum $\\sum_{n=0}^{\\infty} r^n = ?$',
    options: [
      '$\\frac{1}{r}$',
      '$1 + r$',
      '$\\frac{r}{1-r}$',
      '$\\frac{1}{1-r}$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Geometric series: $\\sum r^n = \\frac{1}{1-r}$ for $|r| < 1$.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'What is $\\sum_{n=0}^{\\infty} (1/2)^n$?',
    correctAnswer: 2,
    numericRange: { min: 1, max: 3, precision: 0 },
    difficulty: 'easy',
    explanation: '$\\frac{1}{1 - 1/2} = \\frac{1}{1/2} = 2$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The $n$th term test says: if $\\sum a_n$ converges, then:',
    options: [
      '$a_n \\to 0$',
      '$a_n \\to \\infty$',
      '$a_n \\to 1$',
      'Nothing about $a_n$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'If series converges, terms must go to 0 (necessary but not sufficient).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The harmonic series $\\sum_{n=1}^{\\infty} \\frac{1}{n}$:',
    options: [
      'Converges to 1',
      'Diverges',
      'Converges to $e$',
      'Converges to $\\ln 2$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The harmonic series diverges (even though $1/n \\to 0$).',
  },
];
