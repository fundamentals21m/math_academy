import type { QuizQuestion } from './types';

export const section13Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the Lightning Network?',
    options: [
      'A competing cryptocurrency to Bitcoin',
      'A cryptocurrency exchange',
      'A second-layer payment protocol built on top of Bitcoin',
      'A Bitcoin mining pool',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Lightning is a layer-2 solution that enables fast, low-cost Bitcoin payments by conducting transactions off-chain while using the Bitcoin blockchain for final settlement.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is Liquid Network designed for?',
    options: [
      'Retail payments',
      'Faster settlements between exchanges and institutions',
      'Mining Bitcoin',
      'Creating new cryptocurrencies',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Liquid is a federated sidechain focused on faster, confidential transactions for exchanges and institutions—trading off some decentralization for functionality in a clearly defined context.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What are DLCs (Discreet Log Contracts)?',
    options: [
      'Smart contracts for Bitcoin that enable conditional payments based on oracle data',
      'A type of cryptocurrency wallet',
      'A Bitcoin mining algorithm',
      'A token standard',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'DLCs enable Bitcoin-based smart contracts for derivatives, bets, and conditional payments using oracles, without requiring changes to Bitcoin\'s base layer.',
  },
];
