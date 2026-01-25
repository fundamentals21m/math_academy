import type { QuizQuestion } from './types';

export const section57Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The determinant of a $2 \\times 2$ matrix $\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ is:',
    options: [
      '$a + d
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The determinant of a $2 \\times 2$ matrix is $ad - bc$. This is the product of diagonal entries minus the product of anti-diagonal entries.',
  },
      '$ac - bd
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The determinant of a $2 \\times 2$ matrix is $ad - bc$. This is the product of diagonal entries minus the product of anti-diagonal entries.',
  },
      '$ab - cd
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The determinant of a $2 \\times 2$ matrix is $ad - bc$. This is the product of diagonal entries minus the product of anti-diagonal entries.',
  },
      '$ad - bc
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The determinant of a $2 \\times 2$ matrix is $ad - bc$. This is the product of diagonal entries minus the product of anti-diagonal entries.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The determinant of a $2 \\times 2$ matrix is $ad - bc$. This is the product of diagonal entries minus the product of anti-diagonal entries.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The determinant function is:',
    options: [
      'Independent of row operations',
      'Linear in each row (multilinear), alternating, and $\\det(I) = 1
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The determinant is characterized by being multilinear (linear in each row), alternating (swapping rows changes sign), and normalized ($\\det(I) = 1$).',
  },
      'Additive: $\\det(A + B) = \\det(A) + \\det(B)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The determinant is characterized by being multilinear (linear in each row), alternating (swapping rows changes sign), and normalized ($\\det(I) = 1$).',
  },
      'Always positive',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The determinant is characterized by being multilinear (linear in each row), alternating (swapping rows changes sign), and normalized ($\\det(I) = 1$).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: '$\\det(AB) = $',
    options: [
      '$\\det(A) + \\det(B)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The determinant is multiplicative: $\\det(AB) = \\det(A) \\cdot \\det(B)$. This is a fundamental property that makes determinants useful for studying matrix groups.',
  },
      '$\\det(A + B)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The determinant is multiplicative: $\\det(AB) = \\det(A) \\cdot \\det(B)$. This is a fundamental property that makes determinants useful for studying matrix groups.',
  },
      '$\\det(A) / \\det(B)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The determinant is multiplicative: $\\det(AB) = \\det(A) \\cdot \\det(B)$. This is a fundamental property that makes determinants useful for studying matrix groups.',
  },
      '$\\det(A) \\cdot \\det(B)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The determinant is multiplicative: $\\det(AB) = \\det(A) \\cdot \\det(B)$. This is a fundamental property that makes determinants useful for studying matrix groups.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The determinant is multiplicative: $\\det(AB) = \\det(A) \\cdot \\det(B)$. This is a fundamental property that makes determinants useful for studying matrix groups.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A square matrix $A$ is invertible if and only if:',
    options: [
      '$\\det(A) = 1
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A matrix $A$ is invertible iff $\\det(A) \\neq 0$. If $\\det(A) \\neq 0$, then $\\det(A^{-1}) = 1/\\det(A)$.',
  },
      '$\\det(A) = 0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A matrix $A$ is invertible iff $\\det(A) \\neq 0$. If $\\det(A) \\neq 0$, then $\\det(A^{-1}) = 1/\\det(A)$.',
  },
      '$\\det(A) \\neq 0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A matrix $A$ is invertible iff $\\det(A) \\neq 0$. If $\\det(A) \\neq 0$, then $\\det(A^{-1}) = 1/\\det(A)$.',
  },
      '$\\det(A) > 0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A matrix $A$ is invertible iff $\\det(A) \\neq 0$. If $\\det(A) \\neq 0$, then $\\det(A^{-1}) = 1/\\det(A)$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A matrix $A$ is invertible iff $\\det(A) \\neq 0$. If $\\det(A) \\neq 0$, then $\\det(A^{-1}) = 1/\\det(A)$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $A$ is an $n \\times n$ matrix and $c$ is a scalar, then $\\det(cA) = $',
    options: [
      '$c \\cdot \\det(A)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Since the determinant is linear in each row and there are $n$ rows, $\\det(cA) = c^n \\det(A)$. Each row contributes a factor of $c$.',
  },
      '$c^n \\cdot \\det(A)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Since the determinant is linear in each row and there are $n$ rows, $\\det(cA) = c^n \\det(A)$. Each row contributes a factor of $c$.',
  },
      '$\\det(A)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Since the determinant is linear in each row and there are $n$ rows, $\\det(cA) = c^n \\det(A)$. Each row contributes a factor of $c$.',
  },
      '$c^2 \\cdot \\det(A)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Since the determinant is linear in each row and there are $n$ rows, $\\det(cA) = c^n \\det(A)$. Each row contributes a factor of $c$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Since the determinant is linear in each row and there are $n$ rows, $\\det(cA) = c^n \\det(A)$. Each row contributes a factor of $c$.',
  },
];
