import type { QuizQuestion } from './types';

export const section112Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A first-order differential equation $P(x, y) \\, dx + Q(x, y) \\, dy = 0$ is called exact if:',
    options: [
      '$P + Q = 0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The equation is exact if $V(x, y) = P\\mathbf{i} + Q\\mathbf{j} = \\nabla\\varphi$ for some scalar field $\\varphi$. This means $P = \\frac{\\partial\\varphi}{\\partial x}$ and $Q = \\frac{\\partial\\varphi}{\\partial y}$.',
  },
      'The vector field $V = P\\mathbf{i} + Q\\mathbf{j}$ is a gradient',
      '$P = Q
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The equation is exact if $V(x, y) = P\\mathbf{i} + Q\\mathbf{j} = \\nabla\\varphi$ for some scalar field $\\varphi$. This means $P = \\frac{\\partial\\varphi}{\\partial x}$ and $Q = \\frac{\\partial\\varphi}{\\partial y}$.',
  },
      '$P$ and $Q$ are both constants',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The equation is exact if $V(x, y) = P\\mathbf{i} + Q\\mathbf{j} = \\nabla\\varphi$ for some scalar field $\\varphi$. This means $P = \\frac{\\partial\\varphi}{\\partial x}$ and $Q = \\frac{\\partial\\varphi}{\\partial y}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For an exact equation with potential $\\varphi$, every solution $y = Y(x)$ satisfies:',
    options: [
      '$\\varphi(x, Y(x)) = C$ for some constant $C
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'If the equation is exact with potential $\\varphi$, then every solution satisfies $\\varphi(x, Y(x)) = C$ for some constant $C$. The level curves of $\\varphi$ are solution curves.',
  },
      '$\\varphi(x, Y(x)) = 0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If the equation is exact with potential $\\varphi$, then every solution satisfies $\\varphi(x, Y(x)) = C$ for some constant $C$. The level curves of $\\varphi$ are solution curves.',
  },
      '$\\frac{d\\varphi}{dx} = Y(x)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If the equation is exact with potential $\\varphi$, then every solution satisfies $\\varphi(x, Y(x)) = C$ for some constant $C$. The level curves of $\\varphi$ are solution curves.',
  },
      '$\\varphi = x + Y(x)
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If the equation is exact with potential $\\varphi$, then every solution satisfies $\\varphi(x, Y(x)) = C$ for some constant $C$. The level curves of $\\varphi$ are solution curves.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If the equation is exact with potential $\\varphi$, then every solution satisfies $\\varphi(x, Y(x)) = C$ for some constant $C$. The level curves of $\\varphi$ are solution curves.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'To check if $P \\, dx + Q \\, dy = 0$ is exact, we verify:',
    options: [
      '$\\frac{\\partial P}{\\partial y} = \\frac{\\partial Q}{\\partial x}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The necessary condition for exactness is $\\frac{\\partial P}{\\partial y} = \\frac{\\partial Q}{\\partial x}$ (the component test for $V = P\\mathbf{i} + Q\\mathbf{j}$ to be a gradient).',
  },
      '$P = Q
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The necessary condition for exactness is $\\frac{\\partial P}{\\partial y} = \\frac{\\partial Q}{\\partial x}$ (the component test for $V = P\\mathbf{i} + Q\\mathbf{j}$ to be a gradient).',
  },
      '$\\frac{\\partial P}{\\partial x} = \\frac{\\partial Q}{\\partial y}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The necessary condition for exactness is $\\frac{\\partial P}{\\partial y} = \\frac{\\partial Q}{\\partial x}$ (the component test for $V = P\\mathbf{i} + Q\\mathbf{j}$ to be a gradient).',
  },
      '$PQ = 1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The necessary condition for exactness is $\\frac{\\partial P}{\\partial y} = \\frac{\\partial Q}{\\partial x}$ (the component test for $V = P\\mathbf{i} + Q\\mathbf{j}$ to be a gradient).',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The necessary condition for exactness is $\\frac{\\partial P}{\\partial y} = \\frac{\\partial Q}{\\partial x}$ (the component test for $V = P\\mathbf{i} + Q\\mathbf{j}$ to be a gradient).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'An integrating factor $\\mu(x, y)$ is a function such that multiplying by $\\mu$:',
    options: [
      'Makes $P$ and $Q$ equal',
      'Makes the equation exact',
      'Makes the solution unique',
      'Makes the equation linear',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'An integrating factor $\\mu$ transforms a non-exact equation into an exact one: if $P \\, dx + Q \\, dy = 0$ is not exact, then $\\mu P \\, dx + \\mu Q \\, dy = 0$ may be exact.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For the equation $y \\, dx + 2x \\, dy = 0$, multiplying by $y$ gives $y^2 \\, dx + 2xy \\, dy = 0$. The potential is:',
    options: [
      '$\\varphi = y^2 + 2xy
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'After multiplying by $y$: $P = y^2$ and $Q = 2xy$. Integrating $P$ with respect to $x$ gives $xy^2 + A(y)$. Checking with $Q$: $\\frac{\\partial}{\\partial y}(xy^2) = 2xy = Q$, so $\\varphi = xy^2$.',
  },
      '$\\varphi = x^2y
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'After multiplying by $y$: $P = y^2$ and $Q = 2xy$. Integrating $P$ with respect to $x$ gives $xy^2 + A(y)$. Checking with $Q$: $\\frac{\\partial}{\\partial y}(xy^2) = 2xy = Q$, so $\\varphi = xy^2$.',
  },
      '$\\varphi = xy
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'After multiplying by $y$: $P = y^2$ and $Q = 2xy$. Integrating $P$ with respect to $x$ gives $xy^2 + A(y)$. Checking with $Q$: $\\frac{\\partial}{\\partial y}(xy^2) = 2xy = Q$, so $\\varphi = xy^2$.',
  },
      '$\\varphi = xy^2
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'After multiplying by $y$: $P = y^2$ and $Q = 2xy$. Integrating $P$ with respect to $x$ gives $xy^2 + A(y)$. Checking with $Q$: $\\frac{\\partial}{\\partial y}(xy^2) = 2xy = Q$, so $\\varphi = xy^2$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'After multiplying by $y$: $P = y^2$ and $Q = 2xy$. Integrating $P$ with respect to $x$ gives $xy^2 + A(y)$. Checking with $Q$: $\\frac{\\partial}{\\partial y}(xy^2) = 2xy = Q$, so $\\varphi = xy^2$.',
  },
];
