import type { QuizQuestion } from './types';

export const section32Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the standard Schnorr verification equation that FROST signatures satisfy?',
    options: [
      '$[z]G = R + [c]Y
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'FROST signatures satisfy the standard Schnorr verification: $[z]G = R + [c]Y$ where $c = H_2(R, Y, m)$. This is identical to single-party Schnorr verification.',
  },
      '$[z]G = R - [c]Y
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'FROST signatures satisfy the standard Schnorr verification: $[z]G = R + [c]Y$ where $c = H_2(R, Y, m)$. This is identical to single-party Schnorr verification.',
  },
      '$[z]G = R \\cdot [c]Y
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'FROST signatures satisfy the standard Schnorr verification: $[z]G = R + [c]Y$ where $c = H_2(R, Y, m)$. This is identical to single-party Schnorr verification.',
  },
      '$z = R + c \\cdot Y
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'FROST signatures satisfy the standard Schnorr verification: $[z]G = R + [c]Y$ where $c = H_2(R, Y, m)$. This is identical to single-party Schnorr verification.',
  },
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'FROST signatures satisfy the standard Schnorr verification: $[z]G = R + [c]Y$ where $c = H_2(R, Y, m)$. This is identical to single-party Schnorr verification.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Can a verifier distinguish between a FROST threshold signature and a single-party Schnorr signature?',
    options: [
      'Yes, FROST signatures are larger',
      'No, they are mathematically identical and indistinguishable',
      'Yes, FROST signatures use different verification',
      'Yes, FROST signatures include the threshold $t
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'FROST signatures are standard Schnorr signatures - same format (64 bytes), same verification algorithm. A verifier cannot determine if one signer or multiple signers produced it.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'FROST signatures are standard Schnorr signatures - same format (64 bytes), same verification algorithm. A verifier cannot determine if one signer or multiple signers produced it.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What information remains hidden from an observer when verifying a FROST signature?',
    options: [
      'The threshold $t$, total participants $n$, and which participants signed',
      'Only the message',
      'Only the public key',
      'Nothing - all information is public',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'An observer sees only $(Y, R, z, m)$. They cannot determine the threshold $t$, total participants $n$, or which specific participants cooperated to produce the signature.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'How does FROST signature verification cost compare to single-party Schnorr verification?',
    options: [
      'FROST is more expensive (more scalar multiplications)',
      'Identical cost - same operations: 1 hash, 2 scalar multiplications, 1 addition, 1 comparison',
      'FROST is less expensive (fewer operations)',
      'FROST requires exponentially more computation',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Verification cost is identical: compute $c = H_2(R, Y, m)$, compute $[z]G$ and $R + [c]Y$, compare. No additional operations needed for threshold signatures.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For Bitcoin transactions using FROST, what is the signature size compared to traditional k-of-n multisig?',
    options: [
      'Traditional multisig is smaller',
      'Both are the same size',
      'FROST: 64 bytes; Traditional: ~34 + 72 bytes per signer (much larger)',
      'FROST signatures are larger',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'FROST produces a 64-byte signature regardless of $t$ or $n$. Traditional Bitcoin multisig adds ~34 bytes (pubkey) + ~72 bytes (signature) per signer, growing linearly with the number of signers.',
  },
];
