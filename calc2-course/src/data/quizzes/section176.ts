import type { QuizQuestion } from './types';

export const section176Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The expectation of a continuous random variable with density $f$ is:',
    options: [
      '$E(X) = \\int_{-\\infty}^{\\infty} f(t)\\,dt
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Expectation is the weighted average: $E(X) = \\int_{-\\infty}^{\\infty} t f(t)\\,dt$.',
  },
      '$E(X) = \\int_{-\\infty}^{\\infty} t\\,f(t)\\,dt
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Expectation is the weighted average: $E(X) = \\int_{-\\infty}^{\\infty} t f(t)\\,dt$.',
  },
      '$E(X) = \\max_t f(t)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Expectation is the weighted average: $E(X) = \\int_{-\\infty}^{\\infty} t f(t)\\,dt$.',
  },
      '$E(X) = f(0)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Expectation is the weighted average: $E(X) = \\int_{-\\infty}^{\\infty} t f(t)\\,dt$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Expectation is the weighted average: $E(X) = \\int_{-\\infty}^{\\infty} t f(t)\\,dt$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For constants $a, b$ and random variables $X, Y$, $E(aX + bY)$ equals:',
    options: [
      '$E(X) + E(Y)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Expectation is linear: $E(aX + bY) = aE(X) + bE(Y)$.',
  },
      '$abE(XY)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Expectation is linear: $E(aX + bY) = aE(X) + bE(Y)$.',
  },
      '$(a+b)E(X+Y)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Expectation is linear: $E(aX + bY) = aE(X) + bE(Y)$.',
  },
      '$aE(X) + bE(Y)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Expectation is linear: $E(aX + bY) = aE(X) + bE(Y)$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Expectation is linear: $E(aX + bY) = aE(X) + bE(Y)$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The expectation of the uniform distribution on $[a, b]$ is:',
    options: [
      '$(a + b)/2
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$E(X) = \\int_a^b \\frac{t}{b-a}\\,dt = \\frac{(a+b)}{2}$, the midpoint of the interval.',
  },
      '$a
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$E(X) = \\int_a^b \\frac{t}{b-a}\\,dt = \\frac{(a+b)}{2}$, the midpoint of the interval.',
  },
      '$b
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$E(X) = \\int_a^b \\frac{t}{b-a}\\,dt = \\frac{(a+b)}{2}$, the midpoint of the interval.',
  },
      '$b - a
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$E(X) = \\int_a^b \\frac{t}{b-a}\\,dt = \\frac{(a+b)}{2}$, the midpoint of the interval.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$E(X) = \\int_a^b \\frac{t}{b-a}\\,dt = \\frac{(a+b)}{2}$, the midpoint of the interval.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For the binomial distribution with parameters $n$ and $p$, $E(X)$ equals:',
    options: [
      '$n
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The expected number of successes in $n$ Bernoulli trials with success probability $p$ is $E(X) = np$.',
  },
      '$p
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The expected number of successes in $n$ Bernoulli trials with success probability $p$ is $E(X) = np$.',
  },
      '$np
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The expected number of successes in $n$ Bernoulli trials with success probability $p$ is $E(X) = np$.',
  },
      '$n/p
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The expected number of successes in $n$ Bernoulli trials with success probability $p$ is $E(X) = np$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The expected number of successes in $n$ Bernoulli trials with success probability $p$ is $E(X) = np$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $X$ and $Y$ are independent, then $E(XY)$ equals:',
    options: [
      '$E(X) + E(Y)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For independent random variables, $E(XY) = E(X) \\cdot E(Y)$. This does NOT hold in general.',
  },
      '$E(X + Y)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For independent random variables, $E(XY) = E(X) \\cdot E(Y)$. This does NOT hold in general.',
  },
      '$E(X) \\cdot E(Y)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For independent random variables, $E(XY) = E(X) \\cdot E(Y)$. This does NOT hold in general.',
  },
      '$E(X)/E(Y)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For independent random variables, $E(XY) = E(X) \\cdot E(Y)$. This does NOT hold in general.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For independent random variables, $E(XY) = E(X) \\cdot E(Y)$. This does NOT hold in general.',
  },
];
