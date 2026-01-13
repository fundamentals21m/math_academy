import type { QuizQuestion } from './types';

export const section64Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is threshold decryption?',
    options: [
      'Decryption using a very long key',
      'Decryption requiring $t$-of-$n$ parties to collaborate',
      'Decryption that takes many steps',
      'A type of symmetric encryption',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Threshold decryption distributes a decryption key among $n$ parties, requiring at least $t$ to collaborate to decrypt, similar to FROST for signing.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How does threshold decryption complement FROST in a complete system?',
    options: [
      'They cannot be used together',
      'FROST provides threshold signing; threshold decryption provides threshold access to encrypted data',
      'Threshold decryption replaces FROST',
      'They serve the same purpose',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Together, they enable comprehensive threshold cryptography: FROST for authentication/authorization (signing), threshold decryption for confidentiality (accessing secrets).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What encryption scheme is commonly used for threshold decryption?',
    options: [
      'AES',
      'ElGamal or threshold variants of RSA/ECIES',
      'DES',
      'One-time pad',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'ElGamal encryption has algebraic properties that enable efficient threshold decryption. ECIES variants and threshold RSA are also used.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In threshold ElGamal, what do participants provide for decryption?',
    options: [
      'Their private key directly',
      'Partial decryptions (their share applied to the ciphertext)',
      'Random numbers',
      'Hash values',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Each participant computes a partial decryption using their key share. These are combined (using Lagrange interpolation) to produce the full decryption.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is a use case combining FROST signing and threshold decryption?',
    options: [
      'Sending email',
      'A threshold custody system where backup keys are encrypted and require threshold access',
      'Web browsing',
      'File compression',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Custody systems might use FROST for daily signing operations and threshold decryption to access backup keys or recovery data, both requiring multi-party agreement.',
  },
];
