import type { QuizQuestion } from './types';

export const section24Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition I.24 prove (sometimes called the "Hinge Theorem")?',
    options: [
      'Equal sides imply equal angles',
      'If two sides are equal but one included angle is greater, then that base is greater',
      'All triangles are similar',
      'The largest side is opposite the largest angle'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'I.24: If triangles have two pairs of equal sides but one has a greater included angle, it has the greater base.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is I.25 in relation to I.24?',
    options: [
      'A generalization',
      'The converse',
      'A special case',
      'Unrelated'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'I.25 is the converse: if the base is greater, then the included angle is greater.',
  },
];
