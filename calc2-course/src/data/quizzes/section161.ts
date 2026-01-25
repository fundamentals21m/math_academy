import type { QuizQuestion } from './types';

export const section161Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A set $S$ is countably infinite if it is in one-to-one correspondence with:',
    options: [
      'The real numbers',
      'The interval $[0, 1]
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A set is countably infinite if there exists a bijection between it and the positive integers $\\{1, 2, 3, \\ldots\\}$.',
  },
      'Any finite set',
      'The positive integers $\\{1, 2, 3, \\ldots\\}
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A set is countably infinite if there exists a bijection between it and the positive integers $\\{1, 2, 3, \\ldots\\}$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A set is countably infinite if there exists a bijection between it and the positive integers $\\{1, 2, 3, \\ldots\\}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which of the following sets is countable?',
    options: [
      'The real numbers $\\mathbb{R}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The rationals $\\mathbb{Q}$ are countable: they can be written as a countable union of countable sets $\\{x/n : x \\in \\mathbb{Z}\\}$ for each $n \\geq 1$.',
  },
      'All subsets of $\\mathbb{N}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The rationals $\\mathbb{Q}$ are countable: they can be written as a countable union of countable sets $\\{x/n : x \\in \\mathbb{Z}\\}$ for each $n \\geq 1$.',
  },
      'The interval $(0, 1)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The rationals $\\mathbb{Q}$ are countable: they can be written as a countable union of countable sets $\\{x/n : x \\in \\mathbb{Z}\\}$ for each $n \\geq 1$.',
  },
      'The rational numbers $\\mathbb{Q}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The rationals $\\mathbb{Q}$ are countable: they can be written as a countable union of countable sets $\\{x/n : x \\in \\mathbb{Z}\\}$ for each $n \\geq 1$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The rationals $\\mathbb{Q}$ are countable: they can be written as a countable union of countable sets $\\{x/n : x \\in \\mathbb{Z}\\}$ for each $n \\geq 1$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A countable union of countable sets is:',
    options: [
      'Always uncountable',
      'Always finite',
      'Countable',
      'Neither countable nor uncountable',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'One of the key properties of countable sets: a countable union of countable sets remains countable.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Cantor\'s diagonal argument shows that:',
    options: [
      'The real numbers in $(0, 1)$ are uncountable',
      'The rationals are uncountable',
      'The integers are uncountable',
      'All infinite sets are countable'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Cantor\'s diagonalization constructs a real number in $(0, 1)$ that differs from every number in any supposed list, proving the reals are uncountable.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The power set (set of all subsets) of a countably infinite set is:',
    options: [
      'Finite',
      'Uncountable',
      'Countably infinite',
      'Empty'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The power set of a countably infinite set is uncountable. This is proved by a diagonal argument: assuming a bijection leads to the paradoxical set $B = \\{a \\in A : a \\notin f(a)\\}$.',
  },
];
