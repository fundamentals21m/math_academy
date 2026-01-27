import type { QuizQuestion } from './types';

export const section25Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A knock-out option:',
    options: [
      'Activates when a barrier is touched',
      'Expires worthless when a barrier is touched',
      'Always expires in-the-money',
      'Has no barrier feature'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Knock-out options cease to exist (become worthless) if the barrier is touched.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In-out parity states that:',
    options: [
      'Knock-in - Knock-out = Vanilla',
      'Knock-in × Knock-out = Vanilla',
      'Knock-in + Knock-out = Vanilla',
      'Knock-in = Knock-out'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A knock-in plus knock-out with same barrier equals a vanilla (either triggers or survives).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Barrier options are cheaper than vanillas because:',
    options: [
      'They are less liquid',
      'They never expire',
      'They have higher gamma',
      'There is a chance the option knocks out worthless'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The possibility of knockout reduces expected payoff, hence lower price.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What type of barrier option activates when the barrier is touched?',
    correctAnswer: 'knock-in',
    difficulty: 'easy',
    explanation: 'Knock-in options only become active when the barrier level is reached.',
  },
];
