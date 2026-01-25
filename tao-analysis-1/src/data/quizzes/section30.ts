import type { QuizQuestion } from './types';

export const section30Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'If $a_n \\geq 0$ for all $n$, then $\\sum_{n=1}^{\\infty} a_n$ converges if and only if:',
    options: [
      'There exists $M$ such that $a_n < M$ for all $n$',
      '$a_n \\to 0$',
      'The sequence $(a_n)$ is decreasing',
      'The partial sums are bounded above'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For non-negative terms, partial sums form an increasing sequence. An increasing sequence converges iff it is bounded above (monotone convergence theorem).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The comparison test states: if $0 \\leq a_n \\leq b_n$ for all $n$ and $\\sum b_n$ converges, then:',
    options: [
      '$\\sum a_n$ may converge or diverge',
      '$\\sum a_n = \\sum b_n
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The comparison test: if $0 \\leq a_n \\leq b_n$ and $\\sum b_n$ converges, then $\\sum a_n$ converges. The partial sums of $(a_n)$ are bounded by those of $(b_n)$.',
  },
      '$\\sum a_n$ converges',
      '$\\sum a_n$ diverges',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The comparison test: if $0 \\leq a_n \\leq b_n$ and $\\sum b_n$ converges, then $\\sum a_n$ converges. The partial sums of $(a_n)$ are bounded by those of $(b_n)$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For non-negative series, if $0 \\leq b_n \\leq a_n$ and $\\sum b_n$ diverges, then:',
    options: [
      '$\\sum a_n$ diverges',
      '$\\sum a_n$ converges',
      '$\\sum a_n$ may converge or diverge',
      'Nothing can be concluded',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'This is the comparison test for divergence. If the smaller series diverges, the larger one must also diverge.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The $p$-series $\\sum_{n=1}^{\\infty} \\frac{1}{n^p}$ converges if and only if:',
    options: [
      '$p > 0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The $p$-series converges for $p > 1$ and diverges for $p \\leq 1$. At $p = 1$, it\'s the harmonic series which diverges.',
  },
      '$p > 1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The $p$-series converges for $p > 1$ and diverges for $p \\leq 1$. At $p = 1$, it\'s the harmonic series which diverges.',
  },
      '$p \\geq 1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The $p$-series converges for $p > 1$ and diverges for $p \\leq 1$. At $p = 1$, it\'s the harmonic series which diverges.',
  },
      '$p \\geq 2
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The $p$-series converges for $p > 1$ and diverges for $p \\leq 1$. At $p = 1$, it\'s the harmonic series which diverges.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The $p$-series converges for $p > 1$ and diverges for $p \\leq 1$. At $p = 1$, it\'s the harmonic series which diverges.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'For what value of $p$ does $\\sum_{n=1}^{\\infty} \\frac{1}{n^p}$ equal $\\frac{\\pi^2}{6}$?',
    correctAnswer: 2,
    numericRange: { min: 1, max: 5, precision: 0 },
    difficulty: 'hard',
    explanation: 'The Basel problem: $\\sum_{n=1}^{\\infty} \\frac{1}{n^2} = \\frac{\\pi^2}{6}$. This famous result was first proved by Euler.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'For non-negative terms, if $\\sum a_n$ converges then:',
    options: [
      'Only finitely many rearrangements converge',
      'Rearrangements may converge to different values',
      'Any rearrangement of the series also converges to the same sum',
      'Rearrangements may diverge',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For series of non-negative terms, rearrangement does not affect convergence or the sum. This is because all partial sums remain bounded by the original sum.',
  },
];
