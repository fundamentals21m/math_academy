import type { QuizQuestion } from './types';

export const section102Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the main topic of Book IV of the Elements?',
    options: [
      'Inscribed and circumscribed figures',
      'Theory of proportions',
      'Number theory',
      'Solid geometry',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Book IV focuses on inscribing and circumscribing rectilineal figures (triangles, squares, pentagons, hexagons) in and about circles.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'According to Euclid, when is a figure "inscribed in a circle"?',
    options: [
      'When all its sides touch the circle',
      'When all its angles lie on the circumference',
      'When it fits entirely inside the circle',
      'When its center coincides with the circle\\'s center',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A rectilineal figure is inscribed in a circle when each angle of the figure lies on the circumference of the circle.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the difference between a circle inscribed in a figure and a circle circumscribed about a figure?',
    options: [
      'They are the same thing',
      'Inscribed: circle is larger; Circumscribed: circle is smaller',
      'Inscribed: circle touches all sides; Circumscribed: circle passes through all vertices',
      'Inscribed: circle is outside; Circumscribed: circle is inside',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'An inscribed circle (incircle) touches all sides of the figure; a circumscribed circle (circumcircle) passes through all vertices.',
  },
];
