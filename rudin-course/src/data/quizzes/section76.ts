import type { QuizQuestion } from './types';

export const section76Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The gradient of a scalar field $f$ in vector calculus corresponds to:',
    options: [
      'The exterior derivative $df$ (a 1-form)',
      'The Laplacian $\\Delta f$',
      'The divergence of $f$',
      'A 2-form'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The gradient $\\nabla f$ corresponds to the 1-form $df = \\sum \\frac{\\partial f}{\\partial x_i} dx_i$. The vector field is obtained using the metric.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In $\\mathbb{R}^3$, the curl of a vector field $F$ corresponds to:',
    options: [
      'The exterior derivative of the 1-form associated to $F$, converted back to a vector',
      'The divergence of $F$',
      'The gradient of a scalar',
      'The Laplacian of $F$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'If $\\omega_F$ is the 1-form for $F$, then $d\\omega_F$ is a 2-form. Using the Hodge star in $\\mathbb{R}^3$, this converts to a 1-form, giving curl $F$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The divergence of a vector field $F$ in $\\mathbb{R}^3$ corresponds to:',
    options: [
      'The exterior derivative of the 2-form $*\\omega_F$, yielding a 3-form proportional to $\\text{div}(F)\\,dV$',
      'The exterior derivative of the 1-form $\\omega_F$',
      'A 0-form directly',
      'The curl of another field'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Divergence is captured by taking $d$ of the 2-form associated to $F$ via the Hodge star. The result is a 3-form $\\text{div}(F) dx \\wedge dy \\wedge dz$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The identity $\\text{curl}(\\nabla f) = 0$ corresponds to:',
    options: [
      '$d(df) = 0$ (since $d^2 = 0$)',
      'The divergence theorem',
      'The mean value theorem',
      'Green\'s theorem'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The curl of a gradient is zero because the curl corresponds to $d$ of a 1-form, and $df$ is already the $d$ of the 0-form $f$. So $d(df) = d^2 f = 0$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The identity $\\text{div}(\\text{curl } F) = 0$ corresponds to:',
    options: [
      '$d^2 = 0$ applied to the 1-form of $F$',
      'Stokes\' theorem',
      'The product rule',
      'Conservation of mass'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Div of curl corresponds to applying $d$ twice (in the appropriate form language), which gives zero by $d^2 = 0$.',
  },
];
