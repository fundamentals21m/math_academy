import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 19: Lines and Circles
 */
export const section19Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Who introduced coordinates in his Geometry of 1637?',
    options: [
      'Descartes',
      'Euclid',
      'Fermat',
      'Pythagoras',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'Descartes introduced coordinates in his Geometry of 1637. Fermat independently discovered the same idea in 1629 but did not publish at the time.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What are the coordinates of the origin?',
    options: [
      '(1, 1)',
      '(0, 0)',
      '(0, 1)',
      '(1, 0)',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'The origin O has coordinates (0, 0), as it lies at the intersection of the perpendicular axes.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The equation $y = mx$ represents:',
    options: [
      'A straight line through the origin',
      'A circle centered at the origin',
      'A parabola',
      'An ellipse',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'The equation y = mx represents a straight line through the origin, where m is the slope (ratio y/x).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why are equations of the form $ax + by = c$ called "linear"?',
    options: [
      'They were invented by a mathematician named Linear',
      'They describe straight lines',
      'They have only one solution',
      'The coefficients are integers',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Equations ax + by = c are called linear because they describe straight lines. The name comes from "line."',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question:
      'The equation of a circle with center at the origin and radius $r$ is:',
    options: [
      '$x + y = r
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'By the Pythagorean theorem, a point (x, y) is at distance r from the origin when x² + y² = r².',
  },
      '$x^2 + y^2 = r^2
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'By the Pythagorean theorem, a point (x, y) is at distance r from the origin when x² + y² = r².',
  },
      '$x^2 + y^2 = r
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'By the Pythagorean theorem, a point (x, y) is at distance r from the origin when x² + y² = r².',
  },
      '$(x - r)^2 + (y - r)^2 = 1
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'By the Pythagorean theorem, a point (x, y) is at distance r from the origin when x² + y² = r².',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'By the Pythagorean theorem, a point (x, y) is at distance r from the origin when x² + y² = r².',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question:
      'What theorem is used to derive the equation of a circle from coordinates?',
    options: [
      'The parallel axiom',
      'Thales\\\\' theorem',
      'The fundamental theorem of arithmetic',
      'The Pythagorean theorem',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'The Pythagorean theorem tells us that a point at distance r from the origin satisfies x² + y² = r², since r is the hypotenuse of a right triangle with sides x and y.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question:
      'In analytic geometry, how are points, lines, and circles typically found?',
    options: [
      'By ruler and compass construction',
      'By physical measurement',
      'By solving equations',
      'By trial and error',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      "Analytic geometry finds geometric objects by solving equations, unlike synthetic geometry which uses ruler and compass constructions (Euclid's approach).",
  },
  {
    id: 8,
    type: 'numeric',
    question: 'In what year did Descartes publish his Geometry?',
    correctAnswer: 1637,
    numericRange: { min: 1600, max: 1700, precision: 0 },
    difficulty: 'medium',
    explanation:
      'Descartes published his Geometry in 1637, introducing the coordinate system that now bears his name (Cartesian coordinates).',
  },
];
