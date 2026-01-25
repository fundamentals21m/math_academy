import type { QuizQuestion } from './types';

export const section42Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does PSBT stand for?',
    options: [
      'Pre-Signed Bitcoin Transfer',
      'Private Secure Bitcoin Transaction',
      'Post-Signature Bitcoin Transfer',
      'Partially Signed Bitcoin Transaction',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'PSBT = Partially Signed Bitcoin Transaction.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the main use case for PSBT?',
    options: [
      'Mining',
      'Block validation',
      'Coordinating multi-party signing',
      'Network propagation',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'PSBT enables multiple parties or devices to contribute to signing a transaction.',
  },
  {
    id: 3,
    type: 'text',
    question: 'PSBT files are commonly exchanged via what format prefix in text form?',
    correctAnswer: 'psbt',
    difficulty: 'medium',
    explanation: 'Base64-encoded PSBTs can be prefixed with "psbt:" for identification.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The PSBT role that adds signatures is called:',
    options: [
      'Signer',
      'Finalizer',
      'Creator',
      'Updater',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Signer role adds signatures to the PSBT.',
  },
];
