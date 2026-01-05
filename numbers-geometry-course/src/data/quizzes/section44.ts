import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 44: The Tetrahedron and the Cube
 */
export const section44Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: "What is Dehn's Theorem?",
    options: [
      'All polyhedra of equal volume are equidecomposable',
      'The regular tetrahedron is not equidecomposable with the cube',
      'The cube has the largest volume among polyhedra',
      'All dihedral angles are rational multiples of π',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      "Dehn's Theorem states that the regular tetrahedron cannot be cut into finitely many pieces and reassembled into a cube.",
  },
  {
    id: 2,
    type: 'multiple-choice',
    question:
      'What key property must be proved about the tetrahedron\'s dihedral angle α?',
    options: [
      'cos α = 0',
      'α is a rational multiple of π',
      'α is NOT a rational multiple of π',
      'α = π/4',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'We must prove α is not a rational multiple of π. This ensures the Dehn invariant 6 ⊗ α ≠ 0.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question:
      'In the inductive proof, what form does cos(nα) take?',
    options: [
      'An integer',
      'qₙ/3ⁿ where qₙ is not divisible by 3',
      'A power of 2',
      'nπ',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The induction proves cos(nα) = qₙ/3ⁿ where qₙ is an integer not divisible by 3, for all positive integers n.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question:
      'What identity is used in the inductive step?',
    options: [
      'sin²α + cos²α = 1',
      'cos((k+1)α) + cos((k-1)α) = 2cos(kα)cos(α)',
      'tan(α) = sin(α)/cos(α)',
      'e^(iα) = cos(α) + i sin(α)',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'Adding the cosine addition formulas for cos((k+1)α) and cos((k-1)α) gives this identity.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question:
      'Why is qₖ₊₁ = 2qₖ - 9qₖ₋₁ not divisible by 3?',
    options: [
      'Because 9 is divisible by 3',
      'Because 2qₖ is not divisible by 3, while 9qₖ₋₁ is',
      'Because qₖ₊₁ is always odd',
      'By definition of divisibility',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      '9qₖ₋₁ is divisible by 3, but 2qₖ is not (since qₖ is not divisible by 3). The difference of a multiple of 3 and a non-multiple is not a multiple of 3.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question:
      'If α were a rational multiple of π (say α = mπ/n), what would cos(nα) equal?',
    options: [
      '1/3',
      '0',
      '±1',
      'n'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'If α = mπ/n, then nα = mπ, so cos(nα) = cos(mπ) = ±1 depending on whether m is even or odd.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question:
      'What three mathematical areas combine in the proof of Dehn\'s Theorem?',
    options: [
      'Calculus, statistics, combinatorics',
      'Trigonometry, number theory, abstract algebra',
      'Geometry, probability, analysis',
      'Linear algebra, topology, logic',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      "The proof uses the cosine addition formula (trigonometry), divisibility arguments (number theory), and tensor products (abstract algebra).",
  },
  {
    id: 8,
    type: 'multiple-choice',
    question:
      'What is the Dehn invariant of the regular tetrahedron with unit edges?',
    options: [
      '0',
      '6 ⊗ α where cos(α) = 1/3',
      '12 ⊗ π/2',
      '4 ⊗ π/3',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The tetrahedron has 6 edges of length 1, each with dihedral angle α where cos(α) = 1/3. So D = 6 ⊗ α.',
  },
];
