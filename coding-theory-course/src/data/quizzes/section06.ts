import type { QuizQuestion } from './types';

export const section06Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'numeric',
    question: 'What is the decimal value of the binary number $(1101)_2$?',
    correctAnswer: 13,
    numericRange: { min: 0, max: 20, precision: 0 },
    difficulty: 'easy',
    explanation: '$(1101)_2 = 1 \\cdot 2^3 + 1 \\cdot 2^2 + 0 \\cdot 2^1 + 1 \\cdot 2^0 = 8 + 4 + 0 + 1 = 13$.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'How many bits are required to represent all integers from 1 to 15?',
    correctAnswer: 4,
    numericRange: { min: 1, max: 10, precision: 0 },
    difficulty: 'easy',
    explanation: 'The integers 1 to 15 satisfy $2^3 = 8 \\leq 15 < 2^4 = 16$. Using the formula $\\lfloor \\log_2 n \\rfloor + 1$, we need 4 bits.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'With $r$ bits, how many distinct non-zero binary vectors can be represented?',
    options: [
      '$2^r - 1$',
      '$2^r$',
      '$r$',
      '$2r$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'With $r$ bits, there are $2^r$ total binary vectors. Excluding the zero vector, we have $2^r - 1$ non-zero vectors.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the binary representation of 10?',
    options: [
      '$(1010)_2$',
      '$(1001)_2$',
      '$(1100)_2$',
      '$(0110)_2$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$10 = 8 + 2 = 1 \\cdot 2^3 + 0 \\cdot 2^2 + 1 \\cdot 2^1 + 0 \\cdot 2^0 = (1010)_2$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'When adding binary column vectors in $\\mathbb{B}$, what operation is performed component-wise?',
    options: [
      'XOR (exclusive or)',
      'AND',
      'OR',
      'NAND'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'In the binary field, addition is modulo 2, which is the same as the XOR operation: $0 + 0 = 0$, $0 + 1 = 1$, $1 + 0 = 1$, $1 + 1 = 0$.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'In a Hamming code, if a single error occurs in position $i$, the syndrome equals the binary representation of which number?',
    correctAnswer: 5,
    numericRange: { min: 1, max: 15, precision: 0 },
    difficulty: 'medium',
    explanation: 'In a Hamming code, when an error occurs in position $i$, the syndrome equals the $i$-th column of the parity check matrix, which is the binary representation of $i$. For position 5, the syndrome represents 5.',
  },
];
