import type { QuizQuestion } from './types';

export const section63Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition II.14 accomplish?',
    options: [
      'Constructs a rectangle equal to a given square',
      'Divides a square into equal parts',
      'Constructs a circle equal to a given square',
      'Constructs a square equal to a given polygon',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'II.14 shows how to construct a square with the same area as any given rectilinear (polygonal) figure.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The first step in II.14 is to convert the polygon into:',
    options: [
      'A triangle',
      'A rectangle',
      'A circle',
      'A parallelogram',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'II.14 first uses I.45 to convert any polygon into a rectangle with the same area.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If a rectangle has sides a and b, II.14 constructs a square with side:',
    options: [
      '√(ab)',
      '(a + b) / 2',
      'ab',
      '(a + b)²',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The square has side √(ab), the geometric mean of a and b, since (√(ab))² = ab equals the rectangle\'s area.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The ancient problem of "squaring the circle" asks if a circle can be squared like a polygon. This was proved:',
    options: [
      'Possible by Euclid in Book IV',
      'Possible using only I.47',
      'Impossible in 1882 when π was shown to be transcendental',
      'Impossible by Euclid in Book XII',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Lindemann proved in 1882 that π is transcendental, making it impossible to square the circle with compass and straightedge.',
  },
];
