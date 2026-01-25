import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 43: Cardinal Arithmetic
 */
export const section43Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What set operation corresponds to multiplication of cardinalities?',
    options: [
      'Disjoint union',
      'Cartesian product',
      'Intersection',
      'Power set',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'The Cartesian product A × B corresponds to multiplication: |A × B| = |A| × |B|. For finite sets, the number of pairs is the product of the sizes.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the disjoint union A + B defined as?',
    options: [
      '(A × {0}) ∪ (B × {1})',
      'A × B',
      'A ∪ B',
      'P(A ∪ B)',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'The disjoint union A + B = (A × {0}) ∪ (B × {1}) ensures elements from A and B are kept distinct by tagging them with 0 or 1.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is ℵ₀ + ℵ₀?',
    options: [
      '2ℵ₀',
      'ℵ₀',
      'ℵ₁',
      '2^ℵ₀',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'ℵ₀ + ℵ₀ = ℵ₀. The union of two countably infinite sets (like even and odd numbers) is still countably infinite.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is ℵ₀ × ℵ₀?',
    options: [
      'ℵ₀',
      'ℵ₀²',
      '2^ℵ₀',
      'ℵ₁',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'ℵ₀ × ℵ₀ = ℵ₀. The set ℕ × ℕ can be enumerated by diagonals, showing it has the same cardinality as ℕ.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is "currying" in the context of set theory?',
    options: [
      'The power set operation',
      'Adding infinite cardinals',
      'The isomorphism (A^B)^C ≅ A^(C×B)',
      'The diagonal argument',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Currying is the isomorphism (A^B)^C ≅ A^(C×B), which transforms a function returning functions into a function of two arguments. Named after logician Haskell B. Curry.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What does A^B represent in set theory?',
    options: [
      'A raised to the power B numerically',
      'The set of all functions from B to A',
      'The Cartesian product of A and B',
      'The power set of A ∪ B',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'A^B = {f | f : B → A} is the set of all functions from B to A. Its cardinality is |A|^|B|.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Why does P(A) ≅ 2^A?',
    options: [
      'Because power sets double in size',
      'Because there are 2 subsets for each element',
      'Because of Cantor\\\'s theorem',
      'Because each subset corresponds to a characteristic function A → {0,1}',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Each subset S ⊆ A corresponds to its characteristic function χ_S : A → {0,1}, where χ_S(x) = 1 iff x ∈ S. This gives a bijection P(A) ≅ 2^A.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What is A × 0 (A times the empty set)?',
    options: [
      'A',
      '1',
      'Undefined',
      '0 (empty set)',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'A × ∅ = ∅ because there are no elements b in ∅ to form pairs (a,b). This is the annihilation property.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'What is ℵ₀^ℵ₀ equal to?',
    options: [
      'ℵ₀',
      'ℵ₁',
      '2^ℵ₀',
      'It cannot be determined',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'ℵ₀^ℵ₀ = 2^ℵ₀. The set of all sequences of natural numbers has the same cardinality as the power set of ℕ. This follows from the Schroeder-Bernstein theorem.',
  },
];
