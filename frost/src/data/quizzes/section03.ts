import type { QuizQuestion } from './types';

export const section03Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does "Signature Indistinguishability" mean in FROST?',
    options: [
      'All FROST signatures look identical to each other',
      'FROST signatures cannot be verified by standard Schnorr verifiers',
      'The signing participants cannot be distinguished from each other',
      'A FROST signature looks identical to a single-party Schnorr signature on-chain',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Signature indistinguishability means a FROST threshold signature appears identical to a regular single-party Schnorr signature: 1 public key, 1 signature on-chain, regardless of $t$ or $n$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In FROST, when is the private key $s$ reconstructed in one place?',
    options: [
      'Never - it is never reconstructed',
      'During key generation',
      'During signing',
      'During verification',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A key property of FROST is that the private key $s$ never exists in one place. Not during key generation, not during signing, never. This eliminates the single point of failure.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the Schnorr signature equation that FROST distributes?',
    options: [
      '$z = k \\cdot s + c
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The Schnorr signature response is $z = k + s \\cdot c$, where $k$ is the nonce, $s$ is the secret key, and $c$ is the challenge hash. FROST computes this collaboratively without reconstructing $k$ or $s$.',
  },
      '$z = k - s \\cdot c
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Schnorr signature response is $z = k + s \\cdot c$, where $k$ is the nonce, $s$ is the secret key, and $c$ is the challenge hash. FROST computes this collaboratively without reconstructing $k$ or $s$.',
  },
      '$z = k / (s + c)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Schnorr signature response is $z = k + s \\cdot c$, where $k$ is the nonce, $s$ is the secret key, and $c$ is the challenge hash. FROST computes this collaboratively without reconstructing $k$ or $s$.',
  },
      '$z = k + s \\cdot c
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Schnorr signature response is $z = k + s \\cdot c$, where $k$ is the nonce, $s$ is the secret key, and $c$ is the challenge hash. FROST computes this collaboratively without reconstructing $k$ or $s$.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Schnorr signature response is $z = k + s \\cdot c$, where $k$ is the nonce, $s$ is the secret key, and $c$ is the challenge hash. FROST computes this collaboratively without reconstructing $k$ or $s$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In FROST, how is the secret key $s$ shared among participants?',
    options: [
      'XOR-based sharing: $s = s_1 \\oplus s_2 \\oplus \\ldots
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'In FROST, the secret key is Shamir-shared, meaning $s = \\sum_i s_i \\cdot \\lambda_i$ where $\\lambda_i$ are the Lagrange coefficients. This allows any $t$ participants to sign.',
  },
      'Additive sharing: $s = s_1 + s_2 + \\ldots
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'In FROST, the secret key is Shamir-shared, meaning $s = \\sum_i s_i \\cdot \\lambda_i$ where $\\lambda_i$ are the Lagrange coefficients. This allows any $t$ participants to sign.',
  },
      'Hash-based sharing: $s = H(s_1 \\| s_2 \\| \\ldots)
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'In FROST, the secret key is Shamir-shared, meaning $s = \\sum_i s_i \\cdot \\lambda_i$ where $\\lambda_i$ are the Lagrange coefficients. This allows any $t$ participants to sign.',
  },
      'Shamir sharing with Lagrange coefficients: $s = \\sum_i s_i \\cdot \\lambda_i
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'In FROST, the secret key is Shamir-shared, meaning $s = \\sum_i s_i \\cdot \\lambda_i$ where $\\lambda_i$ are the Lagrange coefficients. This allows any $t$ participants to sign.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'In FROST, the secret key is Shamir-shared, meaning $s = \\sum_i s_i \\cdot \\lambda_i$ where $\\lambda_i$ are the Lagrange coefficients. This allows any $t$ participants to sign.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'How many communication rounds does FROST signing require (with preprocessing)?',
    options: [
      'Zero rounds - completely non-interactive',
      'Two rounds',
      'One round',
      'Three rounds',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'FROST achieves single-round signing with preprocessing. After the setup phase, participants can sign with just one round of communication, making it highly efficient.',
  },
];
