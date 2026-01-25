import type { QuizQuestion } from './types';

export const section35Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'For a Hermitian operator, eigenvectors corresponding to distinct eigenvalues are:',
    options: [
      'Orthogonal',
      'Parallel',
      'Linearly dependent',
      'Equal in magnitude',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'If $T$ is Hermitian with distinct eigenvalues $\\lambda \\neq \\mu$ and eigenvectors $x, y$, then $(\\lambda - \\mu)(x, y) = 0$. Since $\\lambda \\neq \\mu$, we have $(x, y) = 0$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The orthogonality theorem for Hermitian operators applies to:',
    options: [
      'Only eigenvectors with the same eigenvalue',
      'Eigenvectors corresponding to distinct eigenvalues',
      'All eigenvectors',
      'Only unit eigenvectors',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The theorem guarantees orthogonality specifically for eigenvectors with different eigenvalues. Eigenvectors for the same eigenvalue need not be orthogonal.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The orthogonality relation $\\int_0^\\pi \\sin nt \\cdot \\sin mt\\, dt = 0$ for $m \\neq n$ follows from:',
    options: [
      'The Sturm-Liouville operator being Hermitian',
      'The functions being bounded',
      'The interval being finite',
      'The Sturm-Liouville operator being symmetric',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The functions $\\sin nt$ are eigenfunctions of the Sturm-Liouville operator with distinct eigenvalues $-n^2$. Since this operator is symmetric, the orthogonality theorem applies.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Geometrically, a Hermitian operator stretches space along:',
    options: [
      'Random directions',
      'A single direction',
      'Mutually perpendicular axes defined by eigenvectors',
      'Parallel lines'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Eigenvectors of Hermitian operators are orthogonal, defining perpendicular principal axes. Each eigenvalue gives the stretch factor along its axis.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The orthogonality of eigenvectors for Hermitian operators is stronger than linear independence because:',
    options: [
      'Orthogonal vectors are always unit vectors',
      'Orthogonal vectors have the same eigenvalue',
      'Orthogonal vectors provide a geometrically nice basis',
      'Orthogonal vectors are always real',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'While any set of eigenvectors for distinct eigenvalues is linearly independent, orthogonality ensures they span the space in a geometrically nice way that simplifies computations.',
  },
];
