import type { QuizQuestion } from './types';

export const section147Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Divergence Theorem (Gauss\' Theorem) relates:',
    options: [
      'A line integral to a surface integral',
      'A double integral to a line integral',
      'Two surface integrals',
      'A triple integral over a solid to a surface integral over its boundary',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The Divergence Theorem: $\\iiint_V (\\text{div } \\mathbf{F})\\,dV = \\iint_S \\mathbf{F} \\cdot \\mathbf{n}\\,dS$, relating a volume integral to a surface integral over the boundary.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In the Divergence Theorem, $\\mathbf{n}$ is:',
    options: [
      'The unit outer (outward-pointing) normal',
      'Any normal to the surface',
      'The tangent vector to the boundary',
      'The gradient of the surface',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The surface integral uses the unit outward normal $\\mathbf{n}$, pointing away from the interior of the solid $V$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For $\\mathbf{F} = x^2\\mathbf{i} + y^2\\mathbf{j} + z^2\\mathbf{k}$, the divergence is:',
    options: [
      '$x^2 + y^2 + z^2
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$\\text{div } \\mathbf{F} = \\frac{\\partial(x^2)}{\\partial x} + \\frac{\\partial(y^2)}{\\partial y} + \\frac{\\partial(z^2)}{\\partial z} = 2x + 2y + 2z$.',
  },
      '$2(x + y + z)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$\\text{div } \\mathbf{F} = \\frac{\\partial(x^2)}{\\partial x} + \\frac{\\partial(y^2)}{\\partial y} + \\frac{\\partial(z^2)}{\\partial z} = 2x + 2y + 2z$.',
  },
      '$2x + 2y + 2z
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$\\text{div } \\mathbf{F} = \\frac{\\partial(x^2)}{\\partial x} + \\frac{\\partial(y^2)}{\\partial y} + \\frac{\\partial(z^2)}{\\partial z} = 2x + 2y + 2z$.',
  },
      '$6
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$\\text{div } \\mathbf{F} = \\frac{\\partial(x^2)}{\\partial x} + \\frac{\\partial(y^2)}{\\partial y} + \\frac{\\partial(z^2)}{\\partial z} = 2x + 2y + 2z$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$\\text{div } \\mathbf{F} = \\frac{\\partial(x^2)}{\\partial x} + \\frac{\\partial(y^2)}{\\partial y} + \\frac{\\partial(z^2)}{\\partial z} = 2x + 2y + 2z$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The Divergence Theorem is proved first for solids that are:',
    options: [
      'Cubes only',
      'Projectable onto all three coordinate planes (like xy-projectable)',
      'Spheres only',
      'Convex and bounded',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The proof works for xy-projectable (and similarly yz- and xz-projectable) solids. General solids are handled by decomposition.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'Using the Divergence Theorem, find $\\iiint_V (2x + 2y + 2z)\\,dV$ over the unit cube $[0,1]^3$.',
    correctAnswer: 3,
    numericRange: { min: 0, max: 10, precision: 0 },
    difficulty: 'medium',
    explanation: '$\\iiint_{[0,1]^3} (2x + 2y + 2z)\\,dV = 2\\int_0^1 x\\,dx + 2\\int_0^1 y\\,dy + 2\\int_0^1 z\\,dz = 2(\\frac{1}{2}) + 2(\\frac{1}{2}) + 2(\\frac{1}{2}) = 3$.',
  },
];
