import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 33: The Integers
 */
export const section33Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What algebraic structure do the integers ℤ form?',
    options: [
      'A group',
      'An integral domain',
      'A field',
      'A vector space',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'The integers ℤ form an integral domain—a commutative ring with no zero divisors. They are not a field because not every nonzero element has a multiplicative inverse (e.g., 2 has no inverse in ℤ).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How many axioms define a ring?',
    options: [
      '7',
      '3',
      '5',
      '9',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'A ring is defined by 7 axioms: associativity of +, identity for +, inverse for +, commutativity of +, identity for ·, associativity of ·, and distributivity.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which axioms make (R, 0, -, +) into a group?',
    options: [
      'All 7 axioms',
      'Axioms 4-6 (commutativity, identity, associativity for ·)',
      'Axioms 1-3 (associativity, identity, inverse for +)',
      'Axiom 7 (distributivity)',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Axioms 1-3 (associativity of +, identity for +, and inverse for +) are exactly the group axioms for the additive structure (R, 0, -, +).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is an Abelian group?',
    options: [
      'A group with no identity',
      'A group with exactly two elements',
      'A group that satisfies the commutative law',
      'A group that is also a ring',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'An Abelian group (named after Niels Henrik Abel) is a group that also satisfies the commutative law: x + y = y + x for all elements.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What defines an integral domain?',
    options: [
      'A ring where every element has an inverse',
      'A ring that contains the integers',
      'A ring where multiplication is not commutative',
      'A commutative ring with no zero divisors',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'An integral domain is a commutative ring where 0 ≠ 1 and there are no zero divisors: if xy = 0, then x = 0 or y = 0.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Why is ℤ not a field?',
    options: [
      'Because not every nonzero element has a multiplicative inverse',
      'Because it is not commutative',
      'Because it has zero divisors',
      'Because 0 = 1 in ℤ',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'ℤ is not a field because not every nonzero integer has a multiplicative inverse in ℤ. For example, 2 has no integer n such that 2n = 1.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Which of the following is a non-commutative ring?',
    options: ['ℤ', 'ℚ', '2×2 matrices over ℤ', 'ℤₙ'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The ring of 2×2 matrices over ℤ is non-commutative because matrix multiplication does not satisfy AB = BA in general. The other options (ℤ, ℚ, ℤₙ) are all commutative.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What is the cancellation law in an integral domain?',
    options: [
      'If a + c = b + c, then a = b',
      'If a ≠ 0, then a has an inverse',
      'If a = b, then ac = bc',
      'If ac = bc and c ≠ 0, then a = b'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'The cancellation law states: if ac = bc and c ≠ 0, then a = b. This follows from the absence of zero divisors in an integral domain.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'What can be proved from the ring axioms about x · 0?',
    options: [
      'x · 0 = x',
      'x · 0 = 0',
      'x · 0 = 1',
      'x · 0 = -x',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'From the ring axioms, we can prove that x · 0 = 0 for all x. This is because x · 0 = x · (0 + 0) = x · 0 + x · 0, and subtracting x · 0 from both sides gives 0 = x · 0.',
  },
];
