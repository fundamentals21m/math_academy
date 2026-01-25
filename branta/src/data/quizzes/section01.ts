import type { QuizQuestion } from './types';

export const section01Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Why is Bitcoin transaction irreversibility considered both a strength and a vulnerability?',
    options: [
      'It speeds up transactions but increases fees',
      'It provides security but makes mistakes permanent',
      'It enables privacy but reduces transparency',
      'It simplifies mining but increases energy use',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Irreversibility is a core security feature of Bitcoin (preventing double-spending), but it also means that errors or fraud cannot be reversed once confirmed.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the "verification gap" in Bitcoin transactions?',
    options: [
      'The lack of built-in mechanisms to verify recipient identity',
      'The time delay between sending and confirmation',
      'The difference between on-chain and Lightning fees',
      'The gap between block creation times',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Unlike traditional payments where banks verify merchants, Bitcoin has no built-in verification of recipient identity.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why does manual verification (checking first and last characters) fail against sophisticated attacks?',
    options: [
      'It takes too long to verify',
      'Most addresses are too short to check',
      'Attackers can generate vanity addresses with matching prefixes',
      'Bitcoin addresses change after each transaction',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Attackers can generate "vanity addresses" that match the beginning and end characters of legitimate addresses, fooling manual verification.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What type of solution does Branta provide? (One word describing where verification happens relative to the transaction)',
    correctAnswer: 'external',
    difficulty: 'hard',
    explanation: 'Branta provides external verification - it operates outside the transaction flow as an independent source of truth.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why can\'t hardware wallets alone solve the address verification problem?',
    options: [
      'They require constant internet connection',
      'They are too expensive for most users',
      'They only work with Bitcoin, not Lightning',
      'They protect keys but cannot verify address ownership',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Hardware wallets protect private keys from theft but cannot verify that an address displayed on screen actually belongs to the intended recipient.',
  },
];
