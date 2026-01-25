import type { QuizQuestion } from './types';

export const section148Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The coordinate-free definition of divergence is:',
    options: [
      '$\\text{div } \\mathbf{F}(\\mathbf{a}) = \\lim_{t \\to 0} \\frac{1}{|S(t)|} \\oint_{C(t)} \\mathbf{F} \\cdot d\\mathbf{r}
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The divergence is the limit of the flux per unit volume through a shrinking sphere: $\\text{div } \\mathbf{F}(\\mathbf{a}) = \\lim_{t \\to 0} \\frac{1}{|V(t)|} \\iint_{S(t)} \\mathbf{F} \\cdot \\mathbf{n}\\,dS$.',
  },
      '$\\text{div } \\mathbf{F}(\\mathbf{a}) = \\nabla \\cdot \\mathbf{F}
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The divergence is the limit of the flux per unit volume through a shrinking sphere: $\\text{div } \\mathbf{F}(\\mathbf{a}) = \\lim_{t \\to 0} \\frac{1}{|V(t)|} \\iint_{S(t)} \\mathbf{F} \\cdot \\mathbf{n}\\,dS$.',
  },
      '$\\text{div } \\mathbf{F}(\\mathbf{a}) = \\lim_{t \\to 0} \\frac{1}{|V(t)|} \\iint_{S(t)} \\mathbf{F} \\cdot \\mathbf{n}\\,dS
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The divergence is the limit of the flux per unit volume through a shrinking sphere: $\\text{div } \\mathbf{F}(\\mathbf{a}) = \\lim_{t \\to 0} \\frac{1}{|V(t)|} \\iint_{S(t)} \\mathbf{F} \\cdot \\mathbf{n}\\,dS$.',
  },
      '$\\text{div } \\mathbf{F}(\\mathbf{a}) = \\lim_{t \\to 0} \\iint_{S(t)} \\mathbf{F} \\cdot \\mathbf{n}\\,dS
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The divergence is the limit of the flux per unit volume through a shrinking sphere: $\\text{div } \\mathbf{F}(\\mathbf{a}) = \\lim_{t \\to 0} \\frac{1}{|V(t)|} \\iint_{S(t)} \\mathbf{F} \\cdot \\mathbf{n}\\,dS$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The divergence is the limit of the flux per unit volume through a shrinking sphere: $\\text{div } \\mathbf{F}(\\mathbf{a}) = \\lim_{t \\to 0} \\frac{1}{|V(t)|} \\iint_{S(t)} \\mathbf{F} \\cdot \\mathbf{n}\\,dS$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The physical interpretation of divergence for a velocity field is:',
    options: [
      'The angular velocity',
      'The rate of expansion or compression per unit volume',
      'The kinetic energy density',
      'The pressure',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Divergence measures the rate at which fluid expands (positive divergence) or compresses (negative divergence) at a point—the local "source strength."',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The physical interpretation of $\\mathbf{n} \\cdot \\text{curl } \\mathbf{F}$ for a velocity field is:',
    options: [
      'The rate of volume expansion',
      'The circulation density (rotation rate) about axis $\\mathbf{n}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\mathbf{n} \\cdot \\text{curl } \\mathbf{F}$ is the circulation per unit area through a disk perpendicular to $\\mathbf{n}$, measuring the local rotation rate about that axis.',
  },
      'The acceleration',
      'The pressure gradient',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$\\mathbf{n} \\cdot \\text{curl } \\mathbf{F}$ is the circulation per unit area through a disk perpendicular to $\\mathbf{n}$, measuring the local rotation rate about that axis.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Green\'s first identity states:',
    options: [
      '$\\iint_S f g\\,dS = \\iiint_V (f + g)\\,dV
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Green\'s first identity: $\\iint_S f \\frac{\\partial g}{\\partial n}\\,dS = \\iiint_V (f\\nabla^2 g + \\nabla f \\cdot \\nabla g)\\,dV$, derived from the divergence theorem applied to $f \\nabla g$.',
  },
      '$\\iint_S \\nabla f \\cdot \\nabla g\\,dS = \\iiint_V f g\\,dV
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Green\'s first identity: $\\iint_S f \\frac{\\partial g}{\\partial n}\\,dS = \\iiint_V (f\\nabla^2 g + \\nabla f \\cdot \\nabla g)\\,dV$, derived from the divergence theorem applied to $f \\nabla g$.',
  },
      '$\\iint_S f\\,dS = \\iiint_V \\nabla f\\,dV
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Green\'s first identity: $\\iint_S f \\frac{\\partial g}{\\partial n}\\,dS = \\iiint_V (f\\nabla^2 g + \\nabla f \\cdot \\nabla g)\\,dV$, derived from the divergence theorem applied to $f \\nabla g$.',
  },
      '$\\iint_S f \\frac{\\partial g}{\\partial n}\\,dS = \\iiint_V (f\\nabla^2 g + \\nabla f \\cdot \\nabla g)\\,dV
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Green\'s first identity: $\\iint_S f \\frac{\\partial g}{\\partial n}\\,dS = \\iiint_V (f\\nabla^2 g + \\nabla f \\cdot \\nabla g)\\,dV$, derived from the divergence theorem applied to $f \\nabla g$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Green\'s first identity: $\\iint_S f \\frac{\\partial g}{\\partial n}\\,dS = \\iiint_V (f\\nabla^2 g + \\nabla f \\cdot \\nabla g)\\,dV$, derived from the divergence theorem applied to $f \\nabla g$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $f$ is harmonic ($\\nabla^2 f = 0$) in a solid $V$ with boundary $S$, then:',
    options: [
      '$\\iint_S \\frac{\\partial f}{\\partial n}\\,dS = 0
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'By Green\'s first identity with $f = g$: if $\\nabla^2 f = 0$, then $\\iint_S \\frac{\\partial f}{\\partial n}\\,dS = \\iiint_V |\\nabla f|^2\\,dV$. Taking $f = 1$ and $g$ harmonic shows $\\iint_S \\frac{\\partial g}{\\partial n}\\,dS = 0$.',
  },
      '$\\iint_S f\\,dS = 0
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'By Green\'s first identity with $f = g$: if $\\nabla^2 f = 0$, then $\\iint_S \\frac{\\partial f}{\\partial n}\\,dS = \\iiint_V |\\nabla f|^2\\,dV$. Taking $f = 1$ and $g$ harmonic shows $\\iint_S \\frac{\\partial g}{\\partial n}\\,dS = 0$.',
  },
      '$\\iiint_V f\\,dV = 0
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'By Green\'s first identity with $f = g$: if $\\nabla^2 f = 0$, then $\\iint_S \\frac{\\partial f}{\\partial n}\\,dS = \\iiint_V |\\nabla f|^2\\,dV$. Taking $f = 1$ and $g$ harmonic shows $\\iint_S \\frac{\\partial g}{\\partial n}\\,dS = 0$.',
  },
      '$\\iint_S f^2\\,dS = 0
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'By Green\'s first identity with $f = g$: if $\\nabla^2 f = 0$, then $\\iint_S \\frac{\\partial f}{\\partial n}\\,dS = \\iiint_V |\\nabla f|^2\\,dV$. Taking $f = 1$ and $g$ harmonic shows $\\iint_S \\frac{\\partial g}{\\partial n}\\,dS = 0$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'By Green\'s first identity with $f = g$: if $\\nabla^2 f = 0$, then $\\iint_S \\frac{\\partial f}{\\partial n}\\,dS = \\iiint_V |\\nabla f|^2\\,dV$. Taking $f = 1$ and $g$ harmonic shows $\\iint_S \\frac{\\partial g}{\\partial n}\\,dS = 0$.',
  },
];
