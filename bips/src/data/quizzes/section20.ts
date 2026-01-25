import type { QuizQuestion } from './types';

export const section20Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What signature scheme does BIP-340 introduce?',
    options: [
      'ECDSA signatures',
      'RSA signatures',
      'Schnorr signatures',
      'EdDSA signatures',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'BIP-340 specifies Schnorr signatures for Bitcoin, replacing ECDSA for Taproot.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is a key advantage of Schnorr signatures over ECDSA?',
    options: [
      'Smaller key sizes',
      'Native support for signature aggregation',
      'Faster verification',
      'Better randomness'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Schnorr signatures have the linearity property enabling native multi-signature aggregation.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'How many bytes is a BIP-340 Schnorr signature?',
    correctAnswer: 64,
    numericRange: { min: 32, max: 128, precision: 0 },
    difficulty: 'medium',
    explanation: 'BIP-340 Schnorr signatures are exactly 64 bytes (32-byte R + 32-byte s).',
  },
  {
    id: 4,
    type: 'text',
    question: 'Schnorr public keys in BIP-340 use only the x-coordinate and are called _____-only keys.',
    correctAnswer: 'x',
    difficulty: 'medium',
    explanation: 'BIP-340 uses x-only public keys (32 bytes) with an implicit even y-coordinate.',
  },
];
