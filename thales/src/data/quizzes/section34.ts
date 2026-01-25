import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 34: The Rationals
 */
export const section34Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Why can\'t we define a rational number a/b as simply a pair (a, b)?',
    options: [
      'Because then 2/3 ≠ 4/6 (different pairs)',
      'Because pairs cannot be added',
      'Because b might be zero',
      'Because integers cannot form pairs'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'If rationals were just pairs, then (2, 3) ≠ (4, 6) since they are different pairs, even though 2/3 and 4/6 represent the same rational number.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the equivalence relation used to define rationals?',
    options: [
      '(a, b) ≡ (c, d) ⟺ a = c and b = d',
      '(a, b) ≡ (c, d) ⟺ a + d = b + c',
      '(a, b) ≡ (c, d) ⟺ ad = bc',
      '(a, b) ≡ (c, d) ⟺ ab = cd',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Two pairs (a, b) and (c, d) are equivalent if and only if ad = bc. This corresponds to the familiar "cross-multiplication" test for equal fractions.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is a ratio (rational number) formally defined as?',
    options: [
      'A pair of integers',
      'A real number with finite decimal expansion',
      'The quotient of two natural numbers',
      'An equivalence class of pairs',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'A ratio a/b is formally defined as the equivalence class of (a, b)—the set of all pairs (c, d) with d ≠ 0 such that ad = bc.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What formula defines addition of rationals a/b + c/d?',
    options: [
      '(a + c)/(b + d)',
      '(ac)/(bd)',
      '(ad + bc)/(bd)',
      '(a + c)/(bd)',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Addition of rationals is defined as a/b + c/d = (ad + bc)/(bd). This is the familiar "common denominator" formula.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why is bd ≠ 0 guaranteed when computing a/b + c/d?',
    options: [
      'Because we are in an integral domain (no zero divisors)',
      'Because addition always preserves non-zero values',
      'Because we only consider positive integers',
      'Because b and d are always the same'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Since ℤ is an integral domain, it has no zero divisors. If b ≠ 0 and d ≠ 0, then bd ≠ 0. This is essential for the operations to be well-defined.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What does "well-defined" mean for operations on rationals?',
    options: [
      'The operation gives the same result regardless of representative choice',
      'The operation always produces an integer',
      'The operation is commutative',
      'The operation never produces zero',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'An operation is well-defined if the result depends only on the equivalence class, not on which representative pair we choose. For example, 2/3 + 1/2 must equal 4/6 + 1/2.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What is the multiplicative inverse of a/b in ℚ (assuming a ≠ 0)?',
    options: [
      '−a/b',
      'b/a',
      'a/b',
      '1/(ab)',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'The multiplicative inverse of a/b is b/a, since (a/b) · (b/a) = (ab)/(ba) = 1/1 = 1.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What is the field of quotients of an integral domain?',
    options: [
      'The set of all quotients of elements',
      'A field constructed using the same equivalence relation method as ℚ from ℤ',
      'The largest subfield of the domain',
      'The set of all field elements that divide zero',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'The field of quotients is constructed from any integral domain using the same equivalence class construction that produces ℚ from ℤ. Every integral domain can be embedded in its field of quotients.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'How is ℤ embedded in ℚ?',
    options: [
      'By the map a ↦ a/a',
      'By the map a ↦ a/0',
      'By the map a ↦ 1/a',
      'By the map a ↦ a/1'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'The embedding h: ℤ → ℚ is defined by h(a) = a/1. This is a homomorphism (preserves operations) and is injective, so h(ℤ) is isomorphic to ℤ.',
  },
];
