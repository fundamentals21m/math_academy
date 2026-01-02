import type { QuizQuestion } from './types';

export const section03Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition I.3 construct?',
    options: [
      'A line equal to another line',
      'A segment cut from a greater line equal to a lesser line',
      'A perpendicular to a line',
      'An angle equal to another angle'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'I.3: "Given two unequal straight lines, to cut off from the greater a straight line equal to the less."',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which proposition does I.3 use to transfer the length?',
    options: [
      'Proposition I.1',
      'Proposition I.2',
      'Postulate 3 directly',
      'Common Notion 1'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'I.3 uses I.2 to place a line equal to the lesser line at one endpoint of the greater line.',
  },
];
