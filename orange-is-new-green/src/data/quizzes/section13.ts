import type { QuizQuestion } from './types';

export const section13Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is BlinkBTC\'s "Stablesats" feature?',
    options: [
      'A stablecoin on Ethereum',
      'Dollar-stable balances using Bitcoin short positions through exchange APIs',
      'A Bitcoin savings account',
      'A hardware wallet'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Stablesats allows users to hold dollar-stable balances by executing Bitcoin short positions through exchange APIs, though with custodial trade-offs.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What services might third-party DLC providers offer?',
    options: [
      'Bitcoin custody',
      'CET backups, oracle services, automatic rolling, and counterparty matching',
      'Mining pools',
      'Exchange listings'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Third-party providers can handle DLC complexity by offering CET storage, oracle services, automatic position rolling, and matching counterparties.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why can\'t asset managers hold fund assets on centralized exchanges?',
    options: [
      'Exchanges don\'t allow large deposits',
      'Regulatory constraints prevent it',
      'It\'s too expensive',
      'Exchanges are always hacked'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Regulatory constraints prevent asset managers from holding fund assets on centralized exchanges, which is why on-chain solutions are needed for institutional products.',
  },
];
