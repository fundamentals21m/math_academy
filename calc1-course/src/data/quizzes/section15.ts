import type { QuizQuestion } from './types';

export const section15Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In polar coordinates, a point is represented by:',
    options: [
      '$(x, y)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Polar coordinates use $(r, \\theta)$: distance from origin and angle from positive $x$-axis.',
  },
      '$(\\rho, z)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Polar coordinates use $(r, \\theta)$: distance from origin and angle from positive $x$-axis.',
  },
      '$(r, x, y)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Polar coordinates use $(r, \\theta)$: distance from origin and angle from positive $x$-axis.',
  },
      '$(r, \\theta)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Polar coordinates use $(r, \\theta)$: distance from origin and angle from positive $x$-axis.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Polar coordinates use $(r, \\theta)$: distance from origin and angle from positive $x$-axis.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'To convert from polar to Cartesian: $x = ?$',
    options: [
      '$r\\sin\\theta
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$x = r\\cos\\theta$ and $y = r\\sin\\theta$.',
  },
      '$\\theta\\cos r
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$x = r\\cos\\theta$ and $y = r\\sin\\theta$.',
  },
      '$r\\cos\\theta
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$x = r\\cos\\theta$ and $y = r\\sin\\theta$.',
  },
      '$r/\\cos\\theta
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$x = r\\cos\\theta$ and $y = r\\sin\\theta$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$x = r\\cos\\theta$ and $y = r\\sin\\theta$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The area of a region in polar coordinates is given by:',
    options: [
      '$\\int_\\alpha^\\beta \\frac{1}{2}r^2\\,d\\theta$',
      '$\\int_\\alpha^\\beta r\\,d\\theta$',
      '$\\int_\\alpha^\\beta r^2\\,d\\theta$',
      '$\\int_\\alpha^\\beta \\pi r^2\\,d\\theta$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Area in polar: $A = \\frac{1}{2}\\int_\\alpha^\\beta r^2\\,d\\theta$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The polar equation $r = 2$ represents:',
    options: [
      'A line',
      'A circle of radius 2 centered at origin',
      'A parabola',
      'A spiral'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$r = 2$ means all points at distance 2 from the origin: a circle.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'Convert $(r, \\theta) = (2, \\pi/2)$ to Cartesian. What is the $x$-coordinate?',
    correctAnswer: 0,
    numericRange: { min: -10, max: 10, precision: 0 },
    difficulty: 'medium',
    explanation: '$x = 2\\cos(\\pi/2) = 2 \\cdot 0 = 0$.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'For the same point $(r, \\theta) = (2, \\pi/2)$, what is the $y$-coordinate?',
    correctAnswer: 2,
    numericRange: { min: -10, max: 10, precision: 0 },
    difficulty: 'medium',
    explanation: '$y = 2\\sin(\\pi/2) = 2 \\cdot 1 = 2$.',
  },
];
