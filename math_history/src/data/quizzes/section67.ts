import type { QuizQuestion } from './types';

export const section67Questions: QuizQuestion[] = [
  // Easy questions
  {
    id: 's67-e01',
    type: 'multiple-choice',
    question: 'Cantor\'s surprising discovery was that:',
    options: [
      'All spaces are one-dimensional',
      'The line is longer than the plane',
      'Dimension cannot be defined',
      'There exists a bijection between $\\mathbb{R}$ and $\\mathbb{R}^2$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'In 1877, Cantor showed that there\'s a one-to-one correspondence between R and R². The line and plane have the same cardinality! However, this bijection is not continuous, so dimension is still preserved under homeomorphisms.',
  },
  {
    id: 's67-e02',
    type: 'multiple-choice',
    question: 'A space-filling curve (like the Peano curve) is:',
    options: [
      'A continuous surjection from an interval onto a square',
      'A straight line',
      'A curve that divides a plane into two parts',
      'A homeomorphism between line and plane',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'The Peano curve (1890) is a continuous map from [0,1] onto [0,1]². A 1-dimensional curve passes through every point of a 2-dimensional square! However, it\'s not one-to-one—it crosses itself infinitely many times.',
  },
  // Medium questions
  {
    id: 's67-m01',
    type: 'multiple-choice',
    question: 'Brouwer\'s invariance of dimension theorem states that:',
    options: [
      'All spaces have the same dimension',
      '$\\mathbb{R}^m$ is homeomorphic to $\\mathbb{R}^n$ only if $m = n$',
      'Dimension is not a topological property',
      'Space-filling curves are impossible'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Brouwer proved in 1911 that R^m and R^n are homeomorphic (topologically equivalent) if and only if m = n. This confirms that dimension is a topological invariant—it can\'t be changed by continuous deformation.',
  },
  {
    id: 's67-m02',
    type: 'multiple-choice',
    question: 'The Cantor set has Hausdorff dimension approximately:',
    options: [
      '0',
      '1',
      '0.631',
      '2'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The Cantor set has Hausdorff dimension log(2)/log(3) ≈ 0.631. It has topological dimension 0 (totally disconnected) but fractal dimension between 0 and 1, reflecting its "in-between" nature.',
  },
  // Hard questions
  {
    id: 's67-h01',
    type: 'multiple-choice',
    question: 'In dimension 7, Milnor discovered that:',
    options: [
      'Dimension is undefined',
      'The sphere doesn\'t exist',
      'All spheres are the same',
      'There are 28 different smooth structures on the 7-sphere'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'Milnor\'s 1956 discovery of exotic spheres showed that in dimension 7, there are 28 different ways to put a smooth structure on the sphere. These are homeomorphic but not diffeomorphic—a distinction that doesn\'t exist in lower dimensions.',
  },
  {
    id: 's67-h02',
    type: 'multiple-choice',
    question: 'Which dimension is known to be uniquely "strange" in topology?',
    options: [
      'Dimension 4',
      'Dimension 2',
      'Dimension 3',
      'Dimension 1',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'Dimension 4 is uniquely strange: R⁴ has uncountably many different smooth structures (unlike any other R^n), the smooth Poincaré conjecture is false there, and many problems solvable in other dimensions remain open in dimension 4.',
  },
];
