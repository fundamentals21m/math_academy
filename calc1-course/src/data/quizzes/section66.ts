import type { QuizQuestion } from './types';

export const section66Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The comparison test: if $0 \\leq a_n \\leq b_n$ and $\\sum b_n$ converges, then:',
    options: [
      '$\\sum a_n$ diverges',
      'Cannot determine',
      '$\\sum a_n$ converges',
      '$\\sum a_n = \\sum b_n$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Smaller series converges if larger series does.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The integral test compares $\\sum a_n$ to:',
    options: [
      '$\\int_1^\\infty f(x)\\,dx$ where $f(n) = a_n
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Integral test: $\\sum f(n)$ and $\\int f(x)\\,dx$ converge/diverge together.',
  },
      'The limit of $a_n
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Integral test: $\\sum f(n)$ and $\\int f(x)\\,dx$ converge/diverge together.',
  },
      'The derivative of $a_n
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Integral test: $\\sum f(n)$ and $\\int f(x)\\,dx$ converge/diverge together.',
  },
      'A geometric series',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Integral test: $\\sum f(n)$ and $\\int f(x)\\,dx$ converge/diverge together.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The ratio test: if $\\lim |a_{n+1}/a_n| = L$, then series converges if:',
    options: [
      '$L < 1$',
      '$L > 1$',
      '$L = 1$',
      '$L = 0$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Ratio test: converges if $L < 1$, diverges if $L > 1$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The root test: if $\\lim \\sqrt[n]{|a_n|} = L$, then series converges if:',
    options: [
      '$L > 1
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Root test: converges if $L < 1$, diverges if $L > 1$.',
  },
      '$L = 1
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Root test: converges if $L < 1$, diverges if $L > 1$.',
  },
      '$L$ is undefined',
      '$L < 1
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Root test: converges if $L < 1$, diverges if $L > 1$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Root test: converges if $L < 1$, diverges if $L > 1$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The $p$-series $\\sum_{n=1}^{\\infty} \\frac{1}{n^p}$ converges when:',
    options: [
      '$p > 0
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$p$-series converges iff $p > 1$.',
  },
      '$p \\geq 1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$p$-series converges iff $p > 1$.',
  },
      '$p < 1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$p$-series converges iff $p > 1$.',
  },
      '$p > 1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$p$-series converges iff $p > 1$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$p$-series converges iff $p > 1$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Using ratio test on $\\sum \\frac{n!}{n^n}$: $\\lim \\frac{a_{n+1}}{a_n} = ?$',
    options: [
      '$0
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The ratio approaches $1/e < 1$, so series converges.',
  },
      '$1/e
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The ratio approaches $1/e < 1$, so series converges.',
  },
      '$\\infty
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The ratio approaches $1/e < 1$, so series converges.',
  },
      '$e
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The ratio approaches $1/e < 1$, so series converges.',
  },
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The ratio approaches $1/e < 1$, so series converges.',
  },
];
