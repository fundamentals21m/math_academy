import type { QuizQuestion } from './types';

export const section59Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How does II.10 relate to II.9?',
    options: [
      'II.10 is the converse of II.9',
      'II.10 uses circles while II.9 uses squares',
      'They prove the same result differently',
      'II.10 handles external extension while II.9 handles internal division',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'II.9 divides a bisected line internally, while II.10 extends it externally. Together they cover all cases.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which postulate is used in II.10 but not needed in II.9?',
    options: [
      'Postulate 5 (parallel postulate)',
      'Postulate 1',
      'Postulate 3',
      'Postulate 2',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'II.10 uses the parallel postulate (Post. 5) to show that certain lines meet, while II.9 does not require it.',
  },
];
