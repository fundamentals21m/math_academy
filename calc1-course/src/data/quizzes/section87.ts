import type { QuizQuestion } from './types';

export const section87Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Curvature $\\kappa$ measures:',
    options: [
      'The length of the curve',
      'The speed along the curve',
      'How fast the curve bends',
      'The total rotation',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Curvature = rate of change of direction.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For arc length parametrization, $\\kappa = |\\mathbf{T}\'(s)|$ where $\\mathbf{T}$ is:',
    options: [
      'The position vector',
      'The acceleration',
      'The normal vector',
      'The unit tangent vector',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$\\mathbf{T} = \\mathbf{r}\'/|\\mathbf{r}\'|$ is the unit tangent.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The curvature of a straight line is:',
    options: [
      '$\\infty
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A line doesn\'t bend: $\\kappa = 0$.',
  },
      '$0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A line doesn\'t bend: $\\kappa = 0$.',
  },
      '$1
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A line doesn\'t bend: $\\kappa = 0$.',
  },
      'Undefined',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A line doesn\'t bend: $\\kappa = 0$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The curvature of a circle of radius $R$ is:',
    options: [
      '$R
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Circle: $\\kappa = 1/R$. Smaller radius = tighter curve.',
  },
      '$R^2
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Circle: $\\kappa = 1/R$. Smaller radius = tighter curve.',
  },
      '$1/R
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Circle: $\\kappa = 1/R$. Smaller radius = tighter curve.',
  },
      '$2\\pi R
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Circle: $\\kappa = 1/R$. Smaller radius = tighter curve.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Circle: $\\kappa = 1/R$. Smaller radius = tighter curve.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The principal normal $\\mathbf{N}$ is:',
    options: [
      'Parallel to $\\mathbf{T}
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$\\mathbf{N} = \\mathbf{T}\'/|\\mathbf{T}\'|$ points toward center of curvature.',
  },
      'The unit vector in the direction of $\\mathbf{T}\\'
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$\\mathbf{N} = \\mathbf{T}\'/|\\mathbf{T}\'|$ points toward center of curvature.',
  },
      'Perpendicular to the curve',
      'The acceleration vector',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$\\mathbf{N} = \\mathbf{T}\'/|\\mathbf{T}\'|$ points toward center of curvature.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The radius of curvature $\\rho$ satisfies:',
    options: [
      '$\\rho = 1/\\kappa
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Radius of curvature = $1/\\kappa$.',
  },
      '$\\rho = \\kappa
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Radius of curvature = $1/\\kappa$.',
  },
      '$\\rho = \\sqrt{\\kappa}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Radius of curvature = $1/\\kappa$.',
  },
      '$\\rho = \\kappa^2
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Radius of curvature = $1/\\kappa$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Radius of curvature = $1/\\kappa$.',
  },
];
