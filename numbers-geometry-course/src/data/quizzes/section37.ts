import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 37: Angle Measure
 */
export const section37Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Why did Euclid avoid measuring angles with numbers?',
    options: [
      'He did not know about numbers',
      'Angle measure is a deep concept beyond traditional geometry',
      'The Greeks only worked with integers',
      'Angles cannot be measured',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Euclid compared angles but never assigned numbers to them. This suggests angle measure is a deeper concept than traditional geometric methods can handle directly.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How is the measure of an angle defined in this approach?',
    options: [
      'As the area of a triangle',
      'As the arc length on a unit circle',
      'As the number of degrees',
      'As the ratio of two sides',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'We define angle measure as the length of the arc cut off on a unit circle centered at the vertex of the angle.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'How is arc length formally defined?',
    options: [
      'As the product of radius and angle',
      'As the least upper bound of inscribed polygon lengths',
      'As twice the chord length',
      'As the perimeter divided by 2π',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Arc length is defined as the least upper bound (supremum) of the lengths of polygons inscribed in the arc, using the completeness of real numbers.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the definition of π in this approach?',
    options: [
      'The ratio of circumference to diameter',
      'The length of a semicircle of radius 1',
      'The area of a unit circle',
      'All of the above are equivalent',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'π can be defined as the length of a semicircle of radius 1, or equivalently as half the circumference, or as the area of the unit circle. All these definitions give the same value.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What did Archimedes prove about π using 96-sided polygons?',
    options: [
      'π = 3',
      'π = 22/7 exactly',
      '3 + 10/71 < π < 3 + 1/7',
      'π is irrational',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'Archimedes used inner and outer 96-sided polygons to prove 3 + 10/71 < π < 3 + 1/7, giving approximately 3.140 < π < 3.143.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'How many radians are in a full circle?',
    correctAnswer: 6.28,
    numericRange: { min: 6.25, max: 6.32, precision: 2 },
    difficulty: 'easy',
    explanation:
      'A full circle equals 2π radians, which is approximately 6.28 radians.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Why is arc length additive?',
    options: [
      'Because angles are defined that way',
      'Because of the least upper bound property',
      'Because the circle is round',
      'It is not actually additive',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Arc length is additive because of how the least upper bound works: polygons in adjacent arcs can be combined into a polygon in the union, and vice versa.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question:
      'What problem shows that the ancient Greeks understood the depth of angle measure?',
    options: [
      'Trisecting the angle',
      'Squaring the circle',
      'Duplicating the cube',
      'The parallel postulate',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Squaring the circle requires constructing π, which is the natural measure of a straight angle. The Greeks\' failure to solve this problem hints at the transcendental nature of angle measure.',
  },
];
