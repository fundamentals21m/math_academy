import type { QuizQuestion } from './types';

export const section86Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'For $f: \\mathbb{R}^n \\to \\mathbb{R}$ and $\\mathbf{g}: \\mathbb{R} \\to \\mathbb{R}^n$ with $h(t) = f(\\mathbf{g}(t))$, the chain rule gives:',
    options: [
      '$h\\'(t) = \\nabla f(\\mathbf{g}(t)) \\cdot \\mathbf{g}\\'(t)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The chain rule: $h\'(t) = \\nabla f(\\mathbf{g}(t)) \\cdot \\mathbf{g}\'(t) = \\sum_i \\frac{\\partial f}{\\partial x_i} \\frac{dg_i}{dt}$.',
  },
      '$h\\'(t) = f\\'(\\mathbf{g}(t))
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The chain rule: $h\'(t) = \\nabla f(\\mathbf{g}(t)) \\cdot \\mathbf{g}\'(t) = \\sum_i \\frac{\\partial f}{\\partial x_i} \\frac{dg_i}{dt}$.',
  },
      '$h\\'(t) = f(\\mathbf{g}\\'(t))
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The chain rule: $h\'(t) = \\nabla f(\\mathbf{g}(t)) \\cdot \\mathbf{g}\'(t) = \\sum_i \\frac{\\partial f}{\\partial x_i} \\frac{dg_i}{dt}$.',
  },
      '$h\\'(t) = \\mathbf{g}\\'(t)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The chain rule: $h\'(t) = \\nabla f(\\mathbf{g}(t)) \\cdot \\mathbf{g}\'(t) = \\sum_i \\frac{\\partial f}{\\partial x_i} \\frac{dg_i}{dt}$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The chain rule: $h\'(t) = \\nabla f(\\mathbf{g}(t)) \\cdot \\mathbf{g}\'(t) = \\sum_i \\frac{\\partial f}{\\partial x_i} \\frac{dg_i}{dt}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $z = f(x, y)$ where $x = g(t)$ and $y = h(t)$, then $\\frac{dz}{dt} =$',
    options: [
      '$\\frac{\\partial f}{\\partial x} + \\frac{\\partial f}{\\partial y}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The chain rule for composite functions: $\\frac{dz}{dt} = \\frac{\\partial f}{\\partial x}\\frac{dx}{dt} + \\frac{\\partial f}{\\partial y}\\frac{dy}{dt}$.',
  },
      '$\\frac{\\partial f}{\\partial x}\\frac{dx}{dt} + \\frac{\\partial f}{\\partial y}\\frac{dy}{dt}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The chain rule for composite functions: $\\frac{dz}{dt} = \\frac{\\partial f}{\\partial x}\\frac{dx}{dt} + \\frac{\\partial f}{\\partial y}\\frac{dy}{dt}$.',
  },
      '$\\frac{dx}{dt}\\frac{dy}{dt}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The chain rule for composite functions: $\\frac{dz}{dt} = \\frac{\\partial f}{\\partial x}\\frac{dx}{dt} + \\frac{\\partial f}{\\partial y}\\frac{dy}{dt}$.',
  },
      '$\\frac{\\partial f}{\\partial t}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The chain rule for composite functions: $\\frac{dz}{dt} = \\frac{\\partial f}{\\partial x}\\frac{dx}{dt} + \\frac{\\partial f}{\\partial y}\\frac{dy}{dt}$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The chain rule for composite functions: $\\frac{dz}{dt} = \\frac{\\partial f}{\\partial x}\\frac{dx}{dt} + \\frac{\\partial f}{\\partial y}\\frac{dy}{dt}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For $f(x,y) = xy$ with $x = \\cos t$ and $y = \\sin t$, $\\frac{df}{dt}$ at $t = 0$ is:',
    options: [
      '$0
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '$\\frac{df}{dt} = y(-\\sin t) + x(\\cos t) = \\sin t(-\\sin t) + \\cos t(\\cos t) = \\cos^2 t - \\sin^2 t$. At $t=0$: $1 - 0 = 1$.',
  },
      '$-1
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\frac{df}{dt} = y(-\\sin t) + x(\\cos t) = \\sin t(-\\sin t) + \\cos t(\\cos t) = \\cos^2 t - \\sin^2 t$. At $t=0$: $1 - 0 = 1$.',
  },
      '$1
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\frac{df}{dt} = y(-\\sin t) + x(\\cos t) = \\sin t(-\\sin t) + \\cos t(\\cos t) = \\cos^2 t - \\sin^2 t$. At $t=0$: $1 - 0 = 1$.',
  },
      '$2
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\frac{df}{dt} = y(-\\sin t) + x(\\cos t) = \\sin t(-\\sin t) + \\cos t(\\cos t) = \\cos^2 t - \\sin^2 t$. At $t=0$: $1 - 0 = 1$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\frac{df}{dt} = y(-\\sin t) + x(\\cos t) = \\sin t(-\\sin t) + \\cos t(\\cos t) = \\cos^2 t - \\sin^2 t$. At $t=0$: $1 - 0 = 1$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $f(x,y)$ has continuous partials and $x = r\\cos\\theta$, $y = r\\sin\\theta$, then $\\frac{\\partial f}{\\partial r} =$',
    options: [
      '$\\frac{\\partial f}{\\partial x}(-r\\sin\\theta) + \\frac{\\partial f}{\\partial y}(r\\cos\\theta)
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Using chain rule: $\\frac{\\partial f}{\\partial r} = \\frac{\\partial f}{\\partial x}\\frac{\\partial x}{\\partial r} + \\frac{\\partial f}{\\partial y}\\frac{\\partial y}{\\partial r} = \\frac{\\partial f}{\\partial x}\\cos\\theta + \\frac{\\partial f}{\\partial y}\\sin\\theta$.',
  },
      '$\\frac{\\partial f}{\\partial x} + \\frac{\\partial f}{\\partial y}
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Using chain rule: $\\frac{\\partial f}{\\partial r} = \\frac{\\partial f}{\\partial x}\\frac{\\partial x}{\\partial r} + \\frac{\\partial f}{\\partial y}\\frac{\\partial y}{\\partial r} = \\frac{\\partial f}{\\partial x}\\cos\\theta + \\frac{\\partial f}{\\partial y}\\sin\\theta$.',
  },
      '$\\frac{\\partial f}{\\partial x}\\cos\\theta + \\frac{\\partial f}{\\partial y}\\sin\\theta
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Using chain rule: $\\frac{\\partial f}{\\partial r} = \\frac{\\partial f}{\\partial x}\\frac{\\partial x}{\\partial r} + \\frac{\\partial f}{\\partial y}\\frac{\\partial y}{\\partial r} = \\frac{\\partial f}{\\partial x}\\cos\\theta + \\frac{\\partial f}{\\partial y}\\sin\\theta$.',
  },
      '$r\\frac{\\partial f}{\\partial x}
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Using chain rule: $\\frac{\\partial f}{\\partial r} = \\frac{\\partial f}{\\partial x}\\frac{\\partial x}{\\partial r} + \\frac{\\partial f}{\\partial y}\\frac{\\partial y}{\\partial r} = \\frac{\\partial f}{\\partial x}\\cos\\theta + \\frac{\\partial f}{\\partial y}\\sin\\theta$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Using chain rule: $\\frac{\\partial f}{\\partial r} = \\frac{\\partial f}{\\partial x}\\frac{\\partial x}{\\partial r} + \\frac{\\partial f}{\\partial y}\\frac{\\partial y}{\\partial r} = \\frac{\\partial f}{\\partial x}\\cos\\theta + \\frac{\\partial f}{\\partial y}\\sin\\theta$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The chain rule requires the outer function to be:',
    options: [
      'Differentiable',
      'Continuous',
      'Twice differentiable',
      'Constant',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The chain rule applies when the outer function is differentiable at the relevant point.',
  },
];
