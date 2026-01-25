import type { QuizQuestion } from './types';

export const section17Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What are the two components of Lightning routing fees?',
    options: [
      'Fixed fee and variable fee',
      'Incoming fee and outgoing fee',
      'Base fee and proportional fee',
      'Channel fee and network fee',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Routing fees consist of fee_base_msat (flat fee per HTLC) and fee_proportional_millionths (per-satoshi rate).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does cltv_expiry_delta specify?',
    options: [
      'Total payment timeout',
      'Channel lifetime',
      'Block confirmation requirement',
      'Minimum timelock buffer between incoming and outgoing HTLCs',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The cltv_expiry_delta is the minimum timelock difference a node requires between incoming and outgoing HTLCs when forwarding.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What does bit 0 of channel_flags indicate?',
    options: [
      'Whether the channel is public',
      'The direction of the update',
      'Fee tier level',
      'Whether the channel is disabled',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Bit 0 indicates direction: 0 = from node_id_1 to node_id_2, 1 = from node_id_2 to node_id_1.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What does bit 1 of channel_flags indicate?',
    options: [
      'Whether the channel is disabled',
      'Direction',
      'Fee changes pending',
      'Capacity threshold'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Bit 1 indicates the disabled status: when set to 1, the channel direction is temporarily disabled.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'What does "100 ppm" mean in fee_proportional_millionths?',
    correctAnswer: 100,
    numericRange: { min: 0, max: 1000, precision: 0 },
    difficulty: 'easy',
    explanation: 'PPM means "parts per million" - a fee of 100 ppm means 0.01% of the forwarded amount.',
  },
];
