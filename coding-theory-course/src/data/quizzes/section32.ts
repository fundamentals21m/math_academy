import type { QuizQuestion } from './types';

export const section32Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A code is called MDS (Maximum Distance Separable) if it meets which bound with equality?',
    options: [
      'The Hamming bound',
      'The Plotkin bound',
      'The Gilbert-Varshamov bound',
      'The Singleton bound: $d \\leq n - k + 1
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'An MDS code achieves the Singleton bound with equality: $d = n - k + 1$. This is the maximum possible minimum distance for given length $n$ and dimension $k$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'An MDS code achieves the Singleton bound with equality: $d = n - k + 1$. This is the maximum possible minimum distance for given length $n$ and dimension $k$.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'For an MDS code with length $n = 15$ and dimension $k = 9$, what is the minimum distance $d$?',
    correctAnswer: 7,
    numericRange: { min: 0, max: 15, precision: 0 },
    difficulty: 'easy',
    explanation: 'For an MDS code, $d = n - k + 1 = 15 - 9 + 1 = 7$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A necessary and sufficient condition for a linear code to be MDS is:',
    options: [
      'The parity check matrix is square',
      'The generator matrix is in systematic form',
      'Every $k$ columns of the generator matrix are linearly independent',
      'All codewords have even weight'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'An $[n, k]$ linear code is MDS if and only if every set of $k$ columns of its generator matrix is linearly independent. Equivalently, every $n-k$ columns of its parity check matrix are linearly independent.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The dual of an $[n, k, d]$ MDS code is:',
    options: [
      'Not necessarily an MDS code',
      'An $[n, n-k, k+1]$ MDS code',
      'Also an $[n, k, d]$ MDS code',
      'An $[n, k, d+1]$ code',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The dual of an $[n, k, n-k+1]$ MDS code is an $[n, n-k, k+1]$ MDS code. MDS codes have the remarkable property that their duals are also MDS.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'A repetition code of length $n$ repeating each bit $n$ times is MDS. If $n = 5$, what is its minimum distance?',
    correctAnswer: 5,
    numericRange: { min: 0, max: 10, precision: 0 },
    difficulty: 'easy',
    explanation: 'The repetition code has parameters $[n, 1, n]$. The Singleton bound gives $d \\leq n - 1 + 1 = n$, and the repetition code achieves this with $d = n = 5$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Which of the following is always an MDS code?',
    options: [
      'Reed-Solomon codes',
      'Hamming codes',
      'Binary Golay code',
      'BCH codes',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Reed-Solomon codes are always MDS codes, achieving the Singleton bound with equality. Hamming codes and BCH codes are generally not MDS.',
  },
];
