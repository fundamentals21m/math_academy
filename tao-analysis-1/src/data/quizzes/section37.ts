import type { QuizQuestion } from './types';

export const section37Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A relation $\\leq$ on a set $X$ is a partial order if it satisfies:',
    options: [
      'Reflexivity, symmetry, and transitivity',
      'Irreflexivity, asymmetry, and transitivity',
      'Reflexivity, antisymmetry, and transitivity',
      'Reflexivity and transitivity only',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A partial order must be reflexive ($x \\leq x$), antisymmetric ($x \\leq y$ and $y \\leq x$ implies $x = y$), and transitive ($x \\leq y$ and $y \\leq z$ implies $x \\leq z$).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What distinguishes a total order from a partial order?',
    options: [
      'In a total order, any two elements are comparable',
      'A total order must be finite',
      'A total order cannot have a maximum element',
      'A total order must be countable',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A total order (or linear order) is a partial order where every pair of elements is comparable: for all $x, y$, either $x \\leq y$ or $y \\leq x$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A set $X$ with a total order $\\leq$ is well-ordered if:',
    options: [
      'Every element has a successor',
      'Every non-empty subset has a least element',
      'The set is countable',
      '$X$ has both a minimum and maximum element',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A well-ordering requires that every non-empty subset has a least element. This is stronger than being a total order.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which of the following sets with the standard order is NOT well-ordered?',
    options: [
      'The positive integers less than 100',
      'The non-negative integers $\\mathbb{Z}_{\\geq 0}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The integers $\\mathbb{Z}$ with standard order are not well-ordered because the set of negative integers has no least element.',
  },
      'The integers $\\mathbb{Z}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The integers $\\mathbb{Z}$ with standard order are not well-ordered because the set of negative integers has no least element.',
  },
      'The natural numbers $\\mathbb{N}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The integers $\\mathbb{Z}$ with standard order are not well-ordered because the set of negative integers has no least element.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The integers $\\mathbb{Z}$ with standard order are not well-ordered because the set of negative integers has no least element.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $(X, \\leq)$ is a partially ordered set and $A \\subseteq X$, an element $u \\in X$ is an upper bound for $A$ if:',
    options: [
      '$u$ is the maximum element of $A
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'An upper bound $u$ for $A$ satisfies $a \\leq u$ for all $a \\in A$. The upper bound need not be in $A$ itself.',
  },
      '$u \\in A$ and $a \\leq u$ for all $a \\in A
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'An upper bound $u$ for $A$ satisfies $a \\leq u$ for all $a \\in A$. The upper bound need not be in $A$ itself.',
  },
      '$u > a$ for all $a \\in A
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'An upper bound $u$ for $A$ satisfies $a \\leq u$ for all $a \\in A$. The upper bound need not be in $A$ itself.',
  },
      '$a \\leq u$ for all $a \\in A$ (where $u$ may or may not be in $A$)',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'An upper bound $u$ for $A$ satisfies $a \\leq u$ for all $a \\in A$. The upper bound need not be in $A$ itself.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The Well-Ordering Theorem states that:',
    options: [
      'Every partial order can be extended to a total order',
      'The natural numbers are well-ordered',
      'Every well-ordered set is countable',
      'Every set can be well-ordered',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The Well-Ordering Theorem, equivalent to the Axiom of Choice, asserts that every set can be equipped with a well-ordering.',
  },
];
