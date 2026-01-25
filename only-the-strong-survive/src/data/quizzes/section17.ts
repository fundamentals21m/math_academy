import type { QuizQuestion } from './types';

export const section17Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the authors\' final stance on Bitcoin?',
    options: [
      'Bitcoin will also fail eventually',
      'They are excited about Bitcoin and its potential as sound money',
      'Bitcoin is too slow to be useful',
      'Bitcoin needs to add smart contracts',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The authors conclude by affirming their enthusiasm for Bitcoin as a genuinely innovative form of sound money, distinct from the crypto projects they critique.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the authors\' final stance on "crypto"?',
    options: [
      'Crypto will eventually succeed',
      'Crypto just needs more time',
      'Crypto and Bitcoin are equally promising',
      'They are skeptical that crypto can deliver on its promises',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The authors conclude with deep skepticism about crypto\'s ability to deliver decentralization plus functionality, viewing most projects as fundamentally compromised.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What path forward do the authors suggest?',
    options: [
      'Focus on Bitcoin and its higher layers rather than alternative crypto',
      'Invest in promising crypto projects',
      'Wait for better crypto technology',
      'Regulate all cryptocurrencies',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The authors suggest building on Bitcoin\'s proven foundation with higher layers (Lightning, Liquid, etc.) rather than betting on unproven crypto alternatives.',
  },
];
