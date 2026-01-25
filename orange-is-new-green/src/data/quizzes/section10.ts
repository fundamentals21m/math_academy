import type { QuizQuestion } from './types';

export const section10Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is a Discreet Log Contract (DLC)?',
    options: [
      'A private cryptocurrency transaction',
      'An off-chain agreement with on-chain enforcement based on oracle attestations',
      'A type of smart contract on Ethereum',
      'A Bitcoin mining agreement',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A DLC is an off-chain agreement between two parties where on-chain enforcement of payment is possible upon fulfillment of specific conditions, using oracle attestations.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What type of multisig do DLCs use?',
    options: [
      '1-of-2',
      '3-of-5',
      '2-of-2',
      '2-of-3',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'DLCs employ 2-of-2 multisig, requiring both parties to fund a shared address that requires both signatures to spend.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What role does an "oracle" play in DLCs?',
    options: [
      'It provides price data that unlocks the correct payout transaction',
      'It holds custody of the Bitcoin',
      'It executes the trade',
      'It sets the contract terms'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The oracle provides relevant information (like BTCUSD price) for contract settlement. The attestation unlocks the correct CET without the oracle knowing contract details.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What are Contract Execution Transactions (CETs)?',
    options: [
      'Fees paid to miners',
      'Oracle signatures',
      'Funding transactions',
      'Pre-signed transactions that enforce contract results for specific outcomes',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'CETs are pre-signed transactions that allow either party to claim the correct payout based on the oracle attestation, even if the counterparty refuses to cooperate.',
  },
];
