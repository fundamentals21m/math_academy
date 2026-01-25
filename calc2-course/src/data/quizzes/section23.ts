import type { QuizQuestion } from './types';

export const section23Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The product formula for determinants states that $\\det(AB) = $',
    options: [
      '$\\det A + \\det B
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The fundamental product formula states that $\\det(AB) = (\\det A)(\\det B)$ for any two $n \\times n$ matrices $A$ and $B$.',
  },
      '$\\det(A + B)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The fundamental product formula states that $\\det(AB) = (\\det A)(\\det B)$ for any two $n \\times n$ matrices $A$ and $B$.',
  },
      '$(\\det A)(\\det B)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The fundamental product formula states that $\\det(AB) = (\\det A)(\\det B)$ for any two $n \\times n$ matrices $A$ and $B$.',
  },
      '$\\det A - \\det B
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The fundamental product formula states that $\\det(AB) = (\\det A)(\\det B)$ for any two $n \\times n$ matrices $A$ and $B$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The fundamental product formula states that $\\det(AB) = (\\det A)(\\det B)$ for any two $n \\times n$ matrices $A$ and $B$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A matrix $A$ is invertible if and only if:',
    options: [
      '$\\det A = -1
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A matrix is invertible if and only if its determinant is nonzero. When $\\det A = 0$, the rows are linearly dependent and no inverse exists.',
  },
      '$\\det A = 1
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A matrix is invertible if and only if its determinant is nonzero. When $\\det A = 0$, the rows are linearly dependent and no inverse exists.',
  },
      '$\\det A > 0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A matrix is invertible if and only if its determinant is nonzero. When $\\det A = 0$, the rows are linearly dependent and no inverse exists.',
  },
      '$\\det A \\neq 0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A matrix is invertible if and only if its determinant is nonzero. When $\\det A = 0$, the rows are linearly dependent and no inverse exists.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A matrix is invertible if and only if its determinant is nonzero. When $\\det A = 0$, the rows are linearly dependent and no inverse exists.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $A$ is invertible, then $\\det(A^{-1}) = $',
    options: [
      '$\\det A
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Since $AA^{-1} = I$ and $\\det I = 1$, we have $(\\det A)(\\det A^{-1}) = 1$, so $\\det(A^{-1}) = (\\det A)^{-1}$.',
  },
      '$-\\det A
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Since $AA^{-1} = I$ and $\\det I = 1$, we have $(\\det A)(\\det A^{-1}) = 1$, so $\\det(A^{-1}) = (\\det A)^{-1}$.',
  },
      '$(\\det A)^{-1}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Since $AA^{-1} = I$ and $\\det I = 1$, we have $(\\det A)(\\det A^{-1}) = 1$, so $\\det(A^{-1}) = (\\det A)^{-1}$.',
  },
      '$(\\det A)^2
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Since $AA^{-1} = I$ and $\\det I = 1$, we have $(\\det A)(\\det A^{-1}) = 1$, so $\\det(A^{-1}) = (\\det A)^{-1}$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Since $AA^{-1} = I$ and $\\det I = 1$, we have $(\\det A)(\\det A^{-1}) = 1$, so $\\det(A^{-1}) = (\\det A)^{-1}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $\\det A = 3$ and $\\det B = 4$, then $\\det(AB) = $',
    options: [
      '$12
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By the product formula, $\\det(AB) = (\\det A)(\\det B) = 3 \\cdot 4 = 12$.',
  },
      '$7
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By the product formula, $\\det(AB) = (\\det A)(\\det B) = 3 \\cdot 4 = 12$.',
  },
      '$1
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By the product formula, $\\det(AB) = (\\det A)(\\det B) = 3 \\cdot 4 = 12$.',
  },
      '$-1
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By the product formula, $\\det(AB) = (\\det A)(\\det B) = 3 \\cdot 4 = 12$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By the product formula, $\\det(AB) = (\\det A)(\\det B) = 3 \\cdot 4 = 12$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The uniqueness theorem states that there is exactly one function satisfying all four determinant axioms. What does this imply?',
    options: [
      'Any function satisfying axioms 1-3 equals $c \\cdot \\det$ for some constant $c
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The uniqueness theorem shows that any function $f$ satisfying axioms 1, 2, 3 equals $\\det$ times the constant $f(I_1, \\ldots, I_n)$. Adding axiom 4 (normalization) forces this constant to be 1.',
  },
      'Determinants can be computed in multiple ways',
      'The determinant depends on the choice of basis',
      'Determinants only exist for $2 \\times 2$ matrices',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The uniqueness theorem shows that any function $f$ satisfying axioms 1, 2, 3 equals $\\det$ times the constant $f(I_1, \\ldots, I_n)$. Adding axiom 4 (normalization) forces this constant to be 1.',
  },
];
