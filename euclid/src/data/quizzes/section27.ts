import type { QuizQuestion } from './types';

export const section27Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition I.27 prove about lines cut by a transversal?',
    options: [
      'Parallel lines have equal alternate angles',
      'If alternate angles are equal, the lines are parallel',
      'All transversals create equal angles',
      'Perpendicular lines are parallel'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'I.27: "If a straight line falling on two straight lines make the alternate angles equal to one another, the straight lines will be parallel."',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Does I.27 use the Parallel Postulate (Postulate 5)?',
    options: [
      'Yes, it is essential',
      'Only partially',
      'No, it is proved without it',
      'It uses a weaker form'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'I.27 is proved using I.16 (exterior angle theorem) without Postulate 5. It establishes parallelism from equal alternate angles.',
  },
];
