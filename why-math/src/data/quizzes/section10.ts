import type { QuizQuestion } from './types';

export const section10Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The binary system uses how many digits?',
    options: [
      '8',
      '10',
      '2',
      '16'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Binary uses only two digits: 0 and 1.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'What is the decimal value of the binary number $10110_2$?',
    correctAnswer: 22,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: '$10110_2 = 1×16 + 0×8 + 1×4 + 1×2 + 0×1 = 16 + 4 + 2 = 22$.',
  },
  {
    id: 3,
    type: 'text',
    question: 'What is decimal 5 in binary? (Write as digits only, no subscript)',
    correctAnswer: '101',
    difficulty: 'easy',
    explanation: '$5 = 4 + 1 = 2^2 + 2^0 = 101_2$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In binary, $1 + 1 = $',
    options: [
      '$2$',
      '$10$',
      '$11$',
      '$1$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'In binary, $1 + 1 = 10$ (which equals 2 in decimal). You carry the 1.',
  },
  {
    id: 5,
    type: 'text',
    question: 'What is $101_2 + 110_2$ in binary? (digits only)',
    correctAnswer: '1011',
    difficulty: 'medium',
    explanation: '$101_2 + 110_2 = 1011_2$ (5 + 6 = 11 in decimal).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Why do computers use the binary system?',
    options: [
      'It requires less memory',
      'It matches the on/off states of electronic switches',
      'Binary numbers are smaller',
      'It was invented by computer scientists'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Electronic switches have two natural states: on (1) and off (0), matching binary digits.',
  },
  {
    id: 7,
    type: 'numeric',
    question: 'How many different characters can be represented with 8 bits?',
    correctAnswer: 256,
    numericRange: { min: 0, max: 1000, precision: 0 },
    difficulty: 'medium',
    explanation: '$2^8 = 256$ different combinations.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'A parity bit is used to:',
    options: [
      'Make all numbers even',
      'Detect single-bit transmission errors',
      'Compress data',
      'Speed up transmission'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A parity bit is added so the total number of 1s is always odd (or always even), allowing error detection.',
  },
  {
    id: 9,
    type: 'numeric',
    question: 'How many bits are needed to represent the 26 letters of the alphabet?',
    correctAnswer: 5,
    numericRange: { min: 1, max: 10, precision: 0 },
    difficulty: 'medium',
    explanation: '$2^4 = 16 < 26 \\leq 32 = 2^5$. So 5 bits are needed.',
  },
  {
    id: 10,
    type: 'multiple-choice',
    question: 'The fraction $\\frac{1}{3}$ in binary is:',
    options: [
      '$0.3_2$',
      '$0.1_2$',
      '$0.\\overline{01}_2$ (repeating)',
      '$0.11_2$'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '$\\frac{1}{3} = 0.\\overline{01}_2 = 0.010101..._2$ (a repeating binary fraction).',
  },
];
