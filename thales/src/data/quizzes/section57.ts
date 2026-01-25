import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 57: Intuitionistic Type Theory
 */
export const section57Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What are the three basic types in intuitionistic type theory?',
    options: [
      'True, False, and Natural',
      'Set, Function, and Proposition',
      '1 (unit), Ω (truth values), and N (natural numbers)',
      'Integer, Real, and Complex'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'The three basic types are: 1 (the unit type with a single element), Ω (the type of truth values/propositions), and N (the type of natural numbers).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does PA represent in intuitionistic type theory?',
    options: [
      'Peano Arithmetic applied to A',
      'The power type (sets of entities of type A)',
      'The product of A with itself',
      'The partial functions on A',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'PA is the power type, representing the type of sets of entities of type A. It is one of the two type constructors (the other being A × B for product types).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'How is the logical connective ⊤ (truth) defined in type theory?',
    options: [
      '⊤ ≡ 1',
      '⊤ ≡ ∀x.x',
      '⊤ ≡ N',
      '⊤ ≡ * = *',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Truth is defined as * = *, where * is the unique element of the unit type 1. Since * is always equal to itself, this represents a tautology.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'How is conjunction (p ∧ q) defined in intuitionistic type theory?',
    options: [
      '⟨p, q⟩ = ⟨⊤, ⊤⟩',
      'p ⇒ q',
      '∀t∈Ω.t',
      '{x ∈ Ω | p}',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Conjunction is defined as p ∧ q ≡ ⟨p, q⟩ = ⟨⊤, ⊤⟩. The pair of propositions equals the pair of truths exactly when both p and q are true.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why must we avoid De Morgan\'s rules when defining logical symbols intuitionistically?',
    options: [
      'De Morgan\'s rules are computationally expensive',
      'De Morgan\'s rules create circular definitions',
      'De Morgan\'s rules are not valid in intuitionistic logic',
      'De Morgan\'s rules require the axiom of choice'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'De Morgan\'s rules (such as ¬(p ∨ q) ⟺ ¬p ∧ ¬q) are not valid intuitionistically. Making implicit use of them would introduce classical reasoning into the constructive framework.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'How is falsity (⊥) defined in intuitionistic type theory?',
    options: [
      '⊥ ≡ ∀t∈Ω.t (everything is true)',
      '⊥ ≡ * ≠ *',
      '⊥ ≡ 0',
      '⊥ ≡ ∅',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'Falsity is defined as ⊥ ≡ ∀t∈Ω.t, meaning "every proposition is true." This is a contradiction, since not every proposition can be true. This definition makes ⊥ a "negative" connective.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What rule of inference captures mathematical induction in type theory?',
    options: [
      'If φ(x) ⊢ φ(Sx) then φ(0) ⊢ ∀x.φ(x)',
      'If φ(0) then ∀x.φ(x)',
      'If ∀x.φ(x) then φ(0)',
      'If φ(x) ⊢{x} φ(Sx), then φ(0) ⊢{x} φ(x)',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'Mathematical induction states: if proving φ(x) allows us to prove φ(Sx), and we can prove φ(0), then we can prove φ(x) for any natural number x. The subscript {x} indicates that x is a free variable in the context.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'According to the chapter, what is the only source of nonconstructive proofs in arithmetic and analysis?',
    options: [
      'The law of excluded middle',
      'The axiom of choice',
      'Double negation elimination',
      'Proof by contradiction'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'As far as we know, the only proofs in arithmetic and analysis which are essentially nonconstructive depend on the axiom of choice, which asserts that for any nonempty collection of nonempty sets, there exists a set containing exactly one element from each.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'How many truth values does the type Ω have in intuitionistic type theory?',
    options: [
      'Exactly two (true and false)',
      'Exactly three (true, false, unknown)',
      'More than two (infinitely many)',
      'Zero (truth values are undefined)',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'In intuitionistic type theory, Ω has more than two truth values. Unlike classical logic where every proposition is either true or false, intuitionistic logic allows for propositions whose truth value is not yet determined.',
  },
];
