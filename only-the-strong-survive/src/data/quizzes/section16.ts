import type { QuizQuestion } from './types';

export const section16Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What do the authors acknowledge could prove their thesis wrong?',
    options: [
      'Crypto projects genuinely achieving decentralization while maintaining functionality',
      'Higher crypto prices',
      'More institutional adoption',
      'Better marketing'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'If a crypto project can actually achieve Bitcoin-level decentralization while providing smart contract functionality, the authors\' core argument would be invalidated.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What potential technological development might change the authors\' conclusions?',
    options: [
      'Faster internet connections',
      'Breakthroughs in zero-knowledge proofs or other scaling technology',
      'Cheaper electricity',
      'Quantum computing'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The authors acknowledge that technological breakthroughs in cryptography or scaling could potentially enable decentralized functionality that currently seems impossible.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why do the authors include a "why we might be wrong" section?',
    options: [
      'They\\'re not confident in their analysis',
      'They want crypto to succeed',
      'To appeal to crypto investors',
      'To demonstrate intellectual honesty and acknowledge uncertainty',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Including potential weaknesses in their argument demonstrates intellectual honesty—they\'re not claiming certainty, but presenting their best analysis while acknowledging limitations.',
  },
];
