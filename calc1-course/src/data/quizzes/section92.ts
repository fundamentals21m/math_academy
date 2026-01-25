import type { QuizQuestion } from './types';

export const section92Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'An inner product on a real vector space satisfies:',
    options: [
      'Only $\\langle \\mathbf{u}, \\mathbf{v} \\rangle = \\langle \\mathbf{v}, \\mathbf{u} \\rangle$',
      '$\\langle \\mathbf{u}, \\mathbf{v} \\rangle = 0$ always',
      'Only $\\langle \\mathbf{v}, \\mathbf{v} \\rangle \\geq 0$',
      'Symmetry, linearity, and positive definiteness'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Inner product: symmetric, linear, positive definite.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The standard inner product on $\\mathbb{R}^n$ is:',
    options: [
      '$\\mathbf{u} \\cdot \\mathbf{v} = \\sum u_i v_i$',
      '$\\mathbf{u} + \\mathbf{v}$',
      '$\\mathbf{u} \\times \\mathbf{v}$',
      '$|\\mathbf{u}| |\\mathbf{v}|$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Standard inner product = dot product.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The norm induced by an inner product is:',
    options: [
      '$\\langle \\mathbf{v}, \\mathbf{v} \\rangle
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Norm = $\\|\\mathbf{v}\\| = \\sqrt{\\langle \\mathbf{v}, \\mathbf{v} \\rangle}$.',
  },
      '$|\\langle \\mathbf{v}, \\mathbf{v} \\rangle|
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Norm = $\\|\\mathbf{v}\\| = \\sqrt{\\langle \\mathbf{v}, \\mathbf{v} \\rangle}$.',
  },
      '$\\langle \\mathbf{v}, \\mathbf{v} \\rangle^2
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Norm = $\\|\\mathbf{v}\\| = \\sqrt{\\langle \\mathbf{v}, \\mathbf{v} \\rangle}$.',
  },
      '$\\sqrt{\\langle \\mathbf{v}, \\mathbf{v} \\rangle}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Norm = $\\|\\mathbf{v}\\| = \\sqrt{\\langle \\mathbf{v}, \\mathbf{v} \\rangle}$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Norm = $\\|\\mathbf{v}\\| = \\sqrt{\\langle \\mathbf{v}, \\mathbf{v} \\rangle}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A Euclidean space is:',
    options: [
      'Any vector space',
      'A finite-dimensional inner product space over $\\mathbb{R}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Euclidean space: finite-dimensional real inner product space.',
  },
      'Infinite-dimensional only',
      'A space without inner product',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Euclidean space: finite-dimensional real inner product space.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The parallelogram law states:',
    options: [
      '$\\|\\mathbf{u} + \\mathbf{v}\\| = \\|\\mathbf{u}\\| + \\|\\mathbf{v}\\|
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Parallelogram law: sum of squares of diagonals = 2 × sum of squares of sides.',
  },
      '$\\|\\mathbf{u}\\| = \\|\\mathbf{v}\\|
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Parallelogram law: sum of squares of diagonals = 2 × sum of squares of sides.',
  },
      '$\\|\\mathbf{u} + \\mathbf{v}\\|^2 + \\|\\mathbf{u} - \\mathbf{v}\\|^2 = 2\\|\\mathbf{u}\\|^2 + 2\\|\\mathbf{v}\\|^2
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Parallelogram law: sum of squares of diagonals = 2 × sum of squares of sides.',
  },
      '$\\|\\mathbf{u} \\times \\mathbf{v}\\| = \\|\\mathbf{u}\\| \\|\\mathbf{v}\\|
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Parallelogram law: sum of squares of diagonals = 2 × sum of squares of sides.',
  },
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Parallelogram law: sum of squares of diagonals = 2 × sum of squares of sides.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'In standard $\\mathbb{R}^2$, what is $\\|(3, 4)\\|$?',
    correctAnswer: 5,
    numericRange: { min: 4, max: 6, precision: 0 },
    difficulty: 'easy',
    explanation: '$\\sqrt{9 + 16} = 5$.',
  },
];
