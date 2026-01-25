import type { QuizQuestion } from './types';

export const section53Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A first-order linear ODE has the form:',
    options: [
      '$y\\' = y^2
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'First-order linear: $y\' + P(x)y = Q(x)$.',
  },
      '$y\\'\\' + y = 0
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'First-order linear: $y\' + P(x)y = Q(x)$.',
  },
      '$y\\' + P(x)y = Q(x)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'First-order linear: $y\' + P(x)y = Q(x)$.',
  },
      '$(y\\')^2 = y
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'First-order linear: $y\' + P(x)y = Q(x)$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'First-order linear: $y\' + P(x)y = Q(x)$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The integrating factor for $y\' + P(x)y = Q(x)$ is:',
    options: [
      '$e^{\\int P(x)\\,dx}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Multiply by $\\mu(x) = e^{\\int P(x)\\,dx}$ to make the left side exact.',
  },
      '$e^{P(x)}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Multiply by $\\mu(x) = e^{\\int P(x)\\,dx}$ to make the left side exact.',
  },
      '$P(x)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Multiply by $\\mu(x) = e^{\\int P(x)\\,dx}$ to make the left side exact.',
  },
      '$Q(x)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Multiply by $\\mu(x) = e^{\\int P(x)\\,dx}$ to make the left side exact.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Multiply by $\\mu(x) = e^{\\int P(x)\\,dx}$ to make the left side exact.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For $y\' + 2y = 0$, the integrating factor is:',
    options: [
      '$e^x
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$P(x) = 2$, so $\\mu = e^{\\int 2\\,dx} = e^{2x}$.',
  },
      '$e^{-2x}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$P(x) = 2$, so $\\mu = e^{\\int 2\\,dx} = e^{2x}$.',
  },
      '$2x
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$P(x) = 2$, so $\\mu = e^{\\int 2\\,dx} = e^{2x}$.',
  },
      '$e^{2x}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$P(x) = 2$, so $\\mu = e^{\\int 2\\,dx} = e^{2x}$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$P(x) = 2$, so $\\mu = e^{\\int 2\\,dx} = e^{2x}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The general solution to $y\' = ky$ is:',
    options: [
      '$y = kx + C
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$y\' = ky$ has solution $y = Ce^{kx}$.',
  },
      '$y = Ce^{kx}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$y\' = ky$ has solution $y = Ce^{kx}$.',
  },
      '$y = Ck
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$y\' = ky$ has solution $y = Ce^{kx}$.',
  },
      '$y = e^{kx}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$y\' = ky$ has solution $y = Ce^{kx}$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$y\' = ky$ has solution $y = Ce^{kx}$.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'Solve $y\' = 3y$ with $y(0) = 2$. What is $y(1)$? (Round to 1 decimal)',
    correctAnswer: 40.2,
    numericRange: { min: 38, max: 42, precision: 1 },
    difficulty: 'medium',
    explanation: '$y = 2e^{3x}$. At $x = 1$: $y = 2e^3 \\approx 40.2$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'After multiplying by integrating factor, the left side becomes:',
    options: [
      '$\\mu y\\'
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The integrating factor makes $(\\mu y)\' = \\mu Q$, which we can integrate.',
  },
      '$\\frac{d}{dx}[y]
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The integrating factor makes $(\\mu y)\' = \\mu Q$, which we can integrate.',
  },
      '$\\frac{d}{dx}[\\mu y]
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The integrating factor makes $(\\mu y)\' = \\mu Q$, which we can integrate.',
  },
      '$\\mu + y
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The integrating factor makes $(\\mu y)\' = \\mu Q$, which we can integrate.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The integrating factor makes $(\\mu y)\' = \\mu Q$, which we can integrate.',
  },
];
