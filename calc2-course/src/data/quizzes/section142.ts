import type { QuizQuestion } from './types';

export const section142Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Stokes\' theorem relates:',
    options: [
      'A line integral to a double integral over a plane region',
      'A triple integral to a surface integral',
      'A surface integral to a line integral around the boundary of the surface',
      'Two different line integrals',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Stokes\' theorem: $\\oint_C \\mathbf{F} \\cdot d\\mathbf{r} = \\iint_S (\\nabla \\times \\mathbf{F}) \\cdot d\\mathbf{S}$, relating a line integral around boundary $C$ to a surface integral over $S$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In Stokes\' theorem, the orientation of the boundary curve $C$ and the normal to $S$ are related by:',
    options: [
      'The left-hand rule',
      'The right-hand rule',
      'They must be perpendicular',
      'They are independent',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The right-hand rule relates the orientations: if fingers curl in the direction of $C$, the thumb points in the direction of the surface normal.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The curl of $\\mathbf{F} = P\\mathbf{i} + Q\\mathbf{j} + R\\mathbf{k}$ is:',
    options: [
      '$(\\frac{\\partial P}{\\partial x} + \\frac{\\partial Q}{\\partial y} + \\frac{\\partial R}{\\partial z})
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The curl is $\\nabla \\times \\mathbf{F} = (\\frac{\\partial R}{\\partial y} - \\frac{\\partial Q}{\\partial z})\\mathbf{i} + (\\frac{\\partial P}{\\partial z} - \\frac{\\partial R}{\\partial x})\\mathbf{j} + (\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y})\\mathbf{k}$.',
  },
      '$(\\frac{\\partial P}{\\partial y} - \\frac{\\partial Q}{\\partial x})\\mathbf{k}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The curl is $\\nabla \\times \\mathbf{F} = (\\frac{\\partial R}{\\partial y} - \\frac{\\partial Q}{\\partial z})\\mathbf{i} + (\\frac{\\partial P}{\\partial z} - \\frac{\\partial R}{\\partial x})\\mathbf{j} + (\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y})\\mathbf{k}$.',
  },
      '$P\\mathbf{i} \\times Q\\mathbf{j} \\times R\\mathbf{k}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The curl is $\\nabla \\times \\mathbf{F} = (\\frac{\\partial R}{\\partial y} - \\frac{\\partial Q}{\\partial z})\\mathbf{i} + (\\frac{\\partial P}{\\partial z} - \\frac{\\partial R}{\\partial x})\\mathbf{j} + (\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y})\\mathbf{k}$.',
  },
      '$(\\frac{\\partial R}{\\partial y} - \\frac{\\partial Q}{\\partial z})\\mathbf{i} + (\\frac{\\partial P}{\\partial z} - \\frac{\\partial R}{\\partial x})\\mathbf{j} + (\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y})\\mathbf{k}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The curl is $\\nabla \\times \\mathbf{F} = (\\frac{\\partial R}{\\partial y} - \\frac{\\partial Q}{\\partial z})\\mathbf{i} + (\\frac{\\partial P}{\\partial z} - \\frac{\\partial R}{\\partial x})\\mathbf{j} + (\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y})\\mathbf{k}$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The curl is $\\nabla \\times \\mathbf{F} = (\\frac{\\partial R}{\\partial y} - \\frac{\\partial Q}{\\partial z})\\mathbf{i} + (\\frac{\\partial P}{\\partial z} - \\frac{\\partial R}{\\partial x})\\mathbf{j} + (\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y})\\mathbf{k}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'When $S$ is a region in the xy-plane and $\\mathbf{F} = P\\mathbf{i} + Q\\mathbf{j}$, Stokes\' theorem reduces to:',
    options: [
      'Green\\\\'s theorem',
      'The fundamental theorem of calculus',
      'The divergence theorem',
      'The chain rule',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'For a planar region with $\\mathbf{F} = P\\mathbf{i} + Q\\mathbf{j}$, Stokes\' theorem gives $\\oint_C P\\,dx + Q\\,dy = \\iint_S (\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y})\\,dA$, which is Green\'s theorem.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The curl of $\\mathbf{F} = y\\mathbf{i} + z\\mathbf{j} + x\\mathbf{k}$ is:',
    options: [
      '$\\mathbf{i} + \\mathbf{j} + \\mathbf{k}
    correctIndex: 3,
    difficulty: 'hard',
    explanation: '$\\nabla \\times \\mathbf{F} = (\\frac{\\partial x}{\\partial y} - \\frac{\\partial z}{\\partial z})\\mathbf{i} + (\\frac{\\partial y}{\\partial z} - \\frac{\\partial x}{\\partial x})\\mathbf{j} + (\\frac{\\partial z}{\\partial x} - \\frac{\\partial y}{\\partial y})\\mathbf{k} = (0-1)\\mathbf{i} + (0-1)\\mathbf{j} + (0-1)\\mathbf{k} = -\\mathbf{i} - \\mathbf{j} - \\mathbf{k}$.',
  },
      '$\\mathbf{0}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: '$\\nabla \\times \\mathbf{F} = (\\frac{\\partial x}{\\partial y} - \\frac{\\partial z}{\\partial z})\\mathbf{i} + (\\frac{\\partial y}{\\partial z} - \\frac{\\partial x}{\\partial x})\\mathbf{j} + (\\frac{\\partial z}{\\partial x} - \\frac{\\partial y}{\\partial y})\\mathbf{k} = (0-1)\\mathbf{i} + (0-1)\\mathbf{j} + (0-1)\\mathbf{k} = -\\mathbf{i} - \\mathbf{j} - \\mathbf{k}$.',
  },
      '$x\\mathbf{i} + y\\mathbf{j} + z\\mathbf{k}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: '$\\nabla \\times \\mathbf{F} = (\\frac{\\partial x}{\\partial y} - \\frac{\\partial z}{\\partial z})\\mathbf{i} + (\\frac{\\partial y}{\\partial z} - \\frac{\\partial x}{\\partial x})\\mathbf{j} + (\\frac{\\partial z}{\\partial x} - \\frac{\\partial y}{\\partial y})\\mathbf{k} = (0-1)\\mathbf{i} + (0-1)\\mathbf{j} + (0-1)\\mathbf{k} = -\\mathbf{i} - \\mathbf{j} - \\mathbf{k}$.',
  },
      '$-\\mathbf{i} - \\mathbf{j} - \\mathbf{k}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: '$\\nabla \\times \\mathbf{F} = (\\frac{\\partial x}{\\partial y} - \\frac{\\partial z}{\\partial z})\\mathbf{i} + (\\frac{\\partial y}{\\partial z} - \\frac{\\partial x}{\\partial x})\\mathbf{j} + (\\frac{\\partial z}{\\partial x} - \\frac{\\partial y}{\\partial y})\\mathbf{k} = (0-1)\\mathbf{i} + (0-1)\\mathbf{j} + (0-1)\\mathbf{k} = -\\mathbf{i} - \\mathbf{j} - \\mathbf{k}$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: '$\\nabla \\times \\mathbf{F} = (\\frac{\\partial x}{\\partial y} - \\frac{\\partial z}{\\partial z})\\mathbf{i} + (\\frac{\\partial y}{\\partial z} - \\frac{\\partial x}{\\partial x})\\mathbf{j} + (\\frac{\\partial z}{\\partial x} - \\frac{\\partial y}{\\partial y})\\mathbf{k} = (0-1)\\mathbf{i} + (0-1)\\mathbf{j} + (0-1)\\mathbf{k} = -\\mathbf{i} - \\mathbf{j} - \\mathbf{k}$.',
  },
];
