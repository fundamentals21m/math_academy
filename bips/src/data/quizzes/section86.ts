import type { QuizQuestion } from './types';

export const section86Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is Eltoo?',
    options: [
      'A new address format',
      'A simplified payment channel protocol using ANYPREVOUT',
      'A mining protocol',
      'A sidechain',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Eltoo uses SIGHASH_ANYPREVOUT for simpler channel state management.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Eltoo eliminates the need for:',
    options: [
      'Storing revocation secrets',
      'On-chain transactions',
      'Payment channels',
      'Signatures',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Eltoo\'s "latest state wins" approach removes revocation complexity.',
  },
  {
    id: 3,
    type: 'text',
    question: 'Eltoo requires BIP-_____ (SIGHASH_ANYPREVOUT) to work.',
    correctAnswer: '118',
    difficulty: 'medium',
    explanation: 'BIP-118 ANYPREVOUT is essential for Eltoo\'s update mechanism.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In Eltoo, publishing an old state:',
    options: [
      'Closes the channel permanently',
      'Steals all funds',
      'Can be superseded by a newer state',
      'Is impossible',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Any party can broadcast a higher-numbered state to replace old ones.',
  },
];
