import type { QuizQuestion } from './types';

export const section80Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does BIP-320 allow miners to use for optimization?',
    options: [
      'Extra nonce space',
      'Larger headers',
      'Multiple signatures',
      'General purpose nVersion bits',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'BIP-320 allows miners to use upper version bits for mining optimization.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'BIP-320 legitimizes which mining technique?',
    options: [
      'Covert ASICBoost',
      'Overt ASICBoost',
      'Selfish mining',
      'Pool hopping'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'BIP-320 formalizes overt ASICBoost using version bit rolling.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'How many general-purpose bits does BIP-320 allocate (bits 16-31)?',
    correctAnswer: 16,
    numericRange: { min: 8, max: 32, precision: 0 },
    difficulty: 'medium',
    explanation: 'BIP-320 allocates the upper 16 bits for general-purpose use.',
  },
  {
    id: 4,
    type: 'text',
    question: 'ASICBoost provides roughly 15-20% _____ savings per hash.',
    correctAnswer: 'energy',
    difficulty: 'medium',
    explanation: 'ASICBoost reduces energy consumption by reusing partial hash calculations.',
  },
];
