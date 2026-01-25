import type { QuizQuestion } from './types';

export const section22Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Bolzano\'s Theorem (Intermediate Value Theorem) states that if $f$ is continuous on $[a,b]$ and $f(a)$ and $f(b)$ have opposite signs, then:',
    options: [
      '$f$ has a maximum on $[a,b]
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The IVT guarantees a root when a continuous function changes sign.',
  },
      '$f$ is differentiable on $(a,b)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The IVT guarantees a root when a continuous function changes sign.',
  },
      '$f(a) = f(b)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The IVT guarantees a root when a continuous function changes sign.',
  },
      'There exists $c \\in (a,b)$ with $f(c) = 0
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The IVT guarantees a root when a continuous function changes sign.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The IVT guarantees a root when a continuous function changes sign.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The IVT can be used to show that $x^3 - x - 1 = 0$ has a root in $[1, 2]$ because:',
    options: [
      '$f(1) > 0$ and $f(2) > 0
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$f(1) = 1 - 1 - 1 = -1 < 0$ and $f(2) = 8 - 2 - 1 = 5 > 0$. By IVT, there is a root.',
  },
      '$f$ is not continuous',
      '$f(1) = -1 < 0$ and $f(2) = 5 > 0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$f(1) = 1 - 1 - 1 = -1 < 0$ and $f(2) = 8 - 2 - 1 = 5 > 0$. By IVT, there is a root.',
  },
      'The equation has no real roots',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$f(1) = 1 - 1 - 1 = -1 < 0$ and $f(2) = 8 - 2 - 1 = 5 > 0$. By IVT, there is a root.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $f$ is continuous on $[a,b]$ and $f(a) < k < f(b)$, then:',
    options: [
      'There exists $c \\in (a,b)$ with $f(c) = k
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The general IVT: continuous functions take all intermediate values.',
  },
      'No $c$ exists with $f(c) = k
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The general IVT: continuous functions take all intermediate values.',
  },
      '$f$ must be increasing',
      '$k$ must equal zero',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The general IVT: continuous functions take all intermediate values.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'For $f(x) = x^2 - 2$ on $[1, 2]$, we have $f(1) = -1$ and $f(2) = 2$. The IVT guarantees a $c$ with $f(c) = 0$. What is this $c$?',
    correctAnswer: 1.414,
    numericRange: { min: 1, max: 2, precision: 3 },
    difficulty: 'medium',
    explanation: '$c^2 = 2$ implies $c = \\sqrt{2} \\approx 1.414$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The IVT requires:',
    options: [
      'Differentiability',
      'The function to be monotonic',
      'Continuity on a closed interval',
      'The function to be polynomial',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The key hypothesis is continuity on a closed interval.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Which function on $[0, 1]$ does NOT satisfy the IVT hypothesis?',
    options: [
      '$f(x) = \\sin x
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$f(x) = 1/x$ is not defined at $x = 0$, so not continuous on $[0,1]$.',
  },
      '$f(x) = x^2
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$f(x) = 1/x$ is not defined at $x = 0$, so not continuous on $[0,1]$.',
  },
      '$f(x) = e^x
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$f(x) = 1/x$ is not defined at $x = 0$, so not continuous on $[0,1]$.',
  },
      '$f(x) = 1/x
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$f(x) = 1/x$ is not defined at $x = 0$, so not continuous on $[0,1]$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$f(x) = 1/x$ is not defined at $x = 0$, so not continuous on $[0,1]$.',
  },
];
