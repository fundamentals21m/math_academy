import type { QuizQuestion } from './types';

export const section138Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The fundamental vector product of a parametric surface $\\mathbf{r}(u, v)$ is:',
    options: [
      '$\\frac{\\partial \\mathbf{r}}{\\partial u} + \\frac{\\partial \\mathbf{r}}{\\partial v}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The fundamental vector product is the cross product $\\frac{\\partial \\mathbf{r}}{\\partial u} \\times \\frac{\\partial \\mathbf{r}}{\\partial v}$, which is normal to the surface at each point.',
  },
      '$\\frac{\\partial \\mathbf{r}}{\\partial u} \\cdot \\frac{\\partial \\mathbf{r}}{\\partial v}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The fundamental vector product is the cross product $\\frac{\\partial \\mathbf{r}}{\\partial u} \\times \\frac{\\partial \\mathbf{r}}{\\partial v}$, which is normal to the surface at each point.',
  },
      '$\\frac{\\partial \\mathbf{r}}{\\partial u} \\times \\frac{\\partial \\mathbf{r}}{\\partial v}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The fundamental vector product is the cross product $\\frac{\\partial \\mathbf{r}}{\\partial u} \\times \\frac{\\partial \\mathbf{r}}{\\partial v}$, which is normal to the surface at each point.',
  },
      '$\\frac{\\partial^2 \\mathbf{r}}{\\partial u \\partial v}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The fundamental vector product is the cross product $\\frac{\\partial \\mathbf{r}}{\\partial u} \\times \\frac{\\partial \\mathbf{r}}{\\partial v}$, which is normal to the surface at each point.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The fundamental vector product is the cross product $\\frac{\\partial \\mathbf{r}}{\\partial u} \\times \\frac{\\partial \\mathbf{r}}{\\partial v}$, which is normal to the surface at each point.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A point on a parametric surface is called a regular point if:',
    options: [
      'The surface passes through the origin at that point',
      'Both partial derivatives equal zero',
      'The fundamental vector product is nonzero there',
      'The parametrization is linear near that point',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A regular point is one where the fundamental vector product $\\frac{\\partial \\mathbf{r}}{\\partial u} \\times \\frac{\\partial \\mathbf{r}}{\\partial v} \\neq \\mathbf{0}$. This means the surface has a well-defined tangent plane there.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The fundamental vector product serves as:',
    options: [
      'A normal vector to the surface',
      'A tangent vector to the surface',
      'The curvature of the surface',
      'The velocity of a curve on the surface',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Since $\\frac{\\partial \\mathbf{r}}{\\partial u}$ and $\\frac{\\partial \\mathbf{r}}{\\partial v}$ are tangent to the surface, their cross product is perpendicular to both, hence normal to the surface.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For the explicit surface $z = f(x, y)$ with $\\mathbf{r}(x, y) = x\\mathbf{i} + y\\mathbf{j} + f(x, y)\\mathbf{k}$, the fundamental vector product is:',
    options: [
      '$f_x\\mathbf{i} + f_y\\mathbf{j} + \\mathbf{k}
    correctIndex: 3,
    difficulty: 'hard',
    explanation: '$\\frac{\\partial \\mathbf{r}}{\\partial x} = \\mathbf{i} + f_x\\mathbf{k}$, $\\frac{\\partial \\mathbf{r}}{\\partial y} = \\mathbf{j} + f_y\\mathbf{k}$. Their cross product is $-f_x\\mathbf{i} - f_y\\mathbf{j} + \\mathbf{k}$.',
  },
      '$\\mathbf{i} + \\mathbf{j} + f_x f_y\\mathbf{k}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: '$\\frac{\\partial \\mathbf{r}}{\\partial x} = \\mathbf{i} + f_x\\mathbf{k}$, $\\frac{\\partial \\mathbf{r}}{\\partial y} = \\mathbf{j} + f_y\\mathbf{k}$. Their cross product is $-f_x\\mathbf{i} - f_y\\mathbf{j} + \\mathbf{k}$.',
  },
      '$-\\mathbf{i} - \\mathbf{j} + \\mathbf{k}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: '$\\frac{\\partial \\mathbf{r}}{\\partial x} = \\mathbf{i} + f_x\\mathbf{k}$, $\\frac{\\partial \\mathbf{r}}{\\partial y} = \\mathbf{j} + f_y\\mathbf{k}$. Their cross product is $-f_x\\mathbf{i} - f_y\\mathbf{j} + \\mathbf{k}$.',
  },
      '$-f_x\\mathbf{i} - f_y\\mathbf{j} + \\mathbf{k}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: '$\\frac{\\partial \\mathbf{r}}{\\partial x} = \\mathbf{i} + f_x\\mathbf{k}$, $\\frac{\\partial \\mathbf{r}}{\\partial y} = \\mathbf{j} + f_y\\mathbf{k}$. Their cross product is $-f_x\\mathbf{i} - f_y\\mathbf{j} + \\mathbf{k}$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: '$\\frac{\\partial \\mathbf{r}}{\\partial x} = \\mathbf{i} + f_x\\mathbf{k}$, $\\frac{\\partial \\mathbf{r}}{\\partial y} = \\mathbf{j} + f_y\\mathbf{k}$. Their cross product is $-f_x\\mathbf{i} - f_y\\mathbf{j} + \\mathbf{k}$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The magnitude of the fundamental vector product represents:',
    options: [
      'The angle between coordinate curves',
      'The local area magnification factor',
      'The curvature of the surface',
      'The volume element',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The magnitude $\\|\\frac{\\partial \\mathbf{r}}{\\partial u} \\times \\frac{\\partial \\mathbf{r}}{\\partial v}\\|$ gives the area magnification—a small rectangle $\\Delta u \\times \\Delta v$ in the parameter domain maps to a region with area approximately this magnitude times $\\Delta u \\Delta v$.',
  },
];
