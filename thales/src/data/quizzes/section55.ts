import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 55: How to Interpret Intuitionistic Logic
 */
export const section55Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does the BHK interpretation stand for?',
    options: [
      'Brouwer-Heyting-Kolmogorov',
      'Boolean-Hilbert-Kleene',
      'Boole-Henkin-Kripke',
      'Bishop-Howard-Curry',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'The BHK interpretation stands for Brouwer-Heyting-Kolmogorov. It explains intuitionistic logical connectives in terms of "reasons" or proofs for formulas.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In the BHK interpretation, what is a reason for A ∨ B?',
    options: [
      'A reason for A and a reason for B',
      'A reason for A or a reason for B',
      'A rule converting a reason for A into a reason for B',
      'There is exactly one reason',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'In the BHK interpretation, a reason for A ∨ B is a reason for A or a reason for B. This is why intuitionistic disjunction requires actually proving one of the disjuncts.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What set-theoretic operation corresponds to logical conjunction (∧)?',
    options: [
      'Disjoint union (A + B)',
      'Exponentiation (B^A)',
      'Power set (PA)',
      'Cartesian product (A × B)',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Logical conjunction A ∧ B corresponds to Cartesian product A × B. Just as a reason for A ∧ B is a pair of reasons, an element of A × B is a pair of elements.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What set-theoretic operation corresponds to implication (B ⇒ C)?',
    options: [
      'C × B',
      'C + B',
      'C − B',
      'C^B (function space)',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Implication B ⇒ C corresponds to the function space C^B. A reason for B ⇒ C is a rule converting reasons for B into reasons for C, just as an element of C^B is a function from B to C.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What does a deduction A ⊢ B correspond to in the set-theoretic interpretation?',
    options: [
      'A mapping A → B',
      'An isomorphism A ≅ B',
      'A subset A ⊆ B',
      'An identity A = B',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'A deduction A ⊢ B corresponds to a mapping (function) A → B. If we can deduce B from A, we have a way to transform any reason for A into a reason for B.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Which set-theoretic isomorphism corresponds to the currying equivalence A ⇒ (B ⇒ C) ⊣⊢ (A ∧ B) ⇒ C?',
    options: [
      'C^(A+B) ≅ C^A × C^B',
      '(A × B)^C ≅ A^C × B^C',
      '(C^B)^A ≅ C^(A×B)',
      'A^1 ≅ A',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'The currying equivalence A ⇒ (B ⇒ C) ⊣⊢ (A ∧ B) ⇒ C corresponds to (C^B)^A ≅ C^(A×B). This generalizes the arithmetic law (c^b)^a = c^(a×b).',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Why does the BHK interpretation not work for classical logic?',
    options: [
      'Classical logic allows proving A ∨ ¬A without proving A or ¬A',
      'Classical logic has no negation',
      'Classical logic uses different connectives',
      'Classical logic has no implication',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'In the BHK interpretation, a proof of A ∨ B requires a proof of A or a proof of B. But classically, A ∨ ¬A is provable by quoting the axiom of excluded middle, even when neither A nor ¬A can be proven (as with Gödel\'s sentence G).',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'The isomorphism C^(A+B) ≅ C^A × C^B generalizes which arithmetic law?',
    options: [
      '(a × b)^c = a^c × b^c',
      'c^(a+b) = c^a × c^b',
      '(c^b)^a = c^(a×b)',
      'a^0 = 1',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The set isomorphism C^(A+B) ≅ C^A × C^B generalizes the arithmetic law c^(a+b) = c^a × c^b. This corresponds to the logical equivalence (A ∨ B) ⇒ C ⊣⊢ (A ⇒ C) ∧ (B ⇒ C).',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'What is the "remarkable unity" that the chapter emphasizes?',
    options: [
      'All mathematicians agree on foundations',
      'Intuitionistic and classical logic are equivalent',
      'Logic, set theory, and arithmetic share the same algebraic structures',
      'All proofs can be made constructive',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'The chapter emphasizes the remarkable unity pervading logic, set theory, and arithmetic. The same algebraic structures (products, sums, exponentials) appear in all three domains, with logical operations corresponding to set operations and arithmetic laws.',
  },
];
