import type { QuizQuestion } from './types';

export const section94Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition III.30 is a construction. What does it construct?',
    options: [
      'A tangent to a circle',
      'A point bisecting a given arc',
      'The center of a circle',
      'A chord of given length',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'III.30 shows how to bisect (cut in half) a given arc of a circle.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The construction for bisecting an arc involves bisecting:',
    options: [
      'The central angle',
      'The inscribed angle',
      'The radius',
      'The chord'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'To bisect the arc, bisect its chord perpendicularly. The perpendicular bisector passes through the center and hits the arc at its midpoint.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The perpendicular bisector of a chord intersects the arc at:',
    options: [
      'The point that bisects the arc',
      'The center of the circle',
      'Both (b) and (c)',
      'Two points equidistant from the chord endpoints',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The perpendicular bisector of a chord passes through the center (III.1) and hits the arc at its midpoint.',
  },
];
