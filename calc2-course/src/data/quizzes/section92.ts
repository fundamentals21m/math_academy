import type { QuizQuestion } from './types';

export const section92Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The first-order PDE $3\\frac{\\partial f}{\\partial x} + 2\\frac{\\partial f}{\\partial y} = 0$ can be written as:',
    options: [
      '$(3\\mathbf{i} + 2\\mathbf{j}) \\times \\nabla f = 0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The PDE $3\\frac{\\partial f}{\\partial x} + 2\\frac{\\partial f}{\\partial y} = 0$ can be written as the dot product $(3\\mathbf{i} + 2\\mathbf{j}) \\cdot \\nabla f = 0$, showing that the gradient is orthogonal to the vector $(3, 2)$.',
  },
      '$(3\\mathbf{i} + 2\\mathbf{j}) \\cdot \\nabla f = 0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The PDE $3\\frac{\\partial f}{\\partial x} + 2\\frac{\\partial f}{\\partial y} = 0$ can be written as the dot product $(3\\mathbf{i} + 2\\mathbf{j}) \\cdot \\nabla f = 0$, showing that the gradient is orthogonal to the vector $(3, 2)$.',
  },
      '$\\nabla f = 3\\mathbf{i} + 2\\mathbf{j}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The PDE $3\\frac{\\partial f}{\\partial x} + 2\\frac{\\partial f}{\\partial y} = 0$ can be written as the dot product $(3\\mathbf{i} + 2\\mathbf{j}) \\cdot \\nabla f = 0$, showing that the gradient is orthogonal to the vector $(3, 2)$.',
  },
      '$(3\\mathbf{i} - 2\\mathbf{j}) \\cdot \\nabla f = 0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The PDE $3\\frac{\\partial f}{\\partial x} + 2\\frac{\\partial f}{\\partial y} = 0$ can be written as the dot product $(3\\mathbf{i} + 2\\mathbf{j}) \\cdot \\nabla f = 0$, showing that the gradient is orthogonal to the vector $(3, 2)$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The PDE $3\\frac{\\partial f}{\\partial x} + 2\\frac{\\partial f}{\\partial y} = 0$ can be written as the dot product $(3\\mathbf{i} + 2\\mathbf{j}) \\cdot \\nabla f = 0$, showing that the gradient is orthogonal to the vector $(3, 2)$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For the PDE $a\\frac{\\partial f}{\\partial x} + b\\frac{\\partial f}{\\partial y} = 0$ (with $a, b$ constants), the level curves of any solution are:',
    options: [
      'Circles centered at the origin',
      'Parabolas',
      'Straight lines parallel to $a\\mathbf{i} + b\\mathbf{j}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Since the gradient $\\nabla f$ is orthogonal to both level curves and to the vector $a\\mathbf{i} + b\\mathbf{j}$, the level curves must be parallel to $a\\mathbf{i} + b\\mathbf{j}$. These are straight lines of the form $bx - ay = c$.',
  },
      'Ellipses',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Since the gradient $\\nabla f$ is orthogonal to both level curves and to the vector $a\\mathbf{i} + b\\mathbf{j}$, the level curves must be parallel to $a\\mathbf{i} + b\\mathbf{j}$. These are straight lines of the form $bx - ay = c$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The general solution to $a\\frac{\\partial f}{\\partial x} + b\\frac{\\partial f}{\\partial y} = 0$ is $f(x, y) = g(bx - ay)$ for some function $g$. This works because:',
    options: [
      '$bx - ay$ is constant along level curves',
      'The function $g$ must be a polynomial',
      '$bx - ay$ equals the magnitude of the gradient',
      '$g$ depends on both $x$ and $y$ independently',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The expression $bx - ay$ is constant along lines parallel to $a\\mathbf{i} + b\\mathbf{j}$, which are the level curves of any solution. Thus $f(x, y) = g(bx - ay)$ is constant along each level curve, as required.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'To verify that $f(x, y) = g(2x - 3y)$ satisfies $3\\frac{\\partial f}{\\partial x} + 2\\frac{\\partial f}{\\partial y} = 0$, we compute the partial derivatives using:',
    options: [
      'The chain rule',
      'Integration by parts',
      'The product rule',
      'L\\'Hopital\\'s rule',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Using the chain rule: $\\frac{\\partial f}{\\partial x} = 2g\'(2x-3y)$ and $\\frac{\\partial f}{\\partial y} = -3g\'(2x-3y)$. Then $3(2g\') + 2(-3g\') = 6g\' - 6g\' = 0$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The technique of reducing a first-order PDE to a simpler form involves:',
    options: [
      'Taking the Fourier transform',
      'Multiplying by an integrating factor',
      'Applying Green\\'s theorem',
      'A linear change of variables to make one partial derivative zero',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'To solve first-order PDEs with constant coefficients, we introduce a linear change of variables $x = Au + Bv$, $y = Cu + Dv$ chosen so that the transformed equation has $\\frac{\\partial h}{\\partial u} = 0$, which is easily solved.',
  },
];
