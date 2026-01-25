import type { QuizQuestion } from './types';

export const section30Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A linear transformation $T: \\mathbf{R}^n \\to \\mathbf{R}^m$ satisfies:',
    options: [
      '$T(x + y) = T(x) + T(y)$ and $T(cx) = cT(x)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Linear transformations preserve addition and scalar multiplication.',
  },
      '$T$ is always invertible',
      '$T(x \\cdot y) = T(x) \\cdot T(y)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Linear transformations preserve addition and scalar multiplication.',
  },
      '$T(x) = x$ for all $x
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Linear transformations preserve addition and scalar multiplication.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Linear transformations preserve addition and scalar multiplication.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Every linear transformation $T: \\mathbf{R}^n \\to \\mathbf{R}^m$ can be represented by:',
    options: [
      'A scalar',
      'A polynomial',
      'An $m \\times n$ matrix',
      'An $n \\times m$ matrix',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Linear maps from $\\mathbf{R}^n$ to $\\mathbf{R}^m$ correspond to $m \\times n$ matrices.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The operator norm of a linear map $T: \\mathbf{R}^n \\to \\mathbf{R}^m$ is defined as:',
    options: [
      '$\\|T\\| = \\|T(0)\\|$',
      '$\\|T\\| = \\sup_{x \\neq 0} \\frac{\\|Tx\\|}{\\|x\\|}$',
      '$\\|T\\| = \\sum |T_{ij}|$',
      '$\\|T\\| = \\det(T)$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The operator norm is the supremum of $\\|Tx\\|/\\|x\\|$ over nonzero $x$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $\\|T\\| \\leq M$, then for all $x$:',
    options: [
      '$\\|Tx\\| \\leq M
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The operator norm bounds the growth: $\\|Tx\\| \\leq \\|T\\| \\cdot \\|x\\|$.',
  },
      '$\\|Tx\\| = M\\|x\\|
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The operator norm bounds the growth: $\\|Tx\\| \\leq \\|T\\| \\cdot \\|x\\|$.',
  },
      '$\\|Tx\\| \\geq M\\|x\\|
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The operator norm bounds the growth: $\\|Tx\\| \\leq \\|T\\| \\cdot \\|x\\|$.',
  },
      '$\\|Tx\\| \\leq M\\|x\\|
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The operator norm bounds the growth: $\\|Tx\\| \\leq \\|T\\| \\cdot \\|x\\|$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The operator norm bounds the growth: $\\|Tx\\| \\leq \\|T\\| \\cdot \\|x\\|$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Every linear transformation on a finite-dimensional space is:',
    options: [
      'Unbounded',
      'Invertible',
      'Discontinuous',
      'Continuous'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'All linear maps on finite-dimensional normed spaces are continuous (bounded).',
  },
];
