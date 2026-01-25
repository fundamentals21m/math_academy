import type { QuizQuestion } from './types';

export const section73Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A $k$-simplex in $\\mathbb{R}^n$ is:',
    options: [
      'The convex hull of $k+1$ affinely independent points',
      'A $k$-dimensional cube',
      'A sphere of dimension $k
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A $k$-simplex is the convex hull of $k+1$ points in general position: a 0-simplex is a point, 1-simplex is a line segment, 2-simplex is a triangle, 3-simplex is a tetrahedron.',
  },
      'Any $k$-dimensional submanifold',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A $k$-simplex is the convex hull of $k+1$ points in general position: a 0-simplex is a point, 1-simplex is a line segment, 2-simplex is a triangle, 3-simplex is a tetrahedron.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The standard $k$-simplex $\\sigma_k$ in $\\mathbb{R}^k$ is:',
    options: [
      'The unit ball in $\\mathbb{R}^k$',
      'The unit cube $[0,1]^k$',
      '$\\{(t_1, \\ldots, t_k) : t_i \\geq 0, \\sum t_i \\leq 1\\}$',
      '$\\{(t_1, \\ldots, t_k) : \\sum t_i = 1\\}$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The standard $k$-simplex has vertices at the origin and the $k$ standard basis vectors. It is the set of points with non-negative coordinates summing to at most 1.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A $k$-chain is:',
    options: [
      'A formal linear combination of $k$-simplices with integer coefficients',
      'A single simplex with orientation',
      'A sequence of $k$ connected simplices',
      'A $k$-dimensional manifold',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Chains are formal sums $\\sum n_i \\sigma_i$ where $\\sigma_i$ are singular simplices and $n_i$ are integers. They form a group under addition.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The boundary operator $\\partial$ on a $k$-simplex produces:',
    options: [
      'A $(k+1)$-chain',
      'A single $(k-1)$-simplex',
      'Zero',
      'A $(k-1)$-chain consisting of the faces with alternating signs',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The boundary of a $k$-simplex is the alternating sum of its $(k-1)$-dimensional faces: $\\partial[p_0, \\ldots, p_k] = \\sum_i (-1)^i [p_0, \\ldots, \\hat{p}_i, \\ldots, p_k]$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A fundamental property of the boundary operator is:',
    options: [
      '$\\partial^2 = \\text{id}$',
      '$\\partial^2 = 0$ (the boundary of a boundary is zero)',
      '$\\partial$ is injective',
      '$\\partial$ commutes with all linear maps'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The identity $\\partial \\partial = 0$ is fundamental to algebraic topology. It means cycles (chains with zero boundary) contain all boundaries, enabling homology theory.',
  },
];
