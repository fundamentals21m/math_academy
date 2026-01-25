import type { QuizQuestion } from './types';

export const section194Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition VII.15 state about the unit and alternation?',
    options: [
      'The unit measures any number',
      'Units can be divided into parts',
      'If a unit measures a number as a second number measures a third, then the unit also measures the third as the second measures the first',
      'Two units equal any even number'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'VII.15 establishes a special alternation property involving the unit: if 1 measures a as b measures c, then 1 measures c as b measures a. This relates to the commutativity inherent in multiplication.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If the unit measures 5 the same number of times as 3 measures 15, how many times does the unit measure 15 compared to how 3 measures 5?',
    options: [
      'This situation is impossible since 3 does not divide 5 evenly',
      'The unit measures 15 fifteen times, and 3 does not measure 5',
      'The relationship cannot be determined',
      'Both measure the same way',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For VII.15 to apply, the measurement relationships must hold. Since 3 does not divide 5 evenly, this particular example does not satisfy the hypothesis of the proposition.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'VII.15 essentially captures which fundamental property of arithmetic?',
    options: [
      'The distributive property',
      'The associative property of addition',
      'The existence of multiplicative inverses',
      'The commutative property of multiplication',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'VII.15 expresses commutativity in measurement terms. If 1 measures a as b measures c (meaning a = b times something and c = b times something), the alternation shows multiplication commutes.',
  },
];
