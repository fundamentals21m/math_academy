import type { QuizQuestion } from './types';

export const section50Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What algebraic property does Proposition II.1 prove geometrically?',
    options: [
      'Commutative property',
      'Distributive property',
      'Associative property',
      'Identity property'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'II.1 proves the distributive law: a(b + c + d) = ab + ac + ad, showing that a rectangle equals the sum of smaller rectangles.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In II.1, if line BC is cut into segments BD, DE, and EC, what equals the rectangle A × BC?',
    options: [
      'The square on A',
      'The rectangle BD × EC',
      'The triangle ABD',
      'The sum of rectangles A×BD, A×DE, and A×EC',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The rectangle contained by A and BC equals the sum of the rectangles contained by A and each segment.',
  },
];
