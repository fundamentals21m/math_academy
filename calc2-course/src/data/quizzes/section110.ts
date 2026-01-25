import type { QuizQuestion } from './types';

export const section110Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'According to Theorem 10.5, which three conditions are equivalent for a continuous vector field on an open connected set?',
    options: [
      'Being bounded, continuous, and differentiable',
      'Being a gradient, having path-independent integrals, and having zero circulation around closed paths',
      'Being constant, linear, and polynomial',
      'Having continuous partials, being integrable, and being bounded',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The three equivalent conditions are: (a) $f$ is the gradient of a potential, (b) line integrals are path-independent, (c) line integrals are zero around every closed path.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $\\oint_C f \\neq 0$ for some closed curve $C$, then:',
    options: [
      '$f$ is definitely NOT a gradient',
      '$f$ is definitely a gradient',
      '$f$ is constant',
      'No conclusion can be drawn',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'If the line integral around any closed curve is nonzero, then $f$ cannot be a gradient. A gradient field has zero circulation around every closed path.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $\\oint_C f = 0$ for a particular closed curve $C$, then:',
    options: [
      '$f$ must be a gradient',
      '$f$ cannot be a gradient',
      '$f$ might or might not be a gradient',
      '$f$ is constant',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Zero circulation around one particular curve (or even infinitely many) does not guarantee $f$ is a gradient. The condition must hold for ALL closed curves.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The component test (necessary condition for a gradient) in 2D states that if $f = P\\mathbf{i} + Q\\mathbf{j}$ is a gradient, then:',
    options: [
      '$P = Q
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'If $f = \\nabla\\varphi$, then $P = \\frac{\\partial\\varphi}{\\partial x}$ and $Q = \\frac{\\partial\\varphi}{\\partial y}$. By equality of mixed partials, $\\frac{\\partial P}{\\partial y} = \\frac{\\partial Q}{\\partial x}$.',
  },
      '$\\frac{\\partial P}{\\partial x} = \\frac{\\partial Q}{\\partial y}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If $f = \\nabla\\varphi$, then $P = \\frac{\\partial\\varphi}{\\partial x}$ and $Q = \\frac{\\partial\\varphi}{\\partial y}$. By equality of mixed partials, $\\frac{\\partial P}{\\partial y} = \\frac{\\partial Q}{\\partial x}$.',
  },
      '$P + Q = 0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If $f = \\nabla\\varphi$, then $P = \\frac{\\partial\\varphi}{\\partial x}$ and $Q = \\frac{\\partial\\varphi}{\\partial y}$. By equality of mixed partials, $\\frac{\\partial P}{\\partial y} = \\frac{\\partial Q}{\\partial x}$.',
  },
      '$\\frac{\\partial P}{\\partial y} = \\frac{\\partial Q}{\\partial x}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If $f = \\nabla\\varphi$, then $P = \\frac{\\partial\\varphi}{\\partial x}$ and $Q = \\frac{\\partial\\varphi}{\\partial y}$. By equality of mixed partials, $\\frac{\\partial P}{\\partial y} = \\frac{\\partial Q}{\\partial x}$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If $f = \\nabla\\varphi$, then $P = \\frac{\\partial\\varphi}{\\partial x}$ and $Q = \\frac{\\partial\\varphi}{\\partial y}$. By equality of mixed partials, $\\frac{\\partial P}{\\partial y} = \\frac{\\partial Q}{\\partial x}$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In general, the component test $D_i f_j = D_j f_i$ is:',
    options: [
      'Both necessary and sufficient for being a gradient',
      'Sufficient but not necessary for being a gradient',
      'Neither necessary nor sufficient',
      'Necessary but not always sufficient for being a gradient',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The component test is necessary (gradients must satisfy it) but not always sufficient. The topology of the domain matters---on simply connected domains it is also sufficient, but not on domains with holes.',
  },
];
