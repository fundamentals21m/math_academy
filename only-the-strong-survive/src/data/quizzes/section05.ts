import type { QuizQuestion } from './types';

export const section05Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the fundamental design trade-off that crypto projects make according to the authors?',
    options: [
      'Speed vs. cost',
      'Scalability vs. security',
      'Functionality vs. decentralization',
      'Privacy vs. transparency',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The authors argue that to add functionality (smart contracts, high throughput), crypto projects must sacrifice decentralization—the very property that makes Bitcoin valuable.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why do the authors argue that proof-of-stake fundamentally differs from proof-of-work?',
    options: [
      'PoS is faster',
      'PoS uses less electricity',
      'PoS allows for more validators',
      'PoS creates circular security—coins secure the chain that defines coin ownership',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'PoS creates circular security: the coins that give voting power are defined by the chain that voters secure. There\'s no external anchor like PoW\'s energy expenditure to ground the system.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What problem does smart contract complexity introduce?',
    options: [
      'Higher transaction fees',
      'Expanded attack surface and potential for exploits',
      'Slower block times',
      'Reduced user adoption'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Smart contract complexity dramatically expands the attack surface. Bugs in smart contracts have led to billions in losses through exploits that wouldn\'t be possible in Bitcoin\'s simpler scripting system.',
  },
];
