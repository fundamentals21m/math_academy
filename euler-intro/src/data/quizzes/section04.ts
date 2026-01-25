import type { QuizQuestion } from './types';

export const section04Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the general form of a second-degree equation?',
    options: [
      '$ax + by + c = 0
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The general second-degree equation has all terms up to degree 2: $\\alpha x^2 + \\beta xy + \\gamma y^2 + \\delta x + \\varepsilon y + \\zeta = 0$.',
  },
      '$ax^3 + by^3 = c
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The general second-degree equation has all terms up to degree 2: $\\alpha x^2 + \\beta xy + \\gamma y^2 + \\delta x + \\varepsilon y + \\zeta = 0$.',
  },
      '$y = mx + b
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The general second-degree equation has all terms up to degree 2: $\\alpha x^2 + \\beta xy + \\gamma y^2 + \\delta x + \\varepsilon y + \\zeta = 0$.',
  },
      '$\\alpha x^2 + \\beta xy + \\gamma y^2 + \\delta x + \\varepsilon y + \\zeta = 0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The general second-degree equation has all terms up to degree 2: $\\alpha x^2 + \\beta xy + \\gamma y^2 + \\delta x + \\varepsilon y + \\zeta = 0$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The general second-degree equation has all terms up to degree 2: $\\alpha x^2 + \\beta xy + \\gamma y^2 + \\delta x + \\varepsilon y + \\zeta = 0$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How many values of $y$ typically correspond to each value of $x$ for a conic?',
    options: [
      'One',
      'Three',
      'Two',
      'Infinitely many',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Solving the quadratic equation in $y$ gives two values (via the $\\pm$ in the quadratic formula), reflecting that a vertical line typically intersects a conic in two points.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is a diameter of a conic section?',
    options: [
      'Any line through the center',
      'The longest chord of the conic',
      'A tangent line to the conic',
      'The locus of midpoints of parallel chords',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A diameter is the locus of midpoints of parallel chords. Euler shows this is always a straight line because $(y_1 + y_2)/2$ is linear in $x$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'According to Vieta\'s formulas, what is $y_1 + y_2$ for the roots of $\\gamma y^2 + (\\beta x + \\varepsilon)y + ... = 0$?',
    options: [
      '$-(\\beta x + \\varepsilon)/\\gamma
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By Vieta\'s formulas, the sum of roots of $ay^2 + by + c = 0$ is $-b/a$. Here, $y_1 + y_2 = -(\\beta x + \\varepsilon)/\\gamma$.',
  },
      '$(\\beta x + \\varepsilon)/\\gamma
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By Vieta\'s formulas, the sum of roots of $ay^2 + by + c = 0$ is $-b/a$. Here, $y_1 + y_2 = -(\\beta x + \\varepsilon)/\\gamma$.',
  },
      '$\\gamma/(\\beta x + \\varepsilon)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By Vieta\'s formulas, the sum of roots of $ay^2 + by + c = 0$ is $-b/a$. Here, $y_1 + y_2 = -(\\beta x + \\varepsilon)/\\gamma$.',
  },
      '$(\\beta x + \\varepsilon)^2/\\gamma
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By Vieta\'s formulas, the sum of roots of $ay^2 + by + c = 0$ is $-b/a$. Here, $y_1 + y_2 = -(\\beta x + \\varepsilon)/\\gamma$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By Vieta\'s formulas, the sum of roots of $ay^2 + by + c = 0$ is $-b/a$. Here, $y_1 + y_2 = -(\\beta x + \\varepsilon)/\\gamma$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'When do the two ordinate values $y_1$ and $y_2$ coincide?',
    options: [
      'At the center of the conic',
      'At a point of tangency (double root)',
      'At the vertices',
      'Never',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When the discriminant is zero, the quadratic has a double root, meaning $y_1 = y_2$. Geometrically, this occurs where the line is tangent to the conic.',
  },
];
