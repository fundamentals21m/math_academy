import type { QuizQuestion } from './types';

export const section180Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Central Limit Theorem states that the standardized sum $Z_n = \\frac{S_n - nm}{\\sigma\\sqrt{n}}$ converges in distribution to which distribution as $n \\to \\infty$?',
    options: [
      'Exponential distribution',
      'Uniform distribution',
      'Standard normal distribution',
      'Poisson distribution',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Central Limit Theorem states that the standardized sum converges to the standard normal distribution $\\Phi(t) = \\frac{1}{\\sqrt{2\\pi}} \\int_{-\\infty}^t e^{-u^2/2}\\,du$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For the CLT to apply, which conditions must the random variables $X_1, X_2, \\ldots, X_n$ satisfy?',
    options: [
      'They must be normally distributed',
      'They must have variance equal to 1',
      'They must be discrete random variables',
      'They must be independent with the same distribution and finite variance',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The CLT requires independence, identical distribution, and finite variance $\\sigma^2 > 0$. Remarkably, the individual distribution can be any distribution meeting these criteria.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For a large $n$, the sum $S_n = X_1 + X_2 + \\cdots + X_n$ is approximately normal with mean $nm$ and variance:',
    options: [
      '$n\\sigma^2
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'When $X_i$ are i.i.d. with mean $m$ and variance $\\sigma^2$, the sum $S_n$ has variance $n\\sigma^2$ (variances add for independent variables).',
  },
      '$\\sigma^2
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'When $X_i$ are i.i.d. with mean $m$ and variance $\\sigma^2$, the sum $S_n$ has variance $n\\sigma^2$ (variances add for independent variables).',
  },
      '$\\sigma^2/n
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'When $X_i$ are i.i.d. with mean $m$ and variance $\\sigma^2$, the sum $S_n$ has variance $n\\sigma^2$ (variances add for independent variables).',
  },
      '$n^2\\sigma^2
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'When $X_i$ are i.i.d. with mean $m$ and variance $\\sigma^2$, the sum $S_n$ has variance $n\\sigma^2$ (variances add for independent variables).',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'When $X_i$ are i.i.d. with mean $m$ and variance $\\sigma^2$, the sum $S_n$ has variance $n\\sigma^2$ (variances add for independent variables).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In the normal approximation to the binomial distribution, the continuity correction involves adding or subtracting:',
    options: [
      '$\\pm 1
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The continuity correction of $\\pm 1/2$ improves accuracy when approximating a discrete distribution (binomial) by a continuous one (normal).',
  },
      '$\\pm 1/2
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The continuity correction of $\\pm 1/2$ improves accuracy when approximating a discrete distribution (binomial) by a continuous one (normal).',
  },
      '$\\pm \\sigma
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The continuity correction of $\\pm 1/2$ improves accuracy when approximating a discrete distribution (binomial) by a continuous one (normal).',
  },
      '$\\pm 1/n
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The continuity correction of $\\pm 1/2$ improves accuracy when approximating a discrete distribution (binomial) by a continuous one (normal).',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The continuity correction of $\\pm 1/2$ improves accuracy when approximating a discrete distribution (binomial) by a continuous one (normal).',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'A fair coin is tossed 100 times. Using the CLT, what is the standard deviation of the number of heads?',
    correctAnswer: 5,
    numericRange: { min: 0, max: 50, precision: 0 },
    difficulty: 'easy',
    explanation: 'For a binomial with $n = 100$ and $p = 1/2$, $\\sigma = \\sqrt{npq} = \\sqrt{100 \\cdot 0.5 \\cdot 0.5} = \\sqrt{25} = 5$.',
  },
];
