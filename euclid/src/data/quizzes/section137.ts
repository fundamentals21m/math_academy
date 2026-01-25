import type { QuizQuestion } from './types';

export const section137Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What transformation does "componendo" (V.18) perform?',
    options: [
      'If A:B = C:D, then A:C = B:D',
      'If A:B = C:D, then (A+B):B = (C+D):D',
      'If A:B = C:D, then A:D = C:B',
      'If A:B = C:D, then A-B:B = C-D:D',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Componendo adds the consequent to the antecedent: from A:B = C:D, we get (A+B):B = (C+D):D.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If 2:3 = 4:6, what does componendo give?',
    options: [
      '2:5 = 4:10',
      '1:3 = 2:6',
      '5:3 = 10:6',
      '6:3 = 12:6',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Componendo: (2+3):3 = (4+6):6, so 5:3 = 10:6.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Componendo is useful when:',
    options: [
      'We know parts and need to form wholes',
      'We need to separate parts from wholes',
      'We need to alternate terms',
      'We need to invert ratios',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Componendo takes a ratio of parts and gives a ratio involving the sum (whole), useful when extending segments or combining figures.',
  },
];
