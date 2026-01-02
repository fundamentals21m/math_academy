import type { QuizQuestion } from './types';

export const section22Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition I.22 construct?',
    options: [
      'A triangle given three angles',
      'A triangle given three straight lines (satisfying triangle inequality)',
      'A triangle given two sides and included angle',
      'A right triangle given the hypotenuse'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'I.22: "Out of three straight lines, which are equal to three given straight lines, to construct a triangle."',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What condition must the three lines satisfy in I.22?',
    options: [
      'They must all be equal',
      'One must be longer than the sum of the other two',
      'Any two together must be greater than the third',
      'They must form right angles'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'I.22 requires the triangle inequality: any two sides together greater than the third (from I.20).',
  },
];
