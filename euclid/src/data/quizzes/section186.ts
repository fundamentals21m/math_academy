import type { QuizQuestion } from './types';

export const section186Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What operation does Proposition VII.7 address for parts of numbers?',
    options: [
      'Addition of parts',
      'Subtraction of parts',
      'Multiplication of parts',
      'Division of parts'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'VII.7 is the subtraction counterpart to VII.5. It shows that if A is a part of B, and C is the same part of D, then A-C is that same part of B-D (when A > C).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If 8 is one-fourth of 32, and 5 is one-fourth of 20, what does VII.7 tell us?',
    options: [
      '3 is one-fourth of 12',
      '13 is one-fourth of 52',
      '3 is one-third of 12',
      '8 is one-fifth of 40'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By VII.7: 8 = (1/4)(32) and 5 = (1/4)(20), so 8-5=3 is one-fourth of 32-20=12. Indeed, 3 x 4 = 12.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What condition must be satisfied for VII.7 to apply?',
    options: [
      'Both numbers must be prime',
      'The part being subtracted must be less than the part from which it is subtracted',
      'The numbers must be consecutive',
      'The numbers must be relatively prime'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'For subtraction to yield a positive result, we need A > C (and consequently B > D). Euclid\'s number theory deals only with positive integers.',
  },
];
