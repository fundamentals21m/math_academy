import type { QuizQuestion } from './types';

export const section149Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does VI.4 prove about equiangular triangles?',
    options: [
      'They have equal areas',
      'They are congruent',
      'The sides about the equal angles are proportional (they are similar)',
      'They share a common side'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'VI.4 establishes that equiangular triangles have proportional corresponding sides, which is the definition of similar triangles.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In modern terminology, VI.4 is equivalent to which similarity criterion?',
    options: [
      'SSS (Side-Side-Side)',
      'SAS (Side-Angle-Side)',
      'AA (Angle-Angle) or AAA',
      'HL (Hypotenuse-Leg)'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'VI.4 is the classical proof of AA similarity: if two triangles have two equal angles (hence all three), they are similar.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Triangle ABC has angles 30, 60, 90 degrees with sides 3, 3*sqrt(3), 6. A similar triangle has shortest side 5. What is its longest side?',
    options: [
      '5*sqrt(3)',
      '10',
      '15',
      '6'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'By VI.4, corresponding sides are proportional. The ratio is 5:3, so the longest side is 6 * (5/3) = 10.',
  },
];
