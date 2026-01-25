import type { QuizQuestion } from './types';

export const section04Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Which BIP layer deals with changes to Bitcoin\'s consensus rules?',
    options: [
      'Peer services layer',
      'API/RPC layer',
      'Consensus layer',
      'Application layer',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The consensus layer handles changes to Bitcoin\'s fundamental validation rules.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'BIP-32 (HD wallets) belongs to which category?',
    options: [
      'Consensus',
      'Applications',
      'Peer Services',
      'Process',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'BIP-32 is an application-layer standard that doesn\'t require consensus changes.',
  },
  {
    id: 3,
    type: 'text',
    question: 'What type of BIP describes the BIP process itself (hint: not technical)?',
    correctAnswer: 'Process',
    difficulty: 'medium',
    explanation: 'Process BIPs describe procedures, guidelines, or changes to decision-making processes.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which layer includes specifications for how nodes communicate?',
    options: [
      'Peer Services',
      'Application',
      'Consensus',
      'Wallet',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Peer Services layer specifies the network protocol for node-to-node communication.',
  },
];
