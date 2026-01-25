import type { QuizQuestion } from './types';

export const section69Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition III.5 prove about two intersecting circles?',
    options: [
      'They intersect at exactly two points',
      'Their radii are equal',
      'They cannot have the same center',
      'They share a common tangent',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'III.5 proves that if two circles cut (intersect) each other, they cannot have the same center.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why can\'t two intersecting circles share the same center?',
    options: [
      'Because distances from that center to the circles would be unequal at intersection points',
      'Because they would be parallel',
      'Because the center must be inside both circles',
      'Because one circle would be inside the other'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'At an intersection point C, both circles pass through C. If they had the same center, the distance from center to C would be both radii, but intersecting circles have different radii at intersection points.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Circles with the same center are called:',
    options: [
      'Congruent circles',
      'Concentric circles',
      'Similar circles',
      'Tangent circles'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Circles sharing the same center are called concentric circles. They cannot intersect.',
  },
];
