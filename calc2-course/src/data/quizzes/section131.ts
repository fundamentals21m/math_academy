import type { QuizQuestion } from './types';

export const section131Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The change of variables formula for double integrals transforms $\\iint_S f(x,y)\\,dx\\,dy$ into:',
    options: [
      '$\\iint_T f[X(u,v), Y(u,v)]\\,du\\,dv
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The transformation formula is $\\iint_S f(x,y)\\,dx\\,dy = \\iint_T f[X(u,v), Y(u,v)] |J(u,v)|\\,du\\,dv$, where $|J|$ is the absolute value of the Jacobian determinant.',
  },
      '$\\iint_T f[X(u,v), Y(u,v)] |J(u,v)|\\,du\\,dv
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The transformation formula is $\\iint_S f(x,y)\\,dx\\,dy = \\iint_T f[X(u,v), Y(u,v)] |J(u,v)|\\,du\\,dv$, where $|J|$ is the absolute value of the Jacobian determinant.',
  },
      '$\\iint_T f[X(u,v), Y(u,v)] J(u,v)\\,du\\,dv
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The transformation formula is $\\iint_S f(x,y)\\,dx\\,dy = \\iint_T f[X(u,v), Y(u,v)] |J(u,v)|\\,du\\,dv$, where $|J|$ is the absolute value of the Jacobian determinant.',
  },
      '$\\iint_T f(u,v)\\,du\\,dv
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The transformation formula is $\\iint_S f(x,y)\\,dx\\,dy = \\iint_T f[X(u,v), Y(u,v)] |J(u,v)|\\,du\\,dv$, where $|J|$ is the absolute value of the Jacobian determinant.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The transformation formula is $\\iint_S f(x,y)\\,dx\\,dy = \\iint_T f[X(u,v), Y(u,v)] |J(u,v)|\\,du\\,dv$, where $|J|$ is the absolute value of the Jacobian determinant.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Jacobian determinant $J(u,v)$ for the mapping $x = X(u,v)$, $y = Y(u,v)$ is:',
    options: [
      '$\\frac{\\partial X}{\\partial u} + \\frac{\\partial Y}{\\partial v}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The Jacobian is the determinant $J = \\begin{vmatrix} \\frac{\\partial X}{\\partial u} & \\frac{\\partial Y}{\\partial u} \\\\ \\frac{\\partial X}{\\partial v} & \\frac{\\partial Y}{\\partial v} \\end{vmatrix} = \\frac{\\partial X}{\\partial u}\\frac{\\partial Y}{\\partial v} - \\frac{\\partial X}{\\partial v}\\frac{\\partial Y}{\\partial u}$.',
  },
      '$\\frac{\\partial X}{\\partial u} \\cdot \\frac{\\partial Y}{\\partial v}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Jacobian is the determinant $J = \\begin{vmatrix} \\frac{\\partial X}{\\partial u} & \\frac{\\partial Y}{\\partial u} \\\\ \\frac{\\partial X}{\\partial v} & \\frac{\\partial Y}{\\partial v} \\end{vmatrix} = \\frac{\\partial X}{\\partial u}\\frac{\\partial Y}{\\partial v} - \\frac{\\partial X}{\\partial v}\\frac{\\partial Y}{\\partial u}$.',
  },
      '$\\frac{\\partial X}{\\partial u}\\frac{\\partial Y}{\\partial u} + \\frac{\\partial X}{\\partial v}\\frac{\\partial Y}{\\partial v}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Jacobian is the determinant $J = \\begin{vmatrix} \\frac{\\partial X}{\\partial u} & \\frac{\\partial Y}{\\partial u} \\\\ \\frac{\\partial X}{\\partial v} & \\frac{\\partial Y}{\\partial v} \\end{vmatrix} = \\frac{\\partial X}{\\partial u}\\frac{\\partial Y}{\\partial v} - \\frac{\\partial X}{\\partial v}\\frac{\\partial Y}{\\partial u}$.',
  },
      '$\\frac{\\partial X}{\\partial u}\\frac{\\partial Y}{\\partial v} - \\frac{\\partial X}{\\partial v}\\frac{\\partial Y}{\\partial u}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Jacobian is the determinant $J = \\begin{vmatrix} \\frac{\\partial X}{\\partial u} & \\frac{\\partial Y}{\\partial u} \\\\ \\frac{\\partial X}{\\partial v} & \\frac{\\partial Y}{\\partial v} \\end{vmatrix} = \\frac{\\partial X}{\\partial u}\\frac{\\partial Y}{\\partial v} - \\frac{\\partial X}{\\partial v}\\frac{\\partial Y}{\\partial u}$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Jacobian is the determinant $J = \\begin{vmatrix} \\frac{\\partial X}{\\partial u} & \\frac{\\partial Y}{\\partial u} \\\\ \\frac{\\partial X}{\\partial v} & \\frac{\\partial Y}{\\partial v} \\end{vmatrix} = \\frac{\\partial X}{\\partial u}\\frac{\\partial Y}{\\partial v} - \\frac{\\partial X}{\\partial v}\\frac{\\partial Y}{\\partial u}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The geometric interpretation of $|J(u,v)|$ is:',
    options: [
      'The area magnification factor',
      'The angle between coordinate curves',
      'The length magnification factor',
      'The volume of the image region',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The absolute value of the Jacobian $|J|$ represents the local magnification factor for areas. A small rectangle in the uv-plane with area $\\Delta u \\cdot \\Delta v$ maps to a parallelogram with area approximately $|J| \\Delta u \\cdot \\Delta v$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The vectors $\\mathbf{V}_1 = \\frac{\\partial \\mathbf{r}}{\\partial u}$ and $\\mathbf{V}_2 = \\frac{\\partial \\mathbf{r}}{\\partial v}$ are:',
    options: [
      'Normal to the coordinate curves',
      'Always of unit length',
      'Always perpendicular to each other',
      'Tangent to the u-curves and v-curves, respectively',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$\\mathbf{V}_1 = \\frac{\\partial \\mathbf{r}}{\\partial u}$ is tangent to u-curves (where v is constant), and $\\mathbf{V}_2 = \\frac{\\partial \\mathbf{r}}{\\partial v}$ is tangent to v-curves. Their cross product relates to $J$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $J(u,v) = 1$ for all $(u,v)$ in the parameter domain, then the mapping:',
    options: [
      'Is not invertible',
      'Preserves angles',
      'Preserves areas',
      'Is a rotation',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'When $|J| = 1$, there is no magnification or reduction of areas—the mapping is area-preserving. This doesn\'t necessarily mean it preserves shapes or angles.',
  },
];
