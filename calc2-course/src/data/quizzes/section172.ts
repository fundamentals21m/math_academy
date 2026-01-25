import type { QuizQuestion } from './types';

export const section172Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The joint distribution function of $(X, Y)$ is defined as:',
    options: [
      '$F(a, b) = P(X = a, Y = b)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The joint CDF is $F(a, b) = P(X \\leq a, Y \\leq b)$, the probability that $X \\leq a$ AND $Y \\leq b$.',
  },
      '$F(a, b) = P(X \\leq a, Y \\leq b)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The joint CDF is $F(a, b) = P(X \\leq a, Y \\leq b)$, the probability that $X \\leq a$ AND $Y \\leq b$.',
  },
      '$F(a, b) = P(X \\leq a) + P(Y \\leq b)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The joint CDF is $F(a, b) = P(X \\leq a, Y \\leq b)$, the probability that $X \\leq a$ AND $Y \\leq b$.',
  },
      '$F(a, b) = P(X \\leq a) \\cdot P(Y \\leq b)$ always',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The joint CDF is $F(a, b) = P(X \\leq a, Y \\leq b)$, the probability that $X \\leq a$ AND $Y \\leq b$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The probability $P(a < X \\leq b, c < Y \\leq d)$ in terms of the joint distribution $F$ is:',
    options: [
      '$F(b, d) - F(a, c)
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The inclusion-exclusion formula: $P(a < X \\leq b, c < Y \\leq d) = F(b,d) - F(a,d) - F(b,c) + F(a,c)$.',
  },
      '$F(b, d) + F(a, c)
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The inclusion-exclusion formula: $P(a < X \\leq b, c < Y \\leq d) = F(b,d) - F(a,d) - F(b,c) + F(a,c)$.',
  },
      '$F(b, d) \\cdot F(a, c)
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The inclusion-exclusion formula: $P(a < X \\leq b, c < Y \\leq d) = F(b,d) - F(a,d) - F(b,c) + F(a,c)$.',
  },
      '$F(b, d) - F(a, d) - F(b, c) + F(a, c)
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The inclusion-exclusion formula: $P(a < X \\leq b, c < Y \\leq d) = F(b,d) - F(a,d) - F(b,c) + F(a,c)$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The inclusion-exclusion formula: $P(a < X \\leq b, c < Y \\leq d) = F(b,d) - F(a,d) - F(b,c) + F(a,c)$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The marginal distribution $F_X(t)$ is obtained from the joint distribution by:',
    options: [
      '$F_X(t) = F(t, 0)$',
      '$F_X(t) = F(t, t)$',
      '$F_X(t) = \\lim_{b \\to \\infty} F(t, b)$',
      '$F_X(t) = F(0, t)$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The marginal $F_X(t) = P(X \\leq t) = \\lim_{b \\to \\infty} P(X \\leq t, Y \\leq b) = \\lim_{b \\to \\infty} F(t, b)$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Random variables $X$ and $Y$ are independent if and only if:',
    options: [
      '$F(a, b) = F_X(a) + F_Y(b)$ for all $a, b
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Independence means the joint CDF factors: $F(a, b) = F_X(a) \\cdot F_Y(b)$ for all $a, b$.',
  },
      '$F_X(a) = F_Y(b)$ for all $a, b
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Independence means the joint CDF factors: $F(a, b) = F_X(a) \\cdot F_Y(b)$ for all $a, b$.',
  },
      '$F(a, b) = F_X(a) \\cdot F_Y(b)$ for all $a, b
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Independence means the joint CDF factors: $F(a, b) = F_X(a) \\cdot F_Y(b)$ for all $a, b$.',
  },
      '$F(a, b) = 0$ for all $a, b
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Independence means the joint CDF factors: $F(a, b) = F_X(a) \\cdot F_Y(b)$ for all $a, b$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Independence means the joint CDF factors: $F(a, b) = F_X(a) \\cdot F_Y(b)$ for all $a, b$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Knowing only the marginal distributions $F_X$ and $F_Y$:',
    options: [
      'Is not sufficient to determine the joint distribution',
      'Determines independence',
      'Completely determines the joint distribution',
      'Means $X$ and $Y$ are independent'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Marginals alone do not determine the joint distribution. Many different joint distributions can have the same marginals.',
  },
];
