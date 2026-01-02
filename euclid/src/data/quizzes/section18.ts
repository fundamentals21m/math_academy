import type { QuizQuestion } from './types';

export const section18Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition I.18 prove?',
    options: [
      'Equal sides are opposite equal angles',
      'The greater side is opposite the greater angle',
      'The smaller side is opposite the greater angle',
      'All sides are equal in an equilateral triangle'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'I.18: "In any triangle the greater side subtends the greater angle."',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the relationship between I.18 and I.19?',
    options: [
      'They are unrelated',
      'I.19 is the converse of I.18',
      'I.19 is a special case of I.18',
      'They prove the same thing'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'I.19 is the converse: the greater angle is opposite the greater side.',
  },
];
