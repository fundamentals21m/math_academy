import type { QuizQuestion } from './types';

export const section63Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How could FROST signatures be verified in a smart contract?',
    options: [
      'Smart contracts cannot verify signatures',
      'The aggregated signature is a standard Schnorr signature, verifiable on-chain',
      'Each participant must submit their share on-chain',
      'FROST requires off-chain verification only',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'FROST produces a standard Schnorr signature that can be verified by any Schnorr verifier, including smart contracts, without revealing the threshold structure.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What advantage does FROST provide for multi-signature smart contract wallets?',
    options: [
      'Larger transaction sizes',
      'A single signature regardless of threshold, reducing gas costs',
      'Faster block times',
      'No verification needed',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Traditional multi-sig requires $t$ separate signatures on-chain. FROST produces one signature, significantly reducing transaction size and gas costs.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is a DAO, and how might it use FROST?',
    options: [
      'A type of cryptocurrency',
      'A Decentralized Autonomous Organization that could use threshold signing for treasury control',
      'A consensus algorithm',
      'A smart contract language',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'DAOs are blockchain-based organizations. FROST enables threshold control of DAO treasuries, requiring agreement from multiple parties for transactions.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What challenge exists for FROST integration with Ethereum smart contracts?',
    options: [
      'Ethereum does not support digital signatures',
      'Ethereum uses ECDSA natively; Schnorr verification requires additional precompiles or libraries',
      'Smart contracts cannot access signatures',
      'Ethereum blocks are too small',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Ethereum\'s native signature scheme is ECDSA. Schnorr/FROST verification requires either EIPs for precompiles or more expensive library-based verification.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is "account abstraction," and how does it relate to FROST?',
    options: [
      'Hiding account balances',
      'Allowing smart contracts to define custom signature validation, enabling FROST wallets',
      'Abstract data types in Solidity',
      'Removing accounts from blockchains',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Account abstraction (ERC-4337) allows smart contract wallets to define custom signature schemes, making FROST-based threshold wallets native to the protocol.',
  },
];
