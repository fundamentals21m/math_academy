import type { QuizQuestion } from './types';

export const section76Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition III.12 prove about externally tangent circles?',
    options: [
      'They have parallel diameters',
      'The line joining their centers passes through the point of tangency',
      'They have equal radii',
      'They share a common tangent line',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'III.12 proves that when two circles touch externally, the line joining their centers passes through the point of tangency.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For externally tangent circles, where is the point of tangency?',
    options: [
      'Between the two centers',
      'Outside both circles',
      'At the center of one circle',
      'Inside one of the circles',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'For external tangency, the tangent point lies between the two centers on the line joining them.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'How does the proof of III.12 differ from III.11?',
    options: [
      'It uses different propositions',
      'III.12 uses direct proof while III.11 uses contradiction',
      'The geometric configuration is different (external vs internal)',
      'There is no significant difference in method',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Both proofs use similar contradiction arguments, but the configuration differs: in III.11 one circle is inside the other, in III.12 they are outside each other.',
  },
];
