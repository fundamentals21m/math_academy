import type { QuizQuestion } from './types';

export const section01Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In Lightning terminology, what is an "Origin Node"?',
    options: [
      'The node that initiates a payment',
      'The node that created the channel',
      'The first node in the network',
      'The node with the most channels',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The origin node is the sender or payer that initiates a payment, constructing the onion-encrypted routing packet.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is a "revoked transaction close"?',
    options: [
      'A normal channel closing',
      'Closing a channel before it is funded',
      'A failed payment attempt',
      'When a node broadcasts an outdated commitment transaction'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A revoked transaction close occurs when a party broadcasts an outdated (revoked) commitment, allowing the honest party to claim all funds as a penalty.',
  },
  {
    id: 3,
    type: 'text',
    question: 'What is the secret value that, when hashed, produces the payment hash called?',
    correctAnswer: 'preimage',
    difficulty: 'easy',
    explanation: 'The preimage is the secret that, when revealed, unlocks the HTLC chain and allows payment completion.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What does CLTV stand for?',
    options: [
      'Channel Lock Time Value',
      'Conditional Lock Transaction Verification',
      'CheckLockTimeVerify',
      'Chain Level Time Validator',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'CLTV (CheckLockTimeVerify) is a Bitcoin script opcode that prevents output spending until a specified block height.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the format of a Short Channel ID (SCID)?',
    options: [
      'A 32-byte hash',
      'Block height + transaction index + output index',
      'Node ID + channel number',
      'A random UUID',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The SCID is encoded as block height (3 bytes) + transaction index (3 bytes) + output index (2 bytes), e.g., "539268x845x1".',
  },
];
