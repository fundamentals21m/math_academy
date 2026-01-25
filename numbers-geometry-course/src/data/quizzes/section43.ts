import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 43: Additive Functions
 */
export const section43Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is an additive function?',
    options: [
      'A function that adds numbers',
      'A function that is always positive',
      'A function satisfying f(α + β) = f(α) + f(β)',
      'A function defined only on integers',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'An additive function f satisfies the functional equation f(α + β) = f(α) + f(β) for all α and β in its domain.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question:
      'The simplest additive functions from ℝ to ℝ are f(x) = kx. Why doesn\'t this help for the Dehn invariant?',
    options: [
      'They are too complicated',
      'They do help directly',
      'They are not continuous',
      'If f(π) = 0, then k = 0, giving only the zero function',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'For the Dehn invariant we need f(π) = 0. If f(x) = kx, then kπ = 0 implies k = 0, so f is identically zero—not useful!',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What does "rationally independent" mean for a set of numbers?',
    options: [
      'No nontrivial rational linear combination equals zero',
      'They are all irrational',
      'They have no common factors',
      'They are all independent random variables',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Numbers β₁, ..., βₙ are rationally independent if r₁β₁ + ... + rₙβₙ = 0 (with rational rᵢ) implies all rᵢ = 0.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is a "basis over ℚ" for a finite set S of reals?',
    options: [
      'The smallest element of S',
      'A set of rationally independent numbers that generate S via rational combinations',
      'The GCD of elements of S',
      'The average of S',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'A basis over ℚ for S is a rationally independent set {β₁, ..., βₙ} such that every element of S is a rational combination of the βᵢ.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question:
      'If α and π are rationally independent, what can we say about l ⊗ α?',
    options: [
      'It equals l × α',
      'It is nonzero whenever l ≠ 0',
      'It equals 0',
      'It depends on the cube',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The Rational Independence Theorem: if α and π are rationally independent, then l ⊗ α = 0 only if l = 0.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question:
      'Can a √2 × (1/√2) rectangle be converted to a 1 × 1 square by horizontal and vertical cuts?',
    options: [
      'No, because √2 and 1 are rationally independent',
      'Yes, because they have the same area',
      'Yes, with exactly 4 cuts',
      'It depends on the starting orientation',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'Though they have equal area, the tensor √2 ⊗ (1/√2) ≠ 1 ⊗ 1 in ℝ ⊗ ℝ because √2 and 1 are rationally independent.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question:
      'Why is the Rational Independence Theorem crucial for Hilbert\'s Third Problem?',
    options: [
      'It calculates volumes',
      'It proves all polyhedra are equidecomposable',
      'It defines the tetrahedron',
      'It links number theory (rational independence) to geometry (equidecomposability)',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'The theorem bridges number theory and geometry: if the tetrahedron\'s dihedral angle is rationally independent of π, its Dehn invariant is nonzero.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question:
      'What property makes the construction of bases over ℚ possible for any finite set?',
    options: [
      'All finite sets are countable',
      'The set must contain π',
      'We can select rationally independent elements one at a time',
      'Finite sets have finitely many subsets',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Starting with any element, we add elements that are rationally independent of previous choices until all elements are rational combinations of the basis.',
  },
];
