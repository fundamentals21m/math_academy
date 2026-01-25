import type { QuizQuestion } from './types';

export const section214Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition VII.35 states that the LCM of two numbers:',
    options: [
      'Divides all common multiples of those numbers',
      'Is always prime',
      'Equals their product',
      'Equals their sum',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'VII.35 proves that any common multiple of two numbers is divisible by their LCM.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If LCM(6, 8) = 24, which of the following is NOT a common multiple of 6 and 8?',
    options: [
      '48',
      '72',
      '24',
      '36',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '36 is divisible by 6 but not by 8 (36/8 = 4.5), so 36 is not a common multiple of 6 and 8.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'VII.35 shows that the LCM is the "least" common multiple in what precise sense?',
    options: [
      'It has the fewest prime factors',
      'It is smaller than both original numbers',
      'Every common multiple is a multiple of the LCM',
      'It is always a prime number',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The LCM is least because it divides every other common multiple; every common multiple has the form LCM * k for some positive integer k.',
  },
];
