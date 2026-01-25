import type { QuizQuestion } from './types';

export const section141Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The flux integral of a vector field $\\mathbf{F}$ over surface $S$ is written as:',
    options: [
      '$\\iint_S \\mathbf{F}\\,dS
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The flux integral is $\\iint_S \\mathbf{F} \\cdot d\\mathbf{S} = \\iint_S \\mathbf{F} \\cdot \\mathbf{n}\\,dS$, where $d\\mathbf{S} = \\mathbf{n}\\,dS$ combines the normal and area element.',
  },
      '$\\iint_S \\mathbf{F} \\cdot d\\mathbf{S}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The flux integral is $\\iint_S \\mathbf{F} \\cdot d\\mathbf{S} = \\iint_S \\mathbf{F} \\cdot \\mathbf{n}\\,dS$, where $d\\mathbf{S} = \\mathbf{n}\\,dS$ combines the normal and area element.',
  },
      '$\\iint_S \\nabla \\cdot \\mathbf{F}\\,dS
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The flux integral is $\\iint_S \\mathbf{F} \\cdot d\\mathbf{S} = \\iint_S \\mathbf{F} \\cdot \\mathbf{n}\\,dS$, where $d\\mathbf{S} = \\mathbf{n}\\,dS$ combines the normal and area element.',
  },
      '$\\iint_S \\|\\mathbf{F}\\|\\,dS
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The flux integral is $\\iint_S \\mathbf{F} \\cdot d\\mathbf{S} = \\iint_S \\mathbf{F} \\cdot \\mathbf{n}\\,dS$, where $d\\mathbf{S} = \\mathbf{n}\\,dS$ combines the normal and area element.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The flux integral is $\\iint_S \\mathbf{F} \\cdot d\\mathbf{S} = \\iint_S \\mathbf{F} \\cdot \\mathbf{n}\\,dS$, where $d\\mathbf{S} = \\mathbf{n}\\,dS$ combines the normal and area element.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In the parametric computation of a flux integral, we use:',
    options: [
      'The fundamental vector product itself (not just its magnitude)',
      'The magnitude of the fundamental vector product',
      'The sum of partial derivatives',
      'The determinant of the Jacobian matrix'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\iint_S \\mathbf{F} \\cdot d\\mathbf{S} = \\iint_T \\mathbf{F} \\cdot (\\frac{\\partial \\mathbf{r}}{\\partial u} \\times \\frac{\\partial \\mathbf{r}}{\\partial v})\\,du\\,dv$. The vector product preserves direction, not just magnitude.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Reversing the orientation of a surface (flipping the normal) changes the flux integral by:',
    options: [
      'A factor of 2',
      'No change',
      'A sign change',
      'Multiplying by the surface area',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$\\iint_{-S} \\mathbf{F} \\cdot d\\mathbf{S} = -\\iint_S \\mathbf{F} \\cdot d\\mathbf{S}$. Reversing orientation negates the normal, hence the sign change.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For a surface $z = f(x, y)$ over region $T$, the flux integral becomes:',
    options: [
      '$\\iint_T (P + Q + R)\\,dx\\,dy
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'With $\\mathbf{F} = P\\mathbf{i} + Q\\mathbf{j} + R\\mathbf{k}$ and fundamental vector product $-f_x\\mathbf{i} - f_y\\mathbf{j} + \\mathbf{k}$, the flux is $\\iint_T (-Pf_x - Qf_y + R)\\,dx\\,dy$.',
  },
      '$\\iint_T (-Pf_x - Qf_y + R)\\,dx\\,dy
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'With $\\mathbf{F} = P\\mathbf{i} + Q\\mathbf{j} + R\\mathbf{k}$ and fundamental vector product $-f_x\\mathbf{i} - f_y\\mathbf{j} + \\mathbf{k}$, the flux is $\\iint_T (-Pf_x - Qf_y + R)\\,dx\\,dy$.',
  },
      '$\\iint_T (Pf_x + Qf_y + R)\\,dx\\,dy
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'With $\\mathbf{F} = P\\mathbf{i} + Q\\mathbf{j} + R\\mathbf{k}$ and fundamental vector product $-f_x\\mathbf{i} - f_y\\mathbf{j} + \\mathbf{k}$, the flux is $\\iint_T (-Pf_x - Qf_y + R)\\,dx\\,dy$.',
  },
      '$\\iint_T \\sqrt{P^2 + Q^2 + R^2}\\,dx\\,dy
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'With $\\mathbf{F} = P\\mathbf{i} + Q\\mathbf{j} + R\\mathbf{k}$ and fundamental vector product $-f_x\\mathbf{i} - f_y\\mathbf{j} + \\mathbf{k}$, the flux is $\\iint_T (-Pf_x - Qf_y + R)\\,dx\\,dy$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'With $\\mathbf{F} = P\\mathbf{i} + Q\\mathbf{j} + R\\mathbf{k}$ and fundamental vector product $-f_x\\mathbf{i} - f_y\\mathbf{j} + \\mathbf{k}$, the flux is $\\iint_T (-Pf_x - Qf_y + R)\\,dx\\,dy$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $\\mathbf{F}$ represents fluid velocity, the flux $\\iint_S \\mathbf{F} \\cdot d\\mathbf{S}$ measures:',
    options: [
      'The total kinetic energy of the fluid',
      'The total mass of fluid',
      'The pressure on the surface',
      'The rate of fluid volume crossing the surface per unit time'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Flux of a velocity field gives the volumetric flow rate through the surface—how much volume of fluid crosses per unit time in the direction of the normal.',
  },
];
