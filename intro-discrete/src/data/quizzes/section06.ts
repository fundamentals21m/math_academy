import type { QuizQuestion } from './types';

export const section06Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does $A \\subseteq B$ mean?',
    options: [
      '$A$ and $B$ are disjoint',
      'Every element of $A$ is also in $B
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$A \\subseteq B$ means $A$ is a subset of $B$: every element of $A$ is in $B$.',
  },
      '$A$ and $B$ have the same elements',
      '$A$ contains $B
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$A \\subseteq B$ means $A$ is a subset of $B$: every element of $A$ is in $B$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$A \\subseteq B$ means $A$ is a subset of $B$: every element of $A$ is in $B$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: "De Morgan's Law states that $(A \\cup B)^c$ equals:",
    options: [
      '$A^c \\cup B^c
    correctIndex: 2,
    difficulty: 'medium',
    explanation: "De Morgan's Laws: $(A \\cup B)^c = A^c \\cap B^c$ and $(A \\cap B)^c = A^c \\cup B^c$.",
  },
      '$(A \\cap B)^c
    correctIndex: 0,
    difficulty: 'medium',
    explanation: "De Morgan's Laws: $(A \\cup B)^c = A^c \\cap B^c$ and $(A \\cap B)^c = A^c \\cup B^c$.",
  },
      '$A^c \\cap B^c
    correctIndex: 0,
    difficulty: 'medium',
    explanation: "De Morgan's Laws: $(A \\cup B)^c = A^c \\cap B^c$ and $(A \\cap B)^c = A^c \\cup B^c$.",
  },
      '$A \\cup B^c
    correctIndex: 0,
    difficulty: 'medium',
    explanation: "De Morgan's Laws: $(A \\cup B)^c = A^c \\cap B^c$ and $(A \\cap B)^c = A^c \\cup B^c$.",
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: "De Morgan's Laws: $(A \\cup B)^c = A^c \\cap B^c$ and $(A \\cap B)^c = A^c \\cup B^c$.",
  },
  {
    id: 3,
    type: 'numeric',
    question: 'If $|A| = 4$, how many elements does the power set $\\mathcal{P}(A)$ have?',
    correctAnswer: 16,
    numericRange: { min: 1, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: '$|\\mathcal{P}(A)| = 2^{|A|} = 2^4 = 16$.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'If $|A| = 3$ and $|B| = 4$, how many elements does $A \\times B$ have?',
    correctAnswer: 12,
    numericRange: { min: 1, max: 50, precision: 0 },
    difficulty: 'easy',
    explanation: '$|A \\times B| = |A| \\cdot |B| = 3 \\times 4 = 12$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is $A \\cap A^c$ (the intersection of $A$ with its complement)?',
    options: [
      '$A
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A set and its complement have no elements in common: $A \\cap A^c = \\emptyset$.',
  },
      'The universal set $U
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A set and its complement have no elements in common: $A \\cap A^c = \\emptyset$.',
  },
      '$\\emptyset
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A set and its complement have no elements in common: $A \\cap A^c = \\emptyset$.',
  },
      '$A^c
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A set and its complement have no elements in common: $A \\cap A^c = \\emptyset$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A set and its complement have no elements in common: $A \\cap A^c = \\emptyset$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The Cartesian product $A \\times B$ consists of:',
    options: [
      'The union of $A$ and $B
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$A \\times B = \\{(a, b) : a \\in A, b \\in B\\}$.',
  },
      'All elements in both $A$ and $B
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$A \\times B = \\{(a, b) : a \\in A, b \\in B\\}$.',
  },
      'All subsets of $A$ and $B
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$A \\times B = \\{(a, b) : a \\in A, b \\in B\\}$.',
  },
      'All ordered pairs $(a, b)$ with $a \\in A$ and $b \\in B
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$A \\times B = \\{(a, b) : a \\in A, b \\in B\\}$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$A \\times B = \\{(a, b) : a \\in A, b \\in B\\}$.',
  },
];
