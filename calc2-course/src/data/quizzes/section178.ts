import type { QuizQuestion } from './types';

export const section178Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Chebyshev\'s inequality states that for any $c > 0$:',
    options: [
      '$P(|X - E(X)| > c) \\leq \\text{Var}(X)/c^2
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Chebyshev\'s inequality: $P(|X - E(X)| > c) \\leq \\frac{\\text{Var}(X)}{c^2}$.',
  },
      '$P(|X - E(X)| > c) \\geq \\text{Var}(X)/c^2
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Chebyshev\'s inequality: $P(|X - E(X)| > c) \\leq \\frac{\\text{Var}(X)}{c^2}$.',
  },
      '$P(|X - E(X)| > c) = \\text{Var}(X)/c^2
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Chebyshev\'s inequality: $P(|X - E(X)| > c) \\leq \\frac{\\text{Var}(X)}{c^2}$.',
  },
      '$P(|X - E(X)| > c) \\leq c^2/\\text{Var}(X)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Chebyshev\'s inequality: $P(|X - E(X)| > c) \\leq \\frac{\\text{Var}(X)}{c^2}$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Chebyshev\'s inequality: $P(|X - E(X)| > c) \\leq \\frac{\\text{Var}(X)}{c^2}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Using Chebyshev\'s inequality with $c = k\\sigma$, the probability of deviating more than $k$ standard deviations is at most:',
    options: [
      '$1/k^2
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$P(|X - E(X)| > k\\sigma) \\leq \\frac{\\sigma^2}{(k\\sigma)^2} = \\frac{1}{k^2}$.',
  },
      '$k^2
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$P(|X - E(X)| > k\\sigma) \\leq \\frac{\\sigma^2}{(k\\sigma)^2} = \\frac{1}{k^2}$.',
  },
      '$1/k
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$P(|X - E(X)| > k\\sigma) \\leq \\frac{\\sigma^2}{(k\\sigma)^2} = \\frac{1}{k^2}$.',
  },
      '$k/\\sigma
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$P(|X - E(X)| > k\\sigma) \\leq \\frac{\\sigma^2}{(k\\sigma)^2} = \\frac{1}{k^2}$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$P(|X - E(X)| > k\\sigma) \\leq \\frac{\\sigma^2}{(k\\sigma)^2} = \\frac{1}{k^2}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'By Chebyshev\'s inequality, at most what fraction of probability lies more than 2 standard deviations from the mean?',
    options: [
      '$1/2
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'With $k = 2$: $P(|X - \\mu| > 2\\sigma) \\leq 1/4 = 25\\%$.',
  },
      '$1/8
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'With $k = 2$: $P(|X - \\mu| > 2\\sigma) \\leq 1/4 = 25\\%$.',
  },
      '$1/4
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'With $k = 2$: $P(|X - \\mu| > 2\\sigma) \\leq 1/4 = 25\\%$.',
  },
      '$1/16
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'With $k = 2$: $P(|X - \\mu| > 2\\sigma) \\leq 1/4 = 25\\%$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'With $k = 2$: $P(|X - \\mu| > 2\\sigma) \\leq 1/4 = 25\\%$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Chebyshev\'s inequality is remarkable because:',
    options: [
      'It gives exact probabilities',
      'It applies to ANY distribution with finite variance',
      'It applies only to normal distributions',
      'It requires the distribution to be continuous',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Chebyshev\'s inequality is universal: it holds for any distribution with finite variance, regardless of shape.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Compared to Chebyshev\'s bound, the normal distribution has:',
    options: [
      'The same tail probabilities',
      'Much larger tail probabilities',
      'No tail probabilities',
      'Much smaller tail probabilities',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Chebyshev bounds are loose. For normal distributions, $P(|X-\\mu| > 2\\sigma) \\approx 4.6\\%$, much less than Chebyshev\'s 25%.',
  },
];
