import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 13: Angles and Circles
 */
export const section13Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'An isosceles triangle is one with:',
    options: [
      'All sides different',
      'Two equal sides',
      'All sides equal',
      'All angles equal to 60°',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'An isosceles triangle has two equal sides. The word comes from Greek meaning "equal legs."',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What property do the base angles of an isosceles triangle have?',
    options: [
      'They are right angles',
      'They are equal',
      'They sum to 90°',
      'One is twice the other',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'The base angles of an isosceles triangle (the angles opposite the equal sides) are equal to each other.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Who found the most elegant proof that the base angles of an isosceles triangle are equal?',
    options: [
      'Euclid',
      'Pythagoras',
      'Pappus',
      'Thales',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Pappus (around 300 AD) gave the elegant proof: flip the triangle over and it fills the same space, so the base angles must be equal.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The inscribed angle theorem states that an arc subtends at the center:',
    options: [
      'The same angle as at the circumference',
      'Half the angle at the circumference',
      'Twice the angle at the circumference',
      'A right angle',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The inscribed angle theorem states that an arc subtends twice the angle at the center as it does at the circumference.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'According to Thales\' theorem, an angle inscribed in a semicircle is:',
    options: [
      '45°',
      '60°',
      '90°',
      '180°',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'When the arc is a semicircle (180° at center), the inscribed angle is half of that: 90° (a right angle). This is Thales\' theorem.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Which is NOT a valid triangle congruence criterion?',
    options: [
      'Side-Angle-Side (SAS)',
      'Angle-Side-Angle (ASA)',
      'Side-Side-Side (SSS)',
      'Angle-Angle-Angle (AAA)',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'AAA (three equal angles) does not guarantee congruence—the triangles could be similar but different sizes. SAS, ASA, and SSS are valid criteria.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'A chord of a circle viewed from any point on the same arc appears:',
    options: [
      'To have different sizes',
      'To have the same size (same inscribed angle)',
      'To be invisible',
      'To be perpendicular to the radius',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Since the inscribed angle is half the central angle, and the central angle is constant for a given arc, the inscribed angle is constant. The chord looks the same size from any point on the arc.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'The inscribed angle theorem relies on which property of isosceles triangles?',
    options: [
      'The sides are all equal',
      'The base angles are equal',
      'The area is half base times height',
      'The perimeter is finite',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'The proof uses that radii are equal, making triangles isosceles. The equal base angles in these isosceles triangles lead to the angle relationship.',
  },
];
