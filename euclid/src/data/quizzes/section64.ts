import type { QuizQuestion } from './types';

export const section64Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Book III of the Elements primarily study?',
    options: [
      'Triangles and their properties',
      'Solid geometry',
      'Theory of proportions',
      'Circles and their properties',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Book III is devoted to the study of circles, including tangent lines, chords, arcs, and inscribed angles.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'According to Euclid, when does a straight line "touch" a circle?',
    options: [
      'When it passes through the center',
      'When it meets the circle at exactly one point and does not cut it',
      'When it intersects the circle at two points',
      'When it lies entirely inside the circle',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A tangent line touches the circle at exactly one point without cutting (crossing) it.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the difference between a segment of a circle and a sector of a circle?',
    options: [
      'They are the same thing',
      'A sector is larger than a segment',
      'A segment is bounded by a chord and arc; a sector is bounded by two radii and an arc',
      'A segment includes the center; a sector does not',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A segment is cut off by a chord (like a pizza slice without going to the center), while a sector is bounded by two radii from the center (like a pizza slice from the center).',
  },
];
