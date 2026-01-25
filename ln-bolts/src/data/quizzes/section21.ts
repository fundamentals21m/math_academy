import type { QuizQuestion } from './types';

export const section21Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'text',
    question: 'What prefix indicates a Bitcoin mainnet Lightning invoice?',
    correctAnswer: 'lnbc',
    difficulty: 'easy',
    explanation: 'Lightning invoices use "lnbc" for mainnet, "lntb" for testnet, "lnbcrt" for regtest.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does the "u" multiplier mean in an invoice amount?',
    options: [
      'Units (1 BTC)',
      'Micro (0.000001 BTC)',
      'Unsigned',
      'Ultra (10 BTC)',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The "u" multiplier means micro, so lnbc2500u means 2500 micro-BTC = 0.0025 BTC = 250,000 sats.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which tagged field is required in every BOLT #11 invoice?',
    options: [
      'Fallback address (f)',
      'Expiry (x)',
      'Payment hash (p) and payment secret (s)',
      'Routing hints (r)',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Every invoice must include exactly one payment_hash (p), one payment_secret (s), and either description (d) or description_hash (h).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the purpose of routing hints in an invoice?',
    options: [
      'To help payers find routes to recipients with private channels',
      'To reduce fees',
      'To improve privacy',
      'To specify preferred nodes',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Routing hints provide information about private channels so payers can find routes to recipients not discoverable via gossip.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why is the payment_secret required?',
    options: [
      'For encryption',
      'For dispute resolution',
      'For routing optimization',
      'To prevent probing attacks and enable multi-part payments',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The payment_secret prevents payment probing attacks and is essential for multi-part payment (MPP) security.',
  },
];
