import type { QuizQuestion } from './types';

export const section26Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does BIP-43 define?',
    options: [
      'Purpose field for HD wallet derivation',
      'Block header structure',
      'Address checksum algorithm',
      'Signature format',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'BIP-43 establishes the purpose field as the first level of HD derivation.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What derivation path level does BIP-43 standardize?',
    options: [
      'The second level (coin type)',
      'The third level (account)',
      'The first level (purpose)',
      'The fourth level (change)',
    ],
    correctIndex: 2,
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
      'To speed up key generation',
      'To reduce key size',
      'To enable watch-only wallets',
      'To isolate different wallet standards',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Hardened purpose derivation ensures different BIP standards have completely isolated key trees.',
  },
];
