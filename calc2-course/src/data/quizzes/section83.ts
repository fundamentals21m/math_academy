import type { QuizQuestion } from './types';

export const section83Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A scalar field $f: \\mathbb{R}^n \\to \\mathbb{R}$ is differentiable at $\\mathbf{a}$ if there exists a linear map $T$ such that:',
    options: [
      '$f(\\mathbf{a} + \\mathbf{h}) = f(\\mathbf{a}) + T(\\mathbf{h}) + o(\\|\\mathbf{h}\\|)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Differentiability means $f(\\mathbf{a}+\\mathbf{h}) - f(\\mathbf{a}) - T(\\mathbf{h}) = o(\\|\\mathbf{h}\\|)$ as $\\mathbf{h} \\to \\mathbf{0}$.',
  },
      '$f(\\mathbf{a} + \\mathbf{h}) = f(\\mathbf{a}) + T(\\mathbf{h})
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Differentiability means $f(\\mathbf{a}+\\mathbf{h}) - f(\\mathbf{a}) - T(\\mathbf{h}) = o(\\|\\mathbf{h}\\|)$ as $\\mathbf{h} \\to \\mathbf{0}$.',
  },
      '$f\\'(\\mathbf{a}) = T
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Differentiability means $f(\\mathbf{a}+\\mathbf{h}) - f(\\mathbf{a}) - T(\\mathbf{h}) = o(\\|\\mathbf{h}\\|)$ as $\\mathbf{h} \\to \\mathbf{0}$.',
  },
      '$f(\\mathbf{a} + \\mathbf{h}) = T(\\mathbf{h})
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Differentiability means $f(\\mathbf{a}+\\mathbf{h}) - f(\\mathbf{a}) - T(\\mathbf{h}) = o(\\|\\mathbf{h}\\|)$ as $\\mathbf{h} \\to \\mathbf{0}$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Differentiability means $f(\\mathbf{a}+\\mathbf{h}) - f(\\mathbf{a}) - T(\\mathbf{h}) = o(\\|\\mathbf{h}\\|)$ as $\\mathbf{h} \\to \\mathbf{0}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The total derivative (or differential) $df_{\\mathbf{a}}$ is:',
    options: [
      'A vector',
      'A number',
      'A linear map from $\\mathbb{R}^n$ to $\\mathbb{R}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The total derivative at $\\mathbf{a}$ is the linear map $df_{\\mathbf{a}}: \\mathbb{R}^n \\to \\mathbb{R}$ that best approximates the change in $f$.',
  },
      'A matrix',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The total derivative at $\\mathbf{a}$ is the linear map $df_{\\mathbf{a}}: \\mathbb{R}^n \\to \\mathbb{R}$ that best approximates the change in $f$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For $f: \\mathbb{R}^n \\to \\mathbb{R}$ differentiable at $\\mathbf{a}$, the total derivative can be represented by:',
    options: [
      'The Hessian matrix',
      'The Laplacian',
      'The Jacobian matrix',
      'The gradient vector: $df_{\\mathbf{a}}(\\mathbf{h}) = \\nabla f(\\mathbf{a}) \\cdot \\mathbf{h}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For scalar fields, the total derivative is $df_{\\mathbf{a}}(\\mathbf{h}) = \\nabla f(\\mathbf{a}) \\cdot \\mathbf{h}$, a linear functional.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For scalar fields, the total derivative is $df_{\\mathbf{a}}(\\mathbf{h}) = \\nabla f(\\mathbf{a}) \\cdot \\mathbf{h}$, a linear functional.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The condition $\\lim_{\\mathbf{h} \\to \\mathbf{0}} \\frac{f(\\mathbf{a}+\\mathbf{h}) - f(\\mathbf{a}) - df_{\\mathbf{a}}(\\mathbf{h})}{\\|\\mathbf{h}\\|} = 0$ means:',
    options: [
      '$f$ is differentiable at $\\mathbf{a}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'This limit condition is the definition of differentiability: the linear approximation error is $o(\\|\\mathbf{h}\\|)$.',
  },
      '$f$ is continuous',
      '$f$ has partial derivatives',
      '$f$ is constant',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'This limit condition is the definition of differentiability: the linear approximation error is $o(\\|\\mathbf{h}\\|)$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $f(x,y) = x^2 + 3xy$, the total derivative $df$ at any point is:',
    options: [
      '$(2x + 3y, 3x)
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$\\nabla f = (2x + 3y, 3x)$, so $df(h_1, h_2) = (2x+3y)h_1 + 3xh_2$.',
  },
      '$2x + 3y + 3x
    correctIndex: 3,
    difficulty: 'hard',
    explanation: '$\\nabla f = (2x + 3y, 3x)$, so $df(h_1, h_2) = (2x+3y)h_1 + 3xh_2$.',
  },
      'The linear map $(h_1, h_2) \\mapsto (2x + 3y)h_1 + 3xh_2
    correctIndex: 3,
    difficulty: 'hard',
    explanation: '$\\nabla f = (2x + 3y, 3x)$, so $df(h_1, h_2) = (2x+3y)h_1 + 3xh_2$.',
  },
      '$6xy
    correctIndex: 3,
    difficulty: 'hard',
    explanation: '$\\nabla f = (2x + 3y, 3x)$, so $df(h_1, h_2) = (2x+3y)h_1 + 3xh_2$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: '$\\nabla f = (2x + 3y, 3x)$, so $df(h_1, h_2) = (2x+3y)h_1 + 3xh_2$.',
  },
];
