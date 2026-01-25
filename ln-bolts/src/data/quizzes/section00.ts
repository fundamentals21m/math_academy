import type { QuizQuestion } from './types';

export const section00Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does BOLT stand for?',
    options: [
      'Basis of Lightning Technology',
      'Bitcoin Open Layer Transport',
      'Bilateral Open Ledger Technology',
      'Base Operation Lightning Transfer',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'BOLT stands for Basis of Lightning Technology - the technical standards that define how Lightning Network implementations should behave.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the primary problem that the Lightning Network solves?',
    options: [
      'Bitcoin mining centralization',
      'Bitcoin private key security',
      'Slow transaction speed and high fees on Bitcoin base layer',
      'Smart contract functionality',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Lightning Network addresses Bitcoin\'s limited throughput (~7 tx/sec) and long confirmation times by enabling instant, low-cost payments through payment channels.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What type of multisig is used in a Lightning payment channel?',
    options: [
      '1-of-2',
      '2-of-3',
      '3-of-5',
      '2-of-2',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Payment channels use a 2-of-2 multisig, meaning both parties must sign to spend the funds locked in the channel.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What is the cryptographic structure that enables conditional payments across multiple channels? (abbreviation)',
    correctAnswer: 'HTLC',
    difficulty: 'medium',
    explanation: 'HTLC (Hash Time-Locked Contract) enables secure multi-hop payments by locking funds to a hash condition with a timeout.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which BOLT specification is notably missing from the sequence?',
    options: ['BOLT #0', 'BOLT #6', 'BOLT #13', 'BOLT #15'],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'BOLT #6 was originally planned for an intermediate routing packet format but was never finalized and has been incorporated into other specifications.',
  },
];
