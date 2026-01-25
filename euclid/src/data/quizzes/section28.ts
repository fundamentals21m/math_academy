import type { QuizQuestion } from './types';

export const section28Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What additional conditions for parallelism does I.28 establish?',
    options: [
      'Equal vertical angles',
      'Only equal corresponding angles',
      'Only interior angles summing to two right angles',
      'Equal corresponding angles, or interior angles summing to two right angles'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'I.28 gives two more conditions: equal corresponding angles, or co-interior angles summing to 180°.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How does I.28 relate to I.27?',
    options: [
      'It extends I.27 to more angle conditions',
      'It is the converse',
      'It contradicts I.27',
      'They are equivalent'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'I.28 provides additional sufficient conditions for parallelism beyond alternate angles.',
  },
];
