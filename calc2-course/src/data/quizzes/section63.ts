import type { QuizQuestion } from './types';

export const section63Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A first-order system of linear differential equations can be written in matrix form as:',
    options: [
      '$Y\\' = Y^2
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A first-order linear system has the form $Y\' = AY + F$ where $Y$ is a vector of unknowns, $A$ is the coefficient matrix, and $F$ is the forcing term.',
  },
      '$y\\'\\' + ay\\' + by = 0
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A first-order linear system has the form $Y\' = AY + F$ where $Y$ is a vector of unknowns, $A$ is the coefficient matrix, and $F$ is the forcing term.',
  },
      '$Y\\' = AY + F$ where $Y$ and $F$ are vectors and $A$ is a matrix',
      '$\\frac{\\partial u}{\\partial t} = \\frac{\\partial^2 u}{\\partial x^2}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A first-order linear system has the form $Y\' = AY + F$ where $Y$ is a vector of unknowns, $A$ is the coefficient matrix, and $F$ is the forcing term.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A first-order linear system has the form $Y\' = AY + F$ where $Y$ is a vector of unknowns, $A$ is the coefficient matrix, and $F$ is the forcing term.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A single $n$th-order linear ODE can be converted to a first-order system of how many equations?',
    options: [
      '$n-1
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'An $n$th-order ODE is equivalent to a system of $n$ first-order equations by introducing $y_1 = y, y_2 = y\', \\ldots, y_n = y^{(n-1)}$.',
  },
      '$n
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'An $n$th-order ODE is equivalent to a system of $n$ first-order equations by introducing $y_1 = y, y_2 = y\', \\ldots, y_n = y^{(n-1)}$.',
  },
      '$1
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'An $n$th-order ODE is equivalent to a system of $n$ first-order equations by introducing $y_1 = y, y_2 = y\', \\ldots, y_n = y^{(n-1)}$.',
  },
      '$2n
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'An $n$th-order ODE is equivalent to a system of $n$ first-order equations by introducing $y_1 = y, y_2 = y\', \\ldots, y_n = y^{(n-1)}$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'An $n$th-order ODE is equivalent to a system of $n$ first-order equations by introducing $y_1 = y, y_2 = y\', \\ldots, y_n = y^{(n-1)}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For the homogeneous system $Y\' = AY$, the solution space is:',
    options: [
      'One-dimensional',
      'Always infinite-dimensional',
      'Not a vector space',
      'A vector space of dimension equal to the size of $A
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For an $n \\times n$ matrix $A$, the solution space of $Y\' = AY$ is an $n$-dimensional vector space.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For an $n \\times n$ matrix $A$, the solution space of $Y\' = AY$ is an $n$-dimensional vector space.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which system is equivalent to the second-order equation $y\'\' + 3y\' + 2y = 0$?',
    options: [
      '$y_1\\' = -2y_1, \\quad y_2\\' = -3y_2
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Setting $y_1 = y$ and $y_2 = y\'$, we get $y_1\' = y_2$ and $y_2\' = y\'\' = -3y\' - 2y = -3y_2 - 2y_1$.',
  },
      '$y_1\\' = y_2, \\quad y_2\\' = 2y_1 + 3y_2
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Setting $y_1 = y$ and $y_2 = y\'$, we get $y_1\' = y_2$ and $y_2\' = y\'\' = -3y\' - 2y = -3y_2 - 2y_1$.',
  },
      '$y_1\\' = y_1 + y_2, \\quad y_2\\' = y_1 - y_2
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Setting $y_1 = y$ and $y_2 = y\'$, we get $y_1\' = y_2$ and $y_2\' = y\'\' = -3y\' - 2y = -3y_2 - 2y_1$.',
  },
      '$y_1\\' = y_2, \\quad y_2\\' = -2y_1 - 3y_2
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Setting $y_1 = y$ and $y_2 = y\'$, we get $y_1\' = y_2$ and $y_2\' = y\'\' = -3y\' - 2y = -3y_2 - 2y_1$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Setting $y_1 = y$ and $y_2 = y\'$, we get $y_1\' = y_2$ and $y_2\' = y\'\' = -3y\' - 2y = -3y_2 - 2y_1$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The general solution of a homogeneous system $Y\' = AY$ with $A$ an $n \\times n$ matrix requires:',
    options: [
      '$n$ arbitrary constants',
      '$1$ arbitrary constant',
      '$n-1$ arbitrary constants',
      '$n^2$ arbitrary constants',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The solution space has dimension $n$, so the general solution involves $n$ arbitrary constants (one for each basis solution).',
  },
];
