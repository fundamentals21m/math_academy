import type { QuizQuestion } from './types';

export const section160Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In $n$ Bernoulli trials with success probability $p$, if $(n+1)p$ is NOT an integer, the most probable number of successes is:',
    options: [
      '$np
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'When $(n+1)p$ is not an integer, the unique maximum of the binomial distribution occurs at $k = \\lfloor (n+1)p \\rfloor$.',
  },
      '$(n+1)p
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When $(n+1)p$ is not an integer, the unique maximum of the binomial distribution occurs at $k = \\lfloor (n+1)p \\rfloor$.',
  },
      '$n
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When $(n+1)p$ is not an integer, the unique maximum of the binomial distribution occurs at $k = \\lfloor (n+1)p \\rfloor$.',
  },
      '$\\lfloor (n+1)p \\rfloor
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When $(n+1)p$ is not an integer, the unique maximum of the binomial distribution occurs at $k = \\lfloor (n+1)p \\rfloor$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When $(n+1)p$ is not an integer, the unique maximum of the binomial distribution occurs at $k = \\lfloor (n+1)p \\rfloor$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $(n+1)p$ IS an integer, then the maximum of the binomial distribution occurs at:',
    options: [
      'Two values: $k = (n+1)p$ and $k = (n+1)p - 1
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'When $(n+1)p$ is an integer, the maximum occurs at two consecutive values: $k = (n+1)p$ and $k = (n+1)p - 1$.',
  },
      'A unique value $k = (n+1)p
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'When $(n+1)p$ is an integer, the maximum occurs at two consecutive values: $k = (n+1)p$ and $k = (n+1)p - 1$.',
  },
      'All values of $k
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'When $(n+1)p$ is an integer, the maximum occurs at two consecutive values: $k = (n+1)p$ and $k = (n+1)p - 1$.',
  },
      'Only $k = 0
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'When $(n+1)p$ is an integer, the maximum occurs at two consecutive values: $k = (n+1)p$ and $k = (n+1)p - 1$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'When $(n+1)p$ is an integer, the maximum occurs at two consecutive values: $k = (n+1)p$ and $k = (n+1)p - 1$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'A pair of dice is rolled 28 times. What is the most probable number of sevens? (Probability of rolling 7 is $1/6$)',
    correctAnswer: 4,
    numericRange: { min: 0, max: 28, precision: 0 },
    difficulty: 'medium',
    explanation: '$(n+1)p = 29 \\cdot (1/6) = 29/6 \\approx 4.83$. Since this is not an integer, the mode is $\\lfloor 29/6 \\rfloor = 4$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The ratio $r(k) = f(k)/f(k+1)$ for the binomial distribution is:',
    options: [
      'Constant for all $k
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The ratio $r(k) = \\frac{k+1}{n-k} \\cdot \\frac{1-p}{p}$ is strictly increasing in $k$. This monotonicity is key to finding the mode.',
  },
      'Strictly decreasing in $k
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The ratio $r(k) = \\frac{k+1}{n-k} \\cdot \\frac{1-p}{p}$ is strictly increasing in $k$. This monotonicity is key to finding the mode.',
  },
      'Strictly increasing in $k
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The ratio $r(k) = \\frac{k+1}{n-k} \\cdot \\frac{1-p}{p}$ is strictly increasing in $k$. This monotonicity is key to finding the mode.',
  },
      'Alternating',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The ratio $r(k) = \\frac{k+1}{n-k} \\cdot \\frac{1-p}{p}$ is strictly increasing in $k$. This monotonicity is key to finding the mode.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The most probable number of successes $k^*$ satisfies approximately:',
    options: [
      '$k^* \\approx p
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The mode is close to the expected value $np$. More precisely, $np - q \\leq k^* \\leq np + p$.',
  },
      '$k^* \\approx np
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The mode is close to the expected value $np$. More precisely, $np - q \\leq k^* \\leq np + p$.',
  },
      '$k^* \\approx n
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The mode is close to the expected value $np$. More precisely, $np - q \\leq k^* \\leq np + p$.',
  },
      '$k^* \\approx n/p
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The mode is close to the expected value $np$. More precisely, $np - q \\leq k^* \\leq np + p$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The mode is close to the expected value $np$. More precisely, $np - q \\leq k^* \\leq np + p$.',
  },
];
