import type { QuizQuestion } from './types';

export const section95Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition III.31 is one of the most famous theorems in geometry. What does it state?',
    options: [
      'An angle in a semicircle is a right angle',
      'The Pythagorean theorem',
      'Inscribed angles are equal',
      'Tangent lines are perpendicular to radii',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'III.31 proves that any angle inscribed in a semicircle is a right angle. This is known as Thales\' theorem.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If AB is a diameter and C is any point on the circle (not A or B), then ∠ACB is:',
    options: [
      '60°',
      '120°',
      '90°',
      'Depends on where C is',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'By III.31 (Thales\' theorem), the angle inscribed in a semicircle is always 90°, regardless of where C is on the semicircle.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Thales\' theorem follows from III.20 because the central angle for a semicircle is:',
    options: [
      '90°',
      '360°',
      '270°',
      '180°',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The central angle subtending a semicircle is 180° (a straight angle). By III.20, the inscribed angle is half of this: 90°.',
  },
];
