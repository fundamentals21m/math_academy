import type { QuizQuestion } from './types';

export const section65Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The parallel postulate was long believed to be:',
    options: [
      'False',
      'Unique to spherical geometry',
      'Discovered by Lobachevsky',
      'Provable from the other axioms'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'For centuries, mathematicians tried to prove the parallel postulate from Euclid\'s other axioms.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Who is called "the Copernicus of geometry" for publishing non-Euclidean geometry?',
    options: [
      'Lobachevsky',
      'Gauss',
      'Bolyai',
      'Saccheri'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Lobachevsky published his work in Russian in 1829 and earned this title for his revolutionary contribution.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Poincaré disk model represents hyperbolic geometry inside:',
    options: [
      'The upper half plane',
      'The open unit disk $|z| < 1$',
      'A sphere',
      'The entire complex plane'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Poincaré disk model uses the interior of the unit disk, with the boundary at infinity.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In spherical geometry, the angle sum of a triangle is:',
    options: [
      'Less than $\\pi$',
      'Equal to $\\pi$',
      'Greater than $\\pi$',
      'Exactly $2\\pi$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Spherical geometry has positive curvature, so triangle angle sums exceed π (180°).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Klein\'s Erlangen program characterizes geometries by their:',
    options: [
      'Axiom systems',
      'Coordinate systems',
      'Number of dimensions',
      'Groups of transformations'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Klein proposed that each geometry is defined by its symmetry group: Euclidean by isometries, projective by projective transformations, etc.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Einstein\'s general relativity uses non-Euclidean geometry because:',
    options: [
      'Spacetime is curved by matter and energy',
      'Space is discrete',
      'Light travels in circles',
      'Time is an illusion'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'General relativity describes gravity as curvature of spacetime, requiring non-Euclidean geometry.',
  },
];
