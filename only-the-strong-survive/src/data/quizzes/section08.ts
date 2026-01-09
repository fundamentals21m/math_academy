import type { QuizQuestion } from './types';

export const section08Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is "rehypothecation" in the context of DeFi?',
    options: [
      'Creating new tokens',
      'Using the same collateral across multiple protocols simultaneously',
      'Converting one token to another',
      'Staking tokens for rewards'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Rehypothecation is when the same asset serves as collateral in multiple places. In DeFi, you might deposit ETH, get a derivative token, deposit that elsewhere, get another derivative, and so on.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What systemic risk does rehypothecation create?',
    options: [
      'Higher gas fees',
      'A small price drop can cascade through multiple positions, causing mass liquidations',
      'Slower transaction times',
      'Reduced token supply'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'When collateral is reused across protocols, a decline in the base asset triggers liquidations everywhere simultaneously. This creates cascade effects where falling prices accelerate further declines.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why is it difficult to assess true exposure in DeFi?',
    options: [
      'Protocols don\'t publish their code',
      'The same underlying collateral may be counted multiple times across different protocols',
      'There are too many users',
      'Transaction data is not public'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When the same ETH backs positions in multiple protocols, totaling the "locked value" double or triple counts the same underlying asset, making the system appear more robust than it is.',
  },
];
