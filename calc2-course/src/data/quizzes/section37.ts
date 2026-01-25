import type { QuizQuestion } from './types';

export const section37Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'If $(e_1, \\ldots, e_n)$ is a basis for $V$ and $T$ is Hermitian, then $T$ is Hermitian if and only if:',
    options: [
      '$(T(e_i), T(e_j)) = 0$ for $i \\neq j
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The Hermitian condition $(T(x), y) = (x, T(y))$ for all $x, y$ is equivalent to checking it on basis elements only.',
  },
      '$T(e_i) = \\lambda_i e_i$ for all $i
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Hermitian condition $(T(x), y) = (x, T(y))$ for all $x, y$ is equivalent to checking it on basis elements only.',
  },
      '$(T(e_j), e_i) = (e_j, T(e_i))$ for all $i, j
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Hermitian condition $(T(x), y) = (x, T(y))$ for all $x, y$ is equivalent to checking it on basis elements only.',
  },
      '$(e_i, e_j) = \\delta_{ij}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Hermitian condition $(T(x), y) = (x, T(y))$ for all $x, y$ is equivalent to checking it on basis elements only.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Hermitian condition $(T(x), y) = (x, T(y))$ for all $x, y$ is equivalent to checking it on basis elements only.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For an orthonormal basis, $T$ is Hermitian if and only if its matrix $A = (a_{ij})$ satisfies:',
    options: [
      '$a_{ij} = a_{ji}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Relative to an orthonormal basis, $a_{ij} = (T(e_j), e_i)$. The Hermitian condition translates to $a_{ij} = \\bar{a}_{ji}$.',
  },
      '$a_{ij} = \\bar{a}_{ji}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Relative to an orthonormal basis, $a_{ij} = (T(e_j), e_i)$. The Hermitian condition translates to $a_{ij} = \\bar{a}_{ji}$.',
  },
      '$a_{ij} = -\\bar{a}_{ji}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Relative to an orthonormal basis, $a_{ij} = (T(e_j), e_i)$. The Hermitian condition translates to $a_{ij} = \\bar{a}_{ji}$.',
  },
      '$a_{ij} = 0$ for $i \\neq j
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Relative to an orthonormal basis, $a_{ij} = (T(e_j), e_i)$. The Hermitian condition translates to $a_{ij} = \\bar{a}_{ji}$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Relative to an orthonormal basis, $a_{ij} = (T(e_j), e_i)$. The Hermitian condition translates to $a_{ij} = \\bar{a}_{ji}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If the matrix $A = \\begin{bmatrix} 3 & 2+i \\\\ 2-i & 5 \\end{bmatrix}$ represents $T$ in an orthonormal basis, then $T$ is:',
    options: [
      'Hermitian',
      'Skew-Hermitian',
      'Unitary',
      'Neither Hermitian nor skew-Hermitian',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Check: $a_{12} = 2+i$ and $\\bar{a}_{21} = \\overline{2-i} = 2+i$. Since $a_{ij} = \\bar{a}_{ji}$ for all entries, $A$ is Hermitian.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For an orthonormal basis, $T$ is skew-Hermitian if and only if its matrix satisfies:',
    options: [
      '$a_{ij} = \\bar{a}_{ji}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The skew-Hermitian condition $(T(x), y) = -(x, T(y))$ translates to $a_{ij} = -\\bar{a}_{ji}$ for the matrix relative to an orthonormal basis.',
  },
      '$a_{ij} = a_{ji}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The skew-Hermitian condition $(T(x), y) = -(x, T(y))$ translates to $a_{ij} = -\\bar{a}_{ji}$ for the matrix relative to an orthonormal basis.',
  },
      '$a_{ii} = 1
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The skew-Hermitian condition $(T(x), y) = -(x, T(y))$ translates to $a_{ij} = -\\bar{a}_{ji}$ for the matrix relative to an orthonormal basis.',
  },
      '$a_{ij} = -\\bar{a}_{ji}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The skew-Hermitian condition $(T(x), y) = -(x, T(y))$ translates to $a_{ij} = -\\bar{a}_{ji}$ for the matrix relative to an orthonormal basis.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The skew-Hermitian condition $(T(x), y) = -(x, T(y))$ translates to $a_{ij} = -\\bar{a}_{ji}$ for the matrix relative to an orthonormal basis.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The matrix characterization theorem requires an orthonormal basis because:',
    options: [
      'Only orthonormal bases exist',
      'Non-orthonormal bases are linearly dependent',
      'The inner product formula $(T(e_j), e_i) = a_{ij}$ uses orthonormality',
      'Hermitian matrices are always diagonal',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'When the basis is orthonormal, $(T(e_j), e_i) = \\sum_k a_{kj}(e_k, e_i) = a_{ij}$. This simple formula fails without orthonormality.',
  },
];
