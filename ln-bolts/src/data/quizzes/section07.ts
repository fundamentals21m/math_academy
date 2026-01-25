import type { QuizQuestion } from './types';

export const section07Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'numeric',
    question: 'What is the type number of update_add_htlc?',
    correctAnswer: 128,
    numericRange: { min: 100, max: 200, precision: 0 },
    difficulty: 'medium',
    explanation: 'The update_add_htlc message has type 128, in the Commitment message range (128-255).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What message reveals the preimage to fulfill an HTLC?',
    options: [
      'update_add_htlc',
      'update_fulfill_htlc',
      'update_fail_htlc',
      'commitment_signed',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The update_fulfill_htlc message (type 130) fulfills an HTLC by revealing the 32-byte payment preimage.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the correct order in the commitment update flow?',
    options: [
      'commitment_signed → update_add_htlc → revoke_and_ack',
      'update_add_htlc → revoke_and_ack → commitment_signed',
      'update_add_htlc → commitment_signed → revoke_and_ack',
      'revoke_and_ack → commitment_signed → update_add_htlc',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The flow is: send updates (like update_add_htlc), then commitment_signed with signatures, then receiver sends revoke_and_ack.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Who can send the update_fee message?',
    options: [
      'Only the funder',
      'Either party',
      'Only the fundee',
      'Only routing nodes',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Only the funder (channel initiator) can send update_fee to propose new commitment transaction fee rates.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the purpose of the channel reserve?',
    options: [
      'Emergency fund for on-chain fees',
      'Buffer for routing fees',
      'Minimum balance for node operation',
      'Ensure each party has something to lose if they cheat',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The channel reserve ensures each party has "skin in the game" - funds they would lose if they broadcast a revoked commitment.',
  },
];
