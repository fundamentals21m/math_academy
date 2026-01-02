import type { QuizQuestion } from './types';

export const section26Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What congruence criteria does Proposition I.26 establish?',
    options: [
      'SAS only',
      'SSS only',
      'ASA and AAS',
      'SSA (side-side-angle)'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'I.26 proves both ASA (angle-side-angle) and AAS (angle-angle-side) congruence.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How many cases does Euclid prove in I.26?',
    options: [
      'One',
      'Two',
      'Three',
      'Four'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'I.26 proves two cases: (1) the equal side is between the two angles (ASA), (2) the equal side is opposite one of the angles (AAS).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which Book I propositions establish the main triangle congruence criteria?',
    options: [
      'I.1, I.2, I.3',
      'I.4, I.8, I.26',
      'I.5, I.6, I.7',
      'I.16, I.17, I.18'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'I.4 (SAS), I.8 (SSS), and I.26 (ASA/AAS) are the three main triangle congruence theorems.',
  },
];
