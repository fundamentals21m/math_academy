import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 60: More about Gödel's Theorems
 */
export const section60Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is ω-consistency?',
    options: [
      'If A(Sⁿ0) is provable for each n, then ¬∀y A(y) is not provable',
      'A language where every formula has a proof',
      'A language where consistency can be proved internally',
      'A language with no undecidable statements',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'A language L is ω-consistent if: for any formula A(x), if A(Sⁿ0) is provable for each natural number n, then it is NOT the case that ⊢ ¬∀y∈N A(y). This is a stronger condition than plain consistency.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the relationship between ω-consistency and consistency?',
    options: [
      'Consistency implies ω-consistency',
      'They are equivalent',
      'They are unrelated',
      'ω-consistency implies consistency',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'ω-consistency implies consistency. ω-consistency is a stronger condition, so any ω-consistent system is also consistent (but not necessarily vice versa).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What did Rosser prove about the incompleteness theorem?',
    options: [
      'It applies only to arithmetic',
      'ω-consistency can be replaced by plain consistency',
      'The theorem is false for type theory',
      'All undecidable statements can be eliminated',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Rosser showed that ω-consistency in the incompleteness theorem can be replaced by plain consistency. His proof is short but tricky.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is a statement called if neither it nor its negation is provable?',
    options: [
      'Inconsistent',
      'Incomplete',
      'Undecidable',
      'Trivial',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'A statement is called undecidable relative to a language if neither it nor its negation is provable in that language.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Can we eliminate all undecidable statements by adding finitely many new axioms?',
    options: [
      'Yes, adding the Gödel sentence as an axiom works',
      'Yes, but only for arithmetic',
      'No, because axioms cannot be added to formal systems',
      'No, new undecidable statements will always arise',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      "There is no way to eliminate all undecidable statements by adding finitely many axioms. If we add Sᵍ0 ∈ αg as an axiom, there will still be a g' such that Sᵍ'0 ∈ αg' is undecidable. Incompleteness is inherent.",
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: "What does Gödel's Second Incompleteness Theorem state?",
    options: [
      'Every system has a finite model',
      'A consistent system cannot prove its own consistency',
      'Consistency implies completeness',
      'All formulas are decidable',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      "Gödel's Second Incompleteness Theorem states that if L is consistent, then L cannot prove its own consistency. That is, if Cons is a formula expressing L's consistency, then ⊬ Cons.",
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: "What was Hilbert's second problem?",
    options: [
      'To classify all mathematical structures',
      'To find all prime numbers',
      'To prove the consistency of arithmetic using only formal arithmetic',
      'To define the real numbers',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      "Hilbert's second problem was to prove the consistency of arithmetic using only formal arithmetic itself. Gödel's Second Incompleteness Theorem shows this is impossible.",
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'According to the formalist view, what does Gödel\'s theorem show?',
    options: [
      'Mathematics is a game with symbols',
      'All statements are either true or false',
      'Consistency can be proved externally',
      'Truth cannot be captured by provability',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      "For formalists, Gödel's result is devastating: it shows that the consistency of arithmetic cannot be demonstrated within arithmetic, and the idea of truth cannot be captured by provability alone.",
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'Why do intuitionists find Gödel\'s Incompleteness Theorem "not unwelcome"?',
    options: [
      'It confirms their belief that some statements are neither true nor false',
      'It proves their philosophy wrong',
      'It shows that mathematics is complete',
      'It eliminates the need for constructive proofs',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Intuitionists equate "true" with "provable." They already maintain that some statements are neither true nor false. Gödel\'s result merely confirms this belief by showing there are statements which are neither provable nor disprovable.',
  },
];
