import type { QuizQuestion } from './types';

export const section190Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition VII.11 establish about proportional numbers and their remainders?',
    options: [
      'Proportional numbers have equal remainders',
      'Remainders of division are always proportional',
      'If A:B = C:D and A > C, then (A-C):(B-D) = A:B',
      'Proportional numbers must be consecutive',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'VII.11 shows that in a proportion, if we subtract corresponding terms, the remainder maintains the same ratio as the original numbers.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If 15:20 = 9:12, what ratio do we get when we subtract 9 from 15 and 12 from 20?',
    options: [
      '24:32 (the sums instead)',
      '6:8 (which equals 15:20)',
      '6:12 (which equals 1:2)',
      '9:12 (the original subtracted terms)',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'By VII.11: (15-9):(20-12) = 6:8. Since 15:20 = 9:12 = 3:4, we have 6:8 = 3:4 as well. The proportion is preserved.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'VII.11 is closely related to which property of proportions from Book V?',
    options: [
      'Definition V.5 (equal ratios)',
      'Proposition V.17 (componendo)',
      'Proposition V.22 (ex aequali)',
      'Proposition V.19 (separando/dividendo)',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'VII.11 is the arithmetic version of separando (separation): from a:b = c:d, we get (a-c):(b-d) = a:b. Book V proved this for magnitudes; VII.11 proves it for numbers.',
  },
];
