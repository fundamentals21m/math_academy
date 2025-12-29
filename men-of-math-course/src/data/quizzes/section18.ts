import type { QuizQuestion } from './types';

export const section18Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Lobachevsky is famous for developing:',
    options: [
      'Euclidean geometry',
      'Non-Euclidean geometry',
      'Coordinate geometry',
      'Projective geometry'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Lobachevsky independently developed hyperbolic (non-Euclidean) geometry.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In Lobachevsky\'s geometry, through a point not on a line, how many parallel lines exist?',
    options: [
      'None',
      'Exactly one',
      'Infinitely many',
      'Exactly two'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'In hyperbolic geometry, infinitely many lines through a point are parallel to a given line.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which postulate of Euclid did Lobachevsky replace?',
    options: [
      'The first postulate',
      'The second postulate',
      'The fourth postulate',
      'The fifth (parallel) postulate'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Lobachevsky replaced Euclid\'s fifth postulate about parallel lines.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In hyperbolic geometry, the sum of angles in a triangle is:',
    options: [
      'More than 180°',
      'Exactly 180°',
      'Less than 180°',
      'Always 60° per angle'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'In hyperbolic geometry, triangle angle sums are always less than 180°.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Who independently discovered similar non-Euclidean geometry around the same time?',
    options: [
      'Gauss only',
      'János Bolyai',
      'Riemann only',
      'Cauchy'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'János Bolyai independently developed hyperbolic geometry around the same time as Lobachevsky.',
  },
  {
    id: 6,
    type: 'text',
    question: 'What type of non-Euclidean geometry did Lobachevsky develop (where parallel lines diverge)?',
    correctAnswer: 'hyperbolic',
    difficulty: 'medium',
    explanation: 'Lobachevsky developed hyperbolic geometry, where parallel lines diverge.',
  },
];
