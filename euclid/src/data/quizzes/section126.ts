import type { QuizQuestion } from './types';

export const section126Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does V.7 establish about equal magnitudes and ratios?',
    options: [
      'Equal magnitudes have no ratio',
      'If A = B, then A:C = B:C and C:A = C:B for any magnitude C',
      'Equal magnitudes must have equal ratios to each other',
      'Ratios only work for unequal magnitudes'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'V.7 shows equal magnitudes can be freely substituted in ratios—they have the same ratio to any common reference.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'V.7 is analogous to which algebraic principle?',
    options: [
      'The distributive property',
      'The substitution principle: if a = b, then a can replace b in any expression',
      'The commutative property',
      'The zero property'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'V.7 is like substitution: equal magnitudes give equal ratios when compared to the same reference.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which proposition proves the converse of V.7?',
    options: [
      'V.6',
      'V.8',
      'V.9',
      'V.10'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'V.9 proves the converse: if A:C = B:C (or C:A = C:B), then A = B.',
  },
];
