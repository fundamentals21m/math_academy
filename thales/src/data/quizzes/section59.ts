import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 59: Proof of Gödel's Incompleteness Theorem
 */
export const section59Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: "What does Gödel's Lemma state about recursive relations?",
    options: [
      'Recursive relations cannot be expressed in formal languages',
      'Recursive relations can be represented by formulas that prove or disprove instances',
      'Recursive relations are always decidable in polynomial time',
      'Recursive relations are equivalent to computable functions',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      "Gödel's Lemma states that if R(m,n) is a recursive relation, there is a formula F(x,y) such that: if R(m,n) then ⊢ F(Sᵐ0, Sⁿ0), and if not R(m,n) then ⊢ ¬F(Sᵐ0, Sⁿ0).",
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why can all proofs in L be enumerated?',
    options: [
      'There are only finitely many proofs',
      'Proofs are finite sequences of formulas, and finite strings are countable',
      'Proofs can be sorted alphabetically',
      'The axiom of choice guarantees enumeration',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Proofs are finite sequences of formulas. Since there are only countably many finite strings of symbols, there are only countably many proofs. We can enumerate them as P₁, P₂, P₃, ...',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the relation R(m, n) in the proof?',
    options: [
      'm is less than n',
      'Pₙ is a proof of Sᵐ0 ∈ αₘ',
      'm and n are coprime',
      'The mth formula implies the nth formula',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'R(m, n) is defined as: "Pₙ is a proof of the formula Sᵐ0 ∈ αₘ". This relation is recursive because we can decide whether it holds by checking if Sᵐ0 ∈ αₘ is the last line of proof Pₙ.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the Gödel set αg constructed as?',
    options: [
      '{x ∈ N | x is prime}',
      '{x ∈ N | ∃y F(x, y)}',
      '{x ∈ N | ¬∃y F(x, y)}',
      '{x ∈ N | x = g}',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The Gödel set is αg = {x ∈ N | ¬∃y∈N F(x, y)}. This set contains numbers x such that there is no y for which F(x, y) holds—meaning numbers whose membership statement has no proof.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What does the formula Sᵍ0 ∈ αg intuitively express?',
    options: [
      'g is a natural number',
      'g is a prime number',
      'This formula is not provable',
      'g is the largest number',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'By the construction, Sᵍ0 ∈ αg is equivalent to ¬∃y F(Sᵍ0, y), which means "there is no proof of Sᵍ0 ∈ αg". So the formula says "I am not provable"—this is the self-referential Gödel sentence.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What happens if we assume Sᵍ0 ∈ αg is provable?',
    options: [
      'We get a valid proof of consistency',
      'We derive both the formula and its negation, contradicting consistency',
      'We prove that L has a model',
      'We prove that all formulas are decidable',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'If Sᵍ0 ∈ αg were provable, some Pₙ proves it, so R(g,n) holds, so ⊢ F(Sᵍ0, Sⁿ0), so ⊢ ∃y F(Sᵍ0, y), which means ⊢ ¬Sᵍ0 ∈ αg. This contradicts our assumption that ⊢ Sᵍ0 ∈ αg.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'From the result (*) that for all n, ⊢ ¬F(Sᵍ0, Sⁿ0), what can we conclude in ω-complete models?',
    options: [
      '∃y F(Sᵍ0, y) is true',
      '∀y ¬F(Sᵍ0, y) is true',
      'F is not a valid formula',
      'The model is inconsistent',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'By soundness, ¬F(Sᵍ0, Sⁿ0) is true for all n in all models. In an ω-complete model, if A(Sⁿ0) is true for each n, then ∀x A(x) is true. Hence ∀y ¬F(Sᵍ0, y) is true in any ω-complete model.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What inference is used to go from ∀y ¬G(y) to ¬∃y G(y)?',
    options: [
      'Modus ponens',
      'An inference valid even in intuitionistic logic',
      'Double negation elimination',
      'The axiom of choice',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Even intuitionistic logic allows us to infer ¬∃y G(y) from ∀y ¬G(y). This inference does not require classical principles like the law of excluded middle or double negation elimination.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'What is the final conclusion of Theorem 29.2?',
    options: [
      'L is inconsistent',
      'There is a formula true in ω-complete models but not provable in L',
      'All formulas are decidable',
      'L has no models',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      "Theorem 29.2 (Gödel's Incompleteness - Semantic Version) states: If L is consistent, there is a formula (namely Sᵍ0 ∈ αg) which is true in any ω-complete model but not provable in L.",
  },
];
