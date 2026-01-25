import type { QuizQuestion } from './types';

export const section162Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A set function is countably additive (σ-additive) if for pairwise disjoint sets $A_1, A_2, \\ldots$:',
    options: [
      '$P(\\bigcup_{k=1}^{\\infty} A_k) = \\sum_{k=1}^{\\infty} P(A_k)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Countable additivity extends finite additivity to infinite unions: $P(\\bigcup_{k=1}^{\\infty} A_k) = \\sum_{k=1}^{\\infty} P(A_k)$ for pairwise disjoint sets.',
  },
      '$P(\\bigcup_{k=1}^{\\infty} A_k) = \\prod_{k=1}^{\\infty} P(A_k)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Countable additivity extends finite additivity to infinite unions: $P(\\bigcup_{k=1}^{\\infty} A_k) = \\sum_{k=1}^{\\infty} P(A_k)$ for pairwise disjoint sets.',
  },
      '$P(\\bigcup_{k=1}^{\\infty} A_k) = \\max_k P(A_k)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Countable additivity extends finite additivity to infinite unions: $P(\\bigcup_{k=1}^{\\infty} A_k) = \\sum_{k=1}^{\\infty} P(A_k)$ for pairwise disjoint sets.',
  },
      '$P(\\bigcup_{k=1}^{\\infty} A_k) = P(A_1)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Countable additivity extends finite additivity to infinite unions: $P(\\bigcup_{k=1}^{\\infty} A_k) = \\sum_{k=1}^{\\infty} P(A_k)$ for pairwise disjoint sets.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Countable additivity extends finite additivity to infinite unions: $P(\\bigcup_{k=1}^{\\infty} A_k) = \\sum_{k=1}^{\\infty} P(A_k)$ for pairwise disjoint sets.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For the geometric distribution, $P(X = k) = (1-p)^{k-1}p$ for $k = 1, 2, 3, \\ldots$. What does $\\sum_{k=1}^{\\infty} P(X = k)$ equal?',
    options: [
      '$0
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$\\sum_{k=1}^{\\infty} (1-p)^{k-1}p = p \\sum_{j=0}^{\\infty} (1-p)^j = p \\cdot \\frac{1}{1-(1-p)} = p \\cdot \\frac{1}{p} = 1$.',
  },
      '$p
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$\\sum_{k=1}^{\\infty} (1-p)^{k-1}p = p \\sum_{j=0}^{\\infty} (1-p)^j = p \\cdot \\frac{1}{1-(1-p)} = p \\cdot \\frac{1}{p} = 1$.',
  },
      '$1
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$\\sum_{k=1}^{\\infty} (1-p)^{k-1}p = p \\sum_{j=0}^{\\infty} (1-p)^j = p \\cdot \\frac{1}{1-(1-p)} = p \\cdot \\frac{1}{p} = 1$.',
  },
      '$\\infty
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$\\sum_{k=1}^{\\infty} (1-p)^{k-1}p = p \\sum_{j=0}^{\\infty} (1-p)^j = p \\cdot \\frac{1}{1-(1-p)} = p \\cdot \\frac{1}{p} = 1$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$\\sum_{k=1}^{\\infty} (1-p)^{k-1}p = p \\sum_{j=0}^{\\infty} (1-p)^j = p \\cdot \\frac{1}{1-(1-p)} = p \\cdot \\frac{1}{p} = 1$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Poisson distribution with parameter $\\lambda$ assigns probability:',
    options: [
      '$P(k) = \\lambda^k / k!
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Poisson distribution is $P(k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$ for $k = 0, 1, 2, \\ldots$',
  },
      '$P(k) = \\lambda^k e^{-\\lambda} / k!
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Poisson distribution is $P(k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$ for $k = 0, 1, 2, \\ldots$',
  },
      '$P(k) = e^{-\\lambda k}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Poisson distribution is $P(k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$ for $k = 0, 1, 2, \\ldots$',
  },
      '$P(k) = \\lambda / k
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Poisson distribution is $P(k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$ for $k = 0, 1, 2, \\ldots$',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Poisson distribution is $P(k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}$ for $k = 0, 1, 2, \\ldots$',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The Poisson probabilities sum to 1 because:',
    options: [
      '$\\sum_{k=0}^{\\infty} \\lambda^k = e^{\\lambda}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$\\sum_{k=0}^{\\infty} \\frac{\\lambda^k e^{-\\lambda}}{k!} = e^{-\\lambda} \\sum_{k=0}^{\\infty} \\frac{\\lambda^k}{k!} = e^{-\\lambda} \\cdot e^{\\lambda} = 1$.',
  },
      '$e^{-\\lambda} = 0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\sum_{k=0}^{\\infty} \\frac{\\lambda^k e^{-\\lambda}}{k!} = e^{-\\lambda} \\sum_{k=0}^{\\infty} \\frac{\\lambda^k}{k!} = e^{-\\lambda} \\cdot e^{\\lambda} = 1$.',
  },
      '$\\lambda = 1$ always',
      '$\\sum_{k=0}^{\\infty} \\frac{\\lambda^k}{k!} = e^{\\lambda}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\sum_{k=0}^{\\infty} \\frac{\\lambda^k e^{-\\lambda}}{k!} = e^{-\\lambda} \\sum_{k=0}^{\\infty} \\frac{\\lambda^k}{k!} = e^{-\\lambda} \\cdot e^{\\lambda} = 1$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\sum_{k=0}^{\\infty} \\frac{\\lambda^k e^{-\\lambda}}{k!} = e^{-\\lambda} \\sum_{k=0}^{\\infty} \\frac{\\lambda^k}{k!} = e^{-\\lambda} \\cdot e^{\\lambda} = 1$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For uncountable sample spaces like $\\mathbb{R}$, which statement is true?',
    options: [
      'All subsets can be assigned probabilities consistently',
      'Probability theory does not apply',
      'Every point has positive probability',
      'We must restrict to a σ-algebra of measurable sets',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'For uncountable spaces, not all subsets can be assigned probabilities consistently. We restrict to a σ-algebra of "measurable" sets, leading to measure theory.',
  },
];
