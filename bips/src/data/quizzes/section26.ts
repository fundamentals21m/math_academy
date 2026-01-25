import type { QuizQuestion } from './types';

export const section26Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does BIP-43 define?',
    options: [
      'Block header structure',
      'Address checksum algorithm',
      'Purpose field for HD wallet derivation',
      'Signature format',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'BIP-43 establishes the purpose field as the first level of HD derivation.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What derivation path level does BIP-43 standardize?',
    options: [
      'The second level (coin type)',
      'The first level (purpose)',
      'The third level (account)',
      'The fourth level (change)',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'BIP-43 standardizes the first derivation level as "purpose" to indicate the BIP being followed.',
  },
  {
    id: 3,
    type: 'text',
    question: 'In path m/44\'/0\'/0\', the "44" represents the _____ level.',
    correctAnswer: 'purpose',
    difficulty: 'easy',
    explanation: 'The first number after m/ is the purpose, indicating BIP-44 is being used.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why use hardened derivation for the purpose level?',
    options: [
      'To isolate different wallet standards',
      'To speed up key generation',
      'To reduce key size',
      'To enable watch-only wallets',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Hardened purpose derivation ensures different BIP standards have completely isolated key trees.',
  },
];
