import type { QuizQuestion } from './types';

export const section110Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In IV.8, what is the key step to inscribe a circle in a square?',
    options: [
      'Draw the diagonals',
      'Bisect two adjacent sides and draw perpendiculars',
      'Draw angle bisectors',
      'Construct an auxiliary triangle'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Bisecting adjacent sides and drawing lines through these midpoints parallel to the sides locates the center of the inscribed circle.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If a square has side length s, what is the radius of its inscribed circle?',
    options: [
      's',
      's/2',
      's√2',
      's/√2'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The inscribed circle\'s radius equals half the side length (s/2) because the circle touches the midpoints of the sides.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In IV.8, the center of the inscribed circle is also what special point of the square?',
    options: [
      'A vertex',
      'The midpoint of a side',
      'The intersection of the diagonals',
      'An exterior point'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The center of the inscribed circle coincides with the center of the square, which is where the diagonals intersect.',
  },
];
