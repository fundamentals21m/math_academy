import type { QuizQuestion } from './types';

export const section09Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition I.9 construct?',
    options: [
      'A perpendicular to a line',
      'A line parallel to another',
      'The bisector of a rectilineal angle',
      'An angle equal to a given angle',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'I.9: "To bisect a given rectilineal angle."',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What shape does the construction in I.9 use?',
    options: [
      'An equilateral triangle',
      'A square',
      'A circle only',
      'A rectangle'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The construction uses I.1 to create an equilateral triangle, then uses the properties of isosceles triangles.',
  },
];
