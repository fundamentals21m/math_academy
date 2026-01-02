import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 13: Constructions with Ruler and Compass
 */
export const section13Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question:
      'Which of the following is NOT one of the three classical construction problems?',
    options: [
      'Doubling the cube',
      'Trisecting any angle',
      'Bisecting any angle',
      'Squaring the circle',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Bisecting an angle is easy to do with ruler and compass. The three classical problems are: doubling the cube (finding the cube root of 2), trisecting any angle, and squaring the circle.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question:
      'What arithmetical operations can be performed using only ruler and compass?',
    options: [
      'Addition, subtraction, and multiplication only',
      'Addition, subtraction, multiplication, division, and square roots',
      'All operations including cube roots',
      'Only addition and subtraction',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'With ruler and compass, we can perform addition, subtraction, multiplication, division (the four rational operations), and square root extraction — but nothing more. Cube roots are impossible.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question:
      'To construct the product ab using ruler and compass, which proportion is used?',
    options: [
      'x : b = a : 1 (fourth proportional)',
      '1 : x = x : ab (mean proportional)',
      'x : 1 = 1 : ab',
      'a : b = b : x',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'To find x = ab, we use the proportion x : b = a : 1, which can be solved using similar triangles to find the fourth proportional.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question:
      'How did the Greeks construct the square root of a number a using ruler and compass?',
    options: [
      'Using a regular pentagon',
      'Using a semicircle on a segment of length a + 1',
      'Using two parallel lines',
      'Using the quadratrix',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'To find √a, draw a semicircle on a segment of length a + 1. A perpendicular from the point dividing the segment into lengths a and 1 meets the semicircle at height √a (the mean proportional).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question:
      'Why does trisecting a 60° angle lead to a cubic equation?',
    options: [
      'Because 60° has three factors',
      'Because the triple angle formula for cosine involves cos³θ',
      'Because triangles have three sides',
      'Because the compass draws circles',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'The triple angle formula cos(3θ) = 4cos³θ - 3cosθ leads to a cubic equation when we set cos(3θ) = cos(60°) = 1/2 and solve for cos(θ).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question:
      'Why can a regular pentagon be constructed with ruler and compass?',
    options: [
      'Because 5 is a prime number',
      'Because cos(72°) involves only a square root (the golden section)',
      'Because pentagons have an even number of diagonals',
      'Because Euclid said so',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The construction of a regular pentagon requires cos(72°), which equals (−1 + √5)/4. Since this involves only rational operations and a square root (the golden section), it can be constructed with ruler and compass.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question:
      'Why is the regular heptagon (7-sided polygon) impossible to construct with ruler and compass?',
    options: [
      'Because 7 is a prime number',
      'Because cos(360°/7) requires solving a cubic equation',
      'Because heptagons are too complicated',
      'Because 7 is an odd number',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'Constructing a regular heptagon requires solving the cubic equation u³ + u² - 2u - 1 = 0. Since this cannot be reduced to rational operations and square roots, the heptagon is impossible with ruler and compass.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question:
      'According to Descartes\' analytic geometry, why are only square roots (not cube roots) achievable with ruler and compass?',
    options: [
      'Because compasses can only draw circles, not spheres',
      'Because lines give linear equations and circles give quadratic equations',
      'Because Descartes did not believe in cube roots',
      'Because the ruler is straight, not curved',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'Lines are described by linear equations (ax + by + c = 0) and circles by quadratic equations (x² + y² + dx + ey + f = 0). Intersecting these produces only linear and quadratic equations, which introduce at most square roots.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question:
      'What is the "fourth proportional" in a proportion like x : b = a : 1?',
    options: [
      'The fourth number in a sequence',
      'The unknown quantity that completes the proportion (here x = ab)',
      'The fourth power of a number',
      'The fourth side of a quadrilateral',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'The fourth proportional is the quantity that completes a proportion when three quantities are given. In x : b = a : 1, the fourth proportional is x = ab, found using similar triangles.',
  },
];
