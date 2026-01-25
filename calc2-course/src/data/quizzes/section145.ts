import type { QuizQuestion } from './types';

export const section145Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A vector field $\\mathbf{F}$ with $\\text{div } \\mathbf{F} = 0$ is called:',
    options: [
      'Solenoidal',
      'Irrotational',
      'Conservative',
      'Harmonic',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A solenoidal (or divergence-free) field has $\\nabla \\cdot \\mathbf{F} = 0$. Examples include magnetic fields and incompressible fluid velocity fields.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For $\\mathbf{F}$ to be expressible as $\\text{curl } \\mathbf{G}$ for some $\\mathbf{G}$, a necessary condition is:',
    options: [
      '$\\text{curl } \\mathbf{F} = \\mathbf{0}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Since $\\text{div}(\\text{curl } \\mathbf{G}) = 0$ always, we need $\\text{div } \\mathbf{F} = 0$ for $\\mathbf{F}$ to be a curl.',
  },
      '$\\mathbf{F}$ is bounded',
      '$\\mathbf{F}$ is continuous',
      '$\\text{div } \\mathbf{F} = 0
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Since $\\text{div}(\\text{curl } \\mathbf{G}) = 0$ always, we need $\\text{div } \\mathbf{F} = 0$ for $\\mathbf{F}$ to be a curl.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Since $\\text{div}(\\text{curl } \\mathbf{G}) = 0$ always, we need $\\text{div } \\mathbf{F} = 0$ for $\\mathbf{F}$ to be a curl.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'On an open interval (rectangular box) in 3-space, $\\mathbf{F}$ is the curl of some $\\mathbf{G}$ if and only if:',
    options: [
      '$\\text{curl } \\mathbf{F} = \\mathbf{0}$',
      '$\\text{div } \\mathbf{F} = 0$',
      '$\\mathbf{F}$ is a gradient',
      '$\\mathbf{F}$ is harmonic'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'On intervals (simply connected regions), $\\text{div } \\mathbf{F} = 0$ is both necessary and sufficient for $\\mathbf{F} = \\text{curl } \\mathbf{G}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $\\text{curl } \\mathbf{G} = \\mathbf{F}$, then $\\text{curl}(\\mathbf{G} + \\nabla \\varphi)$ equals:',
    options: [
      '$\\mathbf{F} + \\nabla \\varphi$',
      '$\\nabla \\varphi$',
      '$\\mathbf{F}$',
      '$\\mathbf{0}$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$\\text{curl}(\\mathbf{G} + \\nabla \\varphi) = \\text{curl } \\mathbf{G} + \\text{curl}(\\nabla \\varphi) = \\mathbf{F} + \\mathbf{0} = \\mathbf{F}$. Adding a gradient doesn\'t change the curl.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The field $\\mathbf{V} = \\frac{\\mathbf{r}}{r^3}$ (where $\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j} + z\\mathbf{k}$) on the region between two spheres:',
    options: [
      'Is solenoidal but NOT a curl on this region',
      'Is a curl because $\\text{div } \\mathbf{V} = 0
    correctIndex: 0,
    difficulty: 'hard',
    explanation: '$\\mathbf{V}$ has $\\text{div } \\mathbf{V} = 0$ away from the origin, but it\'s not a curl on the spherical shell because the topology has a "hole." The flux through any sphere centered at the origin is $4\\pi \\neq 0$.',
  },
      'Is a gradient',
      'Has nonzero divergence',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: '$\\mathbf{V}$ has $\\text{div } \\mathbf{V} = 0$ away from the origin, but it\'s not a curl on the spherical shell because the topology has a "hole." The flux through any sphere centered at the origin is $4\\pi \\neq 0$.',
  },
];
