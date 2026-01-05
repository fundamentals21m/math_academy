import type { QuizQuestion } from './types';

export const section124Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does V.5 prove about equimultiples and subtraction?',
    options: [
      'Equimultiples cannot be subtracted',
      'If A = mB and C = mD, then A - C = m(B - D)',
      'Subtraction destroys the equimultiple property',
      'Only addition preserves equimultiples'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'V.5 shows that equimultiples behave well under subtraction: subtracting equimultiples gives an equimultiple of the difference.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In modern algebra, V.5 corresponds to which property?',
    options: [
      'm(a) - m(b) = m(a - b)',
      'm + n = n + m',
      'm(ab) = (ma)b',
      '(m + n)a = ma + na'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'V.5 is the distributive property of multiplication over subtraction: mB - mD = m(B - D).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why is V.5 important alongside V.1?',
    options: [
      'They contradict each other',
      'V.1 handles addition, V.5 handles subtraction—together they show equimultiples behave well under basic operations',
      'They prove the same thing',
      'V.5 is only for negative magnitudes'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'V.1 and V.5 together establish that equimultiples are preserved under both addition and subtraction.',
  },
];
