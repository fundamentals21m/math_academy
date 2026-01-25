import type { QuizQuestion } from './types';

export const section04Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the power rule for differentiation?',
    options: [
      '$\\frac{d}{dx}(x^n) = x^{n+1}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The power rule states: $\\frac{d}{dx}(x^n) = nx^{n-1}$. Bring down the exponent and reduce it by 1.',
  },
      '$\\frac{d}{dx}(x^n) = nx^n
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The power rule states: $\\frac{d}{dx}(x^n) = nx^{n-1}$. Bring down the exponent and reduce it by 1.',
  },
      '$\\frac{d}{dx}(x^n) = nx^{n-1}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The power rule states: $\\frac{d}{dx}(x^n) = nx^{n-1}$. Bring down the exponent and reduce it by 1.',
  },
      '$\\frac{d}{dx}(x^n) = x^{n-1}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The power rule states: $\\frac{d}{dx}(x^n) = nx^{n-1}$. Bring down the exponent and reduce it by 1.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The power rule states: $\\frac{d}{dx}(x^n) = nx^{n-1}$. Bring down the exponent and reduce it by 1.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the derivative of $x^3$?',
    options: [
      '$x^2
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Using the power rule: $\\frac{d}{dx}(x^3) = 3x^{3-1} = 3x^2$.',
  },
      '$3x^3
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Using the power rule: $\\frac{d}{dx}(x^3) = 3x^{3-1} = 3x^2$.',
  },
      '$2x^3
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Using the power rule: $\\frac{d}{dx}(x^3) = 3x^{3-1} = 3x^2$.',
  },
      '$3x^2
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Using the power rule: $\\frac{d}{dx}(x^3) = 3x^{3-1} = 3x^2$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Using the power rule: $\\frac{d}{dx}(x^3) = 3x^{3-1} = 3x^2$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'If $y = x^5$, what is the coefficient of $x$ in $\\frac{dy}{dx}$? (The answer is a single number.)',
    correctAnswer: 5,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: '$\\frac{d}{dx}(x^5) = 5x^4$, so the coefficient is $5$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the derivative of $y = x^{-2}$?',
    options: [
      '$2x^{-1}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\frac{d}{dx}(x^{-2}) = -2x^{-2-1} = -2x^{-3}$.',
  },
      '$-2x^{-3}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$\\frac{d}{dx}(x^{-2}) = -2x^{-2-1} = -2x^{-3}$.',
  },
      '$-2x^{-1}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$\\frac{d}{dx}(x^{-2}) = -2x^{-2-1} = -2x^{-3}$.',
  },
      '$2x^{-3}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$\\frac{d}{dx}(x^{-2}) = -2x^{-2-1} = -2x^{-3}$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$\\frac{d}{dx}(x^{-2}) = -2x^{-2-1} = -2x^{-3}$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The derivative of $y = \\sqrt{x} = x^{1/2}$ is:',
    options: [
      '$\\frac{1}{2}x^{-1/2}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\frac{d}{dx}(x^{1/2}) = \\frac{1}{2}x^{1/2 - 1} = \\frac{1}{2}x^{-1/2}$.',
  },
      '$x^{-1/2}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$\\frac{d}{dx}(x^{1/2}) = \\frac{1}{2}x^{1/2 - 1} = \\frac{1}{2}x^{-1/2}$.',
  },
      '$\\frac{1}{2}x^{1/2}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$\\frac{d}{dx}(x^{1/2}) = \\frac{1}{2}x^{1/2 - 1} = \\frac{1}{2}x^{-1/2}$.',
  },
      '$2x^{-1/2}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$\\frac{d}{dx}(x^{1/2}) = \\frac{1}{2}x^{1/2 - 1} = \\frac{1}{2}x^{-1/2}$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$\\frac{d}{dx}(x^{1/2}) = \\frac{1}{2}x^{1/2 - 1} = \\frac{1}{2}x^{-1/2}$.',
  },
];
