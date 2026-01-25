import type { QuizQuestion } from './types';

export const section27Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The derivative $f\'(x)$ is defined as:',
    options: [
      '$f(x+h) - f(x)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The derivative is the limit of the difference quotient as $h \\to 0$.',
  },
      '$\\int f(x)\\,dx
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The derivative is the limit of the difference quotient as $h \\to 0$.',
  },
      '$\\lim_{h \\to 0} \\frac{f(x+h) - f(x)}{h}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The derivative is the limit of the difference quotient as $h \\to 0$.',
  },
      '$\\frac{f(x)}{x}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The derivative is the limit of the difference quotient as $h \\to 0$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The derivative is the limit of the difference quotient as $h \\to 0$.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'If $f(x) = x^2$, what is $f\'(3)$?',
    correctAnswer: 6,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: '$f\'(x) = 2x$, so $f\'(3) = 6$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $f(x) = c$ (constant), then $f\'(x) = ?$',
    options: [
      '$1
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The derivative of a constant is zero.',
  },
      '$c
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The derivative of a constant is zero.',
  },
      '$x
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The derivative of a constant is zero.',
  },
      '$0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The derivative of a constant is zero.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The derivative of a constant is zero.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The power rule states that if $f(x) = x^n$, then $f\'(x) = ?$',
    options: [
      '$nx^{n-1}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Power rule: $(x^n)\' = nx^{n-1}$.',
  },
      '$x^{n-1}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Power rule: $(x^n)\' = nx^{n-1}$.',
  },
      '$nx^n
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Power rule: $(x^n)\' = nx^{n-1}$.',
  },
      '$x^n/n
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Power rule: $(x^n)\' = nx^{n-1}$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Power rule: $(x^n)\' = nx^{n-1}$.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'If $f(x) = x^5$, what is $f\'(x)$ evaluated at $x = 1$?',
    correctAnswer: 5,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: '$f\'(x) = 5x^4$, so $f\'(1) = 5$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'If $f$ is differentiable at $a$, then $f$ is:',
    options: [
      'Discontinuous at $a
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Differentiability implies continuity.',
  },
      'Continuous at $a
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Differentiability implies continuity.',
  },
      'Not defined at $a
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Differentiability implies continuity.',
  },
      'Unbounded at $a
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Differentiability implies continuity.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Differentiability implies continuity.',
  },
];
