import type { QuizQuestion } from './types';

export const section49Questions: QuizQuestion[] = [
  // Easy questions
  {
    id: 's49-e01',
    type: 'multiple-choice',
    question: 'Noether\'s theorem connects:',
    options: [
      'Energy to mass',
      'Symmetries of a system to conserved quantities',
      'Position to velocity',
      'Force to acceleration',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Noether\'s theorem (1918) states that every continuous symmetry of the action corresponds to a conserved quantity. This deep result explains why conservation laws exist and predicts new ones from symmetries.',
  },
  {
    id: 's49-e02',
    type: 'multiple-choice',
    question: 'Energy conservation follows from which symmetry?',
    options: [
      'Time translation symmetry',
      'Space translation symmetry',
      'Rotational symmetry',
      'Reflection symmetry',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      'If the laws of physics are the same today as tomorrow (time translation symmetry), then energy is conserved. When the Lagrangian has no explicit time dependence, the Hamiltonian (total energy) is constant.',
  },
  // Medium questions
  {
    id: 's49-m01',
    type: 'multiple-choice',
    question: 'Conservation of linear momentum follows from:',
    options: [
      'Invariance under time reversal',
      'Invariance under rotations',
      'Invariance under spatial translations',
      'Invariance under scaling',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'If space is homogeneous (no point is special), the Lagrangian is invariant under translations. By Noether\'s theorem, this implies conservation of linear momentum. This is why collisions in empty space conserve momentum.',
  },
  {
    id: 's49-m02',
    type: 'multiple-choice',
    question: 'Angular momentum conservation is a consequence of:',
    options: [
      'Scale invariance',
      'Time translation symmetry',
      'Space translation symmetry',
      'Rotational symmetry',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'If the laws of physics are the same in all directions (rotational symmetry), then angular momentum is conserved. This is why a spinning figure skater speeds up when pulling in their arms—angular momentum $L = I\\omega$ stays constant.',
  },
  // Hard questions
  {
    id: 's49-h01',
    type: 'multiple-choice',
    question: 'Noether\'s theorem applies to:',
    options: [
      'Continuous symmetries, producing additive conserved quantities',
      'All symmetries, including discrete ones',
      'Only classical mechanics',
      'Only time-independent systems',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'Noether\'s theorem specifically applies to continuous symmetries (like rotations or translations), yielding additive conservation laws. Discrete symmetries (like parity) lead to multiplicative quantum numbers instead and can be violated in certain interactions.',
  },
  {
    id: 's49-h02',
    type: 'multiple-choice',
    question: 'In particle physics, gauge symmetries via Noether\'s theorem explain:',
    options: [
      'Why particles have mass',
      'The existence of gravity',
      'Conservation of electric charge and other quantum numbers',
      'The speed of light',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'The Standard Model is built on gauge symmetries (U(1), SU(2), SU(3)). By Noether\'s theorem, these symmetries imply conservation of electric charge, weak isospin, and color charge. The theorem unifies our understanding of why these quantities are conserved.',
  },
];
