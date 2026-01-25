import type { QuizQuestion } from './types';

export const section68Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'For the homogeneous system $Y\' = AY$ with constant $A$, the general solution is:',
    options: [
      '$Y(t) = e^{tA}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The general solution is $Y(t) = e^{tA}c$ where $c$ is an arbitrary constant vector (determined by initial conditions).',
  },
      '$Y(t) = c_1 e^{\\lambda_1 t} + c_2 e^{\\lambda_2 t}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The general solution is $Y(t) = e^{tA}c$ where $c$ is an arbitrary constant vector (determined by initial conditions).',
  },
      '$Y(t) = At + B
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The general solution is $Y(t) = e^{tA}c$ where $c$ is an arbitrary constant vector (determined by initial conditions).',
  },
      '$Y(t) = e^{tA}c$ for any constant vector $c
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The general solution is $Y(t) = e^{tA}c$ where $c$ is an arbitrary constant vector (determined by initial conditions).',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The general solution is $Y(t) = e^{tA}c$ where $c$ is an arbitrary constant vector (determined by initial conditions).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $\\lambda$ is an eigenvalue of $A$ with eigenvector $v$, then a solution of $Y\' = AY$ is:',
    options: [
      '$Y(t) = e^{\\lambda t} v
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'If $Av = \\lambda v$, then $Y(t) = e^{\\lambda t}v$ satisfies $Y\' = \\lambda e^{\\lambda t}v = e^{\\lambda t}Av = AY$.',
  },
      '$Y(t) = \\lambda t \\cdot v
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If $Av = \\lambda v$, then $Y(t) = e^{\\lambda t}v$ satisfies $Y\' = \\lambda e^{\\lambda t}v = e^{\\lambda t}Av = AY$.',
  },
      '$Y(t) = v \\cos(\\lambda t)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If $Av = \\lambda v$, then $Y(t) = e^{\\lambda t}v$ satisfies $Y\' = \\lambda e^{\\lambda t}v = e^{\\lambda t}Av = AY$.',
  },
      '$Y(t) = \\lambda v
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If $Av = \\lambda v$, then $Y(t) = e^{\\lambda t}v$ satisfies $Y\' = \\lambda e^{\\lambda t}v = e^{\\lambda t}Av = AY$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If $Av = \\lambda v$, then $Y(t) = e^{\\lambda t}v$ satisfies $Y\' = \\lambda e^{\\lambda t}v = e^{\\lambda t}Av = AY$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The existence theorem guarantees solutions to $Y\' = AY$ with $Y(t_0) = Y_0$ exist for:',
    options: [
      'Only $t > t_0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For constant coefficient systems, solutions exist globally for all time since $e^{tA}$ is defined for all $t$.',
  },
      'All $t \\in \\mathbb{R}$ (when $A$ is constant)',
      'Only $t < t_0
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For constant coefficient systems, solutions exist globally for all time since $e^{tA}$ is defined for all $t$.',
  },
      'Only in a neighborhood of $t_0
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For constant coefficient systems, solutions exist globally for all time since $e^{tA}$ is defined for all $t$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For constant coefficient systems, solutions exist globally for all time since $e^{tA}$ is defined for all $t$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $A$ is a $2 \\times 2$ matrix with distinct real eigenvalues $\\lambda_1, \\lambda_2$ and eigenvectors $v_1, v_2$, the general solution is:',
    options: [
      '$c_1 \\cos(\\lambda_1 t) + c_2 \\sin(\\lambda_2 t)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'With distinct eigenvalues, the general solution is a linear combination of the exponential solutions for each eigenvalue-eigenvector pair.',
  },
      '$e^{(\\lambda_1 + \\lambda_2)t}(c_1 v_1 + c_2 v_2)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'With distinct eigenvalues, the general solution is a linear combination of the exponential solutions for each eigenvalue-eigenvector pair.',
  },
      '$c_1 e^{\\lambda_1 t} v_1 + c_2 e^{\\lambda_2 t} v_2
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'With distinct eigenvalues, the general solution is a linear combination of the exponential solutions for each eigenvalue-eigenvector pair.',
  },
      '$(c_1 + c_2 t)e^{\\lambda_1 t}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'With distinct eigenvalues, the general solution is a linear combination of the exponential solutions for each eigenvalue-eigenvector pair.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'With distinct eigenvalues, the general solution is a linear combination of the exponential solutions for each eigenvalue-eigenvector pair.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The dimension of the solution space of $Y\' = AY$ where $A$ is $n \\times n$ is:',
    options: [
      '$1
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The solution space is $n$-dimensional, matching the number of initial conditions needed to uniquely determine a solution.',
  },
      '$n^2
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The solution space is $n$-dimensional, matching the number of initial conditions needed to uniquely determine a solution.',
  },
      '$n
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The solution space is $n$-dimensional, matching the number of initial conditions needed to uniquely determine a solution.',
  },
      'Infinite',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The solution space is $n$-dimensional, matching the number of initial conditions needed to uniquely determine a solution.',
  },
];
