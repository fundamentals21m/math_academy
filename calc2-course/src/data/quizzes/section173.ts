import type { QuizQuestion } from './types';

export const section173Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'For discrete $(X, Y)$, the joint pmf is $p(x, y) =$',
    options: [
      '$P(X = x, Y = y)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The joint pmf gives the probability of both $X = x$ AND $Y = y$: $p(x, y) = P(X = x, Y = y)$.',
  },
      '$P(X \\leq x, Y \\leq y)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The joint pmf gives the probability of both $X = x$ AND $Y = y$: $p(x, y) = P(X = x, Y = y)$.',
  },
      '$P(X = x) + P(Y = y)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The joint pmf gives the probability of both $X = x$ AND $Y = y$: $p(x, y) = P(X = x, Y = y)$.',
  },
      '$P(X = x) \\cdot P(Y = y)$ always',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The joint pmf gives the probability of both $X = x$ AND $Y = y$: $p(x, y) = P(X = x, Y = y)$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The marginal pmf $p_X(x_i)$ is obtained from the joint pmf by:',
    options: [
      '$p_X(x_i) = p(x_i, 0)$',
      '$p_X(x_i) = \\prod_j p(x_i, y_j)$',
      '$p_X(x_i) = \\sum_j p(x_i, y_j)$',
      '$p_X(x_i) = p(x_i, x_i)$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Sum over all values of $Y$: $p_X(x_i) = P(X = x_i) = \\sum_j p(x_i, y_j)$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The conditional pmf of $X$ given $Y = y_j$ is:',
    options: [
      '$p(x_i, y_j)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Conditional probability: $P(X = x_i \\mid Y = y_j) = \\frac{p(x_i, y_j)}{p_Y(y_j)}$.',
  },
      '$p(x_i, y_j) / p_Y(y_j)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Conditional probability: $P(X = x_i \\mid Y = y_j) = \\frac{p(x_i, y_j)}{p_Y(y_j)}$.',
  },
      '$p(x_i, y_j) / p_X(x_i)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Conditional probability: $P(X = x_i \\mid Y = y_j) = \\frac{p(x_i, y_j)}{p_Y(y_j)}$.',
  },
      '$p_X(x_i) \\cdot p_Y(y_j)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Conditional probability: $P(X = x_i \\mid Y = y_j) = \\frac{p(x_i, y_j)}{p_Y(y_j)}$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Conditional probability: $P(X = x_i \\mid Y = y_j) = \\frac{p(x_i, y_j)}{p_Y(y_j)}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For two fair dice rolls $X$ and $Y$, the joint pmf $p(i, j) =$',
    options: [
      '$1/6
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Each of the 36 pairs $(i, j)$ with $i, j \\in \\{1, \\ldots, 6\\}$ has equal probability $1/36$.',
  },
      '$1/36
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Each of the 36 pairs $(i, j)$ with $i, j \\in \\{1, \\ldots, 6\\}$ has equal probability $1/36$.',
  },
      '$1/12
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Each of the 36 pairs $(i, j)$ with $i, j \\in \\{1, \\ldots, 6\\}$ has equal probability $1/36$.',
  },
      '$(i + j)/36
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Each of the 36 pairs $(i, j)$ with $i, j \\in \\{1, \\ldots, 6\\}$ has equal probability $1/36$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Each of the 36 pairs $(i, j)$ with $i, j \\in \\{1, \\ldots, 6\\}$ has equal probability $1/36$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For discrete random variables, $X$ and $Y$ are independent iff:',
    options: [
      '$p(x_i, y_j) = p_X(x_i) + p_Y(y_j)$ for all $i, j
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Independence: the joint pmf factors into the product of marginals for ALL pairs $(x_i, y_j)$.',
  },
      '$p(x_i, y_j) = 0$ for all $i, j
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Independence: the joint pmf factors into the product of marginals for ALL pairs $(x_i, y_j)$.',
  },
      '$p_X(x_i) = p_Y(y_j)$ for all $i, j
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Independence: the joint pmf factors into the product of marginals for ALL pairs $(x_i, y_j)$.',
  },
      '$p(x_i, y_j) = p_X(x_i) \\cdot p_Y(y_j)$ for all $i, j
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Independence: the joint pmf factors into the product of marginals for ALL pairs $(x_i, y_j)$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Independence: the joint pmf factors into the product of marginals for ALL pairs $(x_i, y_j)$.',
  },
];
