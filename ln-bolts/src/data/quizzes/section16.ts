import type { QuizQuestion } from './types';

export const section16Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'numeric',
    question: 'What is the type number of channel_announcement?',
    correctAnswer: 256,
    numericRange: { min: 200, max: 300, precision: 0 },
    difficulty: 'medium',
    explanation: 'The channel_announcement message has type 256, in the Routing message range (256-511).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does a node_announcement contain?',
    options: [
      'Only the node ID',
      'Channel capacity information',
      'Fee schedules',
      'Node metadata like alias, color, and connection addresses',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'node_announcement includes the node ID, RGB color, 32-byte alias, and addresses (IPv4, IPv6, Tor, DNS).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the format of a short_channel_id?',
    options: [
      'block_height | tx_index | output_index (8 bytes total)',
      '32-byte hash',
      'Random UUID',
      'Node ID pair',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The short_channel_id is 8 bytes: block height (3) + tx index (3) + output index (2).',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'How many confirmations are required before a channel can be announced?',
    correctAnswer: 6,
    numericRange: { min: 1, max: 20, precision: 0 },
    difficulty: 'easy',
    explanation: 'Channels require 6 confirmations before announcement to prevent announcing channels that might be reorganized away.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'When are channels pruned from the network view?',
    options: [
      'After 24 hours of inactivity',
      'After 2 weeks without channel_update or 72+ blocks after on-chain close',
      'Never - channels are permanent',
      'After funding output is spent',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Channels are pruned after 2 weeks without updates or 72 blocks after on-chain closure.',
  },
];
