import type { QuizQuestion } from './types';

export const section36Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Spectral Theorem for Hermitian operators states that there exist $n$ eigenvectors forming:',
    options: [
      'A linearly independent set',
      'An orthonormal basis',
      'A set spanning only a subspace',
      'A non-orthogonal basis',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Spectral Theorem guarantees that a Hermitian operator on an $n$-dimensional space has $n$ eigenvectors forming an orthonormal basis.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'According to the Spectral Theorem, the matrix of a Hermitian operator relative to an orthonormal eigenbasis is:',
    options: [
      'Upper triangular',
      'The identity matrix',
      'A symmetric matrix',
      'A diagonal matrix',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Relative to an orthonormal basis of eigenvectors, the matrix is $\\Lambda = \\text{diag}(\\lambda_1, \\ldots, \\lambda_n)$ with eigenvalues on the diagonal.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In the proof of the Spectral Theorem, the orthogonal complement $S^\\perp$ is used because:',
    options: [
      'It has dimension $n$',
      'It contains only zero',
      'It is invariant under $T$ for Hermitian $T$',
      'It equals the original space'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'If $u_1$ is an eigenvector, then $T$ maps $S^\\perp = \\{x : (x, u_1) = 0\\}$ into itself because $(T(x), u_1) = (x, T(u_1)) = \\bar{\\lambda_1}(x, u_1) = 0$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The Spectral Theorem applies to finite-dimensional complex spaces because:',
    options: [
      'All matrices are diagonalizable',
      'Hermitian operators are always invertible',
      'The characteristic polynomial always has complex roots',
      'Complex spaces have no eigenvalues',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'By the Fundamental Theorem of Algebra, every polynomial has a complex root, so eigenvalues always exist on complex spaces.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In principal component analysis (PCA), the Spectral Theorem is used because:',
    options: [
      'Covariance matrices are symmetric and can be diagonalized orthogonally',
      'Covariance matrices are skew-symmetric',
      'Covariance matrices are upper triangular',
      'PCA does not use eigenvalues'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Covariance matrices are symmetric, so by the Spectral Theorem they can be diagonalized by an orthogonal matrix. The principal components are the orthonormal eigenvectors.',
  },
];
