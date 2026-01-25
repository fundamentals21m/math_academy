import type { QuizQuestion } from './types';

export const section80Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The derivative of a scalar field $f$ at $\\mathbf{a}$ with respect to a vector $\\mathbf{y}$ is defined as:',
    options: [
      '$f(\\mathbf{a} + \\mathbf{y})
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The derivative with respect to $\\mathbf{y}$ is $f\'(\\mathbf{a}; \\mathbf{y}) = \\lim_{h \\to 0} \\frac{f(\\mathbf{a} + h\\mathbf{y}) - f(\\mathbf{a})}{h}$.',
  },
      '$\\lim_{h \\to 0} \\frac{f(\\mathbf{a} + h\\mathbf{y}) - f(\\mathbf{a})}{h}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The derivative with respect to $\\mathbf{y}$ is $f\'(\\mathbf{a}; \\mathbf{y}) = \\lim_{h \\to 0} \\frac{f(\\mathbf{a} + h\\mathbf{y}) - f(\\mathbf{a})}{h}$.',
  },
      '$f(\\mathbf{a}) \\cdot \\mathbf{y}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The derivative with respect to $\\mathbf{y}$ is $f\'(\\mathbf{a}; \\mathbf{y}) = \\lim_{h \\to 0} \\frac{f(\\mathbf{a} + h\\mathbf{y}) - f(\\mathbf{a})}{h}$.',
  },
      '$\\nabla f \\times \\mathbf{y}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The derivative with respect to $\\mathbf{y}$ is $f\'(\\mathbf{a}; \\mathbf{y}) = \\lim_{h \\to 0} \\frac{f(\\mathbf{a} + h\\mathbf{y}) - f(\\mathbf{a})}{h}$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The derivative with respect to $\\mathbf{y}$ is $f\'(\\mathbf{a}; \\mathbf{y}) = \\lim_{h \\to 0} \\frac{f(\\mathbf{a} + h\\mathbf{y}) - f(\\mathbf{a})}{h}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The derivative $f\'(\\mathbf{a}; \\mathbf{y})$ is linear in:',
    options: [
      'Only $\\mathbf{y}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The derivative is linear in the direction $\\mathbf{y}$: $f\'(\\mathbf{a}; c\\mathbf{y}) = cf\'(\\mathbf{a}; \\mathbf{y})$.',
  },
      'Only $\\mathbf{a}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The derivative is linear in the direction $\\mathbf{y}$: $f\'(\\mathbf{a}; c\\mathbf{y}) = cf\'(\\mathbf{a}; \\mathbf{y})$.',
  },
      'Both $\\mathbf{a}$ and $\\mathbf{y}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The derivative is linear in the direction $\\mathbf{y}$: $f\'(\\mathbf{a}; c\\mathbf{y}) = cf\'(\\mathbf{a}; \\mathbf{y})$.',
  },
      'Neither',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The derivative is linear in the direction $\\mathbf{y}$: $f\'(\\mathbf{a}; c\\mathbf{y}) = cf\'(\\mathbf{a}; \\mathbf{y})$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For $f(x,y) = x^2 + y^2$, the derivative at $(1,1)$ with respect to $\\mathbf{y} = (1,0)$ is:',
    options: [
      '$0
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$f\'((1,1); (1,0)) = \\lim_{h\\to 0}\\frac{(1+h)^2 + 1 - 2}{h} = \\lim_{h\\to 0}\\frac{2h + h^2}{h} = 2$.',
  },
      '$1
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$f\'((1,1); (1,0)) = \\lim_{h\\to 0}\\frac{(1+h)^2 + 1 - 2}{h} = \\lim_{h\\to 0}\\frac{2h + h^2}{h} = 2$.',
  },
      '$4
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$f\'((1,1); (1,0)) = \\lim_{h\\to 0}\\frac{(1+h)^2 + 1 - 2}{h} = \\lim_{h\\to 0}\\frac{2h + h^2}{h} = 2$.',
  },
      '$2
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$f\'((1,1); (1,0)) = \\lim_{h\\to 0}\\frac{(1+h)^2 + 1 - 2}{h} = \\lim_{h\\to 0}\\frac{2h + h^2}{h} = 2$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$f\'((1,1); (1,0)) = \\lim_{h\\to 0}\\frac{(1+h)^2 + 1 - 2}{h} = \\lim_{h\\to 0}\\frac{2h + h^2}{h} = 2$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The derivative $f\'(\\mathbf{a}; \\mathbf{0})$ equals:',
    options: [
      '$f(\\mathbf{a})
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'With $\\mathbf{y} = \\mathbf{0}$: $f\'(\\mathbf{a}; \\mathbf{0}) = \\lim_{h\\to 0}\\frac{f(\\mathbf{a}) - f(\\mathbf{a})}{h} = 0$.',
  },
      '$0
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'With $\\mathbf{y} = \\mathbf{0}$: $f\'(\\mathbf{a}; \\mathbf{0}) = \\lim_{h\\to 0}\\frac{f(\\mathbf{a}) - f(\\mathbf{a})}{h} = 0$.',
  },
      '$\\|\\nabla f(\\mathbf{a})\\|
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'With $\\mathbf{y} = \\mathbf{0}$: $f\'(\\mathbf{a}; \\mathbf{0}) = \\lim_{h\\to 0}\\frac{f(\\mathbf{a}) - f(\\mathbf{a})}{h} = 0$.',
  },
      'Undefined',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'With $\\mathbf{y} = \\mathbf{0}$: $f\'(\\mathbf{a}; \\mathbf{0}) = \\lim_{h\\to 0}\\frac{f(\\mathbf{a}) - f(\\mathbf{a})}{h} = 0$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $f\'(\\mathbf{a}; \\mathbf{y})$ exists for all $\\mathbf{y}$, then $f$ is necessarily:',
    options: [
      'Differentiable at $\\mathbf{a}
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Having all directional derivatives does not imply continuity or differentiability (counterexamples exist).',
  },
      'Continuous at $\\mathbf{a}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Having all directional derivatives does not imply continuity or differentiability (counterexamples exist).',
  },
      'Neither continuous nor differentiable in general',
      'Both continuous and differentiable',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Having all directional derivatives does not imply continuity or differentiability (counterexamples exist).',
  },
];
