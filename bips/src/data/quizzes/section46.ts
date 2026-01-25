import type { QuizQuestion } from './types';

export const section46Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does OP_CHECKTEMPLATEVERIFY (CTV) do?',
    options: [
      'Verifies Schnorr signatures',
      'Checks time locks',
      'Validates merkle proofs',
      'Commits outputs to a specific spending template',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'CTV commits the spending transaction to a specific template (outputs, amounts, etc.).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What type of primitive does CTV enable?',
    options: [
      'Covenants',
      'Signatures',
      'Hash locks',
      'Timelocks',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'CTV enables covenants—restrictions on how outputs can be spent.',
  },
  {
    id: 3,
    type: 'text',
    question: 'CTV is particularly useful for creating Bitcoin _____.',
    correctAnswer: 'vaults',
    difficulty: 'medium',
    explanation: 'CTV enables vault constructions with pre-committed recovery paths.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'CTV uses which hash to commit to the spending template?',
    options: [
      'HASH160',
      'SHA256 of specific transaction fields',
      'RIPEMD160',
      'SHA512',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'CTV commits to a SHA256 hash of the outputs, sequence, and other transaction data.',
  },
];
