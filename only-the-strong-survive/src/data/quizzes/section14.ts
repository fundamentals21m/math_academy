import type { QuizQuestion } from './types';

export const section14Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Gall\'s Law state?',
    options: [
      'Complex systems can be designed from scratch',
      'All systems eventually fail',
      'A complex system that works evolved from a simple system that worked',
      'Decentralization requires complexity'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Gall\'s Law states: "A complex system that works is invariably found to have evolved from a simple system that worked." You can\'t design complexity from scratch.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How does Gall\'s Law apply to Bitcoin vs. crypto?',
    options: [
      'Bitcoin is simple and works; crypto tries to build complexity without a working simple base',
      'Both violate Gall\\'s Law equally',
      'Gall\\'s Law doesn\\'t apply to technology',
      'Crypto follows Gall\\'s Law better',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Bitcoin is a simple system that works (sound money, settlement layer). Crypto projects try to add complexity without first proving a simple working system—violating Gall\'s Law.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the correct approach to building complex Bitcoin functionality according to Gall\'s Law?',
    options: [
      'Start fresh with a new blockchain',
      'Build layers on top of Bitcoin\\'s proven simple base',
      'Fork Bitcoin and add features',
      'Create a competing currency',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Following Gall\'s Law, you build complexity gradually on a working simple base. Lightning, Liquid, and other Bitcoin layers add functionality without compromising the proven base layer.',
  },
];
