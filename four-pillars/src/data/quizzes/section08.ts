import type { QuizQuestion } from './types';

export const section08Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Euclid\'s approach to area is to work with:',
    options: [
      'Numerical measurements',
      'Equality of areas (without numbers)',
      'Calculus integrals',
      'Coordinate formulas'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Euclid proves figures "equal" by cutting and rearranging, not by assigning numerical values.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Common Notion 2 states: "If equals are added to equals, the wholes are:"',
    options: [
      'Unrelated',
      'Doubled',
      'Equal',
      'Proportional'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'This allows algebraic reasoning about areas: A = B and C = D implies A + C = B + D.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The geometric proof of $(a+b)^2 = a^2 + 2ab + b^2$ involves:',
    options: [
      'A circle divided into sectors',
      'A triangle with altitude',
      'Parallel lines',
      'A square divided into four regions'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A square of side a+b is divided into: one a² square, two ab rectangles, and one b² square.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The difference of squares $a^2 - b^2$ equals a rectangle of dimensions:',
    options: [
      '(a+b) and (a-b)',
      'a and b',
      '2a and b',
      'a² and b²'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The L-shaped gnomon (a² minus b²) rearranges into a rectangle (a+b) by (a-b).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Book II of the Elements is called "geometric algebra" because it:',
    options: [
      'Uses coordinates',
      'Proves algebraic identities using geometric constructions',
      'Introduces variables',
      'Solves equations numerically'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Identities like (a+b)² = a² + 2ab + b² are proved by area arguments, not symbols.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Euclid\'s area theory avoids conceptual difficulties with:',
    options: [
      'Parallel lines',
      'Angles',
      'Real numbers and irrational lengths',
      'Congruence'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'By not using numbers, Euclid sidesteps problems with irrationals that weren\'t resolved until the 1800s.',
  },
];
