import type { QuizQuestion } from './types';

export const section166Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A probability mass function (pmf) must satisfy:',
    options: [
      '$\\sum_k p(x_k) = 0
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A pmf is nonnegative and sums to 1: $p(x_k) \\geq 0$ for all $k$ and $\\sum_k p(x_k) = 1$.',
  },
      '$p(x_k) < 0$ for some $k
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A pmf is nonnegative and sums to 1: $p(x_k) \\geq 0$ for all $k$ and $\\sum_k p(x_k) = 1$.',
  },
      '$\\prod_k p(x_k) = 1
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A pmf is nonnegative and sums to 1: $p(x_k) \\geq 0$ for all $k$ and $\\sum_k p(x_k) = 1$.',
  },
      '$p(x_k) \\geq 0$ and $\\sum_k p(x_k) = 1
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A pmf is nonnegative and sums to 1: $p(x_k) \\geq 0$ for all $k$ and $\\sum_k p(x_k) = 1$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A pmf is nonnegative and sums to 1: $p(x_k) \\geq 0$ for all $k$ and $\\sum_k p(x_k) = 1$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The binomial distribution with parameters $n$ and $p$ models:',
    options: [
      'Waiting time until first success',
      'Number of successes in $n$ independent Bernoulli trials',
      'Uniform distribution on $[0, 1]
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The binomial distribution gives the probability of $k$ successes in $n$ independent trials, each with success probability $p$.',
  },
      'Number of rare events in continuous time',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The binomial distribution gives the probability of $k$ successes in $n$ independent trials, each with success probability $p$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The geometric distribution $P(X = k) = (1-p)^{k-1}p$ models:',
    options: [
      'Number of trials until the first success',
      'Number of successes in $n$ trials',
      'Total number of outcomes',
      'Continuous waiting time'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The geometric distribution models the number of Bernoulli trials needed to get the first success.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The Poisson distribution arises as a limit of the binomial when:',
    options: [
      '$n \\to \\infty$ and $p \\to 1
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The Poisson is a limit of the binomial as $n \\to \\infty$ and $p \\to 0$ such that $np \\to \\lambda$. It models rare events.',
  },
      '$n \\to 0$ and $p \\to 0
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The Poisson is a limit of the binomial as $n \\to \\infty$ and $p \\to 0$ such that $np \\to \\lambda$. It models rare events.',
  },
      '$n$ and $p$ are both fixed',
      '$n \\to \\infty$, $p \\to 0$, with $np \\to \\lambda
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The Poisson is a limit of the binomial as $n \\to \\infty$ and $p \\to 0$ such that $np \\to \\lambda$. It models rare events.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The Poisson is a limit of the binomial as $n \\to \\infty$ and $p \\to 0$ such that $np \\to \\lambda$. It models rare events.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For the Poisson distribution, $P(X \\geq 2)$ equals:',
    options: [
      '$1 - e^{-\\lambda}$',
      '$\\lambda e^{-\\lambda}$',
      '$1 - e^{-\\lambda} - \\lambda e^{-\\lambda}$',
      '$e^{-\\lambda}$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$P(X \\geq 2) = 1 - P(X = 0) - P(X = 1) = 1 - e^{-\\lambda} - \\lambda e^{-\\lambda}$.',
  },
];
