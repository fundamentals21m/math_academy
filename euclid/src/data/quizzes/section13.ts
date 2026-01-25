import type { QuizQuestion } from './types';

export const section13Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition I.13 prove about angles on a straight line?',
    options: [
      'They are always acute',
      'They are always equal',
      'Adjacent angles formed equal two right angles (are supplementary)',
      'They form a right angle',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'I.13: If a straight line standing on another makes angles, they are either two right angles or together equal to two right angles.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the modern term for the relationship in I.13?',
    options: [
      'Supplementary angles',
      'Complementary angles',
      'Vertical angles',
      'Corresponding angles',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Angles that sum to two right angles (180°) are called supplementary angles.',
  },
];
