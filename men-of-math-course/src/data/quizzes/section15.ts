import type { QuizQuestion } from './types';

export const section15Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Jean-Victor Poncelet made major contributions to which branch of geometry?',
    options: [
      'Projective geometry',
      'Euclidean geometry',
      'Differential geometry',
      'Coordinate geometry'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Poncelet is considered one of the founders of modern projective geometry.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Poncelet developed much of his geometry while:',
    options: [
      'Teaching at the Sorbonne',
      'A prisoner of war in Russia',
      'Working as an engineer in Paris',
      'Studying under Monge'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Poncelet was captured during Napoleon\'s Russian campaign and developed projective geometry while imprisoned.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In projective geometry, parallel lines:',
    options: [
      'Never meet',
      'Are always perpendicular',
      'Meet at a point at infinity',
      'Do not exist'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Projective geometry adds "points at infinity" where parallel lines meet, eliminating the special case of parallelism.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Poncelet\'s closure theorem deals with:',
    options: [
      'Closed curves',
      'Integration methods',
      'Solid geometry',
      'Polygons inscribed in conics'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Poncelet\'s closure theorem describes when a sequence of tangent lines to a conic inscribed in another conic closes up.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The principle of duality in projective geometry states that:',
    options: [
      'Every theorem has a dual theorem with points and lines interchanged',
      'Every construction can be done in two ways',
      'Parallel lines have dual perpendicular lines',
      'Every curve has a dual curve'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Duality means every projective theorem has a dual with "point" and "line" swapped throughout.',
  },
  {
    id: 6,
    type: 'text',
    question: 'What is the name of the geometry that studies properties preserved under projection?',
    correctAnswer: 'projective',
    difficulty: 'easy',
    explanation: 'Projective geometry studies properties that remain invariant under central projection.',
  },
];
