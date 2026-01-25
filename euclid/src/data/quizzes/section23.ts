import type { QuizQuestion } from './types';

export const section23Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition I.23 construct?',
    options: [
      'A perpendicular to a line',
      'An angle equal to a given angle at a given point on a line',
      'A line parallel to another',
      'A bisector of an angle',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'I.23: "On a given straight line and at a point on it to construct a rectilineal angle equal to a given rectilineal angle."',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which propositions does I.23 use?',
    options: [
      'I.4 and I.9',
      'I.1 and I.3',
      'I.8 and I.22',
      'I.11 and I.12',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'I.23 uses I.22 (construct triangle from three sides) and I.8 (SSS congruence) to copy an angle.',
  },
];
