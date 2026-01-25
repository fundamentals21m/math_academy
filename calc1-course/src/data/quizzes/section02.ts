import type { QuizQuestion } from './types';

export const section02Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Which notation denotes that $A$ is a subset of $B$?',
    options: [
      '$A \\subseteq B
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The notation $A \\subseteq B$ means every element of $A$ is also an element of $B$.',
  },
      '$A \\in B
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The notation $A \\subseteq B$ means every element of $A$ is also an element of $B$.',
  },
      '$A \\cup B
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The notation $A \\subseteq B$ means every element of $A$ is also an element of $B$.',
  },
      '$A \\cap B
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The notation $A \\subseteq B$ means every element of $A$ is also an element of $B$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The notation $A \\subseteq B$ means every element of $A$ is also an element of $B$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is $A \\cup B$ called?',
    options: [
      'The intersection of $A$ and $B
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$A \\cup B$ is the union: all elements in $A$ or $B$ (or both).',
  },
      'The complement of $A$ in $B
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$A \\cup B$ is the union: all elements in $A$ or $B$ (or both).',
  },
      'The difference of $A$ and $B
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$A \\cup B$ is the union: all elements in $A$ or $B$ (or both).',
  },
      'The union of $A$ and $B
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$A \\cup B$ is the union: all elements in $A$ or $B$ (or both).',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$A \\cup B$ is the union: all elements in $A$ or $B$ (or both).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If $A = \\{1, 2, 3\\}$ and $B = \\{2, 3, 4\\}$, what is $A \\cap B$?',
    options: [
      '$\\{1, 2, 3, 4\\}
    correctIndex: 2,
    difficulty: 'easy',
    explanation: '$A \\cap B$ contains elements in both $A$ and $B$: $\\{2, 3\\}$.',
  },
      '$\\{1\\}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$A \\cap B$ contains elements in both $A$ and $B$: $\\{2, 3\\}$.',
  },
      '$\\{2, 3\\}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$A \\cap B$ contains elements in both $A$ and $B$: $\\{2, 3\\}$.',
  },
      '$\\{1, 4\\}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$A \\cap B$ contains elements in both $A$ and $B$: $\\{2, 3\\}$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '$A \\cap B$ contains elements in both $A$ and $B$: $\\{2, 3\\}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which of the following is the empty set?',
    options: [
      '$\\{\\emptyset\\}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\emptyset$ is the empty set with no elements. Note that $\\{0\\}$ contains zero and $\\{\\emptyset\\}$ contains the empty set as an element.',
  },
      '$\\emptyset
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\emptyset$ is the empty set with no elements. Note that $\\{0\\}$ contains zero and $\\{\\emptyset\\}$ contains the empty set as an element.',
  },
      '$\\{0\\}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\emptyset$ is the empty set with no elements. Note that $\\{0\\}$ contains zero and $\\{\\emptyset\\}$ contains the empty set as an element.',
  },
      '$\\{x : x = x\\}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\emptyset$ is the empty set with no elements. Note that $\\{0\\}$ contains zero and $\\{\\emptyset\\}$ contains the empty set as an element.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$\\emptyset$ is the empty set with no elements. Note that $\\{0\\}$ contains zero and $\\{\\emptyset\\}$ contains the empty set as an element.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the set-builder notation for the set of positive even integers?',
    options: [
      '$\\{x : x > 0\\}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$\\{2n : n \\in \\mathbb{Z}^+\\}$ gives $\\{2, 4, 6, 8, ...\\}$, the positive even integers.',
  },
      '$\\{x : x \\text{ is even}\\}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\{2n : n \\in \\mathbb{Z}^+\\}$ gives $\\{2, 4, 6, 8, ...\\}$, the positive even integers.',
  },
      '$\\{1, 2, 3, ...\\}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\{2n : n \\in \\mathbb{Z}^+\\}$ gives $\\{2, 4, 6, 8, ...\\}$, the positive even integers.',
  },
      '$\\{2n : n \\in \\mathbb{Z}^+\\}
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\{2n : n \\in \\mathbb{Z}^+\\}$ gives $\\{2, 4, 6, 8, ...\\}$, the positive even integers.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: '$\\{2n : n \\in \\mathbb{Z}^+\\}$ gives $\\{2, 4, 6, 8, ...\\}$, the positive even integers.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'If $|A| = 5$ and $|B| = 3$ and $|A \\cap B| = 2$, what is $|A \\cup B|$?',
    correctAnswer: 6,
    numericRange: { min: 0, max: 20, precision: 0 },
    difficulty: 'medium',
    explanation: 'By inclusion-exclusion: $|A \\cup B| = |A| + |B| - |A \\cap B| = 5 + 3 - 2 = 6$.',
  },
];
