import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 8: Foundations
 */
export const section08Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Who discovered that addition and multiplication can be defined inductively?',
    options: [
      'Euclid',
      'Gauss',
      'Grassmann',
      'Von Neumann',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Hermann Grassmann (1861) made the breakthrough by noticing that induction can be used not only for proofs but also for definitions.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In Grassmann\'s inductive definition, $m + (i + 1)$ is defined as:',
    options: [
      '$m + i$',
      '$(m + i) + 1$',
      '$m \\times (i + 1)$',
      '$(m + 1) + i$',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The inductive definition says $m + (i + 1) = (m + i) + 1$. This defines addition for $n = i+1$ in terms of addition for $n = i$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'According to Dedekind, which property must the successor function have?',
    options: [
      'It must be defined on a finite set',
      'It must be onto the whole set',
      'It must be one-to-one',
      'It must have a fixed point',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The successor function must be one-to-one (unequal numbers have unequal successors), defined on an infinite set, and NOT onto (1 is not a successor).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In von Neumann\'s definition, what is the number 2?',
    options: [
      'The empty set',
      '$\\{0\\}$',
      '$\\{0, 1\\}$',
      '$\\{1, 2\\}$',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Von Neumann defines each natural number as the set of its predecessors. So $0 = \\{\\}$, $1 = \\{0\\}$, $2 = \\{0, 1\\}$, etc.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why is von Neumann\'s definition considered elegant?',
    options: [
      'It requires calculus',
      'It uses only prime numbers',
      'Ordering is captured by set membership: $m < n \\Leftrightarrow m \\in n$',
      'It avoids the use of sets',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The elegance lies in reducing ordering to membership: $m < n$ if and only if $m$ is a member of $n$. Everything is built from the empty set.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The axiom of infinity asserts:',
    options: [
      'All numbers are finite',
      'There exists an infinite set',
      'Induction always works',
      'Every set has a successor',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'The axiom of infinity states that there exists a set $\\Omega$ containing the empty set and closed under the successor operation—thus an infinite set exists.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What crucial insight did Grassmann have about induction?',
    options: [
      'It can only be used for sums',
      'It fails for multiplication',
      'It can be used for definitions, not just proofs',
      'It requires the axiom of infinity',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Grassmann\'s breakthrough was realizing that induction can serve as a method of definition, not just proof. This allowed defining + and × inductively.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What can be derived from the inductive definitions of + and ×?',
    options: [
      'Only the commutative law',
      'All ring properties of $\\mathbb{Z}$',
      'The prime number theorem',
      'The fundamental theorem of calculus',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'From the inductive definitions, Grassmann proved all ring properties: associativity, commutativity, and distributivity. Thus arithmetic is entirely based on induction!',
  },
];
