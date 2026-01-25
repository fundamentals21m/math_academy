import type { QuizQuestion } from './types';

export const section159Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In Bernoulli trials, each trial has:',
    options: [
      'Multiple possible outcomes',
      'Outcomes that depend on previous trials',
      'Equally likely outcomes only',
      'Exactly two outcomes: success with probability $p$ and failure with probability $q = 1-p
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Bernoulli trials are repeated independent trials with two outcomes: success (probability $p$) and failure (probability $q = 1-p$).',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Bernoulli trials are repeated independent trials with two outcomes: success (probability $p$) and failure (probability $q = 1-p$).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The probability of exactly $k$ successes in $n$ Bernoulli trials is given by:',
    options: [
      '$\\binom{n}{k} p^k q^{n-k}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Bernoulli\'s formula: $P(\\text{exactly } k \\text{ successes}) = \\binom{n}{k} p^k q^{n-k}$, where $\\binom{n}{k}$ counts the arrangements.',
  },
      '$p^k q^{n-k}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Bernoulli\'s formula: $P(\\text{exactly } k \\text{ successes}) = \\binom{n}{k} p^k q^{n-k}$, where $\\binom{n}{k}$ counts the arrangements.',
  },
      '$\\binom{n}{k} p^n
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Bernoulli\'s formula: $P(\\text{exactly } k \\text{ successes}) = \\binom{n}{k} p^k q^{n-k}$, where $\\binom{n}{k}$ counts the arrangements.',
  },
      '$n p^k
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Bernoulli\'s formula: $P(\\text{exactly } k \\text{ successes}) = \\binom{n}{k} p^k q^{n-k}$, where $\\binom{n}{k}$ counts the arrangements.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Bernoulli\'s formula: $P(\\text{exactly } k \\text{ successes}) = \\binom{n}{k} p^k q^{n-k}$, where $\\binom{n}{k}$ counts the arrangements.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The binomial distribution satisfies $\\sum_{k=0}^{n} \\binom{n}{k} p^k q^{n-k} =$',
    options: [
      '$0
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The sum equals $(p + q)^n = 1^n = 1$ by the binomial theorem. This confirms the probabilities sum to 1 as required.',
  },
      '$n
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The sum equals $(p + q)^n = 1^n = 1$ by the binomial theorem. This confirms the probabilities sum to 1 as required.',
  },
      '$1
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The sum equals $(p + q)^n = 1^n = 1$ by the binomial theorem. This confirms the probabilities sum to 1 as required.',
  },
      '$pq
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The sum equals $(p + q)^n = 1^n = 1$ by the binomial theorem. This confirms the probabilities sum to 1 as required.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The sum equals $(p + q)^n = 1^n = 1$ by the binomial theorem. This confirms the probabilities sum to 1 as required.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'An unbiased coin is tossed 4 times. What is the probability of exactly 2 heads? Express as a fraction with denominator 16. Enter the numerator.',
    correctAnswer: 6,
    numericRange: { min: 0, max: 16, precision: 0 },
    difficulty: 'medium',
    explanation: '$P(\\text{2 heads}) = \\binom{4}{2} (1/2)^2 (1/2)^2 = 6 \\cdot 1/16 = 6/16$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The probability of at least $r$ successes in $n$ Bernoulli trials equals:',
    options: [
      '$\\sum_{k=0}^{r-1} \\binom{n}{k} p^k q^{n-k}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '"At least $r$" means $k = r, r+1, \\ldots, n$, so we sum: $\\sum_{k=r}^{n} \\binom{n}{k} p^k q^{n-k}$.',
  },
      '$\\binom{n}{r} p^r q^{n-r}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '"At least $r$" means $k = r, r+1, \\ldots, n$, so we sum: $\\sum_{k=r}^{n} \\binom{n}{k} p^k q^{n-k}$.',
  },
      '$1 - p^r
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '"At least $r$" means $k = r, r+1, \\ldots, n$, so we sum: $\\sum_{k=r}^{n} \\binom{n}{k} p^k q^{n-k}$.',
  },
      '$\\sum_{k=r}^{n} \\binom{n}{k} p^k q^{n-k}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '"At least $r$" means $k = r, r+1, \\ldots, n$, so we sum: $\\sum_{k=r}^{n} \\binom{n}{k} p^k q^{n-k}$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '"At least $r$" means $k = r, r+1, \\ldots, n$, so we sum: $\\sum_{k=r}^{n} \\binom{n}{k} p^k q^{n-k}$.',
  },
];
