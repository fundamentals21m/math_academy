import type { QuizQuestion } from './types';

export const section15Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition I.15 prove about intersecting lines?',
    options: [
      'They form right angles',
      'Vertical (opposite) angles are equal',
      'Adjacent angles are equal',
      'All four angles are equal',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'I.15: "If two straight lines cut one another, they make the vertical angles equal to one another."',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which proposition does I.15 use in its proof?',
    options: [
      'I.14',
      'I.12',
      'I.13',
      'I.11',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The proof uses I.13 (supplementary angles) twice: each vertical angle is supplementary to the same adjacent angle.',
  },
];
