import type { QuizQuestion } from './types';

export const section29Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Two matrices $A$ and $B$ are similar if:',
    options: [
      '$A = B
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'By definition, $A$ and $B$ are similar if there exists a nonsingular matrix $C$ such that $B = C^{-1}AC$.',
  },
      '$\\det A = \\det B
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'By definition, $A$ and $B$ are similar if there exists a nonsingular matrix $C$ such that $B = C^{-1}AC$.',
  },
      '$A$ and $B$ have the same size',
      '$B = C^{-1}AC$ for some nonsingular $C
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'By definition, $A$ and $B$ are similar if there exists a nonsingular matrix $C$ such that $B = C^{-1}AC$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'By definition, $A$ and $B$ are similar if there exists a nonsingular matrix $C$ such that $B = C^{-1}AC$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Similar matrices represent:',
    options: [
      'The same transformation in different bases',
      'Different linear transformations',
      'Transformations with the same determinant',
      'Orthogonal transformations',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Similar matrices are different matrix representations of the same linear transformation, relative to different choices of basis.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Similar matrices have:',
    options: [
      'Different eigenvalues',
      'Opposite eigenvalues',
      'The same eigenvalues',
      'Eigenvalues that sum to zero',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Similar matrices have the same characteristic polynomial, hence the same eigenvalues. This follows from $\\det(\\lambda I - C^{-1}AC) = \\det(C^{-1}(\\lambda I - A)C) = \\det(\\lambda I - A)$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which property is NOT preserved by similarity?',
    options: [
      'Eigenvalues',
      'Trace',
      'Individual matrix entries',
      'Determinant',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Similar matrices share eigenvalues, determinant, trace, rank, and characteristic polynomial. However, individual entries generally differ (that is the point of changing basis).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'An $n \\times n$ matrix $A$ is diagonalizable if and only if:',
    options: [
      '$\\det A \\neq 0
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'A matrix is diagonalizable if and only if it has $n$ linearly independent eigenvectors (which form a basis). Having $n$ distinct eigenvalues is sufficient but not necessary for this.',
  },
      '$A$ has $n$ linearly independent eigenvectors',
      '$A$ has $n$ distinct eigenvalues',
      '$A$ is symmetric',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'A matrix is diagonalizable if and only if it has $n$ linearly independent eigenvectors (which form a basis). Having $n$ distinct eigenvalues is sufficient but not necessary for this.',
  },
];
