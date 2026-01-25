import type { QuizQuestion } from './types';

export const section00Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In the binary field $\\mathbb{B}$, what is $1 + 1$?',
    options: [
      '$1
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'In the binary field $\\mathbb{B} = \\{0, 1\\}$, arithmetic is done modulo 2. Therefore, $1 + 1 = 0$.',
  },
      '$2
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'In the binary field $\\mathbb{B} = \\{0, 1\\}$, arithmetic is done modulo 2. Therefore, $1 + 1 = 0$.',
  },
      '$0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'In the binary field $\\mathbb{B} = \\{0, 1\\}$, arithmetic is done modulo 2. Therefore, $1 + 1 = 0$.',
  },
      '$-1
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'In the binary field $\\mathbb{B} = \\{0, 1\\}$, arithmetic is done modulo 2. Therefore, $1 + 1 = 0$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'In the binary field $\\mathbb{B} = \\{0, 1\\}$, arithmetic is done modulo 2. Therefore, $1 + 1 = 0$.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'What is the Hamming distance $d(10011011, 11001101)$?',
    correctAnswer: 4,
    numericRange: { min: 0, max: 8, precision: 0 },
    difficulty: 'medium',
    explanation: 'Comparing position by position: positions 2, 4, 6, and 7 differ. Therefore $d(a, b) = 4$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is a necessary and sufficient condition for a code to detect all sets of $k$ or fewer errors?',
    options: [
      'Minimum distance at least $k + 1$',
      'Minimum distance at least $k$',
      'Minimum distance at least $2k + 1$',
      'Minimum distance at least $2k$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A code can detect all sets of $k$ or fewer errors if and only if the minimum distance between any two code words is at least $k + 1$.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'What is the weight $\\text{wt}(10110101)$?',
    correctAnswer: 5,
    numericRange: { min: 0, max: 8, precision: 0 },
    difficulty: 'easy',
    explanation: 'The weight is the number of non-zero components. In $10110101$, there are 5 ones.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For a code to correct all sets of $k$ or fewer errors, the minimum distance must be at least:',
    options: [
      '$k + 1
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'To correct $k$ errors, the minimum distance must be at least $2k + 1$. This ensures that a received word with up to $k$ errors is still closer to the original code word than to any other code word.',
  },
      '$2k
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'To correct $k$ errors, the minimum distance must be at least $2k + 1$. This ensures that a received word with up to $k$ errors is still closer to the original code word than to any other code word.',
  },
      '$k
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'To correct $k$ errors, the minimum distance must be at least $2k + 1$. This ensures that a received word with up to $k$ errors is still closer to the original code word than to any other code word.',
  },
      '$2k + 1
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'To correct $k$ errors, the minimum distance must be at least $2k + 1$. This ensures that a received word with up to $k$ errors is still closer to the original code word than to any other code word.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'To correct $k$ errors, the minimum distance must be at least $2k + 1$. This ensures that a received word with up to $k$ errors is still closer to the original code word than to any other code word.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Which of the following is NOT an axiom of a group?',
    options: [
      'Existence of identity',
      'Commutativity',
      'Associativity',
      'Existence of inverses',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Commutativity is NOT required for a group. A group only requires associativity, an identity element, and inverses. A group that is also commutative is called an Abelian group.',
  },
];
