import type { QuizQuestion } from './types';

export const section04Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition I.4 establishes which triangle congruence criterion?',
    options: [
      'SSS (Side-Side-Side)',
      'SAS (Side-Angle-Side)',
      'ASA (Angle-Side-Angle)',
      'AAS (Angle-Angle-Side)'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'I.4 proves SAS: if two triangles have two sides and the included angle equal, the triangles are congruent.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What controversial method does Euclid use in proving I.4?',
    options: [
      'Proof by contradiction',
      'Superposition (placing one figure on another)',
      'Indirect proof',
      'Exhaustion'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Euclid uses superposition—imagining one triangle placed on another—which some consider an undefined operation.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What does I.4 prove about the remaining parts of congruent triangles?',
    options: [
      'Only the third sides are equal',
      'Only the other angles are equal',
      'The base and remaining angles are all equal',
      'Nothing about the remaining parts'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'I.4 proves that if SAS holds, then the base (third side) and both remaining angles are also equal.',
  },
];
