import type { QuizQuestion } from './types';

export const section40Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does BIP-69 specify?',
    options: [
      'Address generation',
      'Transaction fee calculation',
      'Lexicographical ordering of inputs and outputs',
      'Block ordering',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'BIP-69 specifies sorting transaction inputs and outputs lexicographically.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the main benefit of BIP-69 ordering?',
    options: [
      'Faster transaction processing',
      'Improved privacy by reducing fingerprinting',
      'Lower fees',
      'Better compression',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Deterministic ordering makes wallet implementations less distinguishable.',
  },
  {
    id: 3,
    type: 'text',
    question: 'BIP-69 ordering is also known as _____ indexing.',
    correctAnswer: 'lexicographical',
    difficulty: 'medium',
    explanation: 'Lexicographical means dictionary/alphabetical ordering based on byte comparison.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is a downside to BIP-69?',
    options: [
      'Makes BIP-69 users distinguishable from non-users',
      'Increases transaction size',
      'Requires more signatures',
      'Slower confirmation times',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Ironically, consistent BIP-69 ordering can make those wallets identifiable.',
  },
];
