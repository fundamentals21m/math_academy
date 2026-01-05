import type { QuizQuestion } from './types';

export const section143Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does V.24 prove about adding proportional magnitudes?',
    options: [
      'Proportional magnitudes cannot be added',
      'If A:B = C:D and E:B = F:D, then (A+E):B = (C+F):D',
      'Adding destroys proportions',
      'Only equal magnitudes can be added'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'V.24 shows that ratios with a common consequent can be added: the sum of antecedents has the expected ratio.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'V.24 is analogous to which fraction operation?',
    options: [
      'Multiplication',
      'Division',
      'Addition with common denominator: a/c + b/c = (a+b)/c',
      'Subtraction'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Just as fractions with common denominators add by adding numerators, V.24 adds ratios with common consequents.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If 2:5 = 4:10 and 3:5 = 6:10, what does V.24 give?',
    options: [
      '5:5 = 10:10',
      '(2+3):5 = (4+6):10, i.e., 5:5 = 10:10',
      '6:10 = 12:20',
      'Nothing, V.24 does not apply'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By V.24, (2+3):5 = (4+6):10, so 5:5 = 10:10 (both equal 1:1).',
  },
];
