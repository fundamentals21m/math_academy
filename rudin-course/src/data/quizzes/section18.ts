import type { QuizQuestion } from './types';

export const section18Questions: QuizQuestion[] = [
  {
    id: 'sec18-q1',
    type: 'multiple-choice',
    question: 'The series $\\sum_{n=1}^{\\infty} a_n$ converges if:',
    options: [
      '$a_n \\to 0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'By definition, $\\sum a_n$ converges if the sequence of partial sums $s_N = a_1 + a_2 + \\cdots + a_N$ converges as $N \\to \\infty$.',
  },
      'The partial sums $s_N = \\sum_{n=1}^{N} a_n$ converge',
      '$|a_n| < 1$ for all $n
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'By definition, $\\sum a_n$ converges if the sequence of partial sums $s_N = a_1 + a_2 + \\cdots + a_N$ converges as $N \\to \\infty$.',
  },
      '$a_n$ is decreasing',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'By definition, $\\sum a_n$ converges if the sequence of partial sums $s_N = a_1 + a_2 + \\cdots + a_N$ converges as $N \\to \\infty$.',
  },
  {
    id: 'sec18-q2',
    type: 'multiple-choice',
    question: 'If $\\sum a_n$ converges, then:',
    options: [
      'The series converges absolutely',
      '$a_n \\to 0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A necessary (but not sufficient) condition for convergence: if $\\sum a_n$ converges, then $a_n \\to 0$. The converse is false: $\\sum 1/n$ diverges even though $1/n \\to 0$.',
  },
      '$a_n \\to 1
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A necessary (but not sufficient) condition for convergence: if $\\sum a_n$ converges, then $a_n \\to 0$. The converse is false: $\\sum 1/n$ diverges even though $1/n \\to 0$.',
  },
      '$|a_n| < 1$ eventually',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A necessary (but not sufficient) condition for convergence: if $\\sum a_n$ converges, then $a_n \\to 0$. The converse is false: $\\sum 1/n$ diverges even though $1/n \\to 0$.',
  },
  {
    id: 'sec18-q3',
    type: 'multiple-choice',
    question: 'The Cauchy criterion for series states that $\\sum a_n$ converges iff:',
    options: [
      '$a_n \\to 0
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The Cauchy criterion: $\\sum a_n$ converges iff for every $\\varepsilon > 0$, there exists $N$ such that $|a_{m} + a_{m+1} + \\cdots + a_n| < \\varepsilon$ for $n \\geq m \\geq N$.',
  },
      'The terms are bounded',
      'For every $\\varepsilon > 0$, there exists $N$ such that $|\\sum_{k=m}^{n} a_k| < \\varepsilon$ for all $n \\geq m \\geq N
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The Cauchy criterion: $\\sum a_n$ converges iff for every $\\varepsilon > 0$, there exists $N$ such that $|a_{m} + a_{m+1} + \\cdots + a_n| < \\varepsilon$ for $n \\geq m \\geq N$.',
  },
      'The terms are positive',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The Cauchy criterion: $\\sum a_n$ converges iff for every $\\varepsilon > 0$, there exists $N$ such that $|a_{m} + a_{m+1} + \\cdots + a_n| < \\varepsilon$ for $n \\geq m \\geq N$.',
  },
  {
    id: 'sec18-q4',
    type: 'multiple-choice',
    question: 'The geometric series $\\sum_{n=0}^{\\infty} r^n$ converges if and only if:',
    options: [
      '$r > 0
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The geometric series converges iff $|r| < 1$, in which case $\\sum_{n=0}^{\\infty} r^n = 1/(1-r)$. For $|r| \\geq 1$, the terms do not approach zero.',
  },
      '$r < 1
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The geometric series converges iff $|r| < 1$, in which case $\\sum_{n=0}^{\\infty} r^n = 1/(1-r)$. For $|r| \\geq 1$, the terms do not approach zero.',
  },
      '$|r| < 1
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The geometric series converges iff $|r| < 1$, in which case $\\sum_{n=0}^{\\infty} r^n = 1/(1-r)$. For $|r| \\geq 1$, the terms do not approach zero.',
  },
      '$r \\neq 1
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The geometric series converges iff $|r| < 1$, in which case $\\sum_{n=0}^{\\infty} r^n = 1/(1-r)$. For $|r| \\geq 1$, the terms do not approach zero.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The geometric series converges iff $|r| < 1$, in which case $\\sum_{n=0}^{\\infty} r^n = 1/(1-r)$. For $|r| \\geq 1$, the terms do not approach zero.',
  },
  {
    id: 'sec18-q5',
    type: 'multiple-choice',
    question: 'Which statement about the harmonic series $\\sum_{n=1}^{\\infty} \\frac{1}{n}$ is true?',
    options: [
      'It diverges',
      'It converges because $1/n \\to 0
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The harmonic series diverges despite $1/n \\to 0$. One proof: $1 + 1/2 + (1/3 + 1/4) + (1/5 + \\cdots + 1/8) + \\cdots > 1 + 1/2 + 1/2 + 1/2 + \\cdots$.',
  },
      'It converges to $e
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The harmonic series diverges despite $1/n \\to 0$. One proof: $1 + 1/2 + (1/3 + 1/4) + (1/5 + \\cdots + 1/8) + \\cdots > 1 + 1/2 + 1/2 + 1/2 + \\cdots$.',
  },
      'It converges to $\\ln 2
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The harmonic series diverges despite $1/n \\to 0$. One proof: $1 + 1/2 + (1/3 + 1/4) + (1/5 + \\cdots + 1/8) + \\cdots > 1 + 1/2 + 1/2 + 1/2 + \\cdots$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The harmonic series diverges despite $1/n \\to 0$. One proof: $1 + 1/2 + (1/3 + 1/4) + (1/5 + \\cdots + 1/8) + \\cdots > 1 + 1/2 + 1/2 + 1/2 + \\cdots$.',
  },
];
