import type { QuizQuestion } from './types';

export const section33Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'If $g: \\mathbf{R}^n \\to \\mathbf{R}^m$ and $f: \\mathbf{R}^m \\to \\mathbf{R}^k$ are differentiable, then the chain rule says:',
    options: [
      '$D(f \\circ g)(x) = Df(g(x)) \\circ Dg(x)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The chain rule: the derivative of a composition is the composition of derivatives.',
  },
      '$D(f \\circ g)(x) = Df(x) + Dg(x)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The chain rule: the derivative of a composition is the composition of derivatives.',
  },
      '$D(f \\circ g)(x) = Dg(f(x)) \\circ Df(x)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The chain rule: the derivative of a composition is the composition of derivatives.',
  },
      '$D(f \\circ g)(x) = Df(x) \\cdot Dg(x)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The chain rule: the derivative of a composition is the composition of derivatives.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The chain rule: the derivative of a composition is the composition of derivatives.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In matrix form, the chain rule says the Jacobian of $f \\circ g$ is:',
    options: [
      'The sum of the Jacobians',
      'The product of Jacobian matrices: $J_f(g(x)) \\cdot J_g(x)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Jacobians multiply under composition.',
  },
      'The inverse of the Jacobian',
      'The difference of Jacobians',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Jacobians multiply under composition.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $f(x, y) = g(h(x, y))$ where $g: \\mathbf{R} \\to \\mathbf{R}$ and $h: \\mathbf{R}^2 \\to \\mathbf{R}$, then $\\frac{\\partial f}{\\partial x} = $',
    options: [
      '$g\\'(x)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'By the chain rule: $\\frac{\\partial f}{\\partial x} = g\'(h(x,y)) \\cdot \\frac{\\partial h}{\\partial x}$.',
  },
      '$\\frac{\\partial h}{\\partial x}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By the chain rule: $\\frac{\\partial f}{\\partial x} = g\'(h(x,y)) \\cdot \\frac{\\partial h}{\\partial x}$.',
  },
      '$g\\'(h) \\cdot \\frac{\\partial h}{\\partial x}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By the chain rule: $\\frac{\\partial f}{\\partial x} = g\'(h(x,y)) \\cdot \\frac{\\partial h}{\\partial x}$.',
  },
      '$g(h) \\cdot h\\'(x)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By the chain rule: $\\frac{\\partial f}{\\partial x} = g\'(h(x,y)) \\cdot \\frac{\\partial h}{\\partial x}$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By the chain rule: $\\frac{\\partial f}{\\partial x} = g\'(h(x,y)) \\cdot \\frac{\\partial h}{\\partial x}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The chain rule requires that:',
    options: [
      'Only the outer function is differentiable',
      'Both functions are differentiable',
      'Only the inner function is differentiable',
      'Neither function needs to be differentiable',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The chain rule applies when both $f$ and $g$ are differentiable at the relevant points.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $\\mathbf{r}(t) = (x(t), y(t))$ is a curve and $f: \\mathbf{R}^2 \\to \\mathbf{R}$, then $\\frac{d}{dt}f(\\mathbf{r}(t)) = $',
    options: [
      '$\\nabla f
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By the chain rule: $\\frac{d}{dt}f(\\mathbf{r}(t)) = \\nabla f \\cdot \\mathbf{r}\'(t) = \\frac{\\partial f}{\\partial x}x\'(t) + \\frac{\\partial f}{\\partial y}y\'(t)$.',
  },
      '$f(\\mathbf{r}\\'(t))
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'By the chain rule: $\\frac{d}{dt}f(\\mathbf{r}(t)) = \\nabla f \\cdot \\mathbf{r}\'(t) = \\frac{\\partial f}{\\partial x}x\'(t) + \\frac{\\partial f}{\\partial y}y\'(t)$.',
  },
      '$\\|\\mathbf{r}\\'(t)\\|
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'By the chain rule: $\\frac{d}{dt}f(\\mathbf{r}(t)) = \\nabla f \\cdot \\mathbf{r}\'(t) = \\frac{\\partial f}{\\partial x}x\'(t) + \\frac{\\partial f}{\\partial y}y\'(t)$.',
  },
      '$\\nabla f(\\mathbf{r}(t)) \\cdot \\mathbf{r}\\'(t)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'By the chain rule: $\\frac{d}{dt}f(\\mathbf{r}(t)) = \\nabla f \\cdot \\mathbf{r}\'(t) = \\frac{\\partial f}{\\partial x}x\'(t) + \\frac{\\partial f}{\\partial y}y\'(t)$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'By the chain rule: $\\frac{d}{dt}f(\\mathbf{r}(t)) = \\nabla f \\cdot \\mathbf{r}\'(t) = \\frac{\\partial f}{\\partial x}x\'(t) + \\frac{\\partial f}{\\partial y}y\'(t)$.',
  },
];
