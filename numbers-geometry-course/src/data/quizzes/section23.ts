import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 23: The Euclidean Plane
 */
export const section23Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the Euclidean plane defined as?',
    options: [
      'The Cartesian product $\\mathbb{R} \\times \\mathbb{R}$ with Euclidean distance',
      'The set of all real numbers',
      'The set of all rational points',
      'The set of all integers',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'The Euclidean plane is defined as the Cartesian product ℝ × ℝ (ordered pairs of real numbers) together with the Euclidean distance formula based on the Pythagorean theorem.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the Euclidean distance between $(x_1, y_1)$ and $(x_2, y_2)$?',
    options: [
      '$\\sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'The Euclidean distance formula is the square root of the sum of the squared differences in coordinates. This comes from the Pythagorean theorem.',
  },
      '$|x_2 - x_1| + |y_2 - y_1|
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'The Euclidean distance formula is the square root of the sum of the squared differences in coordinates. This comes from the Pythagorean theorem.',
  },
      '$\\max(|x_2 - x_1|, |y_2 - y_1|)
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'The Euclidean distance formula is the square root of the sum of the squared differences in coordinates. This comes from the Pythagorean theorem.',
  },
      '$(x_2 - x_1)^2 + (y_2 - y_1)^2
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'The Euclidean distance formula is the square root of the sum of the squared differences in coordinates. This comes from the Pythagorean theorem.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'The Euclidean distance formula is the square root of the sum of the squared differences in coordinates. This comes from the Pythagorean theorem.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why is the Pythagorean theorem true "by definition" in the Euclidean plane?',
    options: [
      'Euclid proved it',
      'It is an axiom',
      'It was discovered by Descartes',
      'The distance formula is based on it',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'The distance formula d(P₁, P₂) = √[(x₂-x₁)² + (y₂-y₁)²] is precisely the Pythagorean theorem applied to the right triangle with legs (x₂-x₁) and (y₂-y₁). So the theorem is true by definition.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The set of points equidistant from two distinct points forms:',
    options: [
      'A circle',
      'A line',
      'A point',
      'A parabola',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'The set of all points equidistant from two distinct points P and Q is a line—specifically, the perpendicular bisector of the segment PQ.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is an isometry?',
    options: [
      'A function that doubles all distances',
      'A function that rotates angles',
      'A function that preserves distances',
      'A function that maps lines to circles',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'An isometry is a function f such that d(f(P₁), f(P₂)) = d(P₁, P₂) for any two points. The word comes from Greek meaning "same distance."',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Reflection in the y-axis sends $(x, y)$ to:',
    options: [
      '$(x, -y)
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Reflection in the y-axis (the line x = 0) sends each point (x, y) to its mirror image (−x, y). The y-coordinate stays the same while x changes sign.',
  },
      '$(-x, -y)
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Reflection in the y-axis (the line x = 0) sends each point (x, y) to its mirror image (−x, y). The y-coordinate stays the same while x changes sign.',
  },
      '$(-x, y)
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Reflection in the y-axis (the line x = 0) sends each point (x, y) to its mirror image (−x, y). The y-coordinate stays the same while x changes sign.',
  },
      '$(y, x)
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Reflection in the y-axis (the line x = 0) sends each point (x, y) to its mirror image (−x, y). The y-coordinate stays the same while x changes sign.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Reflection in the y-axis (the line x = 0) sends each point (x, y) to its mirror image (−x, y). The y-coordinate stays the same while x changes sign.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'To prove the base angles of an isosceles triangle are equal, we can:',
    options: [
      'Use the quadratic formula',
      'Compute the area',
      'Use polar coordinates',
      'Reflect the triangle in its axis of symmetry',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'By placing the isosceles triangle symmetrically about the y-axis and reflecting, the triangle maps onto itself. The angle at one base vertex maps to the angle at the other, proving equality.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'Each point of the plane is determined by its distances from how many non-collinear points?',
    options: [
      'One',
      'Three',
      'Two',
      'Four',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Each point is uniquely determined by its distances from three points not in a line. With fewer points, there would be multiple candidates; with three non-collinear points, there is exactly one.',
  },
];
