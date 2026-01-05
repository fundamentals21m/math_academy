import type { QuizQuestion } from './types';

export const section134Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does V.15 prove about ratios and scaling?',
    options: [
      'Scaling changes ratios',
      'A:B = mA:mB for any positive integer m',
      'Only certain scales preserve ratios',
      'Ratios cannot be scaled'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'V.15 shows ratios are scale-invariant: multiplying both terms by the same factor does not change the ratio.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'V.15 means we can "simplify" ratios by:',
    options: [
      'Adding to both terms',
      'Dividing both terms by the same factor (canceling common factors)',
      'Subtracting from both terms',
      'Ratios cannot be simplified'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Since A:B = mA:mB, reversing this gives mA:mB = A:B. Common factors can be canceled.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which ratios are all equal by V.15?',
    options: [
      '2:3, 4:5, 6:7',
      '2:3, 4:6, 6:9',
      '2:3, 3:4, 4:5',
      '1:2, 2:3, 3:4'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '2:3 = 4:6 = 6:9 because 4:6 = 2(2:3) and 6:9 = 3(2:3). All are the same ratio scaled.',
  },
];
