import type { QuizQuestion } from './types';

export const section22Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'U-substitution is the integration equivalent of:',
    options: [
      'The sum rule',
      'The quotient rule',
      'The power rule',
      'The chain rule',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'U-substitution reverses the chain rule, handling composite functions.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'To integrate $\\int 2x e^{x^2} dx$, let $u = ?$',
    options: [
      '$u = x^2
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Let $u = x^2$, then $du = 2x \\, dx$, so $\\int e^u du = e^{x^2} + C$.',
  },
      '$u = e^{x^2}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Let $u = x^2$, then $du = 2x \\, dx$, so $\\int e^u du = e^{x^2} + C$.',
  },
      '$u = 2x
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Let $u = x^2$, then $du = 2x \\, dx$, so $\\int e^u du = e^{x^2} + C$.',
  },
      '$u = e^x
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Let $u = x^2$, then $du = 2x \\, dx$, so $\\int e^u du = e^{x^2} + C$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Let $u = x^2$, then $du = 2x \\, dx$, so $\\int e^u du = e^{x^2} + C$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Integration by parts uses the formula:',
    options: [
      '$\\int uv \\, dx = u + v + C
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Integration by parts: $\\int u \\, dv = uv - \\int v \\, du$.',
  },
      '$\\int u \\, dv = uv - \\int v \\, du
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Integration by parts: $\\int u \\, dv = uv - \\int v \\, du$.',
  },
      '$\\int u \\, dv = u + v
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Integration by parts: $\\int u \\, dv = uv - \\int v \\, du$.',
  },
      '$\\int u \\, dv = \\frac{uv}{2}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Integration by parts: $\\int u \\, dv = uv - \\int v \\, du$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Integration by parts: $\\int u \\, dv = uv - \\int v \\, du$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is a common mistake in integration?',
    options: [
      'Forgetting the constant of integration $+ C
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Forgetting the constant $+ C$ in indefinite integrals is a common error.',
  },
      'Using the power rule',
      'Using substitution',
      'Checking the answer by differentiating',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Forgetting the constant $+ C$ in indefinite integrals is a common error.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'To integrate $\\sin^2(x)$, we use the identity:',
    options: [
      '$\\sin^2(x) = 1 - \\cos^2(x)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The half-angle identity $\\sin^2(x) = \\frac{1 - \\cos(2x)}{2}$ makes integration straightforward.',
  },
      '$\\sin^2(x) = \\frac{1 - \\cos(2x)}{2}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The half-angle identity $\\sin^2(x) = \\frac{1 - \\cos(2x)}{2}$ makes integration straightforward.',
  },
      '$\\sin^2(x) = 2\\sin(x)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The half-angle identity $\\sin^2(x) = \\frac{1 - \\cos(2x)}{2}$ makes integration straightforward.',
  },
      '$\\sin^2(x) = \\sin(x^2)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The half-angle identity $\\sin^2(x) = \\frac{1 - \\cos(2x)}{2}$ makes integration straightforward.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The half-angle identity $\\sin^2(x) = \\frac{1 - \\cos(2x)}{2}$ makes integration straightforward.',
  },
];
