import type { QuizQuestion } from './types';

export const section133Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'For a linear transformation $x = Au + Bv$, $y = Cu + Dv$, the Jacobian determinant is:',
    options: [
      '$A + B + C + D$',
      '$AD - BC$',
      '$AC - BD$',
      '$AB + CD$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Jacobian is $J = \\begin{vmatrix} A & C \\\\ B & D \\end{vmatrix} = AD - BC$, the same as the determinant of the transformation matrix.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A linear transformation has an inverse if and only if:',
    options: [
      '$A = D$ and $B = C
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The linear system can be solved for $u$ and $v$ if and only if the determinant $AD - BC \\neq 0$, which is the condition for the matrix to be invertible.',
  },
      '$A + D = 0
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The linear system can be solved for $u$ and $v$ if and only if the determinant $AD - BC \\neq 0$, which is the condition for the matrix to be invertible.',
  },
      '$AB = CD
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The linear system can be solved for $u$ and $v$ if and only if the determinant $AD - BC \\neq 0$, which is the condition for the matrix to be invertible.',
  },
      '$AD - BC \\neq 0
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The linear system can be solved for $u$ and $v$ if and only if the determinant $AD - BC \\neq 0$, which is the condition for the matrix to be invertible.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The linear system can be solved for $u$ and $v$ if and only if the determinant $AD - BC \\neq 0$, which is the condition for the matrix to be invertible.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Linear transformations map parallel lines to:',
    options: [
      'Parallel lines',
      'Circles',
      'Parabolas',
      'Perpendicular lines',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Linear transformations preserve parallelism—parallel lines map to parallel lines. Consequently, rectangles map to parallelograms.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For the change of variables $u = y - x$, $v = y + x$, the Jacobian $\\frac{\\partial(x,y)}{\\partial(u,v)}$ is:',
    options: [
      '$-1
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Solving: $x = (v-u)/2$, $y = (v+u)/2$. Then $J = \\begin{vmatrix} -1/2 & 1/2 \\\\ 1/2 & 1/2 \\end{vmatrix} = -1/4 - 1/4 = -1/2$.',
  },
      '$-1/2
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Solving: $x = (v-u)/2$, $y = (v+u)/2$. Then $J = \\begin{vmatrix} -1/2 & 1/2 \\\\ 1/2 & 1/2 \\end{vmatrix} = -1/4 - 1/4 = -1/2$.',
  },
      '$1/2
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Solving: $x = (v-u)/2$, $y = (v+u)/2$. Then $J = \\begin{vmatrix} -1/2 & 1/2 \\\\ 1/2 & 1/2 \\end{vmatrix} = -1/4 - 1/4 = -1/2$.',
  },
      '$1
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Solving: $x = (v-u)/2$, $y = (v+u)/2$. Then $J = \\begin{vmatrix} -1/2 & 1/2 \\\\ 1/2 & 1/2 \\end{vmatrix} = -1/4 - 1/4 = -1/2$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Solving: $x = (v-u)/2$, $y = (v+u)/2$. Then $J = \\begin{vmatrix} -1/2 & 1/2 \\\\ 1/2 & 1/2 \\end{vmatrix} = -1/4 - 1/4 = -1/2$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'When is a linear transformation useful for computing double integrals?',
    options: [
      'When the region is circular',
      'When the function is discontinuous',
      'When the integrand or region involves linear combinations like $y - x$ and $y + x
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Linear transformations are useful when the integrand contains expressions like $y - x$ and $y + x$, or when the region is bounded by non-axis-parallel lines.',
  },
      'When the Jacobian equals 1',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Linear transformations are useful when the integrand contains expressions like $y - x$ and $y + x$, or when the region is bounded by non-axis-parallel lines.',
  },
];
