import type { QuizQuestion } from './types';

export const section137Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A parametric surface is described by:',
    options: [
      'One equation $F(x, y, z) = 0
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A parametric surface uses two parameters $(u, v)$ to generate points in 3-space via three coordinate functions: $x = X(u, v)$, $y = Y(u, v)$, $z = Z(u, v)$.',
  },
      'One equation $z = f(x, y)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A parametric surface uses two parameters $(u, v)$ to generate points in 3-space via three coordinate functions: $x = X(u, v)$, $y = Y(u, v)$, $z = Z(u, v)$.',
  },
      'Two equations relating $x$, $y$, and $z
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A parametric surface uses two parameters $(u, v)$ to generate points in 3-space via three coordinate functions: $x = X(u, v)$, $y = Y(u, v)$, $z = Z(u, v)$.',
  },
      'Three equations $x = X(u, v)$, $y = Y(u, v)$, $z = Z(u, v)$ where $(u, v)$ varies over a region',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A parametric surface uses two parameters $(u, v)$ to generate points in 3-space via three coordinate functions: $x = X(u, v)$, $y = Y(u, v)$, $z = Z(u, v)$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The vector equation of a parametric surface is:',
    options: [
      '$\\mathbf{r}(t) = X(t)\\mathbf{i} + Y(t)\\mathbf{j} + Z(t)\\mathbf{k}$',
      '$\\mathbf{r}(u, v) = X(u, v)\\mathbf{i} + Y(u, v)\\mathbf{j} + Z(u, v)\\mathbf{k}$',
      '$\\mathbf{r} = x\\mathbf{i} + y\\mathbf{j} + z\\mathbf{k}$',
      '$\\mathbf{r}(u, v) = u\\mathbf{i} + v\\mathbf{j}$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The vector equation $\\mathbf{r}(u, v) = X(u, v)\\mathbf{i} + Y(u, v)\\mathbf{j} + Z(u, v)\\mathbf{k}$ compactly represents the surface as the image of the parameter domain.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A simple parametric surface is one where:',
    options: [
      'The parameter domain is a rectangle',
      'The mapping $\\mathbf{r}$ is one-to-one',
      'The surface has no boundary',
      'The parametric equations are linear',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A simple parametric surface has a one-to-one mapping $\\mathbf{r}$ from the parameter domain to the surface—distinct parameter values give distinct surface points.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For a sphere of radius $a$ parametrized by $x = a\\cos u\\cos v$, $y = a\\sin u\\cos v$, $z = a\\sin v$, the parameter $u$ represents:',
    options: [
      'The polar angle from the z-axis',
      'The distance from the origin',
      'The azimuthal angle (related to longitude)',
      'The elevation above the xy-plane',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'In this parametrization, $u$ is the azimuthal angle (like longitude) and $v$ is related to latitude. Varying $u$ from $0$ to $2\\pi$ traces circles of constant $v$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The advantage of parametric representation over explicit ($z = f(x, y)$) representation is:',
    options: [
      'Parametric representation can describe surfaces that are not graphs (like spheres)',
      'Parametric surfaces are always simpler',
      'Explicit representation requires more equations',
      'Parametric surfaces are always smooth'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Parametric representation is more flexible—it can describe closed surfaces like spheres that cannot be written as single-valued functions $z = f(x, y)$.',
  },
];
