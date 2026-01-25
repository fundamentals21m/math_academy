import type { QuizQuestion } from './types';

export const section55Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A linear transformation $T: V \\to W$ is the same as:',
    options: [
      'A ring homomorphism',
      'An $F$-module homomorphism (where $V, W$ are $F$-vector spaces)',
      'A bijection',
      'A field automorphism',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A linear transformation is precisely an $F$-module homomorphism between vector spaces. It preserves addition and scalar multiplication.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $T: V \\to W$ is linear and $V, W$ are finite-dimensional, then $\\dim(V) = $',
    options: [
      '$\\dim(\\ker T) + \\dim(\\text{im } T)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Rank-Nullity Theorem states $\\dim(V) = \\dim(\\ker T) + \\dim(\\text{im } T)$, or nullity$(T)$ + rank$(T) = \\dim(V)$.',
  },
      '$\\dim(\\ker T) \\cdot \\dim(\\text{im } T)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Rank-Nullity Theorem states $\\dim(V) = \\dim(\\ker T) + \\dim(\\text{im } T)$, or nullity$(T)$ + rank$(T) = \\dim(V)$.',
  },
      '$\\dim(W)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Rank-Nullity Theorem states $\\dim(V) = \\dim(\\ker T) + \\dim(\\text{im } T)$, or nullity$(T)$ + rank$(T) = \\dim(V)$.',
  },
      '$\\dim(\\ker T)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Rank-Nullity Theorem states $\\dim(V) = \\dim(\\ker T) + \\dim(\\text{im } T)$, or nullity$(T)$ + rank$(T) = \\dim(V)$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Rank-Nullity Theorem states $\\dim(V) = \\dim(\\ker T) + \\dim(\\text{im } T)$, or nullity$(T)$ + rank$(T) = \\dim(V)$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The matrix of a linear transformation $T: V \\to W$ with respect to bases $\\mathcal{B}$ of $V$ and $\\mathcal{C}$ of $W$:',
    options: [
      'Is unique regardless of basis choice',
      'Depends on the choice of $\\mathcal{B}$ and $\\mathcal{C}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The matrix representation of $T$ depends on the choice of bases for $V$ and $W$. Different bases give different matrices related by change-of-basis matrices.',
  },
      'Is always the identity matrix',
      'Does not exist',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The matrix representation of $T$ depends on the choice of bases for $V$ and $W$. Different bases give different matrices related by change-of-basis matrices.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $A$ and $B$ are $n \\times n$ matrices representing the same linear transformation in different bases, then:',
    options: [
      '$A = B
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Matrices representing the same transformation in different bases are similar: $B = P^{-1}AP$ where $P$ is the change-of-basis matrix.',
  },
      '$A + B = 0
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Matrices representing the same transformation in different bases are similar: $B = P^{-1}AP$ where $P$ is the change-of-basis matrix.',
  },
      '$B = P^{-1}AP$ for some invertible $P
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Matrices representing the same transformation in different bases are similar: $B = P^{-1}AP$ where $P$ is the change-of-basis matrix.',
  },
      '$AB = I
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Matrices representing the same transformation in different bases are similar: $B = P^{-1}AP$ where $P$ is the change-of-basis matrix.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Matrices representing the same transformation in different bases are similar: $B = P^{-1}AP$ where $P$ is the change-of-basis matrix.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The space $\\mathcal{L}(V, W)$ of all linear transformations from $V$ to $W$ (both finite-dimensional over $F$) has dimension:',
    options: [
      '$\\dim(V) + \\dim(W)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$\\mathcal{L}(V, W) \\cong M_{m \\times n}(F)$ where $m = \\dim(W)$, $n = \\dim(V)$. So $\\dim(\\mathcal{L}(V, W)) = mn = \\dim(V) \\cdot \\dim(W)$.',
  },
      '$\\max(\\dim(V), \\dim(W))
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\mathcal{L}(V, W) \\cong M_{m \\times n}(F)$ where $m = \\dim(W)$, $n = \\dim(V)$. So $\\dim(\\mathcal{L}(V, W)) = mn = \\dim(V) \\cdot \\dim(W)$.',
  },
      '$\\dim(V)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\mathcal{L}(V, W) \\cong M_{m \\times n}(F)$ where $m = \\dim(W)$, $n = \\dim(V)$. So $\\dim(\\mathcal{L}(V, W)) = mn = \\dim(V) \\cdot \\dim(W)$.',
  },
      '$\\dim(V) \\cdot \\dim(W)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\mathcal{L}(V, W) \\cong M_{m \\times n}(F)$ where $m = \\dim(W)$, $n = \\dim(V)$. So $\\dim(\\mathcal{L}(V, W)) = mn = \\dim(V) \\cdot \\dim(W)$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\mathcal{L}(V, W) \\cong M_{m \\times n}(F)$ where $m = \\dim(W)$, $n = \\dim(V)$. So $\\dim(\\mathcal{L}(V, W)) = mn = \\dim(V) \\cdot \\dim(W)$.',
  },
];
