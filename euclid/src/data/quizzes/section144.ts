import type { QuizQuestion } from './types';

export const section144Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does V.25 prove about proportional magnitudes?',
    options: [
      'If A:B = C:D with A greatest and D least, then A + D > B + C',
      'All proportional magnitudes are equal',
      'The means exceed the extremes',
      'Proportions have no order',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'V.25 shows that in a proportion, the sum of the extremes (greatest + least) exceeds the sum of the means.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If 12:8 = 6:4 (with 12 greatest, 4 least), V.25 says:',
    options: [
      '12 + 4 < 8 + 6',
      '12 + 4 = 8 + 6',
      '12 + 4 > 8 + 6',
      'We cannot compare',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Extremes: 12 + 4 = 16. Means: 8 + 6 = 14. Indeed, 16 > 14.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'V.25 concludes Book V by showing:',
    options: [
      'Proportions are meaningless',
      'All of Book V was unnecessary',
      'Only integers can be proportional',
      'The theory of ratios connects to inequalities and has rich structural properties',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'V.25 demonstrates that proportions interact with inequalities in meaningful ways, showing the depth of Eudoxus\'s theory.',
  },
];
