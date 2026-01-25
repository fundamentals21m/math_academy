import type { QuizQuestion } from './types';

export const section115Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'For a step function $f$ constant on open subrectangles with value $c_{ij}$ on subrectangle $Q_{ij}$, the double integral is:',
    options: [
      '$\\sum_{i,j} c_{ij}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The double integral of a step function is $\\iint_Q f = \\sum_{i,j} c_{ij} (x_i - x_{i-1})(y_j - y_{j-1})$, summing each constant value times the area of its subrectangle.',
  },
      '$\\sum_{i,j} c_{ij}^2
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The double integral of a step function is $\\iint_Q f = \\sum_{i,j} c_{ij} (x_i - x_{i-1})(y_j - y_{j-1})$, summing each constant value times the area of its subrectangle.',
  },
      '$\\sum_{i,j} c_{ij} (x_i - x_{i-1})(y_j - y_{j-1})
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The double integral of a step function is $\\iint_Q f = \\sum_{i,j} c_{ij} (x_i - x_{i-1})(y_j - y_{j-1})$, summing each constant value times the area of its subrectangle.',
  },
      '$\\max_{i,j} c_{ij}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The double integral of a step function is $\\iint_Q f = \\sum_{i,j} c_{ij} (x_i - x_{i-1})(y_j - y_{j-1})$, summing each constant value times the area of its subrectangle.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The double integral of a step function is $\\iint_Q f = \\sum_{i,j} c_{ij} (x_i - x_{i-1})(y_j - y_{j-1})$, summing each constant value times the area of its subrectangle.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If $f$ is a positive step function, the term $c_{ij} \\cdot (x_i - x_{i-1})(y_j - y_{j-1})$ represents:',
    options: [
      'The height of a box',
      'The volume of a rectangular box with base $Q_{ij}$ and height $c_{ij}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'For positive $f$, each term $c_{ij} (x_i - x_{i-1})(y_j - y_{j-1})$ is the volume of a box with base area $(x_i - x_{i-1})(y_j - y_{j-1})$ and height $c_{ij}$.',
  },
      'The area of the subrectangle',
      'The perimeter of the subrectangle',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'For positive $f$, each term $c_{ij} (x_i - x_{i-1})(y_j - y_{j-1})$ is the volume of a box with base area $(x_i - x_{i-1})(y_j - y_{j-1})$ and height $c_{ij}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $f(x, y) = k$ is constant on the interior of $Q = [a, b] \\times [c, d]$, then $\\iint_Q f = $:',
    options: [
      '$k
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'For a constant function $f = k$, the double integral equals the constant times the area: $\\iint_Q k = k(b - a)(d - c)$.',
  },
      '$k(d - c)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'For a constant function $f = k$, the double integral equals the constant times the area: $\\iint_Q k = k(b - a)(d - c)$.',
  },
      '$k(b - a)(d - c)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'For a constant function $f = k$, the double integral equals the constant times the area: $\\iint_Q k = k(b - a)(d - c)$.',
  },
      '$k(b - a)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'For a constant function $f = k$, the double integral equals the constant times the area: $\\iint_Q k = k(b - a)(d - c)$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'For a constant function $f = k$, the double integral equals the constant times the area: $\\iint_Q k = k(b - a)(d - c)$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The notation $\\Delta x_i$ and $\\Delta y_j$ in the double integral sum stands for:',
    options: [
      'Derivatives',
      'Variables of integration',
      'Error terms',
      'Differences: $x_i - x_{i-1}$ and $y_j - y_{j-1}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The notation $\\Delta x_i = x_i - x_{i-1}$ and $\\Delta y_j = y_j - y_{j-1}$ represents the widths of the subrectangles in each direction.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The notation $\\Delta x_i = x_i - x_{i-1}$ and $\\Delta y_j = y_j - y_{j-1}$ represents the widths of the subrectangles in each direction.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The value of the integral of a step function is independent of:',
    options: [
      'The choice of partition (as long as $f$ is constant on its open subrectangles)',
      'The function values',
      'The region $Q
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'As in 1D, refining the partition does not change the integral value. Any partition for which $f$ is constant on open subrectangles gives the same integral.',
  },
      'The dimension',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'As in 1D, refining the partition does not change the integral value. Any partition for which $f$ is constant on open subrectangles gives the same integral.',
  },
];
