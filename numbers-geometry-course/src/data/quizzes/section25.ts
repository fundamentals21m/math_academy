import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 25: The Triangle Inequality
 */
export const section25Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The triangle inequality states that for non-collinear points A, B, C:',
    options: [
      '$d(A, C) = d(A, B) + d(B, C)$',
      '$d(A, C) > d(A, B) + d(B, C)$',
      '$d(A, C) < d(A, B) + d(B, C)$',
      '$d(A, C) \\geq d(A, B) \\cdot d(B, C)$',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'The triangle inequality states that the direct distance d(A, C) is strictly less than the sum d(A, B) + d(B, C) when A, B, C are not collinear. Going directly is shorter than any detour.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why is the triangle inequality called "obvious"?',
    options: [
      'It is an axiom',
      'Even a dog knows the shortest path to food is a straight line',
      'It was proven by the ancient Egyptians',
      'It follows immediately from Pythagorean theorem',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'The text notes that even a dog knows the triangle inequality intuitively: a dog goes straight to a bone rather than via an intermediate point. The shortest path is always direct.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What technique simplifies the proof of the triangle inequality?',
    options: [
      'Using complex numbers',
      'Applying isometries to position the triangle conveniently',
      'Assuming the result is true',
      'Using calculus',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'By applying a translation to move B to the origin and possibly a reflection to place A on the x-axis, the calculation becomes much simpler. Isometries preserve distances, so the inequality still holds.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'When does equality hold in the triangle inequality?',
    options: [
      'When the triangle is equilateral',
      'When A, B, C are collinear (B is on segment AC)',
      'Never',
      'When the triangle is isosceles',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Equality d(A, C) = d(A, B) + d(B, C) holds if and only if the three points are collinear, with B lying on the segment from A to C. Only then is the "detour" not actually a detour.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The phrase "a straight line is the shortest distance between two points" expresses:',
    options: [
      'The parallel axiom',
      'The triangle inequality',
      'The Pythagorean theorem',
      'The definition of distance',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'This common saying is an informal statement of the triangle inequality. Any path from A to C via other points is at least as long as the direct path, with equality only for points on the line AC.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'In Euclid\'s Elements, the triangle inequality appears in which proposition of Book I?',
    options: ['Proposition 1', 'Proposition 5', 'Proposition 20', 'Proposition 47'],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'Euclid proves the triangle inequality in Proposition 20 of Book I. His proof is longer because he does not assume the parallel axiom, making the result valid in non-Euclidean geometry too.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'How is the length of a curve defined?',
    options: [
      'The maximum distance between any two points on it',
      'The least upper bound of polygonal path lengths with vertices on the curve',
      'The integral of 1 along the curve',
      'It cannot be defined',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'The length of a curve is defined as the least upper bound of the lengths of all polygonal paths from A to B with vertices on the curve. The triangle inequality helps establish upper bounds, and completeness of ℝ ensures the LUB exists.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What property of $\\mathbb{R}$ ensures arc length exists?',
    options: [
      'The Archimedean property',
      'Completeness (existence of least upper bounds)',
      'The ordering of real numbers',
      'The density of rationals',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The triangle inequality gives an upper bound for polygonal approximations to a curve. By completeness of ℝ, a bounded set has a least upper bound. This LUB is the arc length.',
  },
];
