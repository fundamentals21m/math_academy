import type { QuizQuestion } from './types';

export const section69Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A primitive mapping is a $C^1$ map $G: \\mathbb{R}^n \\to \\mathbb{R}^n$ of the form:',
    options: [
      'A linear map with determinant 1',
      'Any bijective map',
      'A map whose Jacobian is constant',
      '$G(x) = (x_1, \\ldots, x_{m-1}, g(x), x_{m+1}, \\ldots, x_n)$ for some index $m$ and function $g
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'A primitive mapping changes only one coordinate, replacing $x_m$ with a function $g(x)$ of all variables. The other coordinates are unchanged.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'A primitive mapping changes only one coordinate, replacing $x_m$ with a function $g(x)$ of all variables. The other coordinates are unchanged.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Jacobian determinant of a primitive mapping $G(x) = (x_1, \\ldots, g(x), \\ldots, x_n)$ is:',
    options: [
      '$\\det(DG)$ where $DG$ is the full Jacobian matrix',
      '$1$',
      '$\\frac{\\partial g}{\\partial x_m}$',
      '$g(x)$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For a primitive mapping changing coordinate $m$, the Jacobian matrix is nearly the identity, with the $m$-th row being the gradient of $g$. The determinant is $\\partial g/\\partial x_m$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Any $C^1$ diffeomorphism can locally be written as:',
    options: [
      'A rotation followed by a translation',
      'A composition of primitive mappings',
      'A single primitive mapping',
      'A linear transformation',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'This is a key structural result: any sufficiently smooth diffeomorphism can be decomposed into a composition of primitive mappings, each changing only one coordinate.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The significance of primitive mappings in integration theory is:',
    options: [
      'They simplify the proof of the change of variables formula',
      'They preserve volume',
      'They are the only maps for which the Jacobian can be computed',
      'They commute with all other maps'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Primitive mappings are useful because the change of variables formula is easy to verify for them, and general diffeomorphisms decompose into primitive ones.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $G$ is a primitive mapping with $\\frac{\\partial g}{\\partial x_m} > 0$, then $G$ is:',
    options: [
      'Always a global diffeomorphism',
      'Locally a diffeomorphism (orientation-preserving)',
      'A contraction',
      'Volume-preserving'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When $\\partial g/\\partial x_m > 0$, the Jacobian determinant is positive, so $G$ is locally invertible and orientation-preserving. It may not be global.',
  },
];
