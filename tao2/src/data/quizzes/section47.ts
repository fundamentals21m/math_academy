import type { QuizQuestion } from './types';

export const section47Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Fubini\'s theorem relates:',
    options: [
      'Derivatives and integrals',
      'Fourier series and power series',
      'Double integrals and iterated integrals',
      'Limits and continuity',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Fubini\'s theorem says double integrals can be computed as iterated integrals.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Fubini\'s theorem requires $f$ to be:',
    options: [
      'Continuous',
      'Bounded',
      'Absolutely integrable on $\\mathbf{R}^2
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Fubini requires $\\int_{\\mathbf{R}^2} |f| < \\infty$.',
  },
      'Differentiable',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Fubini requires $\\int_{\\mathbf{R}^2} |f| < \\infty$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Under Fubini\'s theorem, $\\int_{\\mathbf{R}^2} f(x, y) \\, d(x, y)$ equals:',
    options: [
      '$\\int_\\mathbf{R} \\left(\\int_\\mathbf{R} f(x, y) \\, dy\\right) dx$ and $\\int_\\mathbf{R} \\left(\\int_\\mathbf{R} f(x, y) \\, dx\\right) dy
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Both orders of integration give the same result as the double integral.',
  },
      'Only $\\int \\int f \\, dy \\, dx
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Both orders of integration give the same result as the double integral.',
  },
      'Only $\\int \\int f \\, dx \\, dy
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Both orders of integration give the same result as the double integral.',
  },
      'Neither iterated integral',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Both orders of integration give the same result as the double integral.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Tonelli\'s theorem is the version of Fubini for:',
    options: [
      'Bounded functions',
      'Non-negative measurable functions',
      'Functions on finite domains',
      'Continuous functions only',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Tonelli applies to non-negative functions without requiring integrability (the integral might be $\\infty$).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The "almost everywhere" caveat in Fubini\'s theorem means:',
    options: [
      'The theorem fails',
      'The double integral is always zero',
      '$f$ must be continuous',
      'The inner integral might not exist for every $x$, only for almost every $x
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The inner integral $\\int f(x, y) \\, dy$ might not exist for a null set of $x$ values.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The inner integral $\\int f(x, y) \\, dy$ might not exist for a null set of $x$ values.',
  },
];
