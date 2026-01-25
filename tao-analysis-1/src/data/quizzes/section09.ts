import type { QuizQuestion } from './types';

export const section09Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Cartesian product $A \\times B$ is defined as:',
    options: [
      '$\\{(a, b) : a \\in A \\text{ and } b \\in B\\}
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Cartesian product consists of all ordered pairs where the first component is from $A$ and the second from $B$.',
  },
      '$A \\cap B
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The Cartesian product consists of all ordered pairs where the first component is from $A$ and the second from $B$.',
  },
      '$\\{a \\cdot b : a \\in A \\text{ and } b \\in B\\}
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The Cartesian product consists of all ordered pairs where the first component is from $A$ and the second from $B$.',
  },
      '$A \\cup B
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The Cartesian product consists of all ordered pairs where the first component is from $A$ and the second from $B$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The Cartesian product consists of all ordered pairs where the first component is from $A$ and the second from $B$.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'If $|A| = 3$ and $|B| = 4$, how many elements are in $A \\times B$?',
    correctAnswer: 12,
    numericRange: { min: 0, max: 50, precision: 0 },
    difficulty: 'easy',
    explanation: '$|A \\times B| = |A| \\cdot |B| = 3 \\cdot 4 = 12$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'An ordered pair $(a, b)$ has the property that $(a, b) = (c, d)$ if and only if:',
    options: [
      '$a = c$ or $b = d
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Unlike sets, order matters in ordered pairs. Two ordered pairs are equal iff corresponding components are equal.',
  },
      '$a = d$ and $b = c
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Unlike sets, order matters in ordered pairs. Two ordered pairs are equal iff corresponding components are equal.',
  },
      '$a + b = c + d
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Unlike sets, order matters in ordered pairs. Two ordered pairs are equal iff corresponding components are equal.',
  },
      '$a = c$ and $b = d
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Unlike sets, order matters in ordered pairs. Two ordered pairs are equal iff corresponding components are equal.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Unlike sets, order matters in ordered pairs. Two ordered pairs are equal iff corresponding components are equal.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Using the Kuratowski definition, the ordered pair $(a, b)$ is represented as:',
    options: [
      '$\\{a, b\\}
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Kuratowski\'s definition $(a,b) := \\{\\{a\\}, \\{a,b\\}\\}$ allows ordered pairs to be constructed from sets alone, with the property that $(a,b) = (c,d) \\iff a=c \\land b=d$.',
  },
      '$\\{\\{a, b\\}\\}
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Kuratowski\'s definition $(a,b) := \\{\\{a\\}, \\{a,b\\}\\}$ allows ordered pairs to be constructed from sets alone, with the property that $(a,b) = (c,d) \\iff a=c \\land b=d$.',
  },
      '$\\{\\{a\\}, \\{a, b\\}\\}
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Kuratowski\'s definition $(a,b) := \\{\\{a\\}, \\{a,b\\}\\}$ allows ordered pairs to be constructed from sets alone, with the property that $(a,b) = (c,d) \\iff a=c \\land b=d$.',
  },
      '$\\{a, \\{b\\}\\}
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Kuratowski\'s definition $(a,b) := \\{\\{a\\}, \\{a,b\\}\\}$ allows ordered pairs to be constructed from sets alone, with the property that $(a,b) = (c,d) \\iff a=c \\land b=d$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Kuratowski\'s definition $(a,b) := \\{\\{a\\}, \\{a,b\\}\\}$ allows ordered pairs to be constructed from sets alone, with the property that $(a,b) = (c,d) \\iff a=c \\land b=d$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Is the Cartesian product commutative? That is, does $A \\times B = B \\times A$ in general?',
    options: [
      'No, unless $A = B
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'In general $A \\times B \\neq B \\times A$ because $(a, b) \\neq (b, a)$ when $a \\neq b$. Equality holds only when $A = B$ (or when one of $A, B$ is empty).',
  },
      'Yes, always',
      'No, unless $A$ and $B$ are both empty',
      'Yes, if $A$ and $B$ have the same cardinality',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'In general $A \\times B \\neq B \\times A$ because $(a, b) \\neq (b, a)$ when $a \\neq b$. Equality holds only when $A = B$ (or when one of $A, B$ is empty).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'An $n$-tuple $(x_1, x_2, \\ldots, x_n) \\in A_1 \\times A_2 \\times \\cdots \\times A_n$ can be viewed as:',
    options: [
      'An unordered collection of $n$ elements',
      'A function from $\\{1, 2, \\ldots, n\\}$ to $A_1 \\cup \\cdots \\cup A_n$ with $f(i) \\in A_i
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'An $n$-tuple is equivalent to a function $f: \\{1, \\ldots, n\\} \\to \\bigcup A_i$ where $f(i) = x_i \\in A_i$. This viewpoint generalizes to infinite products.',
  },
      'An element of $A_1 \\cap A_2 \\cap \\cdots \\cap A_n
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'An $n$-tuple is equivalent to a function $f: \\{1, \\ldots, n\\} \\to \\bigcup A_i$ where $f(i) = x_i \\in A_i$. This viewpoint generalizes to infinite products.',
  },
      'A subset of $A_1 \\cup \\cdots \\cup A_n$ with $n$ elements',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'An $n$-tuple is equivalent to a function $f: \\{1, \\ldots, n\\} \\to \\bigcup A_i$ where $f(i) = x_i \\in A_i$. This viewpoint generalizes to infinite products.',
  },
];
