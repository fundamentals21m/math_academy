import type { QuizQuestion } from './types';

export const section47Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the Lightning Network?',
    options: [
      'A faster blockchain that replaces Bitcoin',
      'A layer-2 payment channel network enabling instant, low-fee Bitcoin transactions',
      'A mining pool for Bitcoin',
      'A cryptocurrency exchange',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Lightning Network is a layer-2 protocol built on Bitcoin. It uses payment channels to enable instant, nearly-free transactions that settle on-chain only when channels open or close.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How can FROST improve Lightning Network channel security?',
    options: [
      'By making channel transactions faster',
      'By reducing Lightning routing fees',
      'By allowing channel funds to be controlled by a threshold group instead of a single key',
      'By eliminating the need for watchtowers'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A Lightning node\'s hot wallet key is a single point of failure. Using FROST, the channel key can be a 2-of-3 threshold, requiring compromise of multiple devices/locations to steal funds, dramatically improving security.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What challenge does FROST\'s signing latency present for Lightning?',
    options: [
      'HTLC forwarding requires fast signing, but FROST needs multi-party coordination',
      'Lightning channels cannot use Schnorr signatures',
      'Lightning requires ECDSA, not Schnorr',
      'FROST signatures are too large for Lightning',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Lightning routing requires forwarding HTLCs within seconds. FROST signing requires coordination among threshold parties, adding latency. Solutions include keeping signing parties online/colocated or using faster communication protocols.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is a potential use case for FROST in Lightning routing nodes?',
    options: [
      'Reducing on-chain fees',
      'Increasing channel capacity limits',
      'Eliminating the need for channel announcements',
      'Distributed custody of large routing node balances across multiple operators',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Large routing nodes hold significant funds. FROST enables multiple parties (e.g., business partners) to jointly control a routing node, requiring threshold agreement for channel operations and reducing single-operator risk.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'How does FROST interact with Lightning\'s commitment transaction signing?',
    options: [
      'Each commitment transaction update requires threshold participants to jointly sign',
      'FROST cannot sign commitment transactions',
      'Only channel opening requires FROST; updates use single signatures',
      'FROST automatically signs all commitment updates',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Every Lightning channel state update requires signing new commitment transactions. With FROST-protected channels, threshold participants must coordinate to sign each update, trading some speed for significantly enhanced security.',
  },
];
