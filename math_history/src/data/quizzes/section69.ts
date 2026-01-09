import type { QuizQuestion } from './types';

export const section69Questions: QuizQuestion[] = [
  // Easy questions
  {
    id: 's69-e01',
    type: 'multiple-choice',
    question: 'Russell\'s paradox considers the set of all sets that:',
    options: [
      'Do not contain themselves',
      'Are infinite',
      'Contain only numbers',
      'Have exactly one element',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'Russell\'s paradox asks: does the set R = {x : x ∉ x} contain itself? If R ∈ R, then R ∉ R by definition. If R ∉ R, then R ∈ R. This contradiction shows "naive" set theory is inconsistent.',
  },
  {
    id: 's69-e02',
    type: 'multiple-choice',
    question: 'Axiomatic set theory (ZF) resolves paradoxes by:',
    options: [
      'Restricting how sets can be formed',
      'Allowing all possible sets',
      'Rejecting the concept of infinity',
      'Using only finite sets',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'Zermelo-Fraenkel set theory prevents paradoxes by carefully controlling which sets can exist. For example, the axiom of separation only allows forming subsets of existing sets, not arbitrary collections, preventing Russell\'s set from being formed.',
  },
  // Medium questions
  {
    id: 's69-m01',
    type: 'multiple-choice',
    question: 'The Axiom of Choice states that:',
    options: [
      'From any collection of nonempty sets, we can simultaneously choose one element from each',
      'Every set is finite',
      'All sets contain themselves',
      'There is exactly one infinite set',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'The Axiom of Choice (AC) asserts that given any collection of nonempty sets, a "choice function" exists that selects one element from each. AC is independent of ZF but widely accepted. ZFC = ZF + AC is the standard foundation.',
  },
  {
    id: 's69-m02',
    type: 'multiple-choice',
    question: 'Hilbert\'s program aimed to prove that mathematics is:',
    options: [
      'Consistent (free of contradictions) and complete (all truths provable)',
      'Based only on geometry',
      'Independent of logic',
      'Purely intuitive',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Hilbert\'s program sought to formalize mathematics and prove it consistent (no contradictions can be derived) and complete (every true statement is provable). Gödel later showed this program cannot fully succeed.',
  },
  // Hard questions
  {
    id: 's69-h01',
    type: 'multiple-choice',
    question: 'The Banach-Tarski paradox, which follows from the Axiom of Choice, states that:',
    options: [
      'A ball can be decomposed and reassembled into two balls of the same size',
      'All sets are countable',
      'Infinity doesn\'t exist',
      'The real numbers are countable',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'The Banach-Tarski paradox uses the Axiom of Choice to show a solid ball can be partitioned into finitely many pieces that can be rearranged (using only rotations and translations) into two balls identical to the original. This counterintuitive result shows AC has surprising consequences.',
  },
  {
    id: 's69-h02',
    type: 'multiple-choice',
    question: 'Intuitionism, as developed by Brouwer, rejects:',
    options: [
      'The law of excluded middle for infinite domains and non-constructive proofs',
      'All use of numbers',
      'The existence of finite sets',
      'All of Euclidean geometry',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'Brouwer\'s intuitionism holds that mathematical objects exist only when explicitly constructed. It rejects the law of excluded middle ("P or not P") for infinite domains and non-constructive existence proofs, leading to a more restrictive but philosophically motivated mathematics.',
  },
];
