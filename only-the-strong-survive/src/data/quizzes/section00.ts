import type { QuizQuestion } from './types';

export const section00Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the main thesis of "Only The Strong Survive"?',
    options: [
      'All cryptocurrencies will eventually succeed',
      'Bitcoin should add smart contracts like Ethereum',
      'Decentralized finance will replace traditional banking',
      'Crypto beyond Bitcoin lacks the fundamental properties that make Bitcoin valuable',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The paper argues that crypto projects sacrifice Bitcoin\'s core properties (decentralization, censorship resistance) for added functionality, making them fundamentally flawed.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'According to the authors, what do crypto projects typically sacrifice for added functionality?',
    options: [
      'Decentralization and censorship resistance',
      'Transaction speed',
      'Developer adoption',
      'Marketing budget',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The core argument is that to add features like smart contracts, crypto projects must sacrifice the very properties that make Bitcoin valuable: true decentralization and censorship resistance.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What three perspectives does the paper use to critique crypto?',
    options: [
      'Legal, regulatory, and political',
      'Philosophical, technical, and economic',
      'Historical, social, and cultural',
      'Mathematical, scientific, and engineering',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The subtitle states: "A Philosophical, Technical, and Economic Critique of Prospects in Crypto Beyond Bitcoin."',
  },
];
