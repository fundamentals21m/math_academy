import type { QuizQuestion } from './types';

export const section08Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What triangle congruence criterion does Proposition I.8 establish?',
    options: [
      'ASA (Angle-Side-Angle)',
      'SAS (Side-Angle-Side)',
      'SSS (Side-Side-Side)',
      'AAS (Angle-Angle-Side)',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'I.8 proves SSS: if all three sides of one triangle equal the corresponding sides of another, the triangles are congruent.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which proposition is used as a lemma in proving I.8?',
    options: [
      'Proposition I.4',
      'Proposition I.7',
      'Proposition I.5',
      'Proposition I.6',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'I.8 uses I.7 to show that superposing one triangle on another with equal sides must result in coincidence.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What does I.8 prove about the angles of SSS-congruent triangles?',
    options: [
      'Only the largest angles are equal',
      'The angles opposite equal sides are equal',
      'Only right angles are equal',
      'All corresponding angles are equal',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'If three sides are equal, all corresponding angles are equal (full congruence).',
  },
];
