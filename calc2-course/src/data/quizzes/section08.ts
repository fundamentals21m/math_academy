import type { QuizQuestion } from './types';

export const section08Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Gram-Schmidt process takes a sequence of elements and produces:',
    options: [
      'A dependent sequence',
      'An orthogonal sequence spanning the same subspaces',
      'A sequence of unit vectors',
      'A sequence of zero vectors',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Gram-Schmidt process transforms a sequence $x_1, x_2, \\ldots$ into an orthogonal sequence $y_1, y_2, \\ldots$ such that $L(y_1, \\ldots, y_k) = L(x_1, \\ldots, x_k)$ for each $k$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In the Gram-Schmidt process, $y_{r+1}$ is computed by:',
    options: [
      '$y_{r+1} = x_{r+1}
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The formula subtracts from $x_{r+1}$ its projections along each of the previously computed orthogonal vectors $y_1, \\ldots, y_r$.',
  },
      '$y_{r+1} = x_{r+1} - \\sum_{i=1}^r \\frac{(x_{r+1}, y_i)}{(y_i, y_i)} y_i
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The formula subtracts from $x_{r+1}$ its projections along each of the previously computed orthogonal vectors $y_1, \\ldots, y_r$.',
  },
      '$y_{r+1} = \\sum_{i=1}^r x_i
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The formula subtracts from $x_{r+1}$ its projections along each of the previously computed orthogonal vectors $y_1, \\ldots, y_r$.',
  },
      '$y_{r+1} = x_{r+1} / \\|x_{r+1}\\|
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The formula subtracts from $x_{r+1}$ its projections along each of the previously computed orthogonal vectors $y_1, \\ldots, y_r$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The formula subtracts from $x_{r+1}$ its projections along each of the previously computed orthogonal vectors $y_1, \\ldots, y_r$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the projection of $x$ along $y$ (assuming $y \\neq 0$)?',
    options: [
      '$\\frac{(x, y)}{(y, y)} y
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The projection of $x$ along $y$ is $\\frac{(x, y)}{(y, y)} y$. This is the component of $x$ in the direction of $y$.',
  },
      '$(x, y)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The projection of $x$ along $y$ is $\\frac{(x, y)}{(y, y)} y$. This is the component of $x$ in the direction of $y$.',
  },
      '$(x, y) y
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The projection of $x$ along $y$ is $\\frac{(x, y)}{(y, y)} y$. This is the component of $x$ in the direction of $y$.',
  },
      '$\\frac{(x, y)}{\\|y\\|}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The projection of $x$ along $y$ is $\\frac{(x, y)}{(y, y)} y$. This is the component of $x$ in the direction of $y$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The projection of $x$ along $y$ is $\\frac{(x, y)}{(y, y)} y$. This is the component of $x$ in the direction of $y$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If the Gram-Schmidt process yields $y_k = 0$ at some step, what does this indicate?',
    options: [
      'The original vectors $x_1, \\ldots, x_k$ are dependent',
      'The process has failed',
      'The original vectors are orthogonal',
      'The inner product is zero',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'If $y_k = 0$ during Gram-Schmidt, it means $x_k$ lies in the span of $x_1, \\ldots, x_{k-1}$, so these vectors are linearly dependent.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The Legendre polynomials are obtained by applying Gram-Schmidt to $\\{1, t, t^2, \\ldots\\}$ with which inner product?',
    options: [
      '$(f, g) = f(0)g(0)
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The Legendre polynomials are obtained using the inner product $(f, g) = \\int_{-1}^1 f(t)g(t)\\, dt$ on the space of polynomials.',
  },
      '$(f, g) = \\int_0^1 fg\\, dt
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The Legendre polynomials are obtained using the inner product $(f, g) = \\int_{-1}^1 f(t)g(t)\\, dt$ on the space of polynomials.',
  },
      '$(f, g) = f(1)g(1) + f(-1)g(-1)
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The Legendre polynomials are obtained using the inner product $(f, g) = \\int_{-1}^1 f(t)g(t)\\, dt$ on the space of polynomials.',
  },
      '$(f, g) = \\int_{-1}^1 fg\\, dt
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The Legendre polynomials are obtained using the inner product $(f, g) = \\int_{-1}^1 f(t)g(t)\\, dt$ on the space of polynomials.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The Legendre polynomials are obtained using the inner product $(f, g) = \\int_{-1}^1 f(t)g(t)\\, dt$ on the space of polynomials.',
  },
];
