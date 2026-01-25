import type { QuizQuestion } from './types';

export const section40Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A Hadamard code of order $n$ is constructed from a Hadamard matrix by:',
    options: [
      'Multiplying all rows together',
      'Taking only the first row',
      'Computing the determinant',
      'Taking rows of the matrix (after converting $\\pm 1$ to $0/1$) and their complements'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Hadamard codes are formed by converting $+1 \\to 0$ and $-1 \\to 1$ in a normalized Hadamard matrix, then including each row and its complement as codewords.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'A Hadamard code derived from $H_n$ (using rows and complements) has how many codewords?',
    correctAnswer: 32,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: 'A Hadamard matrix $H_n$ has $n$ rows. The Hadamard code includes each row and its complement, giving $2n$ codewords. For $n=16$: $2 \\times 16 = 32$. (Note: The answer depends on $n$; for a general normalized $H_n$, the code has $2n$ codewords.)',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The minimum distance of a Hadamard code of length $n$ (derived from $H_n$) is:',
    options: [
      '$n
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Hadamard codes have minimum distance $d = n/2$. This follows from the orthogonality of Hadamard matrix rows: distinct rows differ in exactly $n/2$ positions.',
  },
      '$n-1
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Hadamard codes have minimum distance $d = n/2$. This follows from the orthogonality of Hadamard matrix rows: distinct rows differ in exactly $n/2$ positions.',
  },
      '$n/2
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Hadamard codes have minimum distance $d = n/2$. This follows from the orthogonality of Hadamard matrix rows: distinct rows differ in exactly $n/2$ positions.',
  },
      '$n/4
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Hadamard codes have minimum distance $d = n/2$. This follows from the orthogonality of Hadamard matrix rows: distinct rows differ in exactly $n/2$ positions.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Hadamard codes have minimum distance $d = n/2$. This follows from the orthogonality of Hadamard matrix rows: distinct rows differ in exactly $n/2$ positions.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'The Hadamard code from $H_{32}$ has parameters $[32, k, 16]$. What is $k$ (the dimension)?',
    correctAnswer: 6,
    numericRange: { min: 0, max: 32, precision: 0 },
    difficulty: 'hard',
    explanation: 'The Hadamard code from $H_n$ (Sylvester type, $n=2^m$) has $2n$ codewords, so $2^k = 2n = 64$, giving $k = 6$. The parameters are $[32, 6, 16]$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Hadamard codes are particularly interesting because they:',
    options: [
      'Are always cyclic',
      'Achieve the Plotkin bound with equality',
      'Are MDS codes',
      'Have the largest possible dimension'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Hadamard codes meet the Plotkin bound with equality, achieving the maximum number of codewords possible for a code with length $n$ and minimum distance $n/2$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The first-order Reed-Muller code $R(1, m)$ is related to Hadamard codes by:',
    options: [
      'Its dual is a Hadamard code (up to puncturing)',
      'They are identical',
      'They are unrelated',
      '$R(1,m)$ is the dual of its own Hadamard matrix',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'First-order Reed-Muller codes $R(1, m)$ are closely related to Hadamard codes. The simplex code (dual of Hamming code) can be extended to obtain Hadamard codes, connecting these code families.',
  },
];
