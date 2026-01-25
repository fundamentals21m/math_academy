import type { QuizQuestion } from './types';

export const section61Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does the BIP-35 mempool message request?',
    options: [
      'Block headers',
      'Peer addresses',
      'Fee estimates',
      'Transaction IDs in the peer\\\'s mempool',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The mempool message requests inventory of all transactions in the peer\'s mempool.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The mempool message is useful for:',
    options: [
      'Synchronizing unconfirmed transactions',
      'Mining blocks',
      'Validating signatures',
      'Generating addresses',
    ],
    correctIndex: 0,
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
      'It\\\\'s not mining',
      'Its mempool is too large',
      'The request is malformed',
      'It\\\\'s a light client',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Nodes may refuse to send large mempools to prevent bandwidth abuse.',
  },
];
