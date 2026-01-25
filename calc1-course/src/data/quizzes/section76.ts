import type { QuizQuestion } from './types';

export const section76Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The projection of $\\mathbf{b}$ onto $\\mathbf{a}$ is:',
    options: [
      '$\\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{a}\\|}$',
      '$\\mathbf{a} \\cdot \\mathbf{b}$',
      '$\\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{a}\\|^2} \\mathbf{a}$',
      '$\\frac{\\mathbf{b}}{\\|\\mathbf{a}\\|}$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$\\text{proj}_{\\mathbf{a}} \\mathbf{b} = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{a}\\|^2} \\mathbf{a}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The scalar projection of $\\mathbf{b}$ onto $\\mathbf{a}$ is:',
    options: [
      '$\\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{a}\\|}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Scalar projection = $\\|\\mathbf{b}\\| \\cos\\theta = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{a}\\|}$.',
  },
      '$\\mathbf{a} \\cdot \\mathbf{b}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Scalar projection = $\\|\\mathbf{b}\\| \\cos\\theta = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{a}\\|}$.',
  },
      '$\\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{b}\\|}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Scalar projection = $\\|\\mathbf{b}\\| \\cos\\theta = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{a}\\|}$.',
  },
      '$\\|\\mathbf{a}\\| \\|\\mathbf{b}\\|
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Scalar projection = $\\|\\mathbf{b}\\| \\cos\\theta = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{a}\\|}$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Scalar projection = $\\|\\mathbf{b}\\| \\cos\\theta = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{a}\\|}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The angle $\\theta$ between vectors satisfies:',
    options: [
      '$\\cos\\theta = \\mathbf{a} + \\mathbf{b}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\cos\\theta = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{a}\\| \\|\\mathbf{b}\\|}$.',
  },
      '$\\cos\\theta = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{a}\\| \\|\\mathbf{b}\\|}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\cos\\theta = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{a}\\| \\|\\mathbf{b}\\|}$.',
  },
      '$\\sin\\theta = \\mathbf{a} \\cdot \\mathbf{b}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\cos\\theta = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{a}\\| \\|\\mathbf{b}\\|}$.',
  },
      '$\\theta = \\mathbf{a} \\cdot \\mathbf{b}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\cos\\theta = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{a}\\| \\|\\mathbf{b}\\|}$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\cos\\theta = \\frac{\\mathbf{a} \\cdot \\mathbf{b}}{\\|\\mathbf{a}\\| \\|\\mathbf{b}\\|}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $\\mathbf{a} \\cdot \\mathbf{b} > 0$, then the angle between them is:',
    options: [
      'Obtuse (> 90°)',
      'Exactly 90°',
      '180°',
      'Acute (< 90°)',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Positive dot product means $\\cos\\theta > 0$, so $\\theta < 90°$.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'The angle between $(1, 0)$ and $(0, 1)$ in degrees is:',
    correctAnswer: 90,
    numericRange: { min: 85, max: 95, precision: 0 },
    difficulty: 'easy',
    explanation: '$(1, 0) \\cdot (0, 1) = 0$, so $\\cos\\theta = 0$, $\\theta = 90°$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The component of $\\mathbf{b}$ orthogonal to $\\mathbf{a}$ is:',
    options: [
      '$\\mathbf{b}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Subtract projection to get perpendicular component.',
  },
      '$\\text{proj}_{\\mathbf{a}} \\mathbf{b}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Subtract projection to get perpendicular component.',
  },
      '$\\mathbf{a}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Subtract projection to get perpendicular component.',
  },
      '$\\mathbf{b} - \\text{proj}_{\\mathbf{a}} \\mathbf{b}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Subtract projection to get perpendicular component.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Subtract projection to get perpendicular component.',
  },
];
