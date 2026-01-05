import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 58: Gödel's Theorems
 */
export const section58Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'When did Gödel prove his incompleteness theorem?',
    options: ['1920', '1930', '1931', '1950'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Gödel proved his incompleteness theorem in 1931. In 1930, he had proved a completeness theorem for the predicate calculus.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does it mean for a formal language to be consistent?',
    options: [
      'All formulas are provable',
      'No formula is provable',
      'There is no proof of a contradiction (⊥)',
      'Every statement has exactly one proof',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'A formal language is consistent if there is no proof whose last line is ⊥ (falsehood). In other words, a consistent language does not contain a proof of a contradiction.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: "What does Gödel's Completeness Theorem state?",
    options: [
      'Every formula is provable',
      'A formula is provable if and only if it is true in all models',
      'Every consistent system has a finite model',
      'No system can prove its own consistency',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      "Gödel's Completeness Theorem states that a formula is provable in L if and only if it is true under all possible interpretations of the nonlogical symbols in L, i.e., in all models of L.",
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is an ω-complete model?',
    options: [
      'A model where every formula is either true or false',
      'A model where A(Sⁿ0) true for all n implies ∀x A(x) is true',
      'A model with infinitely many elements',
      'A model that satisfies all axioms',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'A model is ω-complete if, for any formula A(x), whenever A(Sⁿ0) is true in that model for each natural number n, then ∀x∈N A(x) is also true in that model.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: "What does Gödel's Incompleteness Theorem state?",
    options: [
      'No formal language can describe arithmetic',
      'There is a formula true in all ω-complete models but not provable in L',
      'All arithmetic statements are decidable',
      'Consistency implies completeness',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      "Gödel's Incompleteness Theorem states that there is a formula in L which is true in any ω-complete model, but not provable in L, assuming L is consistent. This shows the existence of true but unprovable statements.",
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: "What philosophical view did Gödel himself hold?",
    options: ['Formalism', 'Intuitionism', 'Platonism', 'Constructivism'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Gödel was a Platonist. He saw truth as a property of an eternal, immutable reality independent of finite human minds. He believed that his incompleteness theorem showed there are formulas that are eternally true but not provable.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What does the Gödel sentence G essentially say?',
    options: [
      '"This sentence is true"',
      '"This sentence is false"',
      '"This sentence is not provable"',
      '"This sentence contradicts itself"',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The Gödel sentence G essentially says "This sentence is not provable in L." If G were provable, it would be true (by soundness), but then what it says would be false—a contradiction. So G is not provable, which makes it true but unprovable.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'From the intuitionist point of view, why is ω-completeness not assumed?',
    options: [
      'ω-completeness requires infinite proofs',
      'Proving A(Sⁿ0) for each n does not guarantee a proof of ∀x A(x)',
      'Intuitionists reject the natural numbers',
      'ω-completeness is inconsistent',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'For intuitionists, truth equals provability. Even if A(Sⁿ0) has a proof for each n, this does not guarantee that ∀x∈N A(x) has a proof. Hence intuitionists have no particular reason to think of the world as ω-complete.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: "What is the relationship between Gödel's Completeness and Incompleteness theorems?",
    options: [
      'They contradict each other',
      'Incompleteness implies that some models are not ω-complete',
      'Completeness implies incompleteness',
      'They apply to different mathematical systems',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      "Combining the Completeness Theorem (provable iff true in all models) with the Incompleteness Theorem (some formulas are true in ω-complete models but not provable), we conclude that some models are not ω-complete.",
  },
];
