import type { QuizQuestion } from './types';

export const section126Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Green\'s theorem relates:',
    options: [
      'A triple integral to a surface integral',
      'A line integral to the gradient of a function',
      'A double integral over a region to a line integral around its boundary',
      'Two double integrals over different regions',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Green\'s theorem states $\\iint_R (\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y})\\,dx\\,dy = \\oint_C P\\,dx + Q\\,dy$, relating a double integral to a line integral.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In Green\'s theorem, the line integral is taken around the boundary curve $C$ in the:',
    options: [
      'Clockwise direction',
      'Counterclockwise (positive) direction',
      'Direction of increasing arc length',
      'Either direction with appropriate sign',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The standard form of Green\'s theorem requires the line integral to be taken in the counterclockwise (positive) direction, keeping the region on the left.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A Jordan curve is:',
    options: [
      'Any closed curve',
      'A piecewise linear curve',
      'A curve that encloses zero area',
      'A simple closed curve (no self-intersections)'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A Jordan curve (simple closed curve) is a closed curve with no self-intersections—distinct parameter values give distinct points, except at the endpoints.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Green\'s theorem for a Type I region is proved by showing that $-\\iint_R \\frac{\\partial P}{\\partial y}\\,dx\\,dy$ equals:',
    options: [
      '$\\oint_C P\\,dx$',
      '$\\oint_C Q\\,dy$',
      '$\\oint_C P\\,dy$',
      '$\\iint_R P\\,dx\\,dy$'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'For Type I regions, one proves $-\\iint_R \\frac{\\partial P}{\\partial y}\\,dx\\,dy = \\oint_C P\\,dx$ by iterated integration and comparing with the line integral.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The expression $\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}$ appearing in Green\'s theorem is related to:',
    options: [
      'The divergence of the vector field $(P, Q)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For $\\mathbf{F} = P\\mathbf{i} + Q\\mathbf{j}$, the expression $\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}$ is the z-component of $\\nabla \\times \\mathbf{F}$ (the curl), making Green\'s theorem a 2D version of Stokes\' theorem.',
  },
      'The gradient of a potential function',
      'The curl (z-component) of the vector field $(P, Q, 0)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For $\\mathbf{F} = P\\mathbf{i} + Q\\mathbf{j}$, the expression $\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}$ is the z-component of $\\nabla \\times \\mathbf{F}$ (the curl), making Green\'s theorem a 2D version of Stokes\' theorem.',
  },
      'The Laplacian of a scalar field',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For $\\mathbf{F} = P\\mathbf{i} + Q\\mathbf{j}$, the expression $\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y}$ is the z-component of $\\nabla \\times \\mathbf{F}$ (the curl), making Green\'s theorem a 2D version of Stokes\' theorem.',
  },
];
