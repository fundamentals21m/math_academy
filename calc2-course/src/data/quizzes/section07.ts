import type { QuizQuestion } from './types';

export const section07Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Two elements $x$ and $y$ in a Euclidean space are orthogonal if:',
    options: [
      '$(x, y) = 1
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Two elements are orthogonal (perpendicular) if and only if their inner product is zero: $(x, y) = 0$.',
  },
      '$\\|x\\| = \\|y\\|
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Two elements are orthogonal (perpendicular) if and only if their inner product is zero: $(x, y) = 0$.',
  },
      '$x = y
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Two elements are orthogonal (perpendicular) if and only if their inner product is zero: $(x, y) = 0$.',
  },
      '$(x, y) = 0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Two elements are orthogonal (perpendicular) if and only if their inner product is zero: $(x, y) = 0$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Two elements are orthogonal (perpendicular) if and only if their inner product is zero: $(x, y) = 0$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'An orthonormal set is an orthogonal set where each element has:',
    options: [
      'Norm 1',
      'Norm 0',
      'The same norm',
      'Integer norm',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'An orthonormal set is an orthogonal set where every element has norm 1, i.e., $\\|e_i\\| = 1$ for all elements in the set.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $\\{e_1, \\ldots, e_n\\}$ is an orthogonal set of nonzero elements, what can we conclude?',
    options: [
      'The set is dependent',
      'The set spans $V
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Theorem 1.10 states that every orthogonal set of nonzero elements is linearly independent. To prove dependence, we would need $(x_i, x_j) \\neq 0$ for some $i \\neq j$.',
  },
      'The set contains the zero element',
      'The set is independent',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Theorem 1.10 states that every orthogonal set of nonzero elements is linearly independent. To prove dependence, we would need $(x_i, x_j) \\neq 0$ for some $i \\neq j$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $\\{e_1, \\ldots, e_n\\}$ is an orthonormal basis and $x = \\sum c_i e_i$, then $c_j$ equals:',
    options: [
      '$\\|x\\|
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For an orthonormal basis, the component $c_j = (x, e_j)$ because $(e_j, e_j) = 1$. For a general orthogonal basis, $c_j = \\frac{(x, e_j)}{(e_j, e_j)}$.',
  },
      '$(x, e_j)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For an orthonormal basis, the component $c_j = (x, e_j)$ because $(e_j, e_j) = 1$. For a general orthogonal basis, $c_j = \\frac{(x, e_j)}{(e_j, e_j)}$.',
  },
      '$\\frac{(x, e_j)}{(e_j, e_j)}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For an orthonormal basis, the component $c_j = (x, e_j)$ because $(e_j, e_j) = 1$. For a general orthogonal basis, $c_j = \\frac{(x, e_j)}{(e_j, e_j)}$.',
  },
      '$(e_j, e_j)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For an orthonormal basis, the component $c_j = (x, e_j)$ because $(e_j, e_j) = 1$. For a general orthogonal basis, $c_j = \\frac{(x, e_j)}{(e_j, e_j)}$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For an orthonormal basis, the component $c_j = (x, e_j)$ because $(e_j, e_j) = 1$. For a general orthogonal basis, $c_j = \\frac{(x, e_j)}{(e_j, e_j)}$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Parseval\'s formula for an orthonormal basis states that $\\|x\\|^2$ equals:',
    options: [
      '$\\sum_i (x, e_i)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Parseval\'s formula states $\\|x\\|^2 = \\sum_{i=1}^n |(x, e_i)|^2$. This generalizes the Pythagorean theorem: the square of the norm equals the sum of squares of the components.',
  },
      '$\\max_i |(x, e_i)|
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Parseval\'s formula states $\\|x\\|^2 = \\sum_{i=1}^n |(x, e_i)|^2$. This generalizes the Pythagorean theorem: the square of the norm equals the sum of squares of the components.',
  },
      '$\\sum_i |(x, e_i)|^2
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Parseval\'s formula states $\\|x\\|^2 = \\sum_{i=1}^n |(x, e_i)|^2$. This generalizes the Pythagorean theorem: the square of the norm equals the sum of squares of the components.',
  },
      '$\\prod_i (x, e_i)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Parseval\'s formula states $\\|x\\|^2 = \\sum_{i=1}^n |(x, e_i)|^2$. This generalizes the Pythagorean theorem: the square of the norm equals the sum of squares of the components.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Parseval\'s formula states $\\|x\\|^2 = \\sum_{i=1}^n |(x, e_i)|^2$. This generalizes the Pythagorean theorem: the square of the norm equals the sum of squares of the components.',
  },
];
