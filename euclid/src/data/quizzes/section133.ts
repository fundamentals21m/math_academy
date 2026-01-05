import type { QuizQuestion } from './types';

export const section133Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does V.14 prove about proportional magnitudes and their comparison?',
    options: [
      'Proportional magnitudes cannot be compared',
      'If A:B = C:D, then A > C implies B > D (and similarly for = and <)',
      'The first magnitude is always greater',
      'Proportions only work for equal magnitudes'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'V.14 shows that in a proportion, comparing the antecedents determines the comparison of the consequents.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Intuitively, V.14 says that if A:B = C:D and A > C, then B > D because:',
    options: [
      'Larger inputs with the same ratio must come from larger outputs',
      'The ratio forces equality',
      'B is always larger than D',
      'This is false'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'If A and C are "stretched" by the same ratio from B and D respectively, then A being larger than C implies B is larger than D.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If 12:B = 8:D and we know B = 6, what can we conclude about D using V.14?',
    options: [
      'D > 6',
      'D = 6',
      'D < 6',
      'We cannot determine D'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Since 12:B = 8:D and 12 > 8, by V.14, B > D. So D < B = 6.',
  },
];
