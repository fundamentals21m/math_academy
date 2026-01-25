import type { QuizQuestion } from './types';

export const section18Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does BIP-144 define?',
    options: [
      'Peer-to-peer protocol for SegWit transactions',
      'Signature algorithm',
      'SegWit addresses',
      'Block validation',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'BIP-144 defines how SegWit transactions are serialized and transmitted over the P2P network.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How do nodes signal SegWit support to peers?',
    options: [
      'Block version',
      'Special handshake',
      'Separate network',
      'Service bit in version message',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Nodes use the NODE_WITNESS service bit (bit 3) in the version message to signal SegWit support.',
  },
  {
    id: 3,
    type: 'text',
    question: 'What message type requests SegWit transactions with witness data?',
    correctAnswer: 'getdata',
    difficulty: 'medium',
    explanation: 'Nodes request witness transactions using getdata with MSG_WITNESS_TX type.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The witness data is serialized:',
    options: [
      'Before everything else',
      'After the inputs, before the outputs',
      'After the outputs',
      'In a separate message',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'In SegWit serialization, witness data comes after inputs but before outputs (with marker and flag bytes).',
  },
];
