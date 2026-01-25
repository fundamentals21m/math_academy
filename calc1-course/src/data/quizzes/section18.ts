import type { QuizQuestion } from './types';

export const section18Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The indefinite integral $\\int_a^x f(t)\\,dt$ is a function of:',
    options: [
      '$x
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'With variable upper limit $x$, the integral is a function of $x$.',
  },
      '$t
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'With variable upper limit $x$, the integral is a function of $x$.',
  },
      '$a
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'With variable upper limit $x$, the integral is a function of $x$.',
  },
      'It is a constant',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'With variable upper limit $x$, the integral is a function of $x$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $A(x) = \\int_0^x f(t)\\,dt$, then $A(0) = ?$',
    options: [
      '$0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$A(0) = \\int_0^0 f(t)\\,dt = 0$ (integral over an interval of length 0).',
  },
      '$f(0)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$A(0) = \\int_0^0 f(t)\\,dt = 0$ (integral over an interval of length 0).',
  },
      '$1
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$A(0) = \\int_0^0 f(t)\\,dt = 0$ (integral over an interval of length 0).',
  },
      'Undefined',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$A(0) = \\int_0^0 f(t)\\,dt = 0$ (integral over an interval of length 0).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The function $A(x) = \\int_a^x f(t)\\,dt$ is called:',
    options: [
      'The derivative of $f
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The indefinite integral defines a primitive (antiderivative) of $f$.',
  },
      'The inverse of $f
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The indefinite integral defines a primitive (antiderivative) of $f$.',
  },
      'A constant multiple of $f
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The indefinite integral defines a primitive (antiderivative) of $f$.',
  },
      'An antiderivative or primitive of $f
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The indefinite integral defines a primitive (antiderivative) of $f$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The indefinite integral defines a primitive (antiderivative) of $f$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $f(x) \\geq 0$ on $[a, b]$, then $A(x) = \\int_a^x f(t)\\,dt$ is:',
    options: [
      'Decreasing',
      'Constant',
      'Oscillating',
      'Increasing (or non-decreasing)',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'When $f \\geq 0$, the accumulated area increases as $x$ increases.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'If $A(x) = \\int_0^x 2t\\,dt$, what is $A(3)$?',
    correctAnswer: 9,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: '$A(3) = \\int_0^3 2t\\,dt = t^2\\Big|_0^3 = 9$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Two antiderivatives of the same function differ by:',
    options: [
      'A variable',
      'A constant',
      'Nothing (they are identical)',
      'A factor of $x
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'If $F\'(x) = G\'(x) = f(x)$, then $F(x) - G(x) = C$ (constant).',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'If $F\'(x) = G\'(x) = f(x)$, then $F(x) - G(x) = C$ (constant).',
  },
];
