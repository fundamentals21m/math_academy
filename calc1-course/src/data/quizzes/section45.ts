import type { QuizQuestion } from './types';

export const section45Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Partial fraction decomposition is used to integrate:',
    options: [
      'Trigonometric functions',
      'Exponential functions',
      'Logarithmic functions',
      'Rational functions (polynomial/polynomial)',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Partial fractions decompose rational functions into simpler fractions.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'To decompose $\\frac{1}{(x-1)(x+2)}$, we write:',
    options: [
      '$\\frac{A}{x-1} + \\frac{B}{x+2}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Distinct linear factors give one constant over each factor.',
  },
      '$\\frac{1}{x-1} \\cdot \\frac{1}{x+2}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Distinct linear factors give one constant over each factor.',
  },
      '$\\frac{A}{(x-1)(x+2)}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Distinct linear factors give one constant over each factor.',
  },
      '$\\frac{Ax + B}{(x-1)(x+2)}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Distinct linear factors give one constant over each factor.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Distinct linear factors give one constant over each factor.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For repeated factor $(x-1)^2$, the decomposition includes:',
    options: [
      '$\\frac{A}{x-1}$ only',
      '$\\frac{Ax + B}{(x-1)^2}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Repeated linear factor of degree 2 needs terms for both powers.',
  },
      '$\\frac{A}{x-1} + \\frac{B}{(x-1)^2}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Repeated linear factor of degree 2 needs terms for both powers.',
  },
      '$\\frac{A}{(x-1)^2}$ only',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Repeated linear factor of degree 2 needs terms for both powers.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: '$\\int \\frac{1}{x-3}\\,dx = ?$',
    options: [
      '$\\ln|x-3| + C
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$\\int \\frac{1}{x-a}\\,dx = \\ln|x-a| + C$.',
  },
      '$\\frac{1}{(x-3)^2} + C
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\int \\frac{1}{x-a}\\,dx = \\ln|x-a| + C$.',
  },
      '$\\ln|x| - 3 + C
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\int \\frac{1}{x-a}\\,dx = \\ln|x-a| + C$.',
  },
      '$-\\frac{1}{x-3} + C
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\int \\frac{1}{x-a}\\,dx = \\ln|x-a| + C$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\int \\frac{1}{x-a}\\,dx = \\ln|x-a| + C$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For irreducible quadratic $x^2 + 1$, the partial fraction term is:',
    options: [
      '$\\frac{A}{x^2+1}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Irreducible quadratic needs a linear numerator $Ax + B$.',
  },
      '$\\frac{A}{x+i} + \\frac{B}{x-i}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Irreducible quadratic needs a linear numerator $Ax + B$.',
  },
      '$A\\arctan x
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Irreducible quadratic needs a linear numerator $Ax + B$.',
  },
      '$\\frac{Ax + B}{x^2 + 1}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Irreducible quadratic needs a linear numerator $Ax + B$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Irreducible quadratic needs a linear numerator $Ax + B$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Before using partial fractions, we must ensure:',
    options: [
      'The numerator is a constant',
      'All coefficients are integers',
      'The degree of numerator is less than degree of denominator',
      'The denominator is linear',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The fraction must be proper (deg num < deg denom). Use long division first if not.',
  },
];
