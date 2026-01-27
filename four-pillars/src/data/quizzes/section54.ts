import type { QuizQuestion } from './types';

export const section54Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The regular tetrahedron has how many rotational symmetries?',
    options: [
      '4',
      '12',
      '8',
      '24'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The tetrahedron has 12 rotations: 1 identity, 8 face rotations, and 3 edge rotations.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The rotation group of the tetrahedron is isomorphic to:',
    options: [
      'The cyclic group $\\mathbb{Z}_{12}$',
      'The symmetric group $S_4$',
      'The alternating group $A_4$',
      'The dihedral group $D_{12}$'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Rotations give even permutations of the 4 vertices, so the group is A₄.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The 24 unit quaternions for the tetrahedron include:',
    options: [
      'Only ±1, ±i, ±j, ±k',
      'Only quaternions with integer coefficients',
      '48 quaternions total',
      '±1, ±i, ±j, ±k and 16 quaternions of the form ½(±1 ± i ± j ± k)'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The 24 quaternions are: 8 of the form ±1, ±i, ±j, ±k, and 16 of the form ½(±1 ± i ± j ± k) with even sign changes.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The 24 unit quaternions for the tetrahedron form the vertices of:',
    options: [
      'The 24-cell',
      'A 4D cube',
      'A 4D tetrahedron',
      'The 600-cell'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The 24 quaternions are the vertices of the 24-cell, a regular 4D polytope.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The rotation group of the cube has how many elements?',
    options: [
      '12',
      '24',
      '48',
      '60'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The cube has 24 rotational symmetries, isomorphic to S₄.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The cube and octahedron have the same rotation group because they are:',
    options: [
      'Congruent',
      'Similar',
      'Dual polyhedra',
      'Both have 6 faces'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Dual polyhedra have vertices corresponding to face centers, so their symmetry groups are identical.',
  },
];
