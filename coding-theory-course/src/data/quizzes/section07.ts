import type { QuizQuestion } from './types';

export const section07Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'numeric',
    question: 'For $r = 3$, what is the code length $n$ of the Hamming code $\\mathcal{H}_3$?',
    correctAnswer: 7,
    numericRange: { min: 1, max: 31, precision: 0 },
    difficulty: 'easy',
    explanation: 'The Hamming code $\\mathcal{H}_r$ has length $n = 2^r - 1$. For $r = 3$, $n = 2^3 - 1 = 7$.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'What is the number of message bits $k$ in the $(7, 4)$ Hamming code?',
    correctAnswer: 4,
    numericRange: { min: 1, max: 10, precision: 0 },
    difficulty: 'easy',
    explanation: 'In the notation $(n, k)$ or $[n, k]$, $k$ represents the number of message bits. The $(7, 4)$ Hamming code has $k = 4$ message bits.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The minimum distance of every Hamming code $\\mathcal{H}_r$ is:',
    options: [
      '3',
      '2',
      '4',
      '$r$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Every Hamming code has minimum distance exactly 3. This allows them to correct any single error or detect up to 2 errors.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The parity check matrix of a Hamming code has columns that are:',
    options: [
      'All non-zero binary $r$-tuples, one for each integer from 1 to $2^r - 1$',
      'The first $n$ columns of the identity matrix',
      'Random binary vectors',
      'All binary vectors including the zero vector'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The columns of the Hamming code parity check matrix are all $2^r - 1$ non-zero binary $r$-tuples, arranged in order of increasing value when read as binary numbers.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In Hamming code decoding, if the syndrome equals $(101)_2$, the error is in position:',
    options: [
      '5',
      '3',
      '6',
      '1'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The syndrome directly indicates the error position in a Hamming code. $(101)_2 = 4 + 1 = 5$, so the error is in position 5.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'As $r$ increases, the rate $k/n$ of Hamming codes approaches what value?',
    correctAnswer: 1,
    numericRange: { min: 0, max: 1, precision: 2 },
    difficulty: 'medium',
    explanation: 'The rate is $k/n = (2^r - 1 - r)/(2^r - 1)$. As $r \\to \\infty$, this approaches 1, meaning Hamming codes become increasingly efficient.',
  },
];
