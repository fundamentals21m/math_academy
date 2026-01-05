import type { QuizQuestion } from './types';

export const section215Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition VII.36 addresses finding the LCM of:',
    options: [
      'Two numbers',
      'Three numbers',
      'Prime numbers only',
      'Powers of 2'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'VII.36 extends the LCM construction to three numbers.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is LCM(3, 4, 5)?',
    options: [
      '12',
      '20',
      '60',
      '120'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'LCM(3, 4, 5) = 60. Since 3, 4, 5 are pairwise coprime (except 4 with the others sharing no factors), LCM = 3 * 4 * 5 = 60.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The method of VII.36 can be extended to find the LCM of any number of integers by:',
    options: [
      'Multiplying all numbers together',
      'Finding pairwise LCMs iteratively',
      'Adding all numbers together',
      'Finding the largest number'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'VII.36 works by computing LCM(a, b) first, then LCM(LCM(a, b), c), which can be extended to any finite set of numbers.',
  },
];
