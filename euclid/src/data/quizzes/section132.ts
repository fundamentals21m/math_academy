import type { QuizQuestion } from './types';

export const section132Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does V.13 prove about substituting equal ratios in inequalities?',
    options: [
      'Equal ratios cannot be substituted',
      'If A:B = C:D and C:D > E:F, then A:B > E:F',
      'Inequalities destroy proportions',
      'Only equalities can be substituted'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'V.13 shows that equal ratios can be substituted in ratio inequalities, preserving the inequality.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'V.13 can be stated as a logical rule:',
    options: [
      'If X = Y, then X < Y',
      'If X = Y and Y > Z, then X > Z',
      'If X > Y, then X = Y',
      'Ratios cannot be compared'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'V.13 is the substitution rule for ratio inequalities: equal ratios can replace each other in comparisons.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why is V.13 useful for chaining ratio relationships?',
    options: [
      'It is not useful',
      'It allows us to combine equalities and inequalities to derive new inequalities',
      'It proves all ratios are equal',
      'It only works for whole numbers'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'V.13 lets us build chains mixing equalities and inequalities, concluding relationships between the first and last ratios.',
  },
];
