import type { QuizQuestion } from './types';

export const section72Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does BIP-330 (Erlay) optimize?',
    options: [
      'Address relay',
      'Block propagation',
      'Fee estimation',
      'Transaction relay bandwidth',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Erlay uses set reconciliation to reduce transaction announcement bandwidth.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Erlay reduces bandwidth by:',
    options: [
      'Compressing transactions',
      'Reconciling transaction sets instead of flooding',
      'Removing signatures',
      'Using shorter IDs',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Erlay synchronizes transaction sets efficiently using set reconciliation.',
  },
  {
    id: 3,
    type: 'text',
    question: 'Erlay uses a protocol called Minisketch for set _____.',
    correctAnswer: 'reconciliation',
    difficulty: 'hard',
    explanation: 'Minisketch enables efficient set reconciliation between peers.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The bandwidth savings from Erlay are most significant for:',
    options: [
      'Well-connected nodes with many peers',
      'SPV clients',
      'Mining nodes only',
      'New nodes syncing',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Erlay saves most bandwidth for nodes with many connections.',
  },
];
