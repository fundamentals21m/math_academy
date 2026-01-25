import type { QuizQuestion } from './types';

export const section74Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'For the system $Y\' = A(t)Y$ with variable coefficients, the matrix exponential $e^{tA}$:',
    options: [
      'Still gives the solution',
      'Does not generally solve the system when $A$ depends on $t
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When $A = A(t)$ depends on $t$, the simple exponential formula fails because $A(t_1)$ and $A(t_2)$ may not commute.',
  },
      'Equals $I + \\int_0^t A(s)\\,ds
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'When $A = A(t)$ depends on $t$, the simple exponential formula fails because $A(t_1)$ and $A(t_2)$ may not commute.',
  },
      'Is undefined',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'When $A = A(t)$ depends on $t$, the simple exponential formula fails because $A(t_1)$ and $A(t_2)$ may not commute.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A fundamental matrix $\\Phi(t)$ for $Y\' = A(t)Y$ satisfies:',
    options: [
      '$\\Phi\\' = A\\' \\Phi
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A fundamental matrix satisfies the matrix ODE and is invertible (nonzero determinant) for all $t$.',
  },
      '$\\Phi\\' = \\Phi A$ always',
      '$\\Phi\\' = A\\Phi$ and $\\det(\\Phi) \\neq 0
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A fundamental matrix satisfies the matrix ODE and is invertible (nonzero determinant) for all $t$.',
  },
      '$\\Phi = e^{A(t)}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A fundamental matrix satisfies the matrix ODE and is invertible (nonzero determinant) for all $t$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A fundamental matrix satisfies the matrix ODE and is invertible (nonzero determinant) for all $t$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Abel\'s formula states that for $Y\' = A(t)Y$, the determinant of a fundamental matrix satisfies:',
    options: [
      '$\\det(\\Phi(t)) = \\det(\\Phi(0))
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Abel\'s formula: $\\det(\\Phi(t)) = \\det(\\Phi(t_0))\\exp(\\int_{t_0}^t \\text{tr}(A(s))\\,ds)$.',
  },
      '$\\det(\\Phi(t)) = 0
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Abel\'s formula: $\\det(\\Phi(t)) = \\det(\\Phi(t_0))\\exp(\\int_{t_0}^t \\text{tr}(A(s))\\,ds)$.',
  },
      '$\\det(\\Phi(t)) = \\det(\\Phi(0))\\exp\\left(\\int_0^t \\text{tr}(A(s))\\,ds\\right)
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Abel\'s formula: $\\det(\\Phi(t)) = \\det(\\Phi(t_0))\\exp(\\int_{t_0}^t \\text{tr}(A(s))\\,ds)$.',
  },
      '$\\frac{d}{dt}\\det(\\Phi) = \\det(A)
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Abel\'s formula: $\\det(\\Phi(t)) = \\det(\\Phi(t_0))\\exp(\\int_{t_0}^t \\text{tr}(A(s))\\,ds)$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Abel\'s formula: $\\det(\\Phi(t)) = \\det(\\Phi(t_0))\\exp(\\int_{t_0}^t \\text{tr}(A(s))\\,ds)$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For variable coefficient systems, the general solution with initial condition $Y(t_0) = Y_0$ is:',
    options: [
      '$Y(t) = \\Phi(t)Y_0
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The solution is $Y(t) = \\Phi(t)\\Phi(t_0)^{-1}Y_0$ where $\\Phi$ is any fundamental matrix.',
  },
      '$Y(t) = e^{\\int_{t_0}^t A(s)\\,ds}Y_0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The solution is $Y(t) = \\Phi(t)\\Phi(t_0)^{-1}Y_0$ where $\\Phi$ is any fundamental matrix.',
  },
      '$Y(t) = Y_0 + \\int_{t_0}^t A(s)Y_0\\,ds
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The solution is $Y(t) = \\Phi(t)\\Phi(t_0)^{-1}Y_0$ where $\\Phi$ is any fundamental matrix.',
  },
      '$Y(t) = \\Phi(t)\\Phi(t_0)^{-1}Y_0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The solution is $Y(t) = \\Phi(t)\\Phi(t_0)^{-1}Y_0$ where $\\Phi$ is any fundamental matrix.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The solution is $Y(t) = \\Phi(t)\\Phi(t_0)^{-1}Y_0$ where $\\Phi$ is any fundamental matrix.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'When does $Y\' = A(t)Y$ have solution $e^{\\int_0^t A(s)\\,ds}$?',
    options: [
      'When $A(t_1)A(t_2) = A(t_2)A(t_1)$ for all $t_1, t_2
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The naive exponential works only when $A(t)$ at different times commutes, which includes constant $A$ as a special case.',
  },
      'Always',
      'When $A(t)$ is constant',
      'Never',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The naive exponential works only when $A(t)$ at different times commutes, which includes constant $A$ as a special case.',
  },
];
