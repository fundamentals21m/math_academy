import type { QuizQuestion } from './types';

export const section11Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition I.11 construct?',
    options: [
      'An angle bisector',
      'An equilateral triangle',
      'A line perpendicular to a given line from a point on it',
      'A parallel line',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'I.11: "To draw a straight line at right angles to a given straight line from a given point on it."',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How does I.11 differ from I.12?',
    options: [
      'I.11 starts from a point ON the line, I.12 from a point NOT on the line',
      'I.11 is for acute angles, I.12 for obtuse',
      'They are the same construction',
      'I.11 uses circles, I.12 uses triangles'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'I.11 draws a perpendicular from a point on the line; I.12 from a point not on the line.',
  },
];
