import type { QuizQuestion } from './types';

export const section30Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition I.30 prove about parallel lines?',
    options: [
      'Parallel lines are unique',
      'Lines parallel to the same line are parallel to each other',
      'Parallel lines can be constructed',
      'All parallel lines are equidistant',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'I.30: "Straight lines parallel to the same straight line are also parallel to one another." (Transitivity of parallelism)',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which proposition does I.30 use?',
    options: [
      'I.28',
      'I.27',
      'I.31',
      'I.29',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'I.30 uses I.29 to show that alternate angles with the common parallel are equal, hence the two lines are parallel.',
  },
];
