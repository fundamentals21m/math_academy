import type { QuizQuestion } from './types';

export const section12Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The dual code $\\mathcal{C}^\\perp$ of a linear $[n, k]$ code $\\mathcal{C}$ is a linear code with parameters:',
    options: [
      '$[n, n-k]
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'If $\\mathcal{C}$ is an $[n, k]$ code, then its dual $\\mathcal{C}^\\perp$ is an $[n, n-k]$ code. The dimensions are complementary within the ambient space.',
  },
      '$[n, k]
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If $\\mathcal{C}$ is an $[n, k]$ code, then its dual $\\mathcal{C}^\\perp$ is an $[n, n-k]$ code. The dimensions are complementary within the ambient space.',
  },
      '$[n-k, k]
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If $\\mathcal{C}$ is an $[n, k]$ code, then its dual $\\mathcal{C}^\\perp$ is an $[n, n-k]$ code. The dimensions are complementary within the ambient space.',
  },
      '$[k, n-k]
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If $\\mathcal{C}$ is an $[n, k]$ code, then its dual $\\mathcal{C}^\\perp$ is an $[n, n-k]$ code. The dimensions are complementary within the ambient space.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If $\\mathcal{C}$ is an $[n, k]$ code, then its dual $\\mathcal{C}^\\perp$ is an $[n, n-k]$ code. The dimensions are complementary within the ambient space.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Two vectors $\\mathbf{x}$ and $\\mathbf{y}$ are orthogonal if:',
    options: [
      '$\\text{wt}(\\mathbf{x}) = \\text{wt}(\\mathbf{y})
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Two vectors are orthogonal when their scalar (inner) product is zero: $\\mathbf{x} \\cdot \\mathbf{y} = x_1y_1 + x_2y_2 + \\cdots + x_ny_n = 0$.',
  },
      '$\\mathbf{x} \\cdot \\mathbf{y} = 0
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Two vectors are orthogonal when their scalar (inner) product is zero: $\\mathbf{x} \\cdot \\mathbf{y} = x_1y_1 + x_2y_2 + \\cdots + x_ny_n = 0$.',
  },
      '$\\mathbf{x} + \\mathbf{y} = 0
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Two vectors are orthogonal when their scalar (inner) product is zero: $\\mathbf{x} \\cdot \\mathbf{y} = x_1y_1 + x_2y_2 + \\cdots + x_ny_n = 0$.',
  },
      '$\\mathbf{x} = \\mathbf{y}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Two vectors are orthogonal when their scalar (inner) product is zero: $\\mathbf{x} \\cdot \\mathbf{y} = x_1y_1 + x_2y_2 + \\cdots + x_ny_n = 0$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Two vectors are orthogonal when their scalar (inner) product is zero: $\\mathbf{x} \\cdot \\mathbf{y} = x_1y_1 + x_2y_2 + \\cdots + x_ny_n = 0$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $\\mathbf{G}$ is a generator matrix for $\\mathcal{C}$, then for the dual code $\\mathcal{C}^\\perp$:',
    options: [
      '$\\mathbf{G}^{-1}$ is a generator matrix',
      '$\\mathbf{G}$ is also a generator matrix',
      '$\\mathbf{G}$ is a parity check matrix',
      '$\\mathbf{G}^t$ is a generator matrix',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The generator matrix $\\mathbf{G}$ of $\\mathcal{C}$ becomes the parity check matrix of $\\mathcal{C}^\\perp$. Similarly, the parity check matrix $\\mathbf{H}$ of $\\mathcal{C}$ becomes the generator matrix of $\\mathcal{C}^\\perp$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A code is self-dual if:',
    options: [
      '$\\mathcal{C}^\\perp \\cap \\mathcal{C} = \\{0\\}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A self-dual code is one that equals its own dual: $\\mathcal{C}^\\perp = \\mathcal{C}$. This requires the code to have dimension $n/2$.',
  },
      'Every code word has even weight',
      '$\\mathcal{C}^\\perp = \\mathcal{C}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A self-dual code is one that equals its own dual: $\\mathcal{C}^\\perp = \\mathcal{C}$. This requires the code to have dimension $n/2$.',
  },
      'The code has minimum distance 4',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A self-dual code is one that equals its own dual: $\\mathcal{C}^\\perp = \\mathcal{C}$. This requires the code to have dimension $n/2$.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'If $\\mathcal{C}$ is a binary self-dual code, its length must be:',
    correctAnswer: 8,
    numericRange: { min: 2, max: 20, precision: 0 },
    difficulty: 'medium',
    explanation: 'For a self-dual code, $k = n - k$, so $n = 2k$ must be even. A self-dual code of length 8 has dimension 4. (Note: Any even number works; 8 is a common example.)',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'For binary vectors, $\\mathbf{x} \\cdot \\mathbf{y} = 0$ if and only if:',
    options: [
      '$\\text{wt}(\\mathbf{x} * \\mathbf{y})$ is odd',
      '$\\mathbf{x} = \\mathbf{y}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For binary vectors, the inner product $\\mathbf{x} \\cdot \\mathbf{y}$ equals the weight of the intersection $\\mathbf{x} * \\mathbf{y}$ modulo 2. It is 0 iff this weight is even.',
  },
      '$\\text{wt}(\\mathbf{x}) = \\text{wt}(\\mathbf{y})
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For binary vectors, the inner product $\\mathbf{x} \\cdot \\mathbf{y}$ equals the weight of the intersection $\\mathbf{x} * \\mathbf{y}$ modulo 2. It is 0 iff this weight is even.',
  },
      '$\\text{wt}(\\mathbf{x} * \\mathbf{y})$ is even',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For binary vectors, the inner product $\\mathbf{x} \\cdot \\mathbf{y}$ equals the weight of the intersection $\\mathbf{x} * \\mathbf{y}$ modulo 2. It is 0 iff this weight is even.',
  },
];
