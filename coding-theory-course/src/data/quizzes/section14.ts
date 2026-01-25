import type { QuizQuestion } from './types';

export const section14Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Puncturing a code means:',
    options: [
      'Doubling the code length',
      'Adding a parity check bit',
      'Removing code words of minimum weight',
      'Deleting a coordinate position from all code words',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Puncturing a code removes one coordinate position from all code words. This decreases the length by 1 but may also decrease the minimum distance.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Extending a binary code by adding an overall parity check bit:',
    options: [
      'Decreases the length by 1',
      'Does not change the minimum distance',
      'Increases the length by 1 and ensures all code words have even weight',
      'Doubles the number of code words',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Adding an overall parity bit increases the length by 1. The new bit is chosen so that each code word has even weight. If the original minimum distance was odd, it increases by 1.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Shortening a code involves:',
    options: [
      'Removing all code words',
      'Taking only code words with 0 in a fixed position, then deleting that position',
      'Doubling each code word',
      'Adding random bits to code words',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Shortening restricts to code words that have 0 in a specific position, then removes that position. This maintains the minimum distance while reducing both length and dimension.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If an $[n, k, d]$ code is punctured in one position, the resulting code has parameters:',
    options: [
      '$[n, k-1, d]
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Puncturing reduces length by 1 but keeps dimension at $k$. The minimum distance can decrease by at most 1, so $d\' \\geq d - 1$.',
  },
      '$[n+1, k, d]
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Puncturing reduces length by 1 but keeps dimension at $k$. The minimum distance can decrease by at most 1, so $d\' \\geq d - 1$.',
  },
      '$[n-1, k-1, d+1]
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Puncturing reduces length by 1 but keeps dimension at $k$. The minimum distance can decrease by at most 1, so $d\' \\geq d - 1$.',
  },
      '$[n-1, k, d\\']$ where $d\\' \\geq d - 1
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Puncturing reduces length by 1 but keeps dimension at $k$. The minimum distance can decrease by at most 1, so $d\' \\geq d - 1$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Puncturing reduces length by 1 but keeps dimension at $k$. The minimum distance can decrease by at most 1, so $d\' \\geq d - 1$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The direct sum of codes $\\mathcal{C}_1$ and $\\mathcal{C}_2$ consists of:',
    options: [
      'All vectors $(\\mathbf{c}_1, \\mathbf{c}_2)$ where $\\mathbf{c}_i \\in \\mathcal{C}_i
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The direct sum $\\mathcal{C}_1 \\oplus \\mathcal{C}_2$ is the set of concatenated pairs $(\\mathbf{c}_1, \\mathbf{c}_2)$ where $\\mathbf{c}_1 \\in \\mathcal{C}_1$ and $\\mathbf{c}_2 \\in \\mathcal{C}_2$.',
  },
      'The code with smaller dimension',
      'The intersection $\\mathcal{C}_1 \\cap \\mathcal{C}_2
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The direct sum $\\mathcal{C}_1 \\oplus \\mathcal{C}_2$ is the set of concatenated pairs $(\\mathbf{c}_1, \\mathbf{c}_2)$ where $\\mathbf{c}_1 \\in \\mathcal{C}_1$ and $\\mathbf{c}_2 \\in \\mathcal{C}_2$.',
  },
      'All sums $\\mathbf{c}_1 + \\mathbf{c}_2
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The direct sum $\\mathcal{C}_1 \\oplus \\mathcal{C}_2$ is the set of concatenated pairs $(\\mathbf{c}_1, \\mathbf{c}_2)$ where $\\mathbf{c}_1 \\in \\mathcal{C}_1$ and $\\mathbf{c}_2 \\in \\mathcal{C}_2$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The direct sum $\\mathcal{C}_1 \\oplus \\mathcal{C}_2$ is the set of concatenated pairs $(\\mathbf{c}_1, \\mathbf{c}_2)$ where $\\mathbf{c}_1 \\in \\mathcal{C}_1$ and $\\mathbf{c}_2 \\in \\mathcal{C}_2$.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'If an $[n, k, d]$ code with $d$ odd is extended by a parity bit, what is the new minimum distance?',
    correctAnswer: 4,
    numericRange: { min: 1, max: 10, precision: 0 },
    difficulty: 'medium',
    explanation: 'When a code with odd minimum distance $d$ is extended by an overall parity bit, the minimum distance increases to $d + 1$. For $d = 3$, the new distance is 4.',
  },
];
