import type { QuizQuestion } from './types';

export const section164Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition VI.19 states that similar triangles are to one another in what ratio?',
    options: [
      'The ratio of corresponding sides',
      'The duplicate ratio (square) of corresponding sides',
      'The triplicate ratio (cube) of corresponding sides',
      'The sum of corresponding sides',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'VI.19 proves similar triangles have areas in the duplicate ratio of corresponding sides. If sides are in ratio k, areas are in ratio k^2.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If two similar triangles have corresponding sides in ratio 3:5, what is the ratio of their areas?',
    options: [
      '3:5',
      '6:10',
      '27:125',
      '9:25',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The duplicate ratio of 3:5 is 9:25 (each term squared). Similar triangles with sides in ratio 3:5 have areas in ratio 9:25.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The proof of VI.19 constructs a third proportional to what?',
    options: [
      'The two areas',
      'The two perimeters',
      'Two corresponding sides',
      'The two heights'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Euclid constructs a third proportional to two corresponding sides (BC and EF), creating a continued proportion that yields the duplicate ratio.',
  },
];
