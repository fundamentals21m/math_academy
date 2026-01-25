import type { QuizQuestion } from './types';

export const section20Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Hamming distance $d(u, v)$ counts:',
    options: [
      'The number of 1s in $u$',
      'The number of positions where $u$ and $v$ differ',
      'The length of the codewords',
      'The number of errors that can be corrected'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Hamming distance is the number of positions where two codewords differ.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A code with minimum distance $d$ can detect up to:',
    options: [
      '$d - 1$ errors',
      '$d$ errors',
      '$d + 1$ errors',
      '$\\lfloor d/2 \\rfloor$ errors',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A code with minimum distance $d$ can detect up to $d - 1$ errors.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A code with minimum distance $d$ can correct up to:',
    options: [
      '$\\lfloor (d-1)/2 \\rfloor$ errors',
      '$d - 1$ errors',
      '$d$ errors',
      '$2d$ errors',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Error correction capability is $\\lfloor (d-1)/2 \\rfloor$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A linear code is:',
    options: [
      'A code where all codewords start with 0',
      'A code with exactly $n$ codewords',
      'A subgroup of $\\mathbb{Z}_2^n
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A linear code is a subgroup of $\\mathbb{Z}_2^n$ (closed under addition).',
  },
      'A code that cannot detect errors',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A linear code is a subgroup of $\\mathbb{Z}_2^n$ (closed under addition).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For a linear code, the minimum distance equals:',
    options: [
      'The number of codewords',
      'The length of codewords',
      'The number of parity bits',
      'The minimum weight of non-zero codewords',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'For linear codes, minimum distance = minimum weight of non-zero codewords, since $d(u,v) = w(u+v)$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The syndrome $s = Hr^T$ equals 0 if and only if:',
    options: [
      '$r$ is the zero vector',
      'An error occurred',
      '$H$ is the identity matrix',
      '$r$ is a codeword',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The syndrome is zero precisely when the received word is a valid codeword.',
  },
];
