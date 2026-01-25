import type { QuizQuestion } from './types';

export const section136Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does "separando" (V.17) do to a componendo proportion?',
    options: [
      'Makes it larger',
      'Adds the terms',
      'Multiplies the terms',
      'From (A+B):B = (C+D):D, it extracts A:B = C:D',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Separando extracts the "excess" ratio: from a proportion of wholes to parts, we get a proportion of remainders to parts.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If (8):3 = (12):? where 8 = 5+3 and 12 = C+4.5, and the proportion holds componendo, what is C by separando?',
    options: [
      '4.5',
      '6',
      '7.5',
      '9',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'If (5+3):3 = (C+4.5):4.5, then 8:3 = (C+4.5):4.5. Cross-multiplying: 8×4.5 = 3(C+4.5), so 36 = 3C + 13.5, C = 7.5.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Separando is the inverse operation of:',
    options: [
      'Alternando',
      'Componendo',
      'Convertendo',
      'Ex aequali',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'V.17 (separando) and V.18 (componendo) are inverses: componendo adds, separando subtracts.',
  },
];
