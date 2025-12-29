import type { QuizQuestion } from './types';

export const section87Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Curvature $\\kappa$ measures:',
    options: [
      'The length of the curve',
      'How fast the curve bends',
      'The speed along the curve',
      'The total rotation'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Curvature = rate of change of direction.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For arc length parametrization, $\\kappa = |\\mathbf{T}\'(s)|$ where $\\mathbf{T}$ is:',
    options: [
      'The position vector',
      'The unit tangent vector',
      'The normal vector',
      'The acceleration'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\mathbf{T} = \\mathbf{r}\'/|\\mathbf{r}\'|$ is the unit tangent.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The curvature of a straight line is:',
    options: [
      '$1$',
      '$\\infty$',
      '$0$',
      'Undefined'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A line doesn\'t bend: $\\kappa = 0$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The curvature of a circle of radius $R$ is:',
    options: [
      '$R$',
      '$1/R$',
      '$R^2$',
      '$2\\pi R$'
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
      'Parallel to $\\mathbf{T}$',
      'The unit vector in the direction of $\\mathbf{T}\'$',
      'Perpendicular to the curve',
      'The acceleration vector'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: '$\\mathbf{N} = \\mathbf{T}\'/|\\mathbf{T}\'|$ points toward center of curvature.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The radius of curvature $\\rho$ satisfies:',
    options: [
      '$\\rho = \\kappa$',
      '$\\rho = 1/\\kappa$',
      '$\\rho = \\kappa^2$',
      '$\\rho = \\sqrt{\\kappa}$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Radius of curvature = $1/\\kappa$.',
  },
];
