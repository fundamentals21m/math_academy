import type { QuizQuestion } from './types';

export const section140Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The surface integral of a scalar field $f$ over a parametric surface $S = \\mathbf{r}(T)$ is:',
    options: [
      '$\\iint_T f[\\mathbf{r}(u, v)]\\,du\\,dv
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The surface integral $\\iint_S f\\,dS = \\iint_T f[\\mathbf{r}(u, v)] \\|\\frac{\\partial \\mathbf{r}}{\\partial u} \\times \\frac{\\partial \\mathbf{r}}{\\partial v}\\|\\,du\\,dv$, where $dS$ is the element of surface area.',
  },
      '$\\iint_T f[\\mathbf{r}(u, v)] \\|\\frac{\\partial \\mathbf{r}}{\\partial u} \\times \\frac{\\partial \\mathbf{r}}{\\partial v}\\|\\,du\\,dv
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The surface integral $\\iint_S f\\,dS = \\iint_T f[\\mathbf{r}(u, v)] \\|\\frac{\\partial \\mathbf{r}}{\\partial u} \\times \\frac{\\partial \\mathbf{r}}{\\partial v}\\|\\,du\\,dv$, where $dS$ is the element of surface area.',
  },
      '$\\iint_T f[\\mathbf{r}(u, v)] (\\frac{\\partial \\mathbf{r}}{\\partial u} \\times \\frac{\\partial \\mathbf{r}}{\\partial v})\\,du\\,dv
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The surface integral $\\iint_S f\\,dS = \\iint_T f[\\mathbf{r}(u, v)] \\|\\frac{\\partial \\mathbf{r}}{\\partial u} \\times \\frac{\\partial \\mathbf{r}}{\\partial v}\\|\\,du\\,dv$, where $dS$ is the element of surface area.',
  },
      '$\\iint_S f\\,dx\\,dy
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The surface integral $\\iint_S f\\,dS = \\iint_T f[\\mathbf{r}(u, v)] \\|\\frac{\\partial \\mathbf{r}}{\\partial u} \\times \\frac{\\partial \\mathbf{r}}{\\partial v}\\|\\,du\\,dv$, where $dS$ is the element of surface area.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The surface integral $\\iint_S f\\,dS = \\iint_T f[\\mathbf{r}(u, v)] \\|\\frac{\\partial \\mathbf{r}}{\\partial u} \\times \\frac{\\partial \\mathbf{r}}{\\partial v}\\|\\,du\\,dv$, where $dS$ is the element of surface area.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'When $f = 1$, the surface integral $\\iint_S dS$ equals:',
    options: [
      'The volume under the surface',
      'The surface area of $S
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'With $f = 1$, $\\iint_S dS = \\iint_S 1\\,dS = a(S)$, the surface area.',
  },
      'The perimeter of $S
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'With $f = 1$, $\\iint_S dS = \\iint_S 1\\,dS = a(S)$, the surface area.',
  },
      'Zero',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'With $f = 1$, $\\iint_S dS = \\iint_S 1\\,dS = a(S)$, the surface area.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $f(x, y, z)$ represents mass density on a surface $S$, then $\\iint_S f\\,dS$ gives:',
    options: [
      'The center of mass',
      'The moment of inertia',
      'The average density',
      'The total mass',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'When $f$ is mass per unit area (surface density), integrating over the surface gives total mass: $m = \\iint_S f\\,dS$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The z-coordinate of the center of mass of a surface $S$ with uniform density is:',
    options: [
      '$\\bar{z} = \\frac{\\iint_S z\\,dS}{\\iint_S dS}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'With uniform density, the centroid coordinates are $\\bar{x} = \\frac{\\iint_S x\\,dS}{a(S)}$, $\\bar{y} = \\frac{\\iint_S y\\,dS}{a(S)}$, $\\bar{z} = \\frac{\\iint_S z\\,dS}{a(S)}$.',
  },
      '$\\bar{z} = \\iint_S z\\,dS
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'With uniform density, the centroid coordinates are $\\bar{x} = \\frac{\\iint_S x\\,dS}{a(S)}$, $\\bar{y} = \\frac{\\iint_S y\\,dS}{a(S)}$, $\\bar{z} = \\frac{\\iint_S z\\,dS}{a(S)}$.',
  },
      '$\\bar{z} = \\iint_S z^2\\,dS
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'With uniform density, the centroid coordinates are $\\bar{x} = \\frac{\\iint_S x\\,dS}{a(S)}$, $\\bar{y} = \\frac{\\iint_S y\\,dS}{a(S)}$, $\\bar{z} = \\frac{\\iint_S z\\,dS}{a(S)}$.',
  },
      '$\\bar{z} = \\frac{1}{2}\\iint_S z\\,dS
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'With uniform density, the centroid coordinates are $\\bar{x} = \\frac{\\iint_S x\\,dS}{a(S)}$, $\\bar{y} = \\frac{\\iint_S y\\,dS}{a(S)}$, $\\bar{z} = \\frac{\\iint_S z\\,dS}{a(S)}$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'With uniform density, the centroid coordinates are $\\bar{x} = \\frac{\\iint_S x\\,dS}{a(S)}$, $\\bar{y} = \\frac{\\iint_S y\\,dS}{a(S)}$, $\\bar{z} = \\frac{\\iint_S z\\,dS}{a(S)}$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The rate of fluid flow through surface $S$ in the direction of normal $\\mathbf{n}$ is given by the integral:',
    options: [
      '$\\iint_S \\mathbf{F}\\,dS
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The flux of $\\mathbf{F}$ through $S$ is $\\iint_S \\mathbf{F} \\cdot \\mathbf{n}\\,dS$, measuring how much of $\\mathbf{F}$ passes through the surface in the direction of the normal.',
  },
      '$\\iint_S \\mathbf{F} \\cdot \\mathbf{n}\\,dS
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The flux of $\\mathbf{F}$ through $S$ is $\\iint_S \\mathbf{F} \\cdot \\mathbf{n}\\,dS$, measuring how much of $\\mathbf{F}$ passes through the surface in the direction of the normal.',
  },
      '$\\iint_S \\mathbf{F} \\times \\mathbf{n}\\,dS
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The flux of $\\mathbf{F}$ through $S$ is $\\iint_S \\mathbf{F} \\cdot \\mathbf{n}\\,dS$, measuring how much of $\\mathbf{F}$ passes through the surface in the direction of the normal.',
  },
      '$\\iint_S |\\mathbf{F}|\\,dS
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The flux of $\\mathbf{F}$ through $S$ is $\\iint_S \\mathbf{F} \\cdot \\mathbf{n}\\,dS$, measuring how much of $\\mathbf{F}$ passes through the surface in the direction of the normal.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The flux of $\\mathbf{F}$ through $S$ is $\\iint_S \\mathbf{F} \\cdot \\mathbf{n}\\,dS$, measuring how much of $\\mathbf{F}$ passes through the surface in the direction of the normal.',
  },
];
