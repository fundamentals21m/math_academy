import type { QuizQuestion } from './types';

export const section04Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the "steelman" case for DeFi according to crypto proponents?',
    options: [
      'DeFi will replace all traditional banks',
      'DeFi is more regulated than traditional finance',
      'DeFi transactions are faster than Bitcoin',
      'Smart contracts enable trustless financial services without intermediaries',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The steelman case claims that smart contracts can automate financial services (lending, trading, derivatives) without requiring trusted intermediaries, creating a more open and efficient financial system.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What do crypto proponents claim about "programmable money"?',
    options: [
      'It enables complex financial logic to be executed automatically and trustlessly',
      'It will make Bitcoin obsolete',
      'It requires government approval',
      'It only works for simple payments',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Proponents argue that programmable money via smart contracts allows for automated, trustless execution of complex financial operations like loans, swaps, and derivatives.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'According to DeFi advocates, what advantage do decentralized exchanges (DEXs) have?',
    options: [
      'Lower fees than centralized exchanges',
      'Faster transaction speeds',
      'No central party can freeze funds or deny access',
      'Better customer support',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'DEX proponents argue that without a central operator, no one can freeze assets, deny access, or require identity verification—preserving financial freedom.',
  },
];
