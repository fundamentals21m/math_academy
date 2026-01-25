import type { QuizQuestion } from './types';

export const section129Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'For Green\'s theorem on a multiply connected region with outer boundary $C_1$ and inner boundary $C_2$, the formula includes:',
    options: [
      '$\\oint_{C_1} + \\oint_{C_2}$ (both counterclockwise)',
      '$\\oint_{C_1} - \\oint_{C_2}$ (both taken counterclockwise when viewed separately)',
      'Only $\\oint_{C_1}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For a region with a hole, $\\iint_R (\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y})\\,dA = \\oint_{C_1} - \\oint_{C_2}$, where the minus sign accounts for the inner boundary being traversed clockwise relative to the region.',
  },
      '$\\oint_{C_1} \\cdot \\oint_{C_2}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For a region with a hole, $\\iint_R (\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y})\\,dA = \\oint_{C_1} - \\oint_{C_2}$, where the minus sign accounts for the inner boundary being traversed clockwise relative to the region.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For a region with a hole, $\\iint_R (\\frac{\\partial Q}{\\partial x} - \\frac{\\partial P}{\\partial y})\\,dA = \\oint_{C_1} - \\oint_{C_2}$, where the minus sign accounts for the inner boundary being traversed clockwise relative to the region.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The proof of Green\'s theorem for multiply connected regions uses:',
    options: [
      'Limiting arguments from simply connected regions',
      'Approximation by rectangles',
      'Crosscuts that connect the boundary components, reducing to simply connected pieces',
      'The implicit function theorem',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'By introducing crosscuts connecting the boundary components, the multiply connected region is transformed into simply connected pieces. Line integrals along crosscuts cancel (traversed twice in opposite directions).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Invariance Under Deformation theorem (11.13) states that if $\\frac{\\partial P}{\\partial y} = \\frac{\\partial Q}{\\partial x}$ in region $S$, and $C_2$ lies inside $C_1$ with the annular region in $S$, then:',
    options: [
      '$\\oint_{C_1} = 0
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'When the curl is zero, the line integral over the annular region vanishes, so $\\oint_{C_1} - \\oint_{C_2} = 0$, i.e., $\\oint_{C_1} = \\oint_{C_2}$ when both are traversed in the same direction.',
  },
      '$\\oint_{C_1} = -\\oint_{C_2}
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'When the curl is zero, the line integral over the annular region vanishes, so $\\oint_{C_1} - \\oint_{C_2} = 0$, i.e., $\\oint_{C_1} = \\oint_{C_2}$ when both are traversed in the same direction.',
  },
      '$\\oint_{C_1} = \\oint_{C_2}$ (same orientation)',
      '$\\oint_{C_1} + \\oint_{C_2} = \\iint_R
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'When the curl is zero, the line integral over the annular region vanishes, so $\\oint_{C_1} - \\oint_{C_2} = 0$, i.e., $\\oint_{C_1} = \\oint_{C_2}$ when both are traversed in the same direction.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'When the curl is zero, the line integral over the annular region vanishes, so $\\oint_{C_1} - \\oint_{C_2} = 0$, i.e., $\\oint_{C_1} = \\oint_{C_2}$ when both are traversed in the same direction.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The Invariance Under Deformation theorem implies that the value of a line integral depends only on:',
    options: [
      'Which "holes" are enclosed by the curve',
      'The exact shape of the curve',
      'The length of the curve',
      'The parametrization of the curve',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'When $\\frac{\\partial P}{\\partial y} = \\frac{\\partial Q}{\\partial x}$, a curve can be deformed without changing the line integral, as long as it doesn\'t cross any holes. The integral only depends on which holes are enclosed.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Continuous deformation of a curve in a region $S$ means that:',
    options: [
      'The curve can be stretched to any length',
      'The curve\'s endpoints must remain fixed',
      'The curve must pass through every point of $S$',
      'The curve can be smoothly transformed while staying within $S$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Continuous deformation means smoothly transforming one curve into another while all intermediate curves remain within the region $S$. This is the intuitive meaning of "no holes" for simply connected regions.',
  },
];
