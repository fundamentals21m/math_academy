import type { QuizQuestion } from './types';

export const section82Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition III.18 proves what about a tangent line and the radius to the tangent point?',
    options: [
      'They are parallel',
      'They are equal',
      'They are perpendicular',
      'They form an acute angle'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'III.18 proves that the line from the center to the point of tangency is perpendicular to the tangent line.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the relationship between III.16 and III.18?',
    options: [
      'They prove the same thing',
      'III.16 constructs tangents, III.18 proves their properties',
      'They are unrelated',
      'III.16 proves perpendicular ⟹ tangent; III.18 proves tangent ⟹ perpendicular'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'III.16 shows a perpendicular to the diameter at its endpoint is tangent. III.18 shows the converse: if a line is tangent, then the radius to that point is perpendicular.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Together, III.16 and III.18 establish that tangency and perpendicularity to radius are:',
    options: [
      'Equivalent (each implies the other)',
      'Sometimes related',
      'Unrelated properties',
      'Opposite properties'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A line through a point on a circle is tangent if and only if it is perpendicular to the radius at that point.',
  },
];
