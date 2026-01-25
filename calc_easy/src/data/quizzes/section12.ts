import type { QuizQuestion } from './types';

export const section12Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The curvature of a curve measures:',
    options: [
      'The length of the curve',
      'How sharply the curve bends at a point',
      'The area under the curve',
      'The height of the curve'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Curvature quantifies how much a curve deviates from being a straight line at each point.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A straight line has curvature equal to:',
    options: [
      'One',
      'Infinity',
      'Zero',
      'Undefined'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A straight line doesn\'t bend at all, so its curvature is zero.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A circle with a small radius has:',
    options: [
      'Large curvature',
      'Small curvature',
      'Infinite curvature',
      'Zero curvature',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Smaller circles bend more sharply, so they have larger curvature. Curvature = 1/radius.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The formula for curvature involves:',
    options: [
      'Only the second derivative',
      'Only the first derivative',
      'Neither derivative',
      'Both first and second derivatives',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Curvature formula: $\\kappa = \\frac{|y\'\'|}{(1 + (y\')^2)^{3/2}}$ uses both $y\'$ and $y\'\'$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Where on the parabola $y = x^2$ is the curvature greatest?',
    options: [
      'At large values of $x
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The parabola bends most sharply at its vertex and flattens out as $|x|$ increases.',
  },
      'Curvature is constant everywhere',
      'At $x = 1
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The parabola bends most sharply at its vertex and flattens out as $|x|$ increases.',
  },
      'At the vertex ($x = 0$)',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The parabola bends most sharply at its vertex and flattens out as $|x|$ increases.',
  },
];
