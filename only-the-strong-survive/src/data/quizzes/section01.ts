import type { QuizQuestion } from './types';

export const section01Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How many main sections does "Only The Strong Survive" contain?',
    options: [
      'Three',
      'Five',
      'Seven',
      'Ten'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The paper is organized into five main sections: Innovation From First Principles, Crypto Is Not Decentralized, Crypto Is Not Finance, The Investment Rationale, and Layered Architecture.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does the paper suggest is the correct approach for building on Bitcoin?',
    options: [
      'Creating new competing blockchains',
      'Building higher layers that leverage Bitcoin\'s foundation',
      'Forking Bitcoin to add new features',
      'Replacing proof-of-work with proof-of-stake'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The paper argues that the correct approach is layered architecture—building higher layers (Lightning, Liquid, etc.) that leverage Bitcoin\'s secure foundation rather than starting from scratch.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What does the authors\' framework suggest about "DeFi yields"?',
    options: [
      'They represent genuine economic productivity',
      'They are sustainable long-term',
      'They are largely illusory, dependent on fresh capital inflows',
      'They will eventually exceed traditional finance returns'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The paper argues that DeFi yields are not real yields from economically productive assets but rather depend on continuous capital inflows to maintain the illusion.',
  },
];
