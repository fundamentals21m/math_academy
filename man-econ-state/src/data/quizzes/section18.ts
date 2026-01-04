import type { QuizQuestion } from './types';

export const section18Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'According to Rothbard, what is the proper role of economic science in policy?',
    options: [
      'To prescribe what goals society should pursue',
      'To show if proposed means achieve stated ends, without judging those ends',
      'To run the economy scientifically',
      'To advise politicians on legislation'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Economics is value-free—it can show consequences of policies but cannot say what ends are worth pursuing.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is consumer sovereignty?',
    options: [
      'Consumers control the government',
      'Consumer preferences ultimately direct production through the market',
      'Consumers are always right',
      'Consumers vote on products'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Consumer sovereignty means producers must satisfy consumers to earn profits—spending directs production.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'According to Rothbard, what does a free society require for law and order?',
    options: [
      'A strong central government',
      'Voluntary provision of defense and courts by competing private agencies',
      'No rules at all',
      'An elected police force'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Rothbard envisions law and defense provided by competing private agencies, like any other service.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What monetary system does Rothbard advocate?',
    options: [
      'Central bank-managed fiat currency',
      'Market-chosen commodity money like gold',
      'Cryptocurrency',
      'International currency union'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Rothbard advocates market-chosen commodity money (historically gold) to prevent inflation and business cycles.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'According to Rothbard, how can a free society be achieved?',
    options: [
      'Revolution',
      'Spreading sound economic ideas that change intellectual opinion',
      'Voting for libertarian candidates',
      'Ignoring the government'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Government rests on ideological acceptance. Changing minds through education can undermine that acceptance.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What is the core message of Man, Economy, and State with Power and Market?',
    options: [
      'Government intervention is sometimes necessary',
      'The free market coordinates human action efficiently; intervention always fails',
      'Economics is too complex for conclusions',
      'Mixed economies are optimal'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Rothbard\'s treatise argues that markets coordinate efficiently through prices while all intervention distorts and fails.',
  },
];
