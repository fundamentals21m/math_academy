import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 35: The Real Numbers
 */
export const section35Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What are the two well-known ways of constructing the reals from the rationals?',
    options: [
      'Peano axioms and field axioms',
      'Dedekind cuts and Cauchy sequences',
      'Equivalence classes and quotient rings',
      'Matrix representations and polynomial rings',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'The two classic constructions are Dedekind cuts (due to Eudoxus/Dedekind) and Cauchy sequences (preferred by analysts).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is a Dedekind cut?',
    options: [
      'A sequence of rationals converging to a real',
      'A pair (L, U) of sets of rationals below and above a real number',
      'A polynomial with rational coefficients',
      'An almost linear mapping from ℤ to ℤ',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'A Dedekind cut is a pair (L, U) where L contains all rationals below a real number and U contains all rationals above it. This defines the real number without mentioning it explicitly.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is a Cauchy sequence?',
    options: [
      'A sequence where |aₘ - aₙ| can be made arbitrarily small for large m, n',
      'A sequence where consecutive terms differ by a constant',
      'A sequence that is always increasing',
      'A sequence of integers only',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'A Cauchy sequence is one where the terms get arbitrarily close to each other: |aₘ - aₙ| can be made as small as desired by taking m and n sufficiently large.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which ancient mathematician\'s work anticipated the idea behind Dedekind cuts?',
    options: [
      'Eudoxus',
      'Euclid',
      'Pythagoras',
      'Archimedes',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'Eudoxus, a member of Plato\'s Academy, developed a theory of proportions for geometric quantities that can be interpreted as defining equality of real numbers via the rationals below and above them.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What defines an ordered field?',
    options: [
      'A field with a total ordering on its elements',
      'A field that is also a ring',
      'A field where every element has an inverse',
      'A field with a subset P (positives) closed under + and · with trichotomy',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'An ordered field has a subset P (positive elements) such that: (1) P is closed under addition, (2) P is closed under multiplication, and (3) for each x, exactly one holds: x = 0, x ∈ P, or -x ∈ P.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Why can the complex numbers ℂ not be ordered?',
    options: [
      'Because there are infinitely many complex numbers',
      'Because we cannot consistently classify i as positive or negative',
      'Because they have no additive identity',
      'Because multiplication is not commutative',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'If i ∈ P, then -1 = i·i ∈ P, contradicting 1 ∈ P. If -i ∈ P, then -1 = (-i)(-i) ∈ P, same contradiction. So neither i nor -i can be in P, violating the trichotomy axiom.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What does it mean for an ordered field to be complete?',
    options: [
      'Every polynomial has a root',
      'Every element has a multiplicative inverse',
      'Every nonempty set of positive elements has a greatest lower bound',
      'Every Cauchy sequence has rational terms',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'An ordered field is complete if every nonempty set of positive elements has a greatest lower bound (infimum). This is the property that distinguishes ℝ from ℚ.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'Why is ℚ not a complete ordered field?',
    options: [
      'Because ℚ is not ordered',
      'Because ℚ has zero divisors',
      'Because ℚ is finite',
      'Because √2 is the infimum of a set of rationals but √2 ∉ ℚ',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      '√2 is the greatest lower bound of all positive rationals r with r² > 2. Since √2 is irrational, this infimum does not exist in ℚ, so ℚ is not complete.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'What is unique about ℝ among ordered fields?',
    options: [
      'It is the only ordered field',
      'It is the only field containing ℚ',
      'Any two complete ordered fields are isomorphic',
      'It is the only field with positive elements',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'The uniqueness theorem states that any two complete ordered fields are isomorphic. This means ℝ is essentially the only complete ordered field—it is uniquely characterized by its axioms.',
  },
];
