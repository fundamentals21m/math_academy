import type { QuizQuestion } from './types';

export const section37Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition I.37 prove about triangles?',
    options: [
      'Similar triangles have proportional sides',
      'All triangles can be bisected',
      'Triangles on the same base and between the same parallels are equal in area',
      'Congruent triangles have equal areas',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'I.37: Triangles on the same base and between the same parallels are equal in area.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How does I.37 relate to I.35?',
    options: [
      'It is the converse',
      'They are unrelated',
      'I.37 contradicts I.35',
      'It applies the parallelogram result to triangles (half the area)',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'I.37 uses I.35: each triangle is half a parallelogram, so triangles between same parallels have equal areas.',
  },
];
