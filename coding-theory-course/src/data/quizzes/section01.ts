import type { QuizQuestion } from './types';

export const section01Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the defining property of an encoding (generator) matrix in standard form?',
    options: [
      'Its first $m$ columns form the identity matrix $\\mathbf{I}_m
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'An encoding (generator) matrix in standard form is an $m \\times n$ matrix whose first $m$ columns form the identity matrix $\\mathbf{I}_m$.',
  },
      'Its rows are orthogonal',
      'Its last $m$ columns form the identity matrix $\\mathbf{I}_m
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'An encoding (generator) matrix in standard form is an $m \\times n$ matrix whose first $m$ columns form the identity matrix $\\mathbf{I}_m$.',
  },
      'All its entries are either 0 or 1',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'An encoding (generator) matrix in standard form is an $m \\times n$ matrix whose first $m$ columns form the identity matrix $\\mathbf{I}_m$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why is the encoding function $E(\\mathbf{x}) = \\mathbf{x}\\mathbf{G}$ a monomorphism?',
    options: [
      'It preserves multiplication',
      'Different message words produce different code words',
      'The matrix $\\mathbf{G}$ is square',
      'All code words have even weight',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Since the first $m$ columns of $\\mathbf{G}$ form the identity matrix, the code word $\\mathbf{xG}$ has $\\mathbf{x}$ as its first $m$ components. Thus, different message words produce different code words, making $E$ one-to-one (a monomorphism).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In a group code, the minimum distance equals:',
    options: [
      'The minimum weight of non-zero code words',
      'The maximum weight of code words',
      'The number of parity check bits',
      'The dimension of the code',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For a group code, the minimum distance equals the minimum of the weights of the non-zero code words. This is because $d(a, b) = \\text{wt}(a + b)$, and $a + b$ is also a code word.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is a coset leader?',
    options: [
      'Any code word in the coset',
      'The first element in alphabetical order in a coset',
      'A word of least weight chosen from each coset',
      'The sum of all elements in a coset',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'In each coset of the code in $\\mathbb{B}^n$, we choose a word of least weight. This word is called a coset leader and is used for decoding.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'For a $(3, 6)$ matrix code, how many code words are there?',
    correctAnswer: 8,
    numericRange: { min: 1, max: 64, precision: 0 },
    difficulty: 'easy',
    explanation: 'A $(3, 6)$ code encodes 3-bit message words into 6-bit code words. Since there are $2^3 = 8$ possible 3-bit message words, there are 8 code words.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'In the $(m, m+1)$ parity check code, every code word has:',
    options: [
      'Weight at most $m
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The $(m, m+1)$ parity check code adds a parity bit to ensure that the sum of all bits (including the parity bit) is even. Therefore, every code word has even weight.',
  },
      'Odd weight',
      'Even weight',
      'Weight exactly $m
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The $(m, m+1)$ parity check code adds a parity bit to ensure that the sum of all bits (including the parity bit) is even. Therefore, every code word has even weight.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The $(m, m+1)$ parity check code adds a parity bit to ensure that the sum of all bits (including the parity bit) is even. Therefore, every code word has even weight.',
  },
];
