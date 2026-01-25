import type { QuizQuestion } from './types';

export const section19Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition I.19 prove?',
    options: [
      'The greater side is opposite the greater angle',
      'Equal angles have equal opposite sides',
      'Right angles are the largest angles',
      'The greater angle is opposite the greater side',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'I.19: "In any triangle the greater angle is subtended by the greater side."',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What proof technique is used in I.19?',
    options: [
      'Direct construction',
      'Proof by contradiction',
      'Superposition',
      'Exhaustion',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'I.19 uses contradiction: assuming the greater angle is not opposite a greater side leads to contradictions using I.5 and I.18.',
  },
];
