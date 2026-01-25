import type { QuizQuestion } from './types';

export const section11Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The nullity of a linear transformation $T$ is defined as:',
    options: [
      'The dimension of the range $T(V)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The nullity is $\\dim N(T)$, the dimension of the null space (kernel) of the transformation.',
  },
      'The dimension of $V
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The nullity is $\\dim N(T)$, the dimension of the null space (kernel) of the transformation.',
  },
      'The dimension of the null space $N(T)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The nullity is $\\dim N(T)$, the dimension of the null space (kernel) of the transformation.',
  },
      'The number of eigenvalues',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The nullity is $\\dim N(T)$, the dimension of the null space (kernel) of the transformation.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The rank of a linear transformation $T$ is defined as:',
    options: [
      'The dimension of the null space',
      'The dimension of the domain $V
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The rank is $\\dim T(V)$, the dimension of the range (image) of the transformation.',
  },
      'The dimension of the range $T(V)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The rank is $\\dim T(V)$, the dimension of the range (image) of the transformation.',
  },
      'The number of zeros in the matrix',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The rank is $\\dim T(V)$, the dimension of the range (image) of the transformation.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Nullity Plus Rank Theorem states that for $T: V \\to W$ with $\\dim V = n$:',
    options: [
      '$\\text{nullity} \\times \\text{rank} = n
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The fundamental theorem states $\\dim N(T) + \\dim T(V) = \\dim V$. Information lost (nullity) plus information preserved (rank) equals the original dimension.',
  },
      '$\\text{nullity} - \\text{rank} = n
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The fundamental theorem states $\\dim N(T) + \\dim T(V) = \\dim V$. Information lost (nullity) plus information preserved (rank) equals the original dimension.',
  },
      '$\\text{nullity} = \\text{rank}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The fundamental theorem states $\\dim N(T) + \\dim T(V) = \\dim V$. Information lost (nullity) plus information preserved (rank) equals the original dimension.',
  },
      '$\\text{nullity} + \\text{rank} = n
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The fundamental theorem states $\\dim N(T) + \\dim T(V) = \\dim V$. Information lost (nullity) plus information preserved (rank) equals the original dimension.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The fundamental theorem states $\\dim N(T) + \\dim T(V) = \\dim V$. Information lost (nullity) plus information preserved (rank) equals the original dimension.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'If $T: \\mathbb{R}^5 \\to \\mathbb{R}^3$ has nullity 2, what is the rank of $T$?',
    correctAnswer: 3,
    numericRange: { min: 0, max: 10, precision: 0 },
    difficulty: 'medium',
    explanation: 'By the Nullity Plus Rank Theorem: $\\text{nullity} + \\text{rank} = \\dim V$, so $2 + \\text{rank} = 5$, giving $\\text{rank} = 3$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For the zero transformation $T(x) = 0$ on an $n$-dimensional space:',
    options: [
      'Nullity is 0, rank is $n
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The zero transformation maps everything to 0, so $N(T) = V$ and $T(V) = \\{0\\}$. Thus nullity = $n$ and rank = 0.',
  },
      'Nullity is $n$, rank is 0',
      'Nullity and rank are both undefined',
      'Nullity is $n/2$, rank is $n/2
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The zero transformation maps everything to 0, so $N(T) = V$ and $T(V) = \\{0\\}$. Thus nullity = $n$ and rank = 0.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The zero transformation maps everything to 0, so $N(T) = V$ and $T(V) = \\{0\\}$. Thus nullity = $n$ and rank = 0.',
  },
];
