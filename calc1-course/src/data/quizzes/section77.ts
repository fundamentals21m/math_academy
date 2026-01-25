import type { QuizQuestion } from './types';

export const section77Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The span of vectors $\\mathbf{v}_1, ..., \\mathbf{v}_k$ is:',
    options: [
      'The set of all linear combinations $c_1 \\mathbf{v}_1 + ... + c_k \\mathbf{v}_k
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Span = all possible linear combinations.',
  },
      'Their sum',
      'Just the vectors themselves',
      'Their product',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Span = all possible linear combinations.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A linear combination of $\\mathbf{u}$ and $\\mathbf{v}$ is:',
    options: [
      '$\\mathbf{u} + \\mathbf{v}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Linear combination: scalar multiples added together.',
  },
      '$\\mathbf{u} \\cdot \\mathbf{v}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Linear combination: scalar multiples added together.',
  },
      '$a\\mathbf{u} + b\\mathbf{v}$ for scalars $a, b
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Linear combination: scalar multiples added together.',
  },
      '$\\mathbf{u}/\\mathbf{v}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Linear combination: scalar multiples added together.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Linear combination: scalar multiples added together.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The span of $(1, 0)$ and $(0, 1)$ in $\\mathbb{R}^2$ is:',
    options: [
      'A line',
      'A point',
      'Empty',
      'All of $\\mathbb{R}^2
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'These standard basis vectors span all of $\\mathbb{R}^2$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'These standard basis vectors span all of $\\mathbb{R}^2$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The span of a single nonzero vector is:',
    options: [
      'A point',
      'A plane',
      'A line through the origin',
      'All of space',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'One vector spans a line (all scalar multiples).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $\\mathbf{w}$ is in span$\\{\\mathbf{v}_1, \\mathbf{v}_2\\}$, then:',
    options: [
      '$\\mathbf{w} = \\mathbf{v}_1
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Being in the span means expressible as a linear combination.',
  },
      '$\\mathbf{w} = \\mathbf{0}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Being in the span means expressible as a linear combination.',
  },
      '$\\mathbf{w} = c_1 \\mathbf{v}_1 + c_2 \\mathbf{v}_2$ for some scalars',
      '$\\mathbf{w}$ is orthogonal to $\\mathbf{v}_1$ and $\\mathbf{v}_2
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Being in the span means expressible as a linear combination.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Being in the span means expressible as a linear combination.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Vectors that span $\\mathbb{R}^n$ are called:',
    options: [
      'Orthogonal',
      'Unit vectors',
      'A spanning set for $\\mathbb{R}^n
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A spanning set generates the entire space.',
  },
      'Perpendicular',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A spanning set generates the entire space.',
  },
];
