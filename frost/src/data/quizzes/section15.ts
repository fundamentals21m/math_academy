import type { QuizQuestion } from './types';

export const section15Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In Shamir (polynomial) secret sharing, what is the minimum number of shares needed to reconstruct a secret when using a degree $t-1$ polynomial?',
    options: [
      '$t-1$ shares',
      '$t+1$ shares',
      '$t$ shares',
      'All $n$ shares',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A degree $t-1$ polynomial has $t$ coefficients, so $t$ points are needed to uniquely determine it. Any $t$ of $n$ shares can reconstruct the secret.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the key difference between additive shares and Shamir (polynomial) shares?',
    options: [
      'Additive shares require ALL shares to reconstruct, while Shamir allows any $t$-of-$n$',
      'Additive shares are more secure than Shamir shares',
      'Shamir shares are simpler to compute than additive shares',
      'Additive shares can only be used for encryption, not signatures'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Additive secret sharing is $t$-of-$t$ (all shares needed), while Shamir secret sharing provides threshold flexibility with any $t$-of-$n$ shares sufficient for reconstruction.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In FROST, why are Shamir shares used for the long-term secret key $s$ but additive shares used for the nonce $k$?',
    options: [
      'Shamir shares provide threshold flexibility for signing, while additive shares allow non-interactive nonce generation',
      'Additive shares are more secure for nonces',
      'Shamir shares are faster to compute',
      'Additive shares work better with elliptic curves',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The long-term key $s$ uses Shamir shares so any $t$ participants can sign. The nonce $k$ uses additive shares because we already know which $t$ participants are signing, and each can generate their $k_i$ independently without coordination.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Given additive shares $k_1 = 47$, $k_2 = 83$, and $k_3 = 120$, what is the shared secret $k$?',
    options: [
      '$47
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'For additive shares, the secret is simply the sum: $k = k_1 + k_2 + k_3 = 47 + 83 + 120 = 250$.',
  },
      '$250
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'For additive shares, the secret is simply the sum: $k = k_1 + k_2 + k_3 = 47 + 83 + 120 = 250$.',
  },
      '$83
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'For additive shares, the secret is simply the sum: $k = k_1 + k_2 + k_3 = 47 + 83 + 120 = 250$.',
  },
      '$120
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'For additive shares, the secret is simply the sum: $k = k_1 + k_2 + k_3 = 47 + 83 + 120 = 250$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'For additive shares, the secret is simply the sum: $k = k_1 + k_2 + k_3 = 47 + 83 + 120 = 250$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which formula correctly represents Shamir secret reconstruction using Lagrange coefficients?',
    options: [
      '$s = \\sum_{i \\in S} s_i
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Shamir reconstruction uses weighted sum with Lagrange coefficients: $s = \\sum_{i \\in S} s_i \\cdot \\lambda_i$. The $\\lambda_i$ values depend on which participants are in the signing set $S$.',
  },
      '$s = \\prod_{i \\in S} s_i \\cdot \\lambda_i
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Shamir reconstruction uses weighted sum with Lagrange coefficients: $s = \\sum_{i \\in S} s_i \\cdot \\lambda_i$. The $\\lambda_i$ values depend on which participants are in the signing set $S$.',
  },
      '$s = \\max_{i \\in S} s_i \\cdot \\lambda_i
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Shamir reconstruction uses weighted sum with Lagrange coefficients: $s = \\sum_{i \\in S} s_i \\cdot \\lambda_i$. The $\\lambda_i$ values depend on which participants are in the signing set $S$.',
  },
      '$s = \\sum_{i \\in S} s_i \\cdot \\lambda_i
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Shamir reconstruction uses weighted sum with Lagrange coefficients: $s = \\sum_{i \\in S} s_i \\cdot \\lambda_i$. The $\\lambda_i$ values depend on which participants are in the signing set $S$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Shamir reconstruction uses weighted sum with Lagrange coefficients: $s = \\sum_{i \\in S} s_i \\cdot \\lambda_i$. The $\\lambda_i$ values depend on which participants are in the signing set $S$.',
  },
];
