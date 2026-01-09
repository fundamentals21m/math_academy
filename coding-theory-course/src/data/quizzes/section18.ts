import type { QuizQuestion } from './types';

export const section18Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A $q$-ary Hamming code over $\\mathbb{F}_q$ with redundancy $r$ has length:',
    options: [
      '$q^r$',
      '$q^r - 1$',
      '$(q^r - 1)/(q - 1)$',
      '$q^{r-1}$'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The length of a $q$-ary Hamming code is $n = (q^r - 1)/(q - 1)$. This counts the number of distinct 1-dimensional subspaces of $\\mathbb{F}_q^r$.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'What is the length of the ternary ($q = 3$) Hamming code with redundancy $r = 3$?',
    correctAnswer: 13,
    numericRange: { min: 1, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: 'Using $n = (q^r - 1)/(q - 1) = (3^3 - 1)/(3 - 1) = (27 - 1)/2 = 26/2 = 13$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The parity-check matrix of a non-binary Hamming code has columns that are:',
    options: [
      'All non-zero vectors in $\\mathbb{F}_q^r$',
      'One representative from each 1-dimensional subspace of $\\mathbb{F}_q^r$',
      'All vectors with first non-zero entry equal to 1',
      'Both B and C are correct descriptions'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The columns are chosen as one representative per 1-dimensional subspace. A standard choice is to normalize so the first non-zero entry is 1, which gives a unique representative.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'For a ternary Hamming code with $r = 2$, what is the dimension $k$?',
    correctAnswer: 2,
    numericRange: { min: 0, max: 10, precision: 0 },
    difficulty: 'medium',
    explanation: 'First, $n = (3^2 - 1)/(3 - 1) = 8/2 = 4$. The dimension is $k = n - r = 4 - 2 = 2$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Non-binary Hamming codes have minimum distance:',
    options: [
      '$d = 2$',
      '$d = 3$',
      '$d = 4$',
      '$d = q$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Like binary Hamming codes, non-binary Hamming codes have minimum distance $d = 3$. They are single-error-correcting codes.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The dual of a non-binary Hamming code is called:',
    options: [
      'A Reed-Muller code',
      'A Simplex code',
      'A Golay code',
      'A BCH code'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The dual of a Hamming code (binary or non-binary) is a Simplex code. It has parameters $[n, r, (q^{r-1})]$ where $n = (q^r-1)/(q-1)$.',
  },
];
