import type { QuizQuestion } from './types';

export const section62Questions: QuizQuestion[] = [
  // Easy questions
  {
    id: 's62-e01',
    type: 'multiple-choice',
    question: 'How many symmetries does a square have?',
    options: [
      '6',
      '4',
      '8',
      '12'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'A square has 8 symmetries: 4 rotations (including the identity) by 0°, 90°, 180°, and 270°, plus 4 reflections (across 2 diagonals and 2 lines through midpoints of opposite edges). This forms the dihedral group D₄.',
  },
  {
    id: 's62-e02',
    type: 'multiple-choice',
    question: 'The dihedral group $D_n$ has how many elements?',
    options: [
      '$n!$',
      '$n$',
      '$n^2$',
      '$2n$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'The dihedral group D_n (symmetries of a regular n-gon) has 2n elements: n rotations (including the identity) and n reflections.',
  },
  // Medium questions
  {
    id: 's62-m01',
    type: 'multiple-choice',
    question: 'The symmetry group of an equilateral triangle $D_3$ is isomorphic to:',
    options: [
      '$S_3$',
      '$S_4$',
      '$C_3$',
      '$A_3$',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'D₃ has 6 elements (3 rotations, 3 reflections), which is the same as |S₃| = 3! = 6. The groups are indeed isomorphic: each symmetry of the triangle corresponds to a permutation of its three vertices.',
  },
  {
    id: 's62-m02',
    type: 'multiple-choice',
    question: 'Klein\'s Erlangen Program proposes that geometry should be defined by:',
    options: [
      'The number of dimensions',
      'Its group of symmetry transformations',
      'The axioms it satisfies',
      'The shapes it contains'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Klein\'s revolutionary 1872 proposal was that a geometry is characterized by a group of transformations, and geometric properties are those invariant under the group. Different groups give different geometries (Euclidean, projective, etc.).',
  },
  // Hard questions
  {
    id: 's62-h01',
    type: 'multiple-choice',
    question: 'The rotation group of the icosahedron is isomorphic to:',
    options: [
      '$A_4$',
      '$S_5$',
      '$A_5$',
      '$D_{12}$'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'The icosahedron has 60 rotational symmetries, forming a group isomorphic to A₅ (the alternating group on 5 elements, which also has order 60). This connects the geometry of Platonic solids to the algebraic unsolvability of the quintic.',
  },
  {
    id: 's62-h02',
    type: 'multiple-choice',
    question: 'In 2D crystallography, which rotational symmetry orders are NOT allowed?',
    options: [
      '3 and 4',
      '2 and 3',
      '4 and 6',
      '5 and 7'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'The crystallographic restriction theorem states that 2D lattices can only have rotational symmetries of order 1, 2, 3, 4, or 6. Orders 5, 7, and higher are forbidden because regular pentagons and heptagons cannot tile the plane.',
  },
];
