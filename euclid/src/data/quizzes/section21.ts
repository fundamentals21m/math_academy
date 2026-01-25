import type { QuizQuestion } from './types';

export const section21Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition I.21 compare?',
    options: [
      'Triangles on the same base with vertex inside vs outside',
      'Areas of triangles',
      'Isosceles and scalene triangles',
      'Right and acute triangles'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'I.21: If triangle with vertex inside another has smaller sum of sides from that vertex but larger included angle.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'I.21 uses which earlier propositions?',
    options: [
      'I.5 and I.6',
      'I.4 and I.8',
      'I.16 and I.20',
      'I.13 and I.15',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'I.21 uses I.20 (triangle inequality) and I.16 (exterior angle inequality).',
  },
];
