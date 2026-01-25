import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 42: The Dehn Invariant
 */
export const section42Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the Dehn invariant of a polyhedron?',
    options: [
      'Its volume',
      'A sum of edge lengths tensored with dihedral angles',
      'Its surface area',
      'The number of vertices',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'The Dehn invariant is D(S) = Σ lᵢ ⊗ αᵢ, where lᵢ are edge lengths and αᵢ are the corresponding dihedral angles.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'According to Rule 3, what is l ⊗ π?',
    options: [
      '0',
      'l',
      'π',
      'lπ',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'Rule 3 states l ⊗ π = 0, because an edge with dihedral angle π is not a real edge—the faces are coplanar.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the Dehn invariant of a unit cube?',
    options: [
      '12',
      'π/2',
      '0',
      '6π',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The cube has 12 edges with angle π/2, giving 12 ⊗ π/2. But two copies of 1 ⊗ π/2 sum to 1 ⊗ π = 0, so the total is 0.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question:
      'If two polyhedra have different Dehn invariants, what can we conclude?',
    options: [
      'They cannot be cut and pasted into each other',
      'They have different volumes',
      'They have different surface areas',
      'Nothing can be concluded',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'The Dehn invariant is preserved under cutting and pasting. Different invariants means equidecomposability is impossible.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question:
      'What does Rule 1 (l ⊗ (α + β) = l ⊗ α + l ⊗ β) describe geometrically?',
    options: [
      'Cutting an edge in half',
      'Rotating the polyhedron',
      'Measuring the volume',
      'Cutting along an edge, splitting a dihedral angle',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Rule 1 describes what happens when a cut is made along an edge, splitting its dihedral angle α + β into two angles α and β.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question:
      'The mathematical objects l ⊗ α obeying Rules 1 and 2 are called:',
    options: [
      'Vectors',
      'Matrices',
      'Tensors',
      'Polynomials',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'These objects are called tensors. The set of them forms a tensor product, denoted ℝ ⊗ ℝ/πℤ.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What does the notation ℝ/πℤ represent?',
    options: [
      'The real numbers divided by π',
      'Rational numbers',
      'Complex numbers',
      'Angles where we treat π as equivalent to 0',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'ℝ/πℤ is the set of real numbers where π = 0 (and hence all integer multiples of π equal 0). It represents angles modulo π.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question:
      'Why is the Dehn invariant called an "invariant"?',
    options: [
      'It varies with temperature',
      'It stays the same under cutting and pasting',
      'It is always equal to 0',
      'It was invented by a mathematician named Invariant',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'An invariant is a quantity that does not change under certain transformations. The Dehn invariant is unchanged by cutting and pasting.',
  },
];
