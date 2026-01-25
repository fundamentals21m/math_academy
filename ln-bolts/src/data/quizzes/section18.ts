import type { QuizQuestion } from './types';

export const section18Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What construction does Lightning use for onion routing?',
    options: [
      'Tor',
      'Sphinx',
      'I2P',
      'Mixnet',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Lightning uses the Sphinx construction for onion routing, extended with per-hop payloads.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'How many bytes is the hop_payloads field in an onion packet?',
    correctAnswer: 1300,
    numericRange: { min: 1000, max: 2000, precision: 0 },
    difficulty: 'medium',
    explanation: 'The hop_payloads field is always 1300 bytes to maintain constant packet size regardless of route length.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What key is used for ChaCha20 stream encryption of the payload?',
    options: [
      'rho',
      'mu',
      'um',
      'pad',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The rho key is used for ChaCha20 stream obfuscation of the hop payloads.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why is the ephemeral key "blinded" at each hop?',
    options: [
      'To reduce key size',
      'To save computation',
      'For key rotation',
      'To prevent observers from correlating packets across hops',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Key blinding ensures that the ephemeral public key looks different at each hop, preventing packet linkability.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What do hops NOT know about in standard onion routing?',
    options: [
      'The amount to forward',
      'The next hop channel',
      'The total route length or their position',
      'The CLTV expiry',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Hops cannot determine the total route length or whether they\'re first, middle, or last in the route.',
  },
];
