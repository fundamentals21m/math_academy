import type { QuizQuestion } from './types';

export const section84Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition III.20 relates which two types of angles?',
    options: [
      'Adjacent angles',
      'Central angle and inscribed angle on the same arc',
      'Vertical angles',
      'Complementary angles',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'III.20 proves the central angle is double the inscribed angle when both subtend the same arc.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If an inscribed angle is 35°, the central angle on the same arc is:',
    options: [
      '17.5°',
      '35°',
      '70°',
      '105°',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The central angle is double the inscribed angle: 2 × 35° = 70°.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'An inscribed angle has its vertex:',
    options: [
      'At the center of the circle',
      'Outside the circle',
      'On a chord',
      'On the circumference of the circle',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'An inscribed angle has its vertex on the circle\'s circumference and its sides are chords.',
  },
];
