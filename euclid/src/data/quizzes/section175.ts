import type { QuizQuestion } from './types';

export const section175Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'VI.30 shows how to cut a line segment in "extreme and mean ratio." This division is now known as:',
    options: [
      'The arithmetic mean',
      'The golden ratio (phi)',
      'The harmonic mean',
      'The geometric mean'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'VI.30 constructs the golden ratio. A line is cut in extreme and mean ratio when the whole is to the larger part as the larger part is to the smaller part. This ratio is phi = (1+sqrt(5))/2.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If a line AB is cut at point C in extreme and mean ratio (with AC > CB), the proportion is:',
    options: [
      'AB : AC = AC : CB',
      'AB : CB = CB : AC',
      'AC : AB = CB : AB',
      'AB : AC = CB : AC'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'In extreme and mean ratio, the whole (AB) is to the greater segment (AC) as the greater segment (AC) is to the lesser (CB). This defines the golden ratio: AB/AC = AC/CB = phi.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The golden ratio phi satisfies the equation:',
    options: [
      'phi^2 = phi - 1',
      'phi^2 = phi + 1',
      'phi^2 = 2phi',
      'phi^2 = phi/2'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'From AB/AC = AC/CB and AB = AC + CB, we get phi = 1 + 1/phi, which gives phi^2 = phi + 1. This is the defining quadratic x^2 - x - 1 = 0 with positive root phi = (1+sqrt(5))/2.',
  },
];
