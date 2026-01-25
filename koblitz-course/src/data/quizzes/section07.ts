import type { QuizQuestion } from './types';

export const section07Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'For a Hill cipher matrix to be valid, it must be:',
    options: [
      'Invertible modulo 26',
      'Orthogonal',
      'Symmetric',
      'Diagonal',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The encryption matrix must have $\\gcd(\\det(A), 26) = 1$ to be invertible mod 26.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'For a $2 \\times 2$ Hill cipher matrix $A$, if $\\det(A) = 5$, what is $\\det(A)^{-1} \\bmod 26$?',
    correctAnswer: 21,
    numericRange: { min: 0, max: 25, precision: 0 },
    difficulty: 'hard',
    explanation: 'We need $5x \\equiv 1 \\pmod{26}$. Since $5 \\cdot 21 = 105 = 4 \\cdot 26 + 1$, we get $5^{-1} \\equiv 21$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the main advantage of the Hill cipher over simple substitution?',
    options: [
      'Uses a longer key',
      'Is computationally faster',
      'Encrypts multiple letters at once, hiding single-letter frequencies',
      'Requires no key exchange',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Hill cipher encrypts letter blocks together, obscuring individual letter frequencies.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The Hill cipher is vulnerable to:',
    options: [
      'Brute force only',
      'Frequency analysis of single letters',
      'Dictionary attack',
      'Known-plaintext attack using linear algebra',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'With enough plaintext-ciphertext pairs, the encryption matrix can be recovered using linear algebra.',
  },
  {
    id: 5,
    type: 'text',
    question: 'What mathematical structure does the Hill cipher use for encryption (hint: arrays of numbers)?',
    correctAnswer: 'matrix',
    difficulty: 'easy',
    explanation: 'The Hill cipher uses matrix multiplication: $C = AP \\bmod 26$.',
  },
];
