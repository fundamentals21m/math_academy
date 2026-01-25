import type { QuizQuestion } from './types';

export const section30Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the trace of the matrix $A = \\begin{bmatrix} 3 & 1 & 2 \\\\ 0 & 5 & -1 \\\\ 4 & 2 & 7 \\end{bmatrix}$?',
    options: [
      '$8
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The trace is the sum of diagonal elements: $\\text{tr}\\, A = 3 + 5 + 7 = 15$.',
  },
      '$12
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The trace is the sum of diagonal elements: $\\text{tr}\\, A = 3 + 5 + 7 = 15$.',
  },
      '$10
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The trace is the sum of diagonal elements: $\\text{tr}\\, A = 3 + 5 + 7 = 15$.',
  },
      '$15
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The trace is the sum of diagonal elements: $\\text{tr}\\, A = 3 + 5 + 7 = 15$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The trace is the sum of diagonal elements: $\\text{tr}\\, A = 3 + 5 + 7 = 15$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which property of the trace is known as the "cyclic property"?',
    options: [
      '$\\text{tr}(AB) = \\text{tr}(BA)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The cyclic property $\\text{tr}(AB) = \\text{tr}(BA)$ allows shifting matrices cyclically within a trace without changing the value.',
  },
      '$\\text{tr}(A + B) = \\text{tr}\\, A + \\text{tr}\\, B
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The cyclic property $\\text{tr}(AB) = \\text{tr}(BA)$ allows shifting matrices cyclically within a trace without changing the value.',
  },
      '$\\text{tr}(cA) = c \\cdot \\text{tr}\\, A
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The cyclic property $\\text{tr}(AB) = \\text{tr}(BA)$ allows shifting matrices cyclically within a trace without changing the value.',
  },
      '$\\text{tr}(A^T) = \\text{tr}\\, A
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The cyclic property $\\text{tr}(AB) = \\text{tr}(BA)$ allows shifting matrices cyclically within a trace without changing the value.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The cyclic property $\\text{tr}(AB) = \\text{tr}(BA)$ allows shifting matrices cyclically within a trace without changing the value.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $A$ has eigenvalues $\\lambda_1 = 2$, $\\lambda_2 = -3$, and $\\lambda_3 = 5$, what is $\\text{tr}\\, A$?',
    options: [
      '$0
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The trace equals the sum of eigenvalues: $\\text{tr}\\, A = \\lambda_1 + \\lambda_2 + \\lambda_3 = 2 + (-3) + 5 = 4$.',
  },
      '$-30
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The trace equals the sum of eigenvalues: $\\text{tr}\\, A = \\lambda_1 + \\lambda_2 + \\lambda_3 = 2 + (-3) + 5 = 4$.',
  },
      '$4
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The trace equals the sum of eigenvalues: $\\text{tr}\\, A = \\lambda_1 + \\lambda_2 + \\lambda_3 = 2 + (-3) + 5 = 4$.',
  },
      '$10
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The trace equals the sum of eigenvalues: $\\text{tr}\\, A = \\lambda_1 + \\lambda_2 + \\lambda_3 = 2 + (-3) + 5 = 4$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The trace equals the sum of eigenvalues: $\\text{tr}\\, A = \\lambda_1 + \\lambda_2 + \\lambda_3 = 2 + (-3) + 5 = 4$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $B = C^{-1}AC$ (similar matrices), what is the relationship between $\\text{tr}\\, A$ and $\\text{tr}\\, B$?',
    options: [
      '$\\text{tr}\\, B = \\text{tr}\\, A + \\text{tr}\\, C
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Similar matrices have the same trace. This follows from the cyclic property: $\\text{tr}(C^{-1}AC) = \\text{tr}(ACC^{-1}) = \\text{tr}\\, A$.',
  },
      '$\\text{tr}\\, B = \\text{tr}\\, A \\cdot \\text{tr}\\, C
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Similar matrices have the same trace. This follows from the cyclic property: $\\text{tr}(C^{-1}AC) = \\text{tr}(ACC^{-1}) = \\text{tr}\\, A$.',
  },
      '$\\text{tr}\\, B = \\text{tr}\\, A
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Similar matrices have the same trace. This follows from the cyclic property: $\\text{tr}(C^{-1}AC) = \\text{tr}(ACC^{-1}) = \\text{tr}\\, A$.',
  },
      '$\\text{tr}\\, B = (\\text{tr}\\, A)^{-1}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Similar matrices have the same trace. This follows from the cyclic property: $\\text{tr}(C^{-1}AC) = \\text{tr}(ACC^{-1}) = \\text{tr}\\, A$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Similar matrices have the same trace. This follows from the cyclic property: $\\text{tr}(C^{-1}AC) = \\text{tr}(ACC^{-1}) = \\text{tr}\\, A$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For the commutator $[A, B] = AB - BA$, what is $\\text{tr}[A, B]$?',
    options: [
      '$\\text{tr}\\, A - \\text{tr}\\, B
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'By the cyclic property, $\\text{tr}[A, B] = \\text{tr}(AB) - \\text{tr}(BA) = \\text{tr}(AB) - \\text{tr}(AB) = 0$.',
  },
      '$\\text{tr}(AB)
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'By the cyclic property, $\\text{tr}[A, B] = \\text{tr}(AB) - \\text{tr}(BA) = \\text{tr}(AB) - \\text{tr}(AB) = 0$.',
  },
      '$\\text{tr}\\, A + \\text{tr}\\, B
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'By the cyclic property, $\\text{tr}[A, B] = \\text{tr}(AB) - \\text{tr}(BA) = \\text{tr}(AB) - \\text{tr}(AB) = 0$.',
  },
      '$0
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'By the cyclic property, $\\text{tr}[A, B] = \\text{tr}(AB) - \\text{tr}(BA) = \\text{tr}(AB) - \\text{tr}(AB) = 0$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'By the cyclic property, $\\text{tr}[A, B] = \\text{tr}(AB) - \\text{tr}(BA) = \\text{tr}(AB) - \\text{tr}(AB) = 0$.',
  },
];
