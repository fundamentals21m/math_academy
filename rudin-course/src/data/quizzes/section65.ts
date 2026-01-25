import type { QuizQuestion } from './types';

export const section65Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The determinant of a linear transformation $A: \\mathbb{R}^n \\to \\mathbb{R}^n$ can be characterized as:',
    options: [
      'The sum of the diagonal entries',
      'The product of all entries',
      'The largest eigenvalue',
      'The signed ratio of volumes: $\\det(A) = \\text{vol}(A(E)) / \\text{vol}(E)$ for any region $E
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The determinant measures how $A$ scales volumes (with sign indicating orientation). If $E$ is a region with volume $V$, then $A(E)$ has volume $|\\det(A)| \\cdot V$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The determinant measures how $A$ scales volumes (with sign indicating orientation). If $E$ is a region with volume $V$, then $A(E)$ has volume $|\\det(A)| \\cdot V$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The determinant function $\\det: M_n(\\mathbb{R}) \\to \\mathbb{R}$ is:',
    options: [
      'Multilinear and alternating in the rows (or columns)',
      'Always positive',
      'Linear in the matrix entries',
      'Continuous but not differentiable',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The determinant is the unique function that is multilinear (linear in each row), alternating (changes sign when rows are swapped), and satisfies $\\det(I) = 1$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For matrices $A$ and $B$ in $M_n(\\mathbb{R})$, $\\det(AB) = $:',
    options: [
      '$\\det(A) \\det(B)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The determinant is multiplicative: $\\det(AB) = \\det(A)\\det(B)$. This reflects the fact that composing transformations multiplies their volume scaling factors.',
  },
      '$\\det(A) / \\det(B)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The determinant is multiplicative: $\\det(AB) = \\det(A)\\det(B)$. This reflects the fact that composing transformations multiplies their volume scaling factors.',
  },
      '$\\det(A) + \\det(B)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The determinant is multiplicative: $\\det(AB) = \\det(A)\\det(B)$. This reflects the fact that composing transformations multiplies their volume scaling factors.',
  },
      '$\\det(A + B)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The determinant is multiplicative: $\\det(AB) = \\det(A)\\det(B)$. This reflects the fact that composing transformations multiplies their volume scaling factors.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The determinant is multiplicative: $\\det(AB) = \\det(A)\\det(B)$. This reflects the fact that composing transformations multiplies their volume scaling factors.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A matrix $A$ is invertible if and only if:',
    options: [
      '$\\det(A) > 0
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A matrix is invertible iff its determinant is nonzero. When $\\det(A) \\neq 0$, the inverse satisfies $\\det(A^{-1}) = 1/\\det(A)$.',
  },
      '$\\det(A) = 1
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A matrix is invertible iff its determinant is nonzero. When $\\det(A) \\neq 0$, the inverse satisfies $\\det(A^{-1}) = 1/\\det(A)$.',
  },
      '$\\det(A) \\neq 0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A matrix is invertible iff its determinant is nonzero. When $\\det(A) \\neq 0$, the inverse satisfies $\\det(A^{-1}) = 1/\\det(A)$.',
  },
      '$\\det(A) = \\det(A^T)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A matrix is invertible iff its determinant is nonzero. When $\\det(A) \\neq 0$, the inverse satisfies $\\det(A^{-1}) = 1/\\det(A)$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A matrix is invertible iff its determinant is nonzero. When $\\det(A) \\neq 0$, the inverse satisfies $\\det(A^{-1}) = 1/\\det(A)$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For an $n \\times n$ matrix with columns $a_1, \\ldots, a_n$, $|\\det(A)|$ equals:',
    options: [
      'The sum of the lengths $|a_1| + \\cdots + |a_n|
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The absolute value of the determinant gives the volume of the parallelepiped whose edges are the column vectors. The sign indicates orientation.',
  },
      'The product $|a_1| \\cdots |a_n|
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The absolute value of the determinant gives the volume of the parallelepiped whose edges are the column vectors. The sign indicates orientation.',
  },
      'The area of the triangle with vertices $a_1, \\ldots, a_n
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The absolute value of the determinant gives the volume of the parallelepiped whose edges are the column vectors. The sign indicates orientation.',
  },
      'The $n$-dimensional volume of the parallelepiped spanned by $a_1, \\ldots, a_n
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The absolute value of the determinant gives the volume of the parallelepiped whose edges are the column vectors. The sign indicates orientation.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The absolute value of the determinant gives the volume of the parallelepiped whose edges are the column vectors. The sign indicates orientation.',
  },
];
