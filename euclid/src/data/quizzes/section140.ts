import type { QuizQuestion } from './types';

export const section140Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How does V.21 differ from V.20?',
    options: [
      'They are the same',
      'V.21 handles "perturbed" order where the second sequence terms are crossed',
      'V.21 only works for integers',
      'V.21 is about addition, V.20 about subtraction',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'V.21 handles the perturbed case where A:B = E:F and B:C = D:E (terms crossed), while V.20 handles the ordered case.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In V.21, if A:B = E:F and B:C = D:E, what can we conclude?',
    options: [
      'Nothing',
      'All magnitudes are equal',
      'A > C implies D > F (and similarly for = and <)',
      'The ratios are different',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Even with the perturbed arrangement, comparing A vs C determines the comparison of D vs F.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why do we need both V.20 and V.21?',
    options: [
      'Proportions in proofs may arise in either ordered or perturbed form',
      'We do not need both',
      'V.21 is for negative magnitudes',
      'They contradict each other',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'In geometric proofs, proportions may naturally arise in either pattern. Having both cases covered is essential.',
  },
];
