import type { QuizQuestion } from './types';

export const section54Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In FROST, what is the hash function used for in the binding factor computation?',
    options: [
      'Encrypting the message',
      'Binding each signer\'s commitment to the message and all commitments',
      'Generating random nonces',
      'Compressing the public key',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The hash function creates a binding factor $\\rho_i = H(i, m, B)$ that ties each signer\'s contribution to the specific message and commitment set, preventing manipulation.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why does FROST require a hash function that is modeled as a random oracle?',
    options: [
      'To produce shorter outputs',
      'To ensure unpredictable outputs that an adversary cannot manipulate',
      'To make hashing faster',
      'To compress large messages',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The random oracle model assumes hash outputs are uniformly random and independent. This prevents adversaries from finding inputs that produce related or predictable outputs.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What hash function is commonly used in Bitcoin-compatible FROST implementations?',
    options: [
      'MD5',
      'SHA-256 (often with tagged hashing as in BIP-340)',
      'SHA-1',
      'CRC32',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Bitcoin uses SHA-256, and BIP-340 Schnorr signatures use tagged hashing (domain separation) with SHA-256 for different protocol components.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is "domain separation" in the context of hash functions for FROST?',
    options: [
      'Separating hash computation across multiple CPUs',
      'Using different hash prefixes/tags for different protocol purposes',
      'Hashing in different time zones',
      'Separating the message into domains',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Domain separation uses distinct prefixes or tags (e.g., "FROST-nonce", "FROST-challenge") so that hash outputs for different purposes cannot collide or be reused.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What security concern arises if the same hash output is used for both nonce binding and challenge computation?',
    options: [
      'The hash becomes slower',
      'An attacker might exploit relationships between the values',
      'The signature becomes larger',
      'Nothing, hash reuse is safe',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Without domain separation, an attacker might craft inputs that produce related outputs in different contexts, potentially enabling signature forgery or key extraction.',
  },
];
