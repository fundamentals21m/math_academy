import type { QuizQuestion } from './types';

export const section55Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is PayJoin (BIP-78)?',
    options: [
      'A signature scheme',
      'A new address format',
      'A mining protocol',
      'A transaction where sender and receiver both contribute inputs'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'PayJoin involves the receiver adding inputs to the payment transaction.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'PayJoin improves privacy by:',
    options: [
      'Breaking common input ownership heuristics',
      'Encrypting transactions',
      'Using stealth addresses',
      'Mixing with other users'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'PayJoin breaks the assumption that all inputs belong to the sender.',
  },
  {
    id: 3,
    type: 'text',
    question: 'PayJoin is also known as Pay-to-EndPoint or P2_____.',
    correctAnswer: 'EP',
    difficulty: 'medium',
    explanation: 'PayJoin is also called P2EP (Pay to End Point).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'PayJoin requires:',
    options: [
      'Special address format',
      'Receiver to have spendable UTXOs',
      'Lightning Network',
      'Mining support'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The receiver must have UTXOs to contribute to the PayJoin transaction.',
  },
];
