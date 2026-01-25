import type { QuizQuestion } from './types';

export const section21Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is Taproot (BIP-341)?',
    options: [
      'A mining protocol',
      'SegWit version 1 spending rules',
      'A new address format',
      'A wallet standard',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'BIP-341 defines Taproot, the spending rules for SegWit version 1 outputs.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Taproot output can be spent via:',
    options: [
      'Key path or script path',
      'Multi-signature only',
      'Key path only',
      'Script path only',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Taproot outputs can be spent either by key path (single signature) or script path (revealing a script).',
  },
  {
    id: 3,
    type: 'text',
    question: 'What tree structure does Taproot use to commit to multiple scripts?',
    correctAnswer: 'Merkle',
    difficulty: 'medium',
    explanation: 'Taproot uses a Merkle tree to commit to multiple possible spending scripts.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the main privacy benefit of Taproot?',
    options: [
      'Addresses are shorter',
      'Transactions are encrypted',
      'Cooperative spends look like single-key spends',
      'Amounts are hidden',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'When all parties cooperate, a Taproot spend looks identical to a single-key spend on-chain.',
  },
];
