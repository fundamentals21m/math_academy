import type { QuizQuestion } from './types';

export const section60Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What message does BIP-31 add to the protocol?',
    options: [
      'getblocks',
      'version',
      'pong (response to ping)',
      'inv',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'BIP-31 adds the pong message as a response to ping.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the purpose of ping/pong messages?',
    options: [
      'Announce addresses',
      'Request blocks',
      'Broadcast transactions',
      'Check if connections are still alive',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Ping/pong checks connection liveness and measures latency.',
  },
  {
    id: 3,
    type: 'text',
    question: 'The pong message echoes back the _____ from the ping message.',
    correctAnswer: 'nonce',
    difficulty: 'medium',
    explanation: 'The pong must contain the same nonce as the triggering ping.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'How many bytes is the nonce in ping/pong messages?',
    correctAnswer: 8,
    numericRange: { min: 4, max: 16, precision: 0 },
    difficulty: 'medium',
    explanation: 'The nonce is an 8-byte random value.',
  },
];
