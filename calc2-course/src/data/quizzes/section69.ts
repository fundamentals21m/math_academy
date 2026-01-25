import type { QuizQuestion } from './types';

export const section69Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'To compute $e^{tA}$ when $A$ is diagonalizable as $A = PDP^{-1}$, we use:',
    options: [
      '$e^{tA} = e^{tP}e^{tD}e^{tP^{-1}}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'If $A = PDP^{-1}$, then $A^k = PD^kP^{-1}$, so $e^{tA} = Pe^{tD}P^{-1}$ where $e^{tD}$ is diagonal with entries $e^{t\\lambda_i}$.',
  },
      '$e^{tA} = P^{-1}e^{tD}P
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If $A = PDP^{-1}$, then $A^k = PD^kP^{-1}$, so $e^{tA} = Pe^{tD}P^{-1}$ where $e^{tD}$ is diagonal with entries $e^{t\\lambda_i}$.',
  },
      '$e^{tA} = Pe^{tD}P^{-1}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If $A = PDP^{-1}$, then $A^k = PD^kP^{-1}$, so $e^{tA} = Pe^{tD}P^{-1}$ where $e^{tD}$ is diagonal with entries $e^{t\\lambda_i}$.',
  },
      '$e^{tA} = e^{tP}De^{-tP}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If $A = PDP^{-1}$, then $A^k = PD^kP^{-1}$, so $e^{tA} = Pe^{tD}P^{-1}$ where $e^{tD}$ is diagonal with entries $e^{t\\lambda_i}$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If $A = PDP^{-1}$, then $A^k = PD^kP^{-1}$, so $e^{tA} = Pe^{tD}P^{-1}$ where $e^{tD}$ is diagonal with entries $e^{t\\lambda_i}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For a diagonal matrix $D = \\text{diag}(\\lambda_1, \\ldots, \\lambda_n)$, the exponential $e^{tD}$ is:',
    options: [
      '$\\text{diag}(t\\lambda_1, \\ldots, t\\lambda_n)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The exponential of a diagonal matrix is diagonal with entries $e^{t\\lambda_i}$.',
  },
      '$\\text{diag}(e^{t\\lambda_1}, \\ldots, e^{t\\lambda_n})
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The exponential of a diagonal matrix is diagonal with entries $e^{t\\lambda_i}$.',
  },
      '$e^t \\cdot D
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The exponential of a diagonal matrix is diagonal with entries $e^{t\\lambda_i}$.',
  },
      '$D^t
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The exponential of a diagonal matrix is diagonal with entries $e^{t\\lambda_i}$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The exponential of a diagonal matrix is diagonal with entries $e^{t\\lambda_i}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'When $A$ has complex eigenvalues $\\alpha \\pm i\\beta$, the real solutions involve:',
    options: [
      'Only exponentials',
      'Only trigonometric functions',
      '$e^{\\alpha t}\\cos(\\beta t)$ and $e^{\\alpha t}\\sin(\\beta t)$ terms',
      'Logarithmic functions',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Complex eigenvalues $\\alpha \\pm i\\beta$ produce real solutions combining exponential decay/growth with oscillation.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $A = \\begin{pmatrix} 0 & 1 \\\\ -1 & 0 \\end{pmatrix}$, then $e^{tA}$ equals:',
    options: [
      '$\\begin{pmatrix} e^t & 0 \\\\ 0 & e^{-t} \\end{pmatrix}
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'This matrix has eigenvalues $\\pm i$, giving rotation: $e^{tA} = I\\cos t + A\\sin t$.',
  },
      '$\\begin{pmatrix} 1+t & t \\\\ -t & 1-t \\end{pmatrix}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'This matrix has eigenvalues $\\pm i$, giving rotation: $e^{tA} = I\\cos t + A\\sin t$.',
  },
      '$\\begin{pmatrix} \\cos t & \\sin t \\\\ -\\sin t & \\cos t \\end{pmatrix}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'This matrix has eigenvalues $\\pm i$, giving rotation: $e^{tA} = I\\cos t + A\\sin t$.',
  },
      '$\\begin{pmatrix} \\cosh t & \\sinh t \\\\ -\\sinh t & \\cosh t \\end{pmatrix}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'This matrix has eigenvalues $\\pm i$, giving rotation: $e^{tA} = I\\cos t + A\\sin t$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'This matrix has eigenvalues $\\pm i$, giving rotation: $e^{tA} = I\\cos t + A\\sin t$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For a nilpotent matrix $N$ with $N^2 = O$, the exponential $e^{tN}$ is:',
    options: [
      '$I
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Since $N^2 = O$, all higher powers vanish, so $e^{tN} = I + tN$.',
  },
      '$I + tN + \\frac{t^2N^2}{2}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Since $N^2 = O$, all higher powers vanish, so $e^{tN} = I + tN$.',
  },
      'An infinite series',
      '$I + tN
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Since $N^2 = O$, all higher powers vanish, so $e^{tN} = I + tN$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Since $N^2 = O$, all higher powers vanish, so $e^{tN} = I + tN$.',
  },
];
