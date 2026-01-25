import type { QuizQuestion } from './types';

export const section42Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does PSBT stand for?',
    options: [
      'Partially Signed Bitcoin Transaction',
      'Pre-Signed Bitcoin Transfer',
      'Private Secure Bitcoin Transaction',
      'Post-Signature Bitcoin Transfer',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'PSBT = Partially Signed Bitcoin Transaction.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the main use case for PSBT?',
    options: [
      'Mining',
      'Coordinating multi-party signing',
      'Block validation',
      'Network propagation',
    ],
    correctIndex: 1,
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
      'Finalizer',
      'Creator',
      'Updater',
      'Signer'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The Signer role adds signatures to the PSBT.',
  },
];
