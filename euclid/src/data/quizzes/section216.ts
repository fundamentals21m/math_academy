import type { QuizQuestion } from './types';

export const section216Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition VII.37 states that if a number is measured by another number, it:',
    options: [
      'Has no factors',
      'Is always even',
      'Is always prime',
      'Has a part called by the same name as the measuring number',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'VII.37 says if n divides m, then m has an nth part (i.e., m/n is a positive integer representing the nth part of m).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If 5 measures 15, what part does 15 have according to VII.37?',
    options: [
      'A fifth part',
      'A third part',
      'A fifteenth part',
      'No parts',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Since 5 divides 15, we have 15 = 5 * 3, so 15 has a fifth part (which equals 3).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In Euclid\'s terminology, the "nth part" of a number m means:',
    options: [
      'm raised to the nth power',
      'm divided by n, when n divides m exactly',
      'm multiplied by n',
      'm minus n',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The nth part of m is m/n. Euclid\'s statement connects divisibility (n measures m) with the existence of this fractional part.',
  },
];
