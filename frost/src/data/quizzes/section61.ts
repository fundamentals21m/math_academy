import type { QuizQuestion } from './types';

export const section61Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does "Verifiable FROST" add to the basic FROST protocol?',
    options: [
      'Faster signature generation',
      'Quantum resistance',
      'Smaller signature sizes',
      'Proofs that each participant performed their computation correctly',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Verifiable FROST provides cryptographic proofs that participants correctly followed the protocol, enabling detection of cheating beyond just invalid shares.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What cryptographic tool is commonly used to make secret sharing verifiable?',
    options: [
      'Homomorphic encryption',
      'Digital certificates',
      'Feldman\\\\'s Verifiable Secret Sharing (VSS)',
      'Symmetric encryption',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Feldman\'s VSS publishes commitments to polynomial coefficients ($a_i \\cdot G$), allowing participants to verify their shares lie on the correct polynomial.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In Feldman VSS, what can participants verify about their share $s_i$?',
    options: [
      'That it equals the secret',
      'That other participants have the same share',
      'That $s_i \\cdot G = \\sum_{k=0}^{t-1} i^k \\cdot C_k$ where $C_k$ are published commitments',
      'That the share is a prime number',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Feldman commitments $C_k = a_k \\cdot G$ let participants verify their share: $s_i \\cdot G = \\sum_{k=0}^{t-1} i^k \\cdot C_k = f(i) \\cdot G$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the trade-off of adding verifiability to FROST?',
    options: [
      'Additional computation and communication for proofs',
      'Reduced security',
      'Larger key sizes only',
      'No trade-offs exist',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Verifiability requires generating and checking proofs, adding computation time and communication bandwidth, but provides stronger guarantees against cheating.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'When is Verifiable FROST particularly important?',
    options: [
      'When all participants are fully trusted',
      'When participants may be malicious and accountability is required',
      'When using weak hash functions',
      'Only for very large thresholds',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Verifiable FROST is essential in adversarial settings where participants might cheat and the system needs to identify and prove who misbehaved.',
  },
];
