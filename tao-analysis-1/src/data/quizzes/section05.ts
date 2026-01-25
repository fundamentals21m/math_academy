import type { QuizQuestion } from './types';

export const section05Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The union of sets $A$ and $B$, denoted $A \\cup B$, consists of:',
    options: [
      'Elements that are in both $A$ and $B
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The union $A \\cup B = \\{x : x \\in A \\text{ or } x \\in B\\}$ contains all elements belonging to either set.',
  },
      'Elements that are in $A$ but not in $B
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The union $A \\cup B = \\{x : x \\in A \\text{ or } x \\in B\\}$ contains all elements belonging to either set.',
  },
      'Elements that are in $A$ or in $B$ (or both)',
      'Ordered pairs $(a, b)$ where $a \\in A$ and $b \\in B
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The union $A \\cup B = \\{x : x \\in A \\text{ or } x \\in B\\}$ contains all elements belonging to either set.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The union $A \\cup B = \\{x : x \\in A \\text{ or } x \\in B\\}$ contains all elements belonging to either set.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The intersection of sets $A$ and $B$, denoted $A \\cap B$, consists of:',
    options: [
      'Elements that are in $A$ or in $B$',
      'Elements that are in $A$ but not in $B$',
      'Elements that are in both $A$ and $B$',
      'The empty set'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The intersection $A \\cap B = \\{x : x \\in A \\text{ and } x \\in B\\}$ contains only elements common to both sets.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The set difference $A \\setminus B$ (also written $A - B$) is defined as:',
    options: [
      '$\\{x : x \\in A \\text{ and } x \\in B\\}$',
      '$\\{x : x \\in A \\text{ or } x \\in B\\}$',
      '$\\{x : x \\notin A \\text{ and } x \\in B\\}$',
      '$\\{x : x \\in A \\text{ and } x \\notin B\\}$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The set difference $A \\setminus B$ contains elements that are in $A$ but not in $B$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The power set $\\mathcal{P}(A)$ of a set $A$ is:',
    options: [
      'The set of all elements of $A
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The power set $\\mathcal{P}(A)$ is the set of ALL subsets of $A$, including $\\emptyset$ and $A$ itself.',
  },
      'The set of all subsets of $A
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The power set $\\mathcal{P}(A)$ is the set of ALL subsets of $A$, including $\\emptyset$ and $A$ itself.',
  },
      'The set $A \\times A
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The power set $\\mathcal{P}(A)$ is the set of ALL subsets of $A$, including $\\emptyset$ and $A$ itself.',
  },
      'The complement of $A
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The power set $\\mathcal{P}(A)$ is the set of ALL subsets of $A$, including $\\emptyset$ and $A$ itself.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The power set $\\mathcal{P}(A)$ is the set of ALL subsets of $A$, including $\\emptyset$ and $A$ itself.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'If $A = \\{1, 2, 3\\}$, how many elements does the power set $\\mathcal{P}(A)$ have?',
    correctAnswer: 8,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: 'A set with $n$ elements has $2^n$ subsets. Here $|A| = 3$, so $|\\mathcal{P}(A)| = 2^3 = 8$.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The axiom of extensionality states that two sets are equal if and only if:',
    options: [
      'They have exactly the same elements',
      'They have the same cardinality',
      'One is a subset of the other',
      'They are both non-empty',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Extensionality says $A = B$ iff $\\forall x (x \\in A \\leftrightarrow x \\in B)$. Sets are determined entirely by their members.',
  },
];
