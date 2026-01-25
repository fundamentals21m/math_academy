import type { QuizQuestion } from './types';

export const section35Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Projection of a plane from a point O sends each point P to:',
    options: [
      'The point closest to O',
      'The point on another plane along the line OP',
      'The origin',
      'The midpoint of OP',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Projection maps P to the intersection of line OP with the target plane.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Projection from a point at infinity (parallel projection) on lines acts as:',
    options: [
      'Rotation',
      'Reciprocation',
      'Translation x → x + l',
      'Squaring',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Parallel projection shifts points by a constant distance.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Projection from a finite point between parallel lines acts as:',
    options: [
      'Translation x → x + l',
      'Rotation',
      'Reciprocation x → 1/x',
      'Scaling x → kx',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'From a finite point onto a parallel line, distances are scaled by a constant factor.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Projection onto a perpendicular line can produce the transformation:',
    options: [
      'Reciprocation x → 1/x',
      'Scaling only',
      'Translation only',
      'Addition only',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Projecting between perpendicular lines from a suitable point gives the reciprocal map.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'All compositions of translations, scalings, and reciprocations have the form:',
    options: [
      '$f(x) = ax + b
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'These are the linear fractional (Möbius) transformations.',
  },
      '$f(x) = \\sin(x)
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'These are the linear fractional (Möbius) transformations.',
  },
      '$f(x) = ax^2 + bx + c
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'These are the linear fractional (Möbius) transformations.',
  },
      '$f(x) = \\frac{ax + b}{cx + d}$ with $ad - bc \\neq 0
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'These are the linear fractional (Möbius) transformations.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'These are the linear fractional (Möbius) transformations.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The three generating transformations for projections are:',
    options: [
      'Translation x → x + l, scaling x → kx, reciprocation x → 1/x',
      'Addition, subtraction, multiplication',
      'Rotation, reflection, translation',
      'Sine, cosine, tangent',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'These three types of maps generate all linear fractional functions.',
  },
];
