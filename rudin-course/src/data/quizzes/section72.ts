import type { QuizQuestion } from './types';

export const section72Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A differential $k$-form on $\\mathbb{R}^n$ is:',
    options: [
      'A $k$-times differentiable function',
      'An alternating multilinear function of $k$ vectors that varies smoothly over points',
      'A vector field with $k$ components',
      'A polynomial of degree $k
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A $k$-form assigns to each point an alternating multilinear function on $k$ tangent vectors. It can be written as a sum of terms like $f(x) dx_{i_1} \\wedge \\cdots \\wedge dx_{i_k}$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A $k$-form assigns to each point an alternating multilinear function on $k$ tangent vectors. It can be written as a sum of terms like $f(x) dx_{i_1} \\wedge \\cdots \\wedge dx_{i_k}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The wedge product $\\omega \\wedge \\eta$ of a $k$-form and an $\\ell$-form is:',
    options: [
      'A $(k \\cdot \\ell)$-form',
      'A $(k-\\ell)$-form',
      'Always zero',
      'A $(k+\\ell)$-form satisfying $\\omega \\wedge \\eta = (-1)^{k\\ell} \\eta \\wedge \\omega
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The wedge product combines forms, increasing the degree. It is associative and graded-commutative: swapping forms introduces a sign $(-1)^{k\\ell}$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The wedge product combines forms, increasing the degree. It is associative and graded-commutative: swapping forms introduces a sign $(-1)^{k\\ell}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The exterior derivative $d$ of a $k$-form is:',
    options: [
      'A $(k+1)$-form, and $d^2 = 0
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The exterior derivative $d$ increases degree by 1 and satisfies $d(d\\omega) = 0$ for any form $\\omega$. This is analogous to $\\text{curl}(\\text{grad}) = 0$ in vector calculus.',
  },
      'A $k$-form',
      'A $(k-1)$-form',
      'Always zero for $k > 0
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The exterior derivative $d$ increases degree by 1 and satisfies $d(d\\omega) = 0$ for any form $\\omega$. This is analogous to $\\text{curl}(\\text{grad}) = 0$ in vector calculus.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The exterior derivative $d$ increases degree by 1 and satisfies $d(d\\omega) = 0$ for any form $\\omega$. This is analogous to $\\text{curl}(\\text{grad}) = 0$ in vector calculus.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For $f$ a 0-form (smooth function), $df = $:',
    options: [
      '$f\\' dx
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The exterior derivative of a function is the 1-form $df = \\sum \\frac{\\partial f}{\\partial x_i} dx_i$. This corresponds to the gradient, but as a 1-form rather than a vector.',
  },
      '$\\nabla f
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The exterior derivative of a function is the 1-form $df = \\sum \\frac{\\partial f}{\\partial x_i} dx_i$. This corresponds to the gradient, but as a 1-form rather than a vector.',
  },
      '$\\sum_{i=1}^n \\frac{\\partial f}{\\partial x_i} dx_i
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The exterior derivative of a function is the 1-form $df = \\sum \\frac{\\partial f}{\\partial x_i} dx_i$. This corresponds to the gradient, but as a 1-form rather than a vector.',
  },
      '$\\Delta f
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The exterior derivative of a function is the 1-form $df = \\sum \\frac{\\partial f}{\\partial x_i} dx_i$. This corresponds to the gradient, but as a 1-form rather than a vector.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The exterior derivative of a function is the 1-form $df = \\sum \\frac{\\partial f}{\\partial x_i} dx_i$. This corresponds to the gradient, but as a 1-form rather than a vector.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In $\\mathbb{R}^3$, the 2-form $dx \\wedge dy$ represents:',
    options: [
      'The vector $\\hat{k}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$dx \\wedge dy$ is the standard area 2-form for the $xy$-plane. Integrating a 2-form over a surface gives a signed area or flux.',
  },
      'The function $xy
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$dx \\wedge dy$ is the standard area 2-form for the $xy$-plane. Integrating a 2-form over a surface gives a signed area or flux.',
  },
      'A curve in the $xy$-plane',
      'An oriented area element in the $xy$-plane',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$dx \\wedge dy$ is the standard area 2-form for the $xy$-plane. Integrating a 2-form over a surface gives a signed area or flux.',
  },
];
