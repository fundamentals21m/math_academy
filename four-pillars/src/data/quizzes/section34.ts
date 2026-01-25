import type { QuizQuestion } from './types';

export const section34Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Homogeneous coordinates of a "point" in ℝP² are:',
    options: [
      'A unique triple (x, y, z)',
      'Any nonzero scalar multiple (tx, ty, tz) of a given triple',
      'Only integer triples',
      'An ordered pair (x, y)',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A "point" is a line through O, represented by any nonzero multiple of a point on that line.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A "line" in ℝP² is given by a homogeneous equation of the form:',
    options: [
      '$x^2 + y^2 = r^2
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A plane through O in ℝ³ has equation ax + by + cz = 0.',
  },
      '$ax + by + cz = 0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A plane through O in ℝ³ has equation ax + by + cz = 0.',
  },
      '$ax + by + c = 0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A plane through O in ℝ³ has equation ax + by + cz = 0.',
  },
      '$y = mx + b
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A plane through O in ℝ³ has equation ax + by + cz = 0.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A plane through O in ℝ³ has equation ax + by + cz = 0.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'To find the "line" through two "points" in ℝP², we solve:',
    options: [
      'A quadratic equation',
      'A system of three equations in two unknowns',
      'A single linear equation',
      'Two linear equations in three unknowns (a, b, c)',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The line ax + by + cz = 0 must pass through both points, giving two linear equations.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The complex projective plane ℂP² uses coordinates from:',
    options: [
      'Rational numbers only',
      'Real numbers only',
      'Complex numbers',
      'Integers only',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'ℂP² allows coordinates (x, y, z) to be complex numbers.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In ℝP³, a "point" is a line through O in:',
    options: [
      'ℝ²',
      'ℝⁿ',
      'ℝ³',
      'ℝ⁴',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'ℝP³ is built from ℝ⁴ using homogeneous coordinates (w, x, y, z).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'In ℝP³, two "planes" have in common:',
    options: [
      'A unique "line"',
      'Nothing',
      'A single "point"',
      'Infinitely many "lines"',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Two 3-dimensional subspaces of ℝ⁴ through O intersect in a 2-dimensional subspace (a "line").',
  },
];
