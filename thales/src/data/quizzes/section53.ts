import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 53: Logic from Aristotle to Russell
 */
export const section53Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Who was the first to systematically study logic in the Western tradition?',
    options: [
      'Plato',
      'Euclid',
      'Pythagoras',
      'Aristotle',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'Aristotle (384–322 BC) was the first to write systematically about logic in the West. He recognized principles like double negation, excluded third, and contraposition, and his theory of syllogisms dominated logical thinking for two thousand years.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What logical innovation did the Stoics introduce around 200 BC?',
    options: [
      'Truth tables',
      'The syllogism',
      'Quantifiers (∀ and ∃)',
      'Type theory',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'The Stoics, particularly Philo of Megara, essentially introduced truth tables into logic, defining the truth values of compound propositions like p ∨ q and p ⇒ q. This anticipated Wittgenstein by over 2000 years.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In Aristotelian syllogisms, what does "SaP" mean?',
    options: [
      'No S are P',
      'Some S are P',
      'All S are P',
      'Some S are not P',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'In Aristotle\'s notation: SaP means "All S are P", SeP means "No S are P", SiP means "Some S are P", and SoP means "Some S are not P". The vowels a, e, i, o come from the Latin words "affirmo" and "nego".',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Who introduced the universal (∀) and existential (∃) quantifiers?',
    options: [
      'Frege',
      'Boole',
      'De Morgan',
      'Russell',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'Gottlob Frege (1848–1925) was the first to have a modern view of the universal (∀) and existential (∃) quantifiers. He attempted to reduce all mathematics to logic, a position called Logicism.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What did Russell\'s Paradox demonstrate?',
    options: [
      'That not all primes are odd',
      'That the continuum hypothesis is independent',
      'That Frege\'s comprehension scheme leads to a contradiction',
      'That every function has a fixed point'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Russell\'s Paradox (1901) showed that Frege\'s unrestricted comprehension scheme leads to contradiction. Consider the set y of all sets that don\'t contain themselves: y ∈ y ↔ ¬(y ∈ y), which is a contradiction.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Which of the following are De Morgan\'s Laws?',
    options: [
      'p × p = p',
      'p ∨ ¬p and ¬¬p ↔ p',
      '(p ⇒ q) ↔ (¬q ⇒ ¬p)',
      '¬(p ∧ q) = ¬p ∨ ¬q and ¬(p ∨ q) = ¬p ∧ ¬q'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'De Morgan\'s Laws state that ¬(p ∧ q) = ¬p ∨ ¬q and ¬(p ∨ q) = ¬p ∧ ¬q. These were formalized by Augustus De Morgan in 1847, along with Boole\'s work on symbolic logic.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'How did Russell and Whitehead avoid Russell\'s Paradox in Principia Mathematica?',
    options: [
      'By rejecting set theory entirely',
      'By introducing type theory where a ∈ b requires type(b) = type(a) + 1',
      'By allowing only finite sets',
      'By removing the law of excluded middle',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Russell and Whitehead\'s type theory forbids expressions like x ∈ x by assigning each symbol a type (a natural number). The expression a ∈ b is only permitted if the type of b is one higher than the type of a.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What did Kronecker object to in mathematical proofs?',
    options: [
      'The use of infinity',
      'All of the above',
      'Irrational numbers',
      'Nonconstructive arguments'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'Kronecker (1823–1891) objected to all of these. He said "God made the whole numbers, all the rest is the work of man." He rejected nonconstructive proofs that don\'t tell you which case holds, and was skeptical of irrational and infinite quantities.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'How does Zermelo-Fraenkel set theory avoid Russell\'s Paradox?',
    options: [
      'By requiring separation from an existing set: ∃y∀x(x ∈ y ↔ (x ∈ z ∧ P(x)))',
      'By forbidding all infinite sets',
      'By using only constructive proofs',
      'By eliminating the membership relation',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'Zermelo-Fraenkel set theory modifies comprehension to the axiom of separation: you can only form a subset of an existing set. Instead of ∃y∀x(x ∈ y ↔ P(x)), it requires ∀z∃y∀x(x ∈ y ↔ (x ∈ z ∧ P(x))). This prevents forming "the set of all sets not containing themselves."',
  },
];
