import type { QuizQuestion } from './types';

export const section02Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the primary function of proof-of-work in Bitcoin?',
    options: [
      'To make mining profitable',
      'To speed up transaction processing',
      'To create an unforgeable history of transactions',
      'To reduce energy consumption',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Proof-of-work creates an unforgeable history by requiring computational work that cannot be faked, making it extremely costly to rewrite the blockchain\'s history.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does the difficulty adjustment mechanism ensure?',
    options: [
      'Blocks are produced at a relatively constant rate regardless of hashrate',
      'Mining remains profitable regardless of price',
      'Transaction fees stay low',
      'All miners receive equal rewards',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The difficulty adjustment recalibrates every 2016 blocks to ensure blocks are produced approximately every 10 minutes, regardless of how much mining power joins or leaves the network.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why is a native monetary unit essential to Bitcoin\'s design?',
    options: [
      'It makes Bitcoin easier to trade on exchanges',
      'It aligns miner incentives with network security without external dependencies',
      'It allows for faster transactions',
      'It enables smart contract functionality',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The native monetary unit (bitcoin) aligns miner incentives with network security. Miners are paid in bitcoin, so they are incentivized to protect the network\'s integrity without relying on external assets or authorities.',
  },
];
