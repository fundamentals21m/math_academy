import type { QuizQuestion } from './types';

export const section09Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What type of output is the Lightning funding output?',
    options: [
      'P2WSH',
      'P2PKH',
      'P2SH',
      'P2WPKH',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The funding output is a P2WSH (Pay-to-Witness-Script-Hash) with a 2-of-2 multisig witness script.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How are the public keys ordered in the funding multisig script?',
    options: [
      'By node ID alphabetically',
      'Funder first',
      'Randomly',
      'Lexicographically (smaller pubkey first)',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Keys are sorted lexicographically (comparing as unsigned byte arrays) to create a canonical ordering.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the formula for deriving the channel_id?',
    options: [
      'SHA256(funding_txid)',
      'funding_txid XOR output_index',
      'Hash of both node IDs',
      'Random 32 bytes',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The channel_id is funding_txid XOR output_index (output index left-padded to 32 bytes).',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'How many confirmations are typically required before a channel can be announced?',
    correctAnswer: 6,
    numericRange: { min: 1, max: 20, precision: 0 },
    difficulty: 'medium',
    explanation: 'Channels require 6 confirmations before they can be announced via the gossip protocol.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What must a node do if a blockchain reorg unconfirms the funding transaction?',
    options: [
      'Continue using the channel normally',
      'Force close immediately',
      'Stop using the channel and wait for re-confirmation',
      'Delete the channel entirely',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Nodes must stop using the channel immediately and wait for re-confirmation, handling the case where the funding tx might be double-spent.',
  },
];
