import type { QuizQuestion } from './types';

export const section65Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The parallel postulate was long believed to be:',
    options: [
      'False',
      'Discovered by Lobachevsky',
      'Provable from the other axioms',
      'Unique to spherical geometry',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'For centuries, mathematicians tried to prove the parallel postulate from Euclid\'s other axioms.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Who is called "the Copernicus of geometry" for publishing non-Euclidean geometry?',
    options: [
      'Bolyai',
      'Lobachevsky',
      'Gauss',
      'Saccheri',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Lobachevsky published his work in Russian in 1829 and earned this title for his revolutionary contribution.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Poincaré disk model represents hyperbolic geometry inside:',
    options: [
      'The upper half plane',
      'The open unit disk $|z| < 1
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Poincaré disk model uses the interior of the unit disk, with the boundary at infinity.',
  },
      'The entire complex plane',
      'A sphere',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The Poincaré disk model uses the interior of the unit disk, with the boundary at infinity.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In spherical geometry, the angle sum of a triangle is:',
    options: [
      'Equal to $\\pi
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Spherical geometry has positive curvature, so triangle angle sums exceed π (180°).',
  },
      'Less than $\\pi
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Spherical geometry has positive curvature, so triangle angle sums exceed π (180°).',
  },
      'Exactly $2\\pi
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Spherical geometry has positive curvature, so triangle angle sums exceed π (180°).',
  },
      'Greater than $\\pi
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Spherical geometry has positive curvature, so triangle angle sums exceed π (180°).',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Spherical geometry has positive curvature, so triangle angle sums exceed π (180°).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Klein\'s Erlangen program characterizes geometries by their:',
    options: [
      'Axiom systems',
      'Number of dimensions',
      'Groups of transformations',
      'Coordinate systems',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Klein proposed that each geometry is defined by its symmetry group: Euclidean by isometries, projective by projective transformations, etc.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Einstein\'s general relativity uses non-Euclidean geometry because:',
    options: [
      'Spacetime is curved by matter and energy',
      'Light travels in circles',
      'Space is discrete',
      'Time is an illusion',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'General relativity describes gravity as curvature of spacetime, requiring non-Euclidean geometry.',
  },
];
