import type { QuizQuestion } from './types';

export const section61Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does the BIP-35 mempool message request?',
    options: [
      'Transaction IDs in the peer\'s mempool',
      'Block headers',
      'Peer addresses',
      'Fee estimates'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The mempool message requests inventory of all transactions in the peer\'s mempool.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The mempool message is useful for:',
    options: [
      'Mining blocks',
      'Synchronizing unconfirmed transactions',
      'Validating signatures',
      'Generating addresses'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Nodes can request mempool contents to sync unconfirmed transactions.',
  },
  {
    id: 3,
    type: 'text',
    question: 'The peer responds to mempool with _____ messages containing transaction IDs.',
    correctAnswer: 'inv',
    difficulty: 'medium',
    explanation: 'The peer sends inv (inventory) messages listing mempool transactions.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A node might reject mempool requests if:',
    options: [
      'It\'s not mining',
      'The request is malformed',
      'Its mempool is too large',
      'It\'s a light client'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Nodes may refuse to send large mempools to prevent bandwidth abuse.',
  },
];
