import type { QuizQuestion } from './types';

export const section14Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition I.14 is the converse of which proposition?',
    options: [
      'I.11',
      'I.13',
      'I.12',
      'I.15',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'I.14 is the converse of I.13: if angles on one side of a line sum to two right angles, the lines form a straight line.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does I.14 prove?',
    options: [
      'That if adjacent angles sum to 180°, the outer rays form a straight line',
      'That vertical angles are equal',
      'That parallel lines never meet',
      'That perpendicular lines exist',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'I.14: If adjacent angles sum to two right angles, the non-common sides form a straight line.',
  },
];
