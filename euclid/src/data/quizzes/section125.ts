import type { QuizQuestion } from './types';

export const section125Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does V.6 prove about subtracting equimultiples from equimultiples?',
    options: [
      'The result is always zero',
      'If A = mB, C = mD and we subtract E = nB, F = nD, the remainders are (m-n) times their bases',
      'Only equal multiples can be subtracted',
      'Subtraction destroys the relationship',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'V.6 shows that A - E = (m-n)B and C - F = (m-n)D when subtracting equimultiples from equimultiples.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How does V.6 extend V.5?',
    options: [
      'V.5 handles one pair, V.6 handles two parallel sequences',
      'V.6 is about addition',
      'They prove the same thing',
      'V.6 contradicts V.5'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'V.5 shows mB - mD = m(B-D). V.6 shows that when we subtract nB from mB and nD from mD, both remainders are (m-n) times their respective units.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If A = 5B, E = 2B, then A - E equals:',
    options: [
      '7B',
      '10B',
      '3B',
      '2.5B',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A - E = 5B - 2B = (5-2)B = 3B.',
  },
];
