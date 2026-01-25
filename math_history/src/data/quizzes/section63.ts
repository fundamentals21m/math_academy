import type { QuizQuestion } from './types';

export const section63Questions: QuizQuestion[] = [
  // Easy questions
  {
    id: 's63-e01',
    type: 'multiple-choice',
    question: 'Which of the following is NOT one of the group axioms?',
    options: [
      'Commutativity',
      'Associativity',
      'Identity element',
      'Inverse elements',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'The four group axioms are closure, associativity, identity, and inverses. Commutativity (a·b = b·a) is NOT required for a group. Groups that are commutative are called "abelian" groups, but many groups are non-abelian.',
  },
  {
    id: 's63-e02',
    type: 'multiple-choice',
    question: 'An abelian group is one where:',
    options: [
      'Every element equals its inverse',
      'The operation is commutative',
      'The group has exactly two elements',
      'The group has no subgroups'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'An abelian group (named after Niels Henrik Abel) is a group where the operation is commutative: a·b = b·a for all elements a and b. Examples include (Z, +) and cyclic groups.',
  },
  // Medium questions
  {
    id: 's63-m01',
    type: 'multiple-choice',
    question: 'A simple group is one that:',
    options: [
      'Is abelian',
      'Has only one element',
      'Has no nontrivial normal subgroups',
      'Has exactly two subgroups'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'A simple group has no normal subgroups except {e} and the whole group. Simple groups are the "atoms" of group theory—all groups can be built from simple groups. Examples include cyclic groups of prime order and A_n for n ≥ 5.',
  },
  {
    id: 's63-m02',
    type: 'multiple-choice',
    question: 'Two groups are isomorphic if:',
    options: [
      'They have the same subgroups',
      'They have the same number of elements',
      'They are both abelian',
      'There exists a bijective homomorphism between them'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Groups G and H are isomorphic (G ≅ H) if there exists a bijective homomorphism between them. This means they have identical structure—they differ only in the "names" of their elements. Having the same size is necessary but not sufficient.',
  },
  // Hard questions
  {
    id: 's63-h01',
    type: 'multiple-choice',
    question: 'The classification of finite simple groups includes:',
    options: [
      'Cyclic groups of prime order, alternating groups $A_n$ (n≥5), groups of Lie type, and 26 sporadic groups',
      'Only cyclic groups and symmetric groups',
      'All abelian groups',
      'Only groups with fewer than 100 elements',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'The classification theorem (a monumental achievement spanning tens of thousands of pages) states that finite simple groups are: cyclic groups Z/pZ for prime p, alternating groups A_n for n ≥ 5, various families of Lie type groups, and exactly 26 "sporadic" groups including the Monster.',
  },
  {
    id: 's63-h02',
    type: 'multiple-choice',
    question: 'The First Isomorphism Theorem states that for a homomorphism $\\phi: G \\to H$:',
    options: [
      '$G \\cong H$',
      '$G/\\ker(\\phi) \\cong \\text{im}(\\phi)$',
      '$\\ker(\\phi) = \\{e\\}$',
      '$G$ and $H$ have the same order'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'The First Isomorphism Theorem states that for any group homomorphism φ: G → H, the quotient G/ker(φ) is isomorphic to the image im(φ). This fundamental theorem connects kernels, images, and quotient groups.',
  },
];
