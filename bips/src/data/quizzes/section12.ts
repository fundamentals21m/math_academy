import type { QuizQuestion } from './types';

export const section12Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What did BIP-66 require for ECDSA signatures?',
    options: [
      'Longer key lengths',
      'Strict DER encoding',
      'Schnorr signatures',
      'Multiple signatures',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'BIP-66 requires all ECDSA signatures to use strict DER encoding.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why was strict DER encoding important?',
    options: [
      'To increase security',
      'To reduce transaction size',
      'To prevent signature malleability',
      'To enable Taproot',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Strict DER encoding prevents one form of signature malleability where the same signature could have multiple valid encodings.',
  },
  {
    id: 3,
    type: 'text',
    question: 'What does DER stand for in DER encoding?',
    correctAnswer: 'Distinguished Encoding Rules',
    difficulty: 'hard',
    explanation: 'DER stands for Distinguished Encoding Rules, a binary format for encoding data structures.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Before BIP-66, OpenSSL\'s signature parsing was:',
    options: [
      'Too strict, rejecting valid signatures',
      'Perfectly consistent',
      'Not used in Bitcoin',
      'Too lenient, accepting non-standard encodings',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'OpenSSL was too lenient, accepting various non-standard encodings which created malleability issues.',
  },
];
