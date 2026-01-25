import type { QuizQuestion } from './types';

export const section62Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is Multi-Party Computation (MPC)?',
    options: [
      'Computing on multiple computers simultaneously',
      'A type of encryption',
      'Parallel processing for cryptography',
      'Protocols allowing parties to jointly compute functions while keeping inputs private',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'MPC allows multiple parties to compute a function $f(x_1, ..., x_n)$ on their private inputs, learning only the output while keeping inputs secret.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How does FROST relate to general MPC?',
    options: [
      'FROST replaces all MPC protocols',
      'MPC cannot be used for signatures',
      'FROST is a specialized MPC protocol optimized for Schnorr signing',
      'They are unrelated technologies',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'FROST is an MPC protocol specifically designed for threshold Schnorr signatures, optimized for this use case compared to generic MPC frameworks.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What advantage does FROST have over general-purpose MPC for signing?',
    options: [
      'FROST works with any function',
      'General MPC is always faster',
      'FROST requires no communication',
      'FROST is more efficient due to algebraic structure of Schnorr signatures',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'FROST exploits the linear structure of Schnorr signatures, requiring only 2 rounds versus the many rounds needed by generic MPC protocols.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What MPC technique could extend FROST to compute arbitrary functions on secret-shared data?',
    options: [
      'Garbled circuits or secret-sharing-based MPC',
      'Symmetric encryption',
      'Public key encryption',
      'Hash functions',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Garbled circuits and secret-sharing-based protocols (like SPDZ) can compute arbitrary functions, potentially integrating with FROST for more complex threshold operations.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is a "threshold wallet" that might combine FROST with other MPC techniques?',
    options: [
      'A wallet with a maximum balance',
      'A wallet where $t$-of-$n$ parties must collaborate for any operation',
      'A hardware wallet',
      'A wallet using quantum cryptography',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Threshold wallets distribute control among multiple parties, using FROST for signing and potentially other MPC for key management, policy enforcement, etc.',
  },
];
