import type { QuizQuestion } from './types';

export const section142Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does V.23 (ex aequali, perturbed) prove?',
    options: [
      'Perturbed proportions cannot be combined',
      'If A:B = E:F and B:C = D:E, then A:C = D:F',
      'Only ordered proportions can use ex aequali',
      'Perturbed means the same as ordered'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'V.23 extends ex aequali to the perturbed case, where the intermediate terms appear on opposite sides.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In V.23, the "crossing" pattern means:',
    options: [
      'Terms are multiplied together',
      'The middle term E appears as consequent in one ratio and antecedent in another',
      'All ratios are equal',
      'There is no pattern'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The perturbed pattern has A:B = E:F and B:C = D:E, so E crosses from right side to left side.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'V.22 and V.23 together provide:',
    options: [
      'Contradictory results',
      'A complete ex aequali toolkit for any arrangement of chained proportions',
      'Only partial results',
      'Results only for integers'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Together, V.22 (ordered) and V.23 (perturbed) handle all possible arrangements of chained proportions.',
  },
];
