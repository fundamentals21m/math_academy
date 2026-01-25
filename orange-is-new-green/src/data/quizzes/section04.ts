import type { QuizQuestion } from './types';

export const section04Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What triggered the UK Gilt crisis in October 2022?',
    options: [
      'A global pandemic',
      'Brexit negotiations',
      'A mini-budget with £45 billion in unfunded tax cuts',
      'A cyberattack on UK banks',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Chancellor Kwasi Kwarteng\'s mini-budget announcement with £45 billion in unfunded tax cuts triggered a rapid rise in Gilt yields and the subsequent crisis.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is Liability-Driven Investment (LDI)?',
    options: [
      'A strategy to avoid all market risk',
      'Using government bonds as collateral to match pension obligations',
      'Investing only in cryptocurrency',
      'A type of tax avoidance scheme',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'LDI involves pension funds purchasing long-dated government bonds and using them as collateral for leveraged positions to match their long-term pension obligations.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why did selling Gilts (supposedly the most "liquid" asset) make the crisis worse?',
    options: [
      'There were no buyers for Gilts',
      'The Bank of England banned Gilt trading',
      'Gilts were illiquid by definition',
      'Forced selling further depressed prices, triggering more margin calls—a cascade effect'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'When pension funds sold Gilts to meet margin calls, it further depressed Gilt prices, causing more margin calls and more forced selling—a classic liquidation cascade.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'How much did the Bank of England pledge to buy in long-dated Gilts to stop the crisis?',
    options: [
      'Up to £65 billion',
      'Up to £20 billion',
      'Up to £5 billion',
      'Up to £100 billion'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Bank of England intervened by announcing purchases of up to £65 billion in long-dated Gilts to stabilize the market.',
  },
];
