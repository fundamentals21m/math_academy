import type { QuizQuestion } from './types';

export const section88Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'For a vector field $\\mathbf{F}: \\mathbb{R}^n \\to \\mathbb{R}^m$, differentiability means there exists a linear map $L$ such that:',
    options: [
      '$\\mathbf{F}(\\mathbf{a} + \\mathbf{h}) = \\mathbf{F}(\\mathbf{a}) + L
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Differentiability of vector fields follows the same definition: linear approximation with error $o(\\|\\mathbf{h}\\|)$.',
  },
      '$\\mathbf{F}(\\mathbf{a}) = L(\\mathbf{a})
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Differentiability of vector fields follows the same definition: linear approximation with error $o(\\|\\mathbf{h}\\|)$.',
  },
      '$\\mathbf{F}(\\mathbf{a} + \\mathbf{h}) = \\mathbf{F}(\\mathbf{a}) + L(\\mathbf{h}) + o(\\|\\mathbf{h}\\|)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Differentiability of vector fields follows the same definition: linear approximation with error $o(\\|\\mathbf{h}\\|)$.',
  },
      '$\\mathbf{F}\\'(\\mathbf{a}) = 0
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Differentiability of vector fields follows the same definition: linear approximation with error $o(\\|\\mathbf{h}\\|)$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Differentiability of vector fields follows the same definition: linear approximation with error $o(\\|\\mathbf{h}\\|)$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The derivative of a vector field $\\mathbf{F}: \\mathbb{R}^n \\to \\mathbb{R}^m$ at $\\mathbf{a}$ is represented by:',
    options: [
      'A vector in $\\mathbb{R}^m$',
      'An $m \\times n$ matrix (the Jacobian)',
      'A scalar',
      'An $n \\times n$ matrix'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The derivative of $\\mathbf{F}: \\mathbb{R}^n \\to \\mathbb{R}^m$ is an $m \\times n$ Jacobian matrix.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For $\\mathbf{F} = (F_1, \\ldots, F_m)$, the Jacobian matrix has $(i,j)$ entry:',
    options: [
      '$\\frac{\\partial F_i}{\\partial x_j}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Jacobian has entry $(i,j) = \\frac{\\partial F_i}{\\partial x_j}$: row $i$ is the gradient of $F_i$.',
  },
      '$F_i(\\mathbf{a})
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Jacobian has entry $(i,j) = \\frac{\\partial F_i}{\\partial x_j}$: row $i$ is the gradient of $F_i$.',
  },
      '$\\frac{\\partial F_j}{\\partial x_i}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Jacobian has entry $(i,j) = \\frac{\\partial F_i}{\\partial x_j}$: row $i$ is the gradient of $F_i$.',
  },
      '$F_i F_j
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Jacobian has entry $(i,j) = \\frac{\\partial F_i}{\\partial x_j}$: row $i$ is the gradient of $F_i$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Jacobian has entry $(i,j) = \\frac{\\partial F_i}{\\partial x_j}$: row $i$ is the gradient of $F_i$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $\\mathbf{F}: \\mathbb{R}^n \\to \\mathbb{R}^m$ is differentiable at $\\mathbf{a}$, then $\\mathbf{F}$ is:',
    options: [
      'Not necessarily continuous',
      'Continuous at $\\mathbf{a}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Differentiability implies continuity for vector fields, just as for scalar fields.',
  },
      'Linear',
      'Constant',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Differentiability implies continuity for vector fields, just as for scalar fields.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For $\\mathbf{F}(x,y) = (x^2 + y, xy)$, the Jacobian matrix at $(1,2)$ is:',
    options: [
      '$\\begin{pmatrix} 3 & 2 \\\\ 1 & 2 \\end{pmatrix}
    correctIndex: 3,
    difficulty: 'hard',
    explanation: '$J = \\begin{pmatrix} \\partial_x(x^2+y) & \\partial_y(x^2+y) \\\\ \\partial_x(xy) & \\partial_y(xy) \\end{pmatrix} = \\begin{pmatrix} 2x & 1 \\\\ y & x \\end{pmatrix}$. At $(1,2)$: $\\begin{pmatrix} 2 & 1 \\\\ 2 & 1 \\end{pmatrix}$.',
  },
      '$\\begin{pmatrix} 2 & 1 \\\\ 1 & 2 \\end{pmatrix}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: '$J = \\begin{pmatrix} \\partial_x(x^2+y) & \\partial_y(x^2+y) \\\\ \\partial_x(xy) & \\partial_y(xy) \\end{pmatrix} = \\begin{pmatrix} 2x & 1 \\\\ y & x \\end{pmatrix}$. At $(1,2)$: $\\begin{pmatrix} 2 & 1 \\\\ 2 & 1 \\end{pmatrix}$.',
  },
      '$\\begin{pmatrix} 2 & 1 \\\\ 2 & 1 \\end{pmatrix}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: '$J = \\begin{pmatrix} \\partial_x(x^2+y) & \\partial_y(x^2+y) \\\\ \\partial_x(xy) & \\partial_y(xy) \\end{pmatrix} = \\begin{pmatrix} 2x & 1 \\\\ y & x \\end{pmatrix}$. At $(1,2)$: $\\begin{pmatrix} 2 & 1 \\\\ 2 & 1 \\end{pmatrix}$.',
  },
      '$\\begin{pmatrix} 2 & 1 \\\\ 2 & 1 \\end{pmatrix}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: '$J = \\begin{pmatrix} \\partial_x(x^2+y) & \\partial_y(x^2+y) \\\\ \\partial_x(xy) & \\partial_y(xy) \\end{pmatrix} = \\begin{pmatrix} 2x & 1 \\\\ y & x \\end{pmatrix}$. At $(1,2)$: $\\begin{pmatrix} 2 & 1 \\\\ 2 & 1 \\end{pmatrix}$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: '$J = \\begin{pmatrix} \\partial_x(x^2+y) & \\partial_y(x^2+y) \\\\ \\partial_x(xy) & \\partial_y(xy) \\end{pmatrix} = \\begin{pmatrix} 2x & 1 \\\\ y & x \\end{pmatrix}$. At $(1,2)$: $\\begin{pmatrix} 2 & 1 \\\\ 2 & 1 \\end{pmatrix}$.',
  },
];
