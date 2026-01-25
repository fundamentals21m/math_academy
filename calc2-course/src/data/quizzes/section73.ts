import type { QuizQuestion } from './types';

export const section73Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The general solution of the nonhomogeneous system $Y\' = AY + F(t)$ is:',
    options: [
      '$e^{tA}F(t)$',
      '$Y_h + Y_p$ where $Y_h$ solves $Y\' = AY$ and $Y_p$ is a particular solution',
      'Only the particular solution',
      '$Y_h \\cdot Y_p$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The general solution is the sum of the general homogeneous solution and any particular solution.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A particular solution of $Y\' = AY + F(t)$ with $Y(0) = 0$ is given by:',
    options: [
      '$\\int_0^t e^{(t-s)A}F(s)\\,ds
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The variation of parameters formula gives $Y_p(t) = \\int_0^t e^{(t-s)A}F(s)\\,ds$.',
  },
      '$\\int_0^t F(s)\\,ds
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The variation of parameters formula gives $Y_p(t) = \\int_0^t e^{(t-s)A}F(s)\\,ds$.',
  },
      '$e^{tA}\\int_0^t F(s)\\,ds
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The variation of parameters formula gives $Y_p(t) = \\int_0^t e^{(t-s)A}F(s)\\,ds$.',
  },
      '$F(t) - F(0)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The variation of parameters formula gives $Y_p(t) = \\int_0^t e^{(t-s)A}F(s)\\,ds$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The variation of parameters formula gives $Y_p(t) = \\int_0^t e^{(t-s)A}F(s)\\,ds$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For $Y\' = AY + F(t)$ with initial condition $Y(0) = Y_0$, the solution is:',
    options: [
      '$e^{tA}Y_0 + F(t)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The complete solution combines the homogeneous solution $e^{tA}Y_0$ with the particular solution integral.',
  },
      '$e^{tA}(Y_0 + F(t))
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The complete solution combines the homogeneous solution $e^{tA}Y_0$ with the particular solution integral.',
  },
      '$e^{tA}Y_0 + \\int_0^t e^{(t-s)A}F(s)\\,ds
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The complete solution combines the homogeneous solution $e^{tA}Y_0$ with the particular solution integral.',
  },
      '$Y_0 + \\int_0^t F(s)\\,ds
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The complete solution combines the homogeneous solution $e^{tA}Y_0$ with the particular solution integral.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The complete solution combines the homogeneous solution $e^{tA}Y_0$ with the particular solution integral.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $F(t) = e^{\\alpha t}b$ is an exponential forcing, and $\\alpha$ is not an eigenvalue of $A$, a particular solution has the form:',
    options: [
      '$te^{\\alpha t}b
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Trying $Y_p = e^{\\alpha t}c$ and substituting gives $(\\alpha I - A)c = b$, so $c = (\\alpha I - A)^{-1}b$ when $\\alpha$ is not an eigenvalue.',
  },
      '$e^{\\alpha t}Ab
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Trying $Y_p = e^{\\alpha t}c$ and substituting gives $(\\alpha I - A)c = b$, so $c = (\\alpha I - A)^{-1}b$ when $\\alpha$ is not an eigenvalue.',
  },
      '$\\alpha^{-1}e^{\\alpha t}b
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Trying $Y_p = e^{\\alpha t}c$ and substituting gives $(\\alpha I - A)c = b$, so $c = (\\alpha I - A)^{-1}b$ when $\\alpha$ is not an eigenvalue.',
  },
      '$e^{\\alpha t}(\\alpha I - A)^{-1}b
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Trying $Y_p = e^{\\alpha t}c$ and substituting gives $(\\alpha I - A)c = b$, so $c = (\\alpha I - A)^{-1}b$ when $\\alpha$ is not an eigenvalue.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Trying $Y_p = e^{\\alpha t}c$ and substituting gives $(\\alpha I - A)c = b$, so $c = (\\alpha I - A)^{-1}b$ when $\\alpha$ is not an eigenvalue.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The method of undetermined coefficients for systems works when:',
    options: [
      '$F(t)$ involves exponentials, polynomials, sines, and cosines',
      '$F(t)$ is any continuous function',
      '$A$ is diagonal',
      '$F(t)$ is constant',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Undetermined coefficients applies when $F(t)$ is a combination of functions that reproduce themselves under differentiation.',
  },
];
