import type { QuizQuestion } from './types';

export const section30Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Hilbert\'s axiomatization of Euclidean geometry uses approximately:',
    options: [
      '5 axioms',
      '50 axioms',
      '10 axioms',
      '17 axioms'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Hilbert used 17 axioms (or 16 without completeness).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The axioms for a field include:',
    options: [
      'Only addition laws',
      'Commutative, associative, distributive, identity, and inverse laws',
      'Only the commutative law',
      'Only multiplication laws',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A field requires laws for both addition and multiplication operations.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A full axiomatization of Euclidean vector spaces requires:',
    options: [
      'More than 20 axioms',
      'Fewer than 10 axioms',
      'No axioms at all',
      'Exactly 17 axioms',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Vector space axioms (8) + inner product axioms (3-4) + field axioms (9) + cosine formula exceeds 20.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The advantage of the vector space approach over Hilbert\'s axioms is:',
    options: [
      'It avoids using real numbers',
      'Fewer axioms',
      'The axioms have broader applications in mathematics',
      'It is more intuitive'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Field and vector space axioms are fundamental throughout mathematics.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Minkowski space, used in special relativity, differs from Euclidean space in its:',
    options: [
      'Vector addition',
      'Inner product',
      'Field of scalars',
      'Scalar multiplication',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Minkowski space uses a different (indefinite) inner product but the same vector operations.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Which chapter will develop geometry from a simpler set of axioms?',
    options: [
      'Chapter 6 (Projective Geometry)',
      'Chapter 5 (Perspective)',
      'Chapter 4 (Vectors)',
      'Chapter 3 (Coordinates)'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Projective geometry offers a simpler axiomatic foundation for geometry.',
  },
];
