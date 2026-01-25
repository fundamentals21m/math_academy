import type { QuizQuestion } from './types';

export const section20Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'If $\\lim_{x \\to a} f(x) = L$ and $\\lim_{x \\to a} g(x) = M$, then $\\lim_{x \\to a} f(x)g(x) = ?$',
    options: [
      '$L - M
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Limit of a product equals product of limits: $LM$.',
  },
      '$LM
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Limit of a product equals product of limits: $LM$.',
  },
      '$L + M
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Limit of a product equals product of limits: $LM$.',
  },
      '$L/M
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Limit of a product equals product of limits: $LM$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Limit of a product equals product of limits: $LM$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $\\lim_{x \\to a} g(x) = M \\neq 0$, then $\\lim_{x \\to a} \\frac{f(x)}{g(x)} = ?$',
    options: [
      '$L/M
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Limit of a quotient equals quotient of limits (when denominator limit is nonzero).',
  },
      '$L + M
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Limit of a quotient equals quotient of limits (when denominator limit is nonzero).',
  },
      '$LM
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Limit of a quotient equals quotient of limits (when denominator limit is nonzero).',
  },
      'Does not exist',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Limit of a quotient equals quotient of limits (when denominator limit is nonzero).',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'What is $\\lim_{x \\to 3} \\frac{x^2 - 9}{x - 3}$?',
    correctAnswer: 6,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: 'Factor: $\\frac{(x-3)(x+3)}{x-3} = x + 3 \\to 6$ as $x \\to 3$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The Squeeze Theorem states: if $g(x) \\leq f(x) \\leq h(x)$ and $\\lim g = \\lim h = L$, then:',
    options: [
      '$\\lim f = L
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Squeeze (Sandwich) Theorem: $f$ is squeezed to the same limit $L$.',
  },
      '$\\lim f$ does not exist',
      '$\\lim f \\leq L
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The Squeeze (Sandwich) Theorem: $f$ is squeezed to the same limit $L$.',
  },
      '$\\lim f \\geq L
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The Squeeze (Sandwich) Theorem: $f$ is squeezed to the same limit $L$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The Squeeze (Sandwich) Theorem: $f$ is squeezed to the same limit $L$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $f$ and $g$ are continuous at $a$, then $f + g$ is:',
    options: [
      'Discontinuous at $a
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Continuity is preserved under addition (and multiplication, and division when denominator is nonzero).',
  },
      'Cannot determine',
      'Continuous at $a
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Continuity is preserved under addition (and multiplication, and division when denominator is nonzero).',
  },
      'Only defined at $a
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Continuity is preserved under addition (and multiplication, and division when denominator is nonzero).',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Continuity is preserved under addition (and multiplication, and division when denominator is nonzero).',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'What is $\\lim_{x \\to 1} (x^3 + 2x - 3)$?',
    correctAnswer: 0,
    numericRange: { min: -100, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: 'Substitute: $1^3 + 2(1) - 3 = 1 + 2 - 3 = 0$.',
  },
];
