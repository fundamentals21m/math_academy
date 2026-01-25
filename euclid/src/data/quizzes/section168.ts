import type { QuizQuestion } from './types';

export const section168Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In equiangular parallelograms, the ratio of the parallelograms is:',
    options: [
      'Equal to the ratio of corresponding sides',
      'Equal to the ratio of their diagonals',
      'The square of the ratio of corresponding sides',
      'The compound ratio of their sides (product of two side ratios)',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'VI.23 proves that equiangular parallelograms have the ratio compounded of the ratios of their sides. If parallelograms share equal angles, their area ratio equals (side1/side1\') x (side2/side2\').',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does "compound ratio" mean in the context of VI.23?',
    options: [
      'Adding two ratios together',
      'Multiplying two ratios together',
      'Subtracting one ratio from another',
      'Dividing one ratio by another',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A compound ratio is the product of two or more ratios. If a:b and c:d are two ratios, their compound ratio is (a x c):(b x d).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If two equiangular parallelograms have side ratios 2:3 and 4:5, what is the ratio of their areas?',
    options: [
      '6:8',
      '2:3',
      '8:15',
      '4:5',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'By VI.23, the area ratio is the compound of the side ratios: (2 x 4):(3 x 5) = 8:15.',
  },
];
