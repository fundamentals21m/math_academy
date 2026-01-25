import type { QuizQuestion } from './types';

export const section34Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The MDS conjecture states that for an $[n, k]$ MDS code over $\\mathbb{F}_q$ (except for some cases when $q$ is even):',
    options: [
      '$n \\leq q + 1
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The MDS conjecture states that the maximum length of a non-trivial MDS code over $\\mathbb{F}_q$ is $n \\leq q + 1$ (with exceptions for certain cases when $q$ is even and $k = 3$ or $k = q - 1$).',
  },
      '$n \\leq q^2
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The MDS conjecture states that the maximum length of a non-trivial MDS code over $\\mathbb{F}_q$ is $n \\leq q + 1$ (with exceptions for certain cases when $q$ is even and $k = 3$ or $k = q - 1$).',
  },
      '$n \\leq 2q
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The MDS conjecture states that the maximum length of a non-trivial MDS code over $\\mathbb{F}_q$ is $n \\leq q + 1$ (with exceptions for certain cases when $q$ is even and $k = 3$ or $k = q - 1$).',
  },
      '$n$ can be arbitrarily large',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The MDS conjecture states that the maximum length of a non-trivial MDS code over $\\mathbb{F}_q$ is $n \\leq q + 1$ (with exceptions for certain cases when $q$ is even and $k = 3$ or $k = q - 1$).',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'Over $\\mathbb{F}_{16}$, what is the maximum possible length $n$ of an MDS code according to the MDS conjecture?',
    correctAnswer: 17,
    numericRange: { min: 0, max: 50, precision: 0 },
    difficulty: 'easy',
    explanation: 'According to the MDS conjecture, $n \\leq q + 1 = 16 + 1 = 17$ for MDS codes over $\\mathbb{F}_{16}$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For binary codes ($q = 2$), the only non-trivial MDS codes are:',
    options: [
      'Hamming codes',
      'Reed-Solomon codes',
      'Repetition codes, single parity check codes, and the trivial codes',
      'BCH codes'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Over $\\mathbb{F}_2$, the only MDS codes are the trivial ones: the $[n, 1, n]$ repetition code, the $[n, n-1, 2]$ single parity check code, and codes with $k = 0$ or $k = n$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The existence of MDS codes of length $n = q + 1$ is guaranteed by:',
    options: [
      'Hamming codes',
      'Random code constructions',
      'BCH codes',
      'Reed-Solomon codes and their extensions'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Reed-Solomon codes achieve length $n = q - 1$, and their extensions (extended Reed-Solomon codes) achieve length $n = q + 1$, meeting the MDS conjecture bound.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'An MDS code over $\\mathbb{F}_7$ can have maximum length $n = q + 1$. What is this maximum length?',
    correctAnswer: 8,
    numericRange: { min: 0, max: 20, precision: 0 },
    difficulty: 'easy',
    explanation: 'For $q = 7$, the maximum length is $n = q + 1 = 7 + 1 = 8$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The MDS conjecture has been proven for:',
    options: [
      'All finite fields',
      'Prime fields $\\mathbb{F}_p$ and some specific cases',
      'Only binary fields',
      'No cases at all',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The MDS conjecture has been proven for prime fields and several other specific cases, but remains open in general. Significant progress was made by Ball (2012) for prime fields.',
  },
];
