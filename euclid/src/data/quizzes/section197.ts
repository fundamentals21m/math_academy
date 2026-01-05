import type { QuizQuestion } from './types';

export const section197Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition VII.18 prove about measurement and products?',
    options: [
      'If a number measures another, then it also measures any product made with that number',
      'If a number measures a product, it measures each factor',
      'Products of measured numbers are always even',
      'Measurement is preserved under division'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'VII.18: If a measures b, then a also measures b times c for any number c. Divisibility is preserved when we multiply.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If 4 measures 12, what can we conclude about 12 times 7 using VII.18?',
    options: [
      '4 measures 84',
      '7 measures 84',
      '12 measures 84',
      'All of the above'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'By VII.18, since 4 measures 12, 4 also measures 12 times 7 = 84. Also, 7 measures 84 (by VII.17), and 12 measures 84 (by VII.17). So all three statements are true.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'VII.18 combined with VII.17 establishes which key principle?',
    options: [
      'Prime factorization is unique',
      'Divisibility is transitive and compatible with multiplication',
      'Every number has a greatest common divisor with every other',
      'The product of two numbers equals their LCM times GCD'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'VII.17 and VII.18 together show that divisibility interacts well with multiplication: factors divide products, and if a|b then a|bc. This compatibility is fundamental to number theory.',
  },
];
