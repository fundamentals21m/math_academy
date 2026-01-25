import type { QuizQuestion } from './types';

export const section94Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The BIP process ensures Bitcoin changes are:',
    options: [
      'Fast and immediate',
      'Controlled by developers',
      'Documented, reviewed, and consensus-driven',
      'Mandatory for all',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'BIPs provide transparency and community review for protocol changes.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which BIP category covers wallet standards like HD derivation?',
    options: [
      'Peer Services',
      'Applications',
      'Consensus',
      'Process',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Wallet standards are application-layer BIPs.',
  },
  {
    id: 3,
    type: 'text',
    question: 'The official BIP repository is hosted on _____.',
    correctAnswer: 'GitHub',
    difficulty: 'easy',
    explanation: 'BIPs are maintained at github.com/bitcoin/bips.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Bitcoin\'s conservative development approach prioritizes:',
    options: [
      'Developer convenience',
      'Speed of changes',
      'Feature count',
      'Security and backward compatibility',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Bitcoin values security and compatibility over rapid feature addition.',
  },
];
