import type { QuizQuestion } from './types';

export const section16Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the derivative of $\\ln(x)$?',
    options: [
      '$\\ln(x)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$\\frac{d}{dx}\\ln(x) = \\frac{1}{x}$.',
  },
      '$e^x
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\frac{d}{dx}\\ln(x) = \\frac{1}{x}$.',
  },
      '$\\frac{1}{x}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\frac{d}{dx}\\ln(x) = \\frac{1}{x}$.',
  },
      '$x\\ln(x)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\frac{d}{dx}\\ln(x) = \\frac{1}{x}$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\frac{d}{dx}\\ln(x) = \\frac{1}{x}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $\\ln(x)$ is the inverse of $e^x$, then $\\ln(e^5) = ?$',
    options: [
      '$5
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Since $\\ln$ and $e^x$ are inverses: $\\ln(e^5) = 5$.',
  },
      '$e^5
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Since $\\ln$ and $e^x$ are inverses: $\\ln(e^5) = 5$.',
  },
      '$\\ln(5)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Since $\\ln$ and $e^x$ are inverses: $\\ln(e^5) = 5$.',
  },
      '$1
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Since $\\ln$ and $e^x$ are inverses: $\\ln(e^5) = 5$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Since $\\ln$ and $e^x$ are inverses: $\\ln(e^5) = 5$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is $\\frac{d}{dx}\\ln(2x)$?',
    options: [
      '$\\frac{2}{x}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By the chain rule: $\\frac{d}{dx}\\ln(2x) = \\frac{1}{2x} \\cdot 2 = \\frac{1}{x}$. Alternatively, $\\ln(2x) = \\ln(2) + \\ln(x)$.',
  },
      '$\\frac{1}{x}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By the chain rule: $\\frac{d}{dx}\\ln(2x) = \\frac{1}{2x} \\cdot 2 = \\frac{1}{x}$. Alternatively, $\\ln(2x) = \\ln(2) + \\ln(x)$.',
  },
      '$\\frac{1}{2x}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By the chain rule: $\\frac{d}{dx}\\ln(2x) = \\frac{1}{2x} \\cdot 2 = \\frac{1}{x}$. Alternatively, $\\ln(2x) = \\ln(2) + \\ln(x)$.',
  },
      '$\\frac{2}{2x}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By the chain rule: $\\frac{d}{dx}\\ln(2x) = \\frac{1}{2x} \\cdot 2 = \\frac{1}{x}$. Alternatively, $\\ln(2x) = \\ln(2) + \\ln(x)$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By the chain rule: $\\frac{d}{dx}\\ln(2x) = \\frac{1}{2x} \\cdot 2 = \\frac{1}{x}$. Alternatively, $\\ln(2x) = \\ln(2) + \\ln(x)$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Logarithmic differentiation is useful when:',
    options: [
      'The function is a simple polynomial',
      'The function is constant',
      'The derivative is already known',
      'The function involves products, quotients, or powers of variable expressions',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Taking logarithms converts products to sums, making complex derivatives easier to compute.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For $y = x^x$, logarithmic differentiation gives $\\frac{dy}{dx} = ?$',
    options: [
      '$x \\cdot x^{x-1}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Taking $\\ln$: $\\ln(y) = x\\ln(x)$. Differentiating: $\\frac{y\'}{y} = \\ln(x) + 1$, so $y\' = x^x(\\ln(x) + 1)$.',
  },
      '$x^x \\cdot \\ln(x)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Taking $\\ln$: $\\ln(y) = x\\ln(x)$. Differentiating: $\\frac{y\'}{y} = \\ln(x) + 1$, so $y\' = x^x(\\ln(x) + 1)$.',
  },
      '$x^x(\\ln(x) + 1)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Taking $\\ln$: $\\ln(y) = x\\ln(x)$. Differentiating: $\\frac{y\'}{y} = \\ln(x) + 1$, so $y\' = x^x(\\ln(x) + 1)$.',
  },
      '$x^{x+1}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Taking $\\ln$: $\\ln(y) = x\\ln(x)$. Differentiating: $\\frac{y\'}{y} = \\ln(x) + 1$, so $y\' = x^x(\\ln(x) + 1)$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Taking $\\ln$: $\\ln(y) = x\\ln(x)$. Differentiating: $\\frac{y\'}{y} = \\ln(x) + 1$, so $y\' = x^x(\\ln(x) + 1)$.',
  },
];
