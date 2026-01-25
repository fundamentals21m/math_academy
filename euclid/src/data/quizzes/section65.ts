import type { QuizQuestion } from './types';

export const section65Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition III.1 show how to find?',
    options: [
      'The circumference of a circle',
      'The area of a circle',
      'The center of a given circle',
      'The diameter of a circle',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'III.1 provides a construction for finding the center of any given circle.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In the construction for finding the center, what is drawn first?',
    options: [
      'A radius',
      'Any chord AB',
      'A diameter',
      'A tangent line',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The construction begins by drawing any chord AB, then bisecting it with a perpendicular.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why does bisecting the chord perpendicular give the center?',
    options: [
      'Because the perpendicular bisector of any chord passes through the center',
      'Because chords are always diameters',
      'Because all perpendiculars meet at the center',
      'Because AB is the longest chord',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By III.3, a line from the center perpendicular to a chord bisects it. Conversely, the perpendicular bisector of a chord passes through the center.',
  },
];
