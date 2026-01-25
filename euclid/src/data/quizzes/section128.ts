import type { QuizQuestion } from './types';

export const section128Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does V.9 prove (converse of V.7)?',
    options: [
      'Equal ratios imply equal magnitudes is false',
      'Ratios are always equal',
      'If A:C = B:C, then A = B',
      'Magnitudes cannot be compared via ratios',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'V.9 proves the converse of V.7: if two magnitudes have the same ratio to a common reference, they must be equal.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How is V.9 typically proved?',
    options: [
      'By direct calculation',
      'By construction',
      'By induction',
      'By contradiction using V.8 (if A ≠ B, V.8 would give unequal ratios)',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'V.9 is proved by contradiction: if A ≠ B (say A > B), then V.8 implies A:C > B:C, contradicting A:C = B:C.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'V.7 and V.9 together establish:',
    options: [
      'A = B if and only if A:C = B:C (for any reference C)',
      'That ratios are meaningless',
      'That all magnitudes are equal',
      'That ratios only work for numbers',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'V.7 (→) and V.9 (←) together give: A = B ⟺ A:C = B:C, showing equality of magnitudes corresponds exactly to equality of ratios.',
  },
];
