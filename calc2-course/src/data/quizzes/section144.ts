import type { QuizQuestion } from './types';

export const section144Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Laplacian of a scalar field $\\varphi$ is:',
    options: [
      '$\\nabla \\varphi
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The Laplacian $\\nabla^2 \\varphi = \\text{div}(\\nabla \\varphi) = \\frac{\\partial^2 \\varphi}{\\partial x^2} + \\frac{\\partial^2 \\varphi}{\\partial y^2} + \\frac{\\partial^2 \\varphi}{\\partial z^2}$.',
  },
      '$\\nabla \\times \\nabla \\varphi
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Laplacian $\\nabla^2 \\varphi = \\text{div}(\\nabla \\varphi) = \\frac{\\partial^2 \\varphi}{\\partial x^2} + \\frac{\\partial^2 \\varphi}{\\partial y^2} + \\frac{\\partial^2 \\varphi}{\\partial z^2}$.',
  },
      '$\\nabla \\cdot \\varphi
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Laplacian $\\nabla^2 \\varphi = \\text{div}(\\nabla \\varphi) = \\frac{\\partial^2 \\varphi}{\\partial x^2} + \\frac{\\partial^2 \\varphi}{\\partial y^2} + \\frac{\\partial^2 \\varphi}{\\partial z^2}$.',
  },
      '$\\nabla^2 \\varphi = \\frac{\\partial^2 \\varphi}{\\partial x^2} + \\frac{\\partial^2 \\varphi}{\\partial y^2} + \\frac{\\partial^2 \\varphi}{\\partial z^2}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Laplacian $\\nabla^2 \\varphi = \\text{div}(\\nabla \\varphi) = \\frac{\\partial^2 \\varphi}{\\partial x^2} + \\frac{\\partial^2 \\varphi}{\\partial y^2} + \\frac{\\partial^2 \\varphi}{\\partial z^2}$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Laplacian $\\nabla^2 \\varphi = \\text{div}(\\nabla \\varphi) = \\frac{\\partial^2 \\varphi}{\\partial x^2} + \\frac{\\partial^2 \\varphi}{\\partial y^2} + \\frac{\\partial^2 \\varphi}{\\partial z^2}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A function $\\varphi$ with $\\nabla^2 \\varphi = 0$ is called:',
    options: [
      'Irrotational',
      'Solenoidal',
      'Conservative',
      'Harmonic',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A harmonic function satisfies Laplace\'s equation $\\nabla^2 \\varphi = 0$. Such functions arise in potential theory, heat conduction, and electrostatics.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The identity $\\text{curl}(\\text{grad } \\varphi) = $ is:',
    options: [
      '$\\text{grad}(\\text{div } \\varphi)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$\\nabla \\times (\\nabla \\varphi) = \\mathbf{0}$ always (assuming continuous second partials). The curl of a gradient is always zero.',
  },
      '$\\nabla^2 \\varphi
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\nabla \\times (\\nabla \\varphi) = \\mathbf{0}$ always (assuming continuous second partials). The curl of a gradient is always zero.',
  },
      '$\\varphi
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\nabla \\times (\\nabla \\varphi) = \\mathbf{0}$ always (assuming continuous second partials). The curl of a gradient is always zero.',
  },
      '$\\mathbf{0}$ (the zero vector)',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\nabla \\times (\\nabla \\varphi) = \\mathbf{0}$ always (assuming continuous second partials). The curl of a gradient is always zero.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The identity $\\text{div}(\\text{curl } \\mathbf{F}) = $ is:',
    options: [
      '$0$ (scalar zero)',
      '$\\nabla^2 \\mathbf{F}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\nabla \\cdot (\\nabla \\times \\mathbf{F}) = 0$ always. The divergence of a curl is always zero.',
  },
      '$\\text{curl}(\\text{div } \\mathbf{F})
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\nabla \\cdot (\\nabla \\times \\mathbf{F}) = 0$ always. The divergence of a curl is always zero.',
  },
      '$\\mathbf{F}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\nabla \\cdot (\\nabla \\times \\mathbf{F}) = 0$ always. The divergence of a curl is always zero.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\nabla \\cdot (\\nabla \\times \\mathbf{F}) = 0$ always. The divergence of a curl is always zero.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The identity $\\text{curl}(\\text{curl } \\mathbf{F})$ equals:',
    options: [
      '$\\text{grad}(\\text{div } \\mathbf{F}) - \\nabla^2 \\mathbf{F}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The vector identity: $\\nabla \\times (\\nabla \\times \\mathbf{F}) = \\nabla(\\nabla \\cdot \\mathbf{F}) - \\nabla^2 \\mathbf{F}$, where $\\nabla^2 \\mathbf{F}$ is the component-wise Laplacian.',
  },
      '$\\nabla^2 \\mathbf{F}
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The vector identity: $\\nabla \\times (\\nabla \\times \\mathbf{F}) = \\nabla(\\nabla \\cdot \\mathbf{F}) - \\nabla^2 \\mathbf{F}$, where $\\nabla^2 \\mathbf{F}$ is the component-wise Laplacian.',
  },
      '$\\text{grad}(\\text{div } \\mathbf{F}) + \\nabla^2 \\mathbf{F}
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The vector identity: $\\nabla \\times (\\nabla \\times \\mathbf{F}) = \\nabla(\\nabla \\cdot \\mathbf{F}) - \\nabla^2 \\mathbf{F}$, where $\\nabla^2 \\mathbf{F}$ is the component-wise Laplacian.',
  },
      '$\\text{div}(\\text{grad } \\mathbf{F})
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The vector identity: $\\nabla \\times (\\nabla \\times \\mathbf{F}) = \\nabla(\\nabla \\cdot \\mathbf{F}) - \\nabla^2 \\mathbf{F}$, where $\\nabla^2 \\mathbf{F}$ is the component-wise Laplacian.',
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The vector identity: $\\nabla \\times (\\nabla \\times \\mathbf{F}) = \\nabla(\\nabla \\cdot \\mathbf{F}) - \\nabla^2 \\mathbf{F}$, where $\\nabla^2 \\mathbf{F}$ is the component-wise Laplacian.',
  },
];
