import type { QuizQuestion } from './types';

export const section60Questions: QuizQuestion[] = [
  // Easy questions
  {
    id: 's60-e01',
    type: 'multiple-choice',
    question: 'How many permutations are there of a set with 4 elements?',
    options: [
      '12',
      '16',
      '24',
      '8',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'The number of permutations of n elements is n! (n factorial). For 4 elements: 4! = 4 × 3 × 2 × 1 = 24.',
  },
  {
    id: 's60-e02',
    type: 'multiple-choice',
    question: 'A transposition is a permutation that:',
    options: [
      'Keeps all elements in place',
      'Swaps exactly two elements and fixes all others',
      'Moves all elements one position',
      'Reverses the order of all elements',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'A transposition swaps exactly two elements while leaving all other elements in their original positions. In cycle notation, it is written as (i j).',
  },
  // Medium questions
  {
    id: 's60-m01',
    type: 'multiple-choice',
    question: 'The symmetric group $S_n$ consists of:',
    options: [
      'Only even permutations of n elements',
      'Only cyclic permutations of n elements',
      'All transpositions of n elements',
      'All permutations of n elements',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'The symmetric group S_n is the group of ALL permutations of n elements, with composition as the group operation. It has n! elements. The alternating group A_n is the subgroup of only even permutations.',
  },
  {
    id: 's60-m02',
    type: 'multiple-choice',
    question: 'A 5-cycle like $(1 \\, 2 \\, 3 \\, 4 \\, 5)$ is:',
    options: [
      'An odd permutation',
      'Neither even nor odd',
      'The identity permutation',
      'An even permutation',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'A k-cycle can be written as k-1 transpositions. A 5-cycle needs 4 transpositions, which is even. In general, a k-cycle is even when k is odd, and odd when k is even.',
  },
  // Hard questions
  {
    id: 's60-h01',
    type: 'multiple-choice',
    question: 'Lagrange\'s theorem states that for a subgroup $H$ of a finite group $G$:',
    options: [
      '$|H|$ is always prime',
      '$|H| = |G|
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'Lagrange\'s theorem states that the order (size) of any subgroup H must divide the order of the group G. This fundamental result constrains what subgroups can exist in a group.',
  },
      '$|G|$ divides $|H|
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'Lagrange\'s theorem states that the order (size) of any subgroup H must divide the order of the group G. This fundamental result constrains what subgroups can exist in a group.',
  },
      '$|H|$ divides $|G|}
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'Lagrange\'s theorem states that the order (size) of any subgroup H must divide the order of the group G. This fundamental result constrains what subgroups can exist in a group.',
  },
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'Lagrange\'s theorem states that the order (size) of any subgroup H must divide the order of the group G. This fundamental result constrains what subgroups can exist in a group.',
  },
  {
    id: 's60-h02',
    type: 'multiple-choice',
    question: 'Cayley\'s theorem states that:',
    options: [
      'Every group is isomorphic to a subgroup of some symmetric group',
      'Every group has exactly one subgroup',
      'Every symmetric group is abelian',
      'Every permutation is a transposition',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'Cayley\'s theorem shows that every abstract group can be faithfully represented as a group of permutations (a subgroup of some S_n). This makes permutation groups "universal" in group theory.',
  },
];
