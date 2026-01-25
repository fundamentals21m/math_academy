import type { QuizQuestion } from './types';

export const section127Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does V.8 prove about unequal magnitudes and ratios?',
    options: [
      'Unequal magnitudes cannot be compared',
      'If A > B, then A:C > B:C and C:B > C:A',
      'Larger magnitudes give smaller ratios',
      'Ratios are unaffected by magnitude size',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'V.8 establishes monotonicity: larger magnitudes give larger ratios (as numerators) and the same reference has a larger ratio to smaller magnitudes.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why is V.8 called a "monotonicity" result?',
    options: [
      'Ratios change in the same direction as the magnitudes (larger gives larger)',
      'It involves one tone',
      'It only works for monotone functions',
      'The proof is monotonous',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Monotonicity means the ordering is preserved: as magnitudes increase, so do their ratios to a fixed reference.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If A > B, what can we conclude about A:10 compared to B:10?',
    options: [
      'A:10 < B:10',
      'A:10 = B:10',
      'We cannot compare them',
      'A:10 > B:10',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'By V.8, if A > B, then A:C > B:C for any C. So A:10 > B:10.',
  },
];
