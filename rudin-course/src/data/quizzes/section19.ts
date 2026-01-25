import type { QuizQuestion } from './types';

export const section19Questions: QuizQuestion[] = [
  {
    id: 'sec19-q1',
    type: 'multiple-choice',
    question: 'The comparison test states: if $0 \\leq a_n \\leq b_n$ and $\\sum b_n$ converges, then:',
    options: [
      '$\\sum a_n$ converges',
      '$\\sum a_n$ diverges',
      'Nothing can be concluded',
      '$\\sum a_n = \\sum b_n
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'If $0 \\leq a_n \\leq b_n$ and $\\sum b_n$ converges, then $\\sum a_n$ converges (and $\\sum a_n \\leq \\sum b_n$). This is because the partial sums of $\\sum a_n$ are increasing and bounded.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'If $0 \\leq a_n \\leq b_n$ and $\\sum b_n$ converges, then $\\sum a_n$ converges (and $\\sum a_n \\leq \\sum b_n$). This is because the partial sums of $\\sum a_n$ are increasing and bounded.',
  },
  {
    id: 'sec19-q2',
    type: 'multiple-choice',
    question: 'If $0 \\leq a_n \\leq b_n$ and $\\sum a_n$ diverges, then:',
    options: [
      '$\\sum b_n$ converges',
      '$\\sum b_n$ may converge or diverge',
      '$\\sum b_n$ diverges',
      '$a_n = b_n$ for all $n
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'If a smaller series diverges, the larger one must also diverge. This is the contrapositive of the comparison test.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'If a smaller series diverges, the larger one must also diverge. This is the contrapositive of the comparison test.',
  },
  {
    id: 'sec19-q3',
    type: 'multiple-choice',
    question: 'The $p$-series $\\sum_{n=1}^{\\infty} \\frac{1}{n^p}$ converges if and only if:',
    options: [
      '$p > 0
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The $p$-series converges iff $p > 1$. For $p \\leq 1$, comparison with the harmonic series shows divergence. For $p > 1$, the integral test proves convergence.',
  },
      '$p \\geq 1
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The $p$-series converges iff $p > 1$. For $p \\leq 1$, comparison with the harmonic series shows divergence. For $p > 1$, the integral test proves convergence.',
  },
      '$p = 2
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The $p$-series converges iff $p > 1$. For $p \\leq 1$, comparison with the harmonic series shows divergence. For $p > 1$, the integral test proves convergence.',
  },
      '$p > 1
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The $p$-series converges iff $p > 1$. For $p \\leq 1$, comparison with the harmonic series shows divergence. For $p > 1$, the integral test proves convergence.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The $p$-series converges iff $p > 1$. For $p \\leq 1$, comparison with the harmonic series shows divergence. For $p > 1$, the integral test proves convergence.',
  },
  {
    id: 'sec19-q4',
    type: 'multiple-choice',
    question: 'Which series converges?',
    options: [
      '$\\sum \\frac{1}{n^2}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$\\sum 1/n^2$ is a $p$-series with $p = 2 > 1$, so it converges. The others are $p \\leq 1$ or comparable to divergent series.',
  },
      '$\\sum \\frac{1}{n}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$\\sum 1/n^2$ is a $p$-series with $p = 2 > 1$, so it converges. The others are $p \\leq 1$ or comparable to divergent series.',
  },
      '$\\sum \\frac{1}{n \\ln n}$ for $n \\geq 2
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$\\sum 1/n^2$ is a $p$-series with $p = 2 > 1$, so it converges. The others are $p \\leq 1$ or comparable to divergent series.',
  },
      '$\\sum \\frac{1}{\\sqrt{n}}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$\\sum 1/n^2$ is a $p$-series with $p = 2 > 1$, so it converges. The others are $p \\leq 1$ or comparable to divergent series.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$\\sum 1/n^2$ is a $p$-series with $p = 2 > 1$, so it converges. The others are $p \\leq 1$ or comparable to divergent series.',
  },
  {
    id: 'sec19-q5',
    type: 'multiple-choice',
    question: 'For series with nonnegative terms, convergence of partial sums to a finite limit is equivalent to:',
    options: [
      'The partial sums being increasing',
      'The partial sums being bounded above',
      'The terms being decreasing',
      'The terms going to zero',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For nonnegative $a_n$, partial sums $s_N$ are increasing. They converge iff bounded above (monotone convergence theorem). Boundedness is the key criterion.',
  },
];
