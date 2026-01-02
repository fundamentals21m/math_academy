import type { QuizQuestion } from './types';

export const section17Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition I.17 prove about triangles?',
    options: [
      'Any triangle has at least one right angle',
      'Two angles of any triangle are together less than two right angles',
      'All triangles have equal angles',
      'The angles of a triangle sum to two right angles'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'I.17: "In any triangle two angles taken together in any manner are less than two right angles."',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which proposition does I.17 follow from?',
    options: [
      'I.15',
      'I.16',
      'I.13',
      'I.14'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'I.17 follows directly from I.16: the exterior angle is greater than either remote interior angle.',
  },
];
