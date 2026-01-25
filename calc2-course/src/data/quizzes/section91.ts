import type { QuizQuestion } from './types';

export const section91Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is a partial differential equation (PDE)?',
    options: [
      'An equation involving only ordinary derivatives',
      'An equation that can only be solved numerically',
      'An equation involving a scalar field and its partial derivatives',
      'An equation with no derivatives',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A partial differential equation (PDE) is an equation involving a scalar field $f$ and one or more of its partial derivatives with respect to the independent variables.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For the PDE $\\frac{\\partial f(x, y)}{\\partial x} = 0$, the most general solution is:',
    options: [
      '$f(x, y) = g(y)$ where $g$ is any function of $y$',
      '$f(x, y) = C$ where $C$ is a constant',
      '$f(x, y) = g(x)$ where $g$ is any function of $x$',
      '$f(x, y) = xy$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'If $\\frac{\\partial f}{\\partial x} = 0$, then $f$ does not depend on $x$. The most general solution is $f(x, y) = g(y)$, where $g$ is an arbitrary function of $y$ alone. This makes the solution space infinite-dimensional.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For a homogeneous linear PDE of the form $L(f) = 0$, if $f$ and $g$ are solutions, then:',
    options: [
      'Only $f + g$ is also a solution',
      'Only $cf$ is also a solution for constant $c
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For homogeneous linear PDEs, the set of solutions forms a linear space. This means if $f$ and $g$ are solutions, then $af + bg$ is also a solution for any constants $a$ and $b$ (superposition principle).',
  },
      'No other linear combinations are solutions',
      '$af + bg$ is also a solution for any constants $a$ and $b
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For homogeneous linear PDEs, the set of solutions forms a linear space. This means if $f$ and $g$ are solutions, then $af + bg$ is also a solution for any constants $a$ and $b$ (superposition principle).',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For homogeneous linear PDEs, the set of solutions forms a linear space. This means if $f$ and $g$ are solutions, then $af + bg$ is also a solution for any constants $a$ and $b$ (superposition principle).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The key difference between solutions of ODEs and PDEs is that:',
    options: [
      'ODE solutions depend on arbitrary functions, PDE solutions depend on constants',
      'PDE solutions depend on arbitrary functions, ODE solutions depend on constants',
      'Both depend on the same number of arbitrary quantities',
      'Neither depends on arbitrary quantities',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'ODE solutions typically depend on arbitrary constants, making the solution space finite-dimensional. PDE solutions depend on arbitrary functions, making the solution space infinite-dimensional. This is a fundamental difference between the two theories.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What role do auxiliary conditions (initial/boundary conditions) play in PDE problems?',
    options: [
      'They make the problem harder to solve',
      'They are optional and not mathematically significant',
      'They always guarantee a unique solution exists',
      'They select particular solutions from the infinite-dimensional solution space'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Auxiliary conditions (such as initial conditions or boundary conditions) are needed to select particular solutions from the wealth of solutions in the infinite-dimensional solution space of a PDE.',
  },
];
