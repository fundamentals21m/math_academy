import type { QuizQuestion } from './types';

export const section04Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In the feature bit pairing system, what do even bits indicate?',
    options: [
      'Optional features',
      'Mandatory features',
      'Experimental features',
      'Deprecated features',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Even bits indicate mandatory features that peers MUST support, while odd bits indicate optional features.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which feature enables multi-part payments (MPP)?',
    options: [
      'basic_mpp',
      'static_remotekey',
      'data_loss_protect',
      'anchor_outputs'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The basic_mpp feature (bits 16/17) enables splitting a payment across multiple paths.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What does "ASSUMED" mean for a feature?',
    options: [
      'Feature is deprecated',
      'Feature is in testing',
      'Feature is only for testnet',
      'Feature is expected to be present without signaling',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Assumed features are so widely adopted that all implementations are expected to support them regardless of signaling.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Where are Init features announced?',
    options: [
      'In node_announcement gossip',
      'In BOLT #11 invoices',
      'In the init message during connection',
      'In channel_announcement'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Init features are announced in the init message exchanged during connection establishment.',
  },
  {
    id: 5,
    type: 'text',
    question: 'What feature enables receiver privacy through hidden paths? (two words, with underscore)',
    correctAnswer: 'route_blinding',
    difficulty: 'hard',
    explanation: 'Route blinding (bits 24/25) enables blinded paths where recipient identity is hidden.',
  },
];
