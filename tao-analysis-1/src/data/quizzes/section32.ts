import type { QuizQuestion } from './types';

export const section32Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The ratio test states that $\\sum a_n$ converges absolutely if:',
    options: [
      '$\\lim_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right| = 1
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The ratio test: if $\\limsup |a_{n+1}/a_n| < 1$, the series converges absolutely. If $\\liminf |a_{n+1}/a_n| > 1$, it diverges. At $1$, the test is inconclusive.',
  },
      '$\\limsup_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right| \\leq 1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The ratio test: if $\\limsup |a_{n+1}/a_n| < 1$, the series converges absolutely. If $\\liminf |a_{n+1}/a_n| > 1$, it diverges. At $1$, the test is inconclusive.',
  },
      '$\\liminf_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right| < 1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The ratio test: if $\\limsup |a_{n+1}/a_n| < 1$, the series converges absolutely. If $\\liminf |a_{n+1}/a_n| > 1$, it diverges. At $1$, the test is inconclusive.',
  },
      '$\\limsup_{n \\to \\infty} \\left|\\frac{a_{n+1}}{a_n}\\right| < 1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The ratio test: if $\\limsup |a_{n+1}/a_n| < 1$, the series converges absolutely. If $\\liminf |a_{n+1}/a_n| > 1$, it diverges. At $1$, the test is inconclusive.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The ratio test: if $\\limsup |a_{n+1}/a_n| < 1$, the series converges absolutely. If $\\liminf |a_{n+1}/a_n| > 1$, it diverges. At $1$, the test is inconclusive.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The root test states that $\\sum a_n$ converges absolutely if:',
    options: [
      '$\\limsup_{n \\to \\infty} |a_n|^{1/n} < 1
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The root test: if $\\limsup |a_n|^{1/n} < 1$, the series converges absolutely. If $\\limsup |a_n|^{1/n} > 1$, it diverges. At $1$, the test is inconclusive.',
  },
      '$\\liminf_{n \\to \\infty} |a_n|^{1/n} < 1
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The root test: if $\\limsup |a_n|^{1/n} < 1$, the series converges absolutely. If $\\limsup |a_n|^{1/n} > 1$, it diverges. At $1$, the test is inconclusive.',
  },
      '$\\limsup_{n \\to \\infty} |a_n|^{1/n} \\leq 1
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The root test: if $\\limsup |a_n|^{1/n} < 1$, the series converges absolutely. If $\\limsup |a_n|^{1/n} > 1$, it diverges. At $1$, the test is inconclusive.',
  },
      '$\\lim_{n \\to \\infty} |a_n|^{1/n} = 1
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The root test: if $\\limsup |a_n|^{1/n} < 1$, the series converges absolutely. If $\\limsup |a_n|^{1/n} > 1$, it diverges. At $1$, the test is inconclusive.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The root test: if $\\limsup |a_n|^{1/n} < 1$, the series converges absolutely. If $\\limsup |a_n|^{1/n} > 1$, it diverges. At $1$, the test is inconclusive.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For the series $\\sum_{n=1}^{\\infty} \\frac{n!}{n^n}$, the ratio test gives:',
    options: [
      'Divergence',
      'Convergence (ratio limit is $1/e < 1$)',
      'Inconclusive',
      'Conditional convergence',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$\\frac{a_{n+1}}{a_n} = \\frac{(n+1)!}{(n+1)^{n+1}} \\cdot \\frac{n^n}{n!} = \\frac{n^n}{(n+1)^n} = \\left(\\frac{n}{n+1}\\right)^n \\to e^{-1} < 1$.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'For $\\sum_{n=0}^{\\infty} \\frac{x^n}{n!}$, the root test limit $\\limsup |a_n|^{1/n}$ equals what value (for any fixed $x$)?',
    correctAnswer: 0,
    numericRange: { min: 0, max: 1, precision: 2 },
    difficulty: 'hard',
    explanation: '$|a_n|^{1/n} = \\frac{|x|}{(n!)^{1/n}}$. Since $(n!)^{1/n} \\to \\infty$ (by Stirling), this limit is $0$ for any fixed $x$. So the series converges for all $x$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For the $p$-series $\\sum \\frac{1}{n^p}$, the ratio test is:',
    options: [
      'Shows convergence for $p > 1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$\\frac{a_{n+1}}{a_n} = \\left(\\frac{n}{n+1}\\right)^p \\to 1$ for all $p$. The ratio test is inconclusive; we need other methods (integral test, comparison).',
  },
      'Shows divergence for $p \\leq 1
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\frac{a_{n+1}}{a_n} = \\left(\\frac{n}{n+1}\\right)^p \\to 1$ for all $p$. The ratio test is inconclusive; we need other methods (integral test, comparison).',
  },
      'Inconclusive (limit equals $1$)',
      'Never applicable',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\frac{a_{n+1}}{a_n} = \\left(\\frac{n}{n+1}\\right)^p \\to 1$ for all $p$. The ratio test is inconclusive; we need other methods (integral test, comparison).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Comparing the root and ratio tests, which statement is true?',
    options: [
      'The root test is at least as powerful as the ratio test',
      'They are equivalent in all cases',
      'The ratio test is more powerful than the root test',
      'Neither can determine convergence when the other fails',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Whenever the ratio test gives a conclusive answer, so does the root test. But there exist series where the root test works but the ratio test fails (is inconclusive).',
  },
];
