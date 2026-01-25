import type { QuizQuestion } from './types';

export const section07Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Why is big integer arithmetic challenging for secp256k1?',
    options: [
      '256-bit numbers fit in standard CPU registers',
      'Only floating-point operations are available',
      'The numbers are too small',
      '256-bit numbers must be split into smaller "limbs" and operations must handle carries',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'CPUs typically support 64-bit arithmetic natively, so 256-bit numbers must be split into multiple limbs with careful carry/borrow handling.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is a timing attack?',
    options: [
      'Extracting secrets by measuring execution time differences',
      'Attacking systems during maintenance windows',
      'A type of denial-of-service attack',
      'Preventing systems from synchronizing clocks',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Timing attacks measure how long operations take; if execution time depends on secret values, attackers can learn those secrets.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why are projective coordinates used instead of affine coordinates?',
    options: [
      'They require smaller numbers',
      'They are mandated by Bitcoin',
      'They avoid expensive modular inversions until the final result',
      'Affine coordinates don\\\\\'t work on elliptic curves',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Modular inversion is 30-100x slower than multiplication. Projective coordinates defer all inversions to one final conversion.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which of these is a dangerous coding pattern for cryptography?',
    options: [
      'Using constant-time comparison functions',
      'Clearing sensitive memory after use',
      'Using conditional branches that depend on secret values',
      'Using cryptographically secure random number generators',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Conditional branches on secret data cause timing variations that can leak information to attackers.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the recommended approach for implementing secp256k1?',
    options: [
      'Write your own implementation for learning',
      'Use libsecp256k1 or bindings to it',
      'Use standard library math functions',
      'Implement it in JavaScript for portability',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'libsecp256k1 is the gold standard: constant-time, extensively tested, optimized, and well-audited. Rolling your own is dangerous.',
  },
];
