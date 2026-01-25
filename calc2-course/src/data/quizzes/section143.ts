import type { QuizQuestion } from './types';

export const section143Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The divergence of $\\mathbf{F} = P\\mathbf{i} + Q\\mathbf{j} + R\\mathbf{k}$ is:',
    options: [
      '$\\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} + \\frac{\\partial R}{\\partial z}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The divergence is $\\nabla \\cdot \\mathbf{F} = \\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} + \\frac{\\partial R}{\\partial z}$, the sum of the partial derivatives.',
  },
      '$\\frac{\\partial P}{\\partial x} \\cdot \\frac{\\partial Q}{\\partial y} \\cdot \\frac{\\partial R}{\\partial z}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The divergence is $\\nabla \\cdot \\mathbf{F} = \\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} + \\frac{\\partial R}{\\partial z}$, the sum of the partial derivatives.',
  },
      '$P + Q + R
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The divergence is $\\nabla \\cdot \\mathbf{F} = \\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} + \\frac{\\partial R}{\\partial z}$, the sum of the partial derivatives.',
  },
      '$\\frac{\\partial P}{\\partial y} + \\frac{\\partial Q}{\\partial z} + \\frac{\\partial R}{\\partial x}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The divergence is $\\nabla \\cdot \\mathbf{F} = \\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} + \\frac{\\partial R}{\\partial z}$, the sum of the partial derivatives.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The divergence is $\\nabla \\cdot \\mathbf{F} = \\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} + \\frac{\\partial R}{\\partial z}$, the sum of the partial derivatives.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The curl can be written symbolically as:',
    options: [
      '$\\nabla \\cdot \\mathbf{F}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The curl is $\\nabla \\times \\mathbf{F}$, the "cross product" of the nabla operator with $\\mathbf{F}$.',
  },
      '$\\nabla^2 \\mathbf{F}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The curl is $\\nabla \\times \\mathbf{F}$, the "cross product" of the nabla operator with $\\mathbf{F}$.',
  },
      '$\\mathbf{F} \\cdot \\nabla
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The curl is $\\nabla \\times \\mathbf{F}$, the "cross product" of the nabla operator with $\\mathbf{F}$.',
  },
      '$\\nabla \\times \\mathbf{F}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The curl is $\\nabla \\times \\mathbf{F}$, the "cross product" of the nabla operator with $\\mathbf{F}$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The curl is $\\nabla \\times \\mathbf{F}$, the "cross product" of the nabla operator with $\\mathbf{F}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A vector field $\\mathbf{F}$ is irrotational if:',
    options: [
      '$\\text{div } \\mathbf{F} = 0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Irrotational means $\\nabla \\times \\mathbf{F} = \\mathbf{0}$ (zero curl). On simply connected domains, this is equivalent to $\\mathbf{F}$ being a gradient.',
  },
      '$\\text{curl } \\mathbf{F} = \\mathbf{0}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Irrotational means $\\nabla \\times \\mathbf{F} = \\mathbf{0}$ (zero curl). On simply connected domains, this is equivalent to $\\mathbf{F}$ being a gradient.',
  },
      '$\\mathbf{F}$ is constant',
      '$\\mathbf{F} = \\mathbf{0}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Irrotational means $\\nabla \\times \\mathbf{F} = \\mathbf{0}$ (zero curl). On simply connected domains, this is equivalent to $\\mathbf{F}$ being a gradient.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Irrotational means $\\nabla \\times \\mathbf{F} = \\mathbf{0}$ (zero curl). On simply connected domains, this is equivalent to $\\mathbf{F}$ being a gradient.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'On an open convex set, $\\mathbf{F}$ is a gradient if and only if:',
    options: [
      '$\\text{div } \\mathbf{F} = 0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'On convex (hence simply connected) sets, $\\mathbf{F}$ is a gradient iff $\\nabla \\times \\mathbf{F} = \\mathbf{0}$.',
  },
      '$\\text{curl } \\mathbf{F} = \\mathbf{0}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'On convex (hence simply connected) sets, $\\mathbf{F}$ is a gradient iff $\\nabla \\times \\mathbf{F} = \\mathbf{0}$.',
  },
      '$\\mathbf{F}$ is bounded',
      '$\\mathbf{F}$ has continuous derivatives',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'On convex (hence simply connected) sets, $\\mathbf{F}$ is a gradient iff $\\nabla \\times \\mathbf{F} = \\mathbf{0}$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For $\\mathbf{F} = x\\mathbf{i} + y\\mathbf{j} + z\\mathbf{k}$, the divergence and curl are:',
    options: [
      '$\\text{div } \\mathbf{F} = 0$, $\\text{curl } \\mathbf{F} = \\mathbf{i} + \\mathbf{j} + \\mathbf{k}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$\\text{div } \\mathbf{F} = 1 + 1 + 1 = 3$. For curl: all cross-partials vanish (e.g., $\\frac{\\partial z}{\\partial y} - \\frac{\\partial y}{\\partial z} = 0$), so $\\text{curl } \\mathbf{F} = \\mathbf{0}$.',
  },
      '$\\text{div } \\mathbf{F} = 1$, $\\text{curl } \\mathbf{F} = \\mathbf{0}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\text{div } \\mathbf{F} = 1 + 1 + 1 = 3$. For curl: all cross-partials vanish (e.g., $\\frac{\\partial z}{\\partial y} - \\frac{\\partial y}{\\partial z} = 0$), so $\\text{curl } \\mathbf{F} = \\mathbf{0}$.',
  },
      '$\\text{div } \\mathbf{F} = 3$, $\\text{curl } \\mathbf{F} = \\mathbf{0}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\text{div } \\mathbf{F} = 1 + 1 + 1 = 3$. For curl: all cross-partials vanish (e.g., $\\frac{\\partial z}{\\partial y} - \\frac{\\partial y}{\\partial z} = 0$), so $\\text{curl } \\mathbf{F} = \\mathbf{0}$.',
  },
      '$\\text{div } \\mathbf{F} = 3$, $\\text{curl } \\mathbf{F} = \\mathbf{i} + \\mathbf{j} + \\mathbf{k}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\text{div } \\mathbf{F} = 1 + 1 + 1 = 3$. For curl: all cross-partials vanish (e.g., $\\frac{\\partial z}{\\partial y} - \\frac{\\partial y}{\\partial z} = 0$), so $\\text{curl } \\mathbf{F} = \\mathbf{0}$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\text{div } \\mathbf{F} = 1 + 1 + 1 = 3$. For curl: all cross-partials vanish (e.g., $\\frac{\\partial z}{\\partial y} - \\frac{\\partial y}{\\partial z} = 0$), so $\\text{curl } \\mathbf{F} = \\mathbf{0}$.',
  },
];
