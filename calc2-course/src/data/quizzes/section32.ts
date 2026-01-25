import type { QuizQuestion } from './types';

export const section32Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In a complex Euclidean space, the inner product satisfies $(x, y) = \\overline{(y, x)}$. This property is called:',
    options: [
      'Symmetry',
      'Linearity',
      'Hermitian symmetry',
      'Positive definiteness',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Hermitian symmetry generalizes symmetry to complex spaces: $(x, y) = \\overline{(y, x)}$, ensuring $(x, x)$ is always real.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $T(x) = \\lambda x$ where $x$ is an eigenvector, then $\\lambda = $?',
    options: [
      '$\\frac{(T(x), x)}{(x, x)}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'From $T(x) = \\lambda x$, we get $(T(x), x) = (\\lambda x, x) = \\lambda(x, x)$, so $\\lambda = \\frac{(T(x), x)}{(x, x)}$.',
  },
      '$\\frac{(x, T(x))}{(x, x)}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'From $T(x) = \\lambda x$, we get $(T(x), x) = (\\lambda x, x) = \\lambda(x, x)$, so $\\lambda = \\frac{(T(x), x)}{(x, x)}$.',
  },
      '$\\frac{(x, x)}{(T(x), x)}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'From $T(x) = \\lambda x$, we get $(T(x), x) = (\\lambda x, x) = \\lambda(x, x)$, so $\\lambda = \\frac{(T(x), x)}{(x, x)}$.',
  },
      '$(T(x), T(x))
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'From $T(x) = \\lambda x$, we get $(T(x), x) = (\\lambda x, x) = \\lambda(x, x)$, so $\\lambda = \\frac{(T(x), x)}{(x, x)}$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'From $T(x) = \\lambda x$, we get $(T(x), x) = (\\lambda x, x) = \\lambda(x, x)$, so $\\lambda = \\frac{(T(x), x)}{(x, x)}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The conjugate of an eigenvalue $\\lambda$ can be expressed as:',
    options: [
      '$\\bar{\\lambda} = \\frac{(T(x), x)}{(x, x)}$',
      '$\\bar{\\lambda} = (T(x), T(x))$',
      '$\\bar{\\lambda} = \\frac{(x, x)}{(T(x), T(x))}$',
      '$\\bar{\\lambda} = \\frac{(x, T(x))}{(x, x)}$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'From Hermitian symmetry, $\\bar{\\lambda} = \\overline{\\frac{(T(x), x)}{(x, x)}} = \\frac{\\overline{(T(x), x)}}{(x, x)} = \\frac{(x, T(x))}{(x, x)}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'An eigenvalue $\\lambda$ is real if and only if:',
    options: [
      '$(T(x), x) = -(x, T(x))
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$\\lambda$ is real iff $\\lambda = \\bar{\\lambda}$ iff $\\frac{(T(x), x)}{(x, x)} = \\frac{(x, T(x))}{(x, x)}$ iff $(T(x), x) = (x, T(x))$.',
  },
      '$(T(x), x) = (x, T(x))
    correctIndex: 0,
    difficulty: 'hard',
    explanation: '$\\lambda$ is real iff $\\lambda = \\bar{\\lambda}$ iff $\\frac{(T(x), x)}{(x, x)} = \\frac{(x, T(x))}{(x, x)}$ iff $(T(x), x) = (x, T(x))$.',
  },
      '$(T(x), x) = 0
    correctIndex: 0,
    difficulty: 'hard',
    explanation: '$\\lambda$ is real iff $\\lambda = \\bar{\\lambda}$ iff $\\frac{(T(x), x)}{(x, x)} = \\frac{(x, T(x))}{(x, x)}$ iff $(T(x), x) = (x, T(x))$.',
  },
      '$(x, T(x)) = 0
    correctIndex: 0,
    difficulty: 'hard',
    explanation: '$\\lambda$ is real iff $\\lambda = \\bar{\\lambda}$ iff $\\frac{(T(x), x)}{(x, x)} = \\frac{(x, T(x))}{(x, x)}$ iff $(T(x), x) = (x, T(x))$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: '$\\lambda$ is real iff $\\lambda = \\bar{\\lambda}$ iff $\\frac{(T(x), x)}{(x, x)} = \\frac{(x, T(x))}{(x, x)}$ iff $(T(x), x) = (x, T(x))$.',
  },
];
