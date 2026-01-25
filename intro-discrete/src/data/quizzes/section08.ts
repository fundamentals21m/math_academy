import type { QuizQuestion } from './types';

export const section08Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'An equivalence relation must be:',
    options: [
      'Reflexive and symmetric only',
      'Reflexive, symmetric, and transitive',
      'Symmetric and transitive only',
      'Antisymmetric and transitive',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The three defining properties of an equivalence relation are reflexivity, symmetry, and transitivity.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A relation is reflexive if:',
    options: [
      '$a \\sim b$ and $b \\sim c$ implies $a \\sim c
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Reflexivity: every element is related to itself.',
  },
      '$a \\sim a$ for all $a
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Reflexivity: every element is related to itself.',
  },
      '$a \\sim b$ implies $b \\sim a
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Reflexivity: every element is related to itself.',
  },
      '$a \\sim b$ and $b \\sim a$ implies $a = b
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Reflexivity: every element is related to itself.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Reflexivity: every element is related to itself.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'An equivalence relation partitions a set into:',
    options: [
      'Disjoint equivalence classes',
      'The power set',
      'Overlapping subsets',
      'A single subset',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Equivalence classes are disjoint and their union is the whole set.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A partial order is:',
    options: [
      'Reflexive, symmetric, and transitive',
      'Only reflexive and transitive',
      'Only antisymmetric',
      'Reflexive, antisymmetric, and transitive',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A partial order satisfies reflexivity, antisymmetry, and transitivity.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which of the following is an example of an equivalence relation on integers?',
    options: [
      'Congruence modulo $n
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Congruence mod $n$ is reflexive, symmetric, and transitive.',
  },
      'Less than ($<$)',
      'Divisibility ($\\mid$)',
      'Greater than or equal ($\\geq$)',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Congruence mod $n$ is reflexive, symmetric, and transitive.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'If $[a]$ and $[b]$ are equivalence classes with $[a] \\cap [b] \\neq \\emptyset$, then:',
    options: [
      '$[a] = [b]
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Equivalence classes are either equal or disjoint.',
  },
      '$[b] \\subset [a]
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Equivalence classes are either equal or disjoint.',
  },
      '$[a] \\subset [b]
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Equivalence classes are either equal or disjoint.',
  },
      '$[a]$ and $[b]$ are disjoint',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Equivalence classes are either equal or disjoint.',
  },
];
