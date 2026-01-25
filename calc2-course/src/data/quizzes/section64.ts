import type { QuizQuestion } from './types';

export const section64Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'For a matrix function $A(t)$, the derivative $A\'(t)$ is defined as:',
    options: [
      'The determinant of $A(t)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The derivative of a matrix function is computed entry-by-entry: $(A\'(t))_{ij} = \\frac{d}{dt}(A(t))_{ij}$.',
  },
      'The matrix whose entries are the derivatives of the entries of $A(t)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The derivative of a matrix function is computed entry-by-entry: $(A\'(t))_{ij} = \\frac{d}{dt}(A(t))_{ij}$.',
  },
      'The inverse of $A(t)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The derivative of a matrix function is computed entry-by-entry: $(A\'(t))_{ij} = \\frac{d}{dt}(A(t))_{ij}$.',
  },
      'The transpose of $A(t)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The derivative of a matrix function is computed entry-by-entry: $(A\'(t))_{ij} = \\frac{d}{dt}(A(t))_{ij}$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The derivative of a matrix function is computed entry-by-entry: $(A\'(t))_{ij} = \\frac{d}{dt}(A(t))_{ij}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $A(t)$ and $B(t)$ are differentiable matrix functions, then $(AB)\' =$',
    options: [
      '$A\\'B\\'
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The product rule for matrix functions is $(AB)\' = A\'B + AB\'$. Note that order matters since matrix multiplication is not commutative.',
  },
      '$BA\\' + B\\'A
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The product rule for matrix functions is $(AB)\' = A\'B + AB\'$. Note that order matters since matrix multiplication is not commutative.',
  },
      '$A\\'B\\' + AB
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The product rule for matrix functions is $(AB)\' = A\'B + AB\'$. Note that order matters since matrix multiplication is not commutative.',
  },
      '$A\\'B + AB\\'
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The product rule for matrix functions is $(AB)\' = A\'B + AB\'$. Note that order matters since matrix multiplication is not commutative.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The product rule for matrix functions is $(AB)\' = A\'B + AB\'$. Note that order matters since matrix multiplication is not commutative.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The norm $\\|A\\|$ of a matrix $A$ used in convergence arguments for matrix series is typically:',
    options: [
      '$\\|A\\| = \\det(A)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Common matrix norms include the max norm $\\max|a_{ij}|$ and the Frobenius norm $\\sqrt{\\sum|a_{ij}|^2}$, both useful for convergence analysis.',
  },
      '$\\|A\\| = \\text{tr}(A)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Common matrix norms include the max norm $\\max|a_{ij}|$ and the Frobenius norm $\\sqrt{\\sum|a_{ij}|^2}$, both useful for convergence analysis.',
  },
      '$\\|A\\| = \\sum_{i} a_{ii}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Common matrix norms include the max norm $\\max|a_{ij}|$ and the Frobenius norm $\\sqrt{\\sum|a_{ij}|^2}$, both useful for convergence analysis.',
  },
      '$\\|A\\| = \\max_{ij} |a_{ij}|$ or $\\sqrt{\\sum_{ij} |a_{ij}|^2}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Common matrix norms include the max norm $\\max|a_{ij}|$ and the Frobenius norm $\\sqrt{\\sum|a_{ij}|^2}$, both useful for convergence analysis.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Common matrix norms include the max norm $\\max|a_{ij}|$ and the Frobenius norm $\\sqrt{\\sum|a_{ij}|^2}$, both useful for convergence analysis.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For the integral of a matrix function, $\\int_a^b A(t)\\,dt$ is:',
    options: [
      'A scalar',
      'The inverse of $A(t)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Matrix integration is performed entry-by-entry: $(\\int A(t)\\,dt)_{ij} = \\int (A(t))_{ij}\\,dt$.',
  },
      'A matrix whose entries are integrals of the corresponding entries',
      'Only defined for diagonal matrices',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Matrix integration is performed entry-by-entry: $(\\int A(t)\\,dt)_{ij} = \\int (A(t))_{ij}\\,dt$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $Y(t)$ is a matrix solution of $Y\' = AY$ and $Y(t_0) = I$, then for any initial vector $c$, the solution with $Y(t_0) = c$ is:',
    options: [
      '$Y(t) + c
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The fundamental matrix $Y(t)$ with $Y(t_0) = I$ gives solutions as $Y(t)c$ for initial condition $c$.',
  },
      '$Y(t)c
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The fundamental matrix $Y(t)$ with $Y(t_0) = I$ gives solutions as $Y(t)c$ for initial condition $c$.',
  },
      '$cY(t)
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The fundamental matrix $Y(t)$ with $Y(t_0) = I$ gives solutions as $Y(t)c$ for initial condition $c$.',
  },
      '$Y(t)^{-1}c
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The fundamental matrix $Y(t)$ with $Y(t_0) = I$ gives solutions as $Y(t)c$ for initial condition $c$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The fundamental matrix $Y(t)$ with $Y(t_0) = I$ gives solutions as $Y(t)c$ for initial condition $c$.',
  },
];
