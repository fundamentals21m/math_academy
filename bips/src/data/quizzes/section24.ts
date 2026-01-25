import type { QuizQuestion } from './types';

export const section24Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does BIP-38 provide?',
    options: [
      'Password-protected private key encryption',
      'Mnemonic phrases',
      'Multi-signature addresses',
      'HD wallet derivation',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'BIP-38 defines a standard for encrypting private keys with a passphrase.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What encryption is used in BIP-38?',
    options: [
      'RSA-2048',
      'ChaCha20',
      'AES-256',
      'Triple-DES',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'BIP-38 uses AES-256 encryption to protect private keys.',
  },
  {
    id: 3,
    type: 'text',
    question: 'What prefix do BIP-38 encrypted keys start with?',
    correctAnswer: '6P',
    difficulty: 'medium',
    explanation: 'BIP-38 encrypted private keys are encoded in Base58Check and start with "6P".',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'BIP-38 is commonly used for:',
    options: [
      'Hardware wallet communication',
      'Paper wallet backups',
      'Block validation',
      'Network encryption'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'BIP-38 is commonly used to create password-protected paper wallet backups.',
  },
];
