import type { QuizQuestion } from './types';

export const section33Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does BIP-129 (BSMS) standardize?',
    options: [
      'Single-signature wallets',
      'Transaction broadcasting',
      'Block validation',
      'Multi-signature wallet setup between devices',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'BIP-129 standardizes Bitcoin Secure Multisig Setup for coordinating multi-signature wallets.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'BSMS helps solve the problem of:',
    options: [
      'Securely exchanging xpubs between cosigners',
      'Faster transaction signing',
      'Reducing fees',
      'Block propagation',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'BSMS provides a secure way to exchange extended public keys and verify multisig setup.',
  },
  {
    id: 3,
    type: 'text',
    question: 'BSMS stands for Bitcoin Secure _____ Setup.',
    correctAnswer: 'Multisig',
    difficulty: 'easy',
    explanation: 'BSMS = Bitcoin Secure Multisig Setup.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'BIP-129 uses what format for the multisig configuration?',
    options: [
      'Binary',
      'Descriptors',
      'JSON',
      'XML',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'BIP-129 uses output script descriptors to describe the multisig configuration.',
  },
];
