import type { QuizQuestion } from './types';

export const section41Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is signature aggregation in the context of FROST and MuSig?',
    options: [
      'Combining multiple different signatures into one file',
      'Combining multiple signers\\\' contributions into a single standard Schnorr signature',
      'Compressing signature data for storage',
      'Aggregating signatures from different time periods',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Signature aggregation combines contributions from multiple signers into a single Schnorr signature $(R, z)$ that verifies against an aggregated public key. The final signature is indistinguishable from a single-signer Schnorr signature.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How is the aggregated public key $Y$ computed in a FROST group?',
    options: [
      '$Y = Y_1 + Y_2 + \\cdots + Y_n
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The group public key is $Y = \\sum_{i \\in S} \\lambda_i Y_i$ where $\\lambda_i$ are Lagrange coefficients and $S$ is any set of $t$ participants. Due to polynomial interpolation, this equals $[s]G$ regardless of which $t$ participants are chosen.',
  },
      '$Y = Y_1 \\cdot Y_2 \\cdots Y_n
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The group public key is $Y = \\sum_{i \\in S} \\lambda_i Y_i$ where $\\lambda_i$ are Lagrange coefficients and $S$ is any set of $t$ participants. Due to polynomial interpolation, this equals $[s]G$ regardless of which $t$ participants are chosen.',
  },
      '$Y = H(Y_1 \\| Y_2 \\| \\cdots \\| Y_n)
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The group public key is $Y = \\sum_{i \\in S} \\lambda_i Y_i$ where $\\lambda_i$ are Lagrange coefficients and $S$ is any set of $t$ participants. Due to polynomial interpolation, this equals $[s]G$ regardless of which $t$ participants are chosen.',
  },
      '$Y = \\sum_{i \\in S} \\lambda_i Y_i$ for signing set $S
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The group public key is $Y = \\sum_{i \\in S} \\lambda_i Y_i$ where $\\lambda_i$ are Lagrange coefficients and $S$ is any set of $t$ participants. Due to polynomial interpolation, this equals $[s]G$ regardless of which $t$ participants are chosen.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The group public key is $Y = \\sum_{i \\in S} \\lambda_i Y_i$ where $\\lambda_i$ are Lagrange coefficients and $S$ is any set of $t$ participants. Due to polynomial interpolation, this equals $[s]G$ regardless of which $t$ participants are chosen.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What advantage does FROST+MuSig provide over standard Bitcoin multisig?',
    options: [
      'Faster transaction confirmation',
      'Higher security guarantees',
      'A single 64-byte signature instead of multiple signatures, saving block space',
      'No need for internet connectivity',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Standard $m$-of-$n$ multisig requires $m$ separate signatures on-chain. FROST produces a single 64-byte Schnorr signature regardless of threshold, dramatically reducing transaction size and fees.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In MuSig-style key aggregation, why is the "key aggregation coefficient" $a_i = H(L, X_i)$ necessary?',
    options: [
      'To make signatures shorter',
      'To improve verification speed',
      'To enable key recovery',
      'To prevent rogue key attacks where a malicious party can control the aggregate key',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Without key aggregation coefficients, an attacker could choose $X_n = X_n\' - \\sum_{i<n} X_i$ to make the aggregate key equal to $X_n\'$ which they control alone. The coefficients $a_i = H(L, X_i)$ prevent this by making the aggregation non-linear.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'How does the final aggregated signature $z$ relate to individual signature shares $z_i$?',
    options: [
      '$z = z_1 \\cdot z_2 \\cdots z_t
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The final signature response is the sum $z = \\sum_{i \\in S} z_i$ of all participant shares. This works because the Lagrange coefficients are already embedded in each $z_i$, and the sum reconstructs the correct aggregate response.',
  },
      '$z = H(z_1 \\| z_2 \\| \\cdots \\| z_t)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The final signature response is the sum $z = \\sum_{i \\in S} z_i$ of all participant shares. This works because the Lagrange coefficients are already embedded in each $z_i$, and the sum reconstructs the correct aggregate response.',
  },
      '$z = \\sum_{i \\in S} z_i
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The final signature response is the sum $z = \\sum_{i \\in S} z_i$ of all participant shares. This works because the Lagrange coefficients are already embedded in each $z_i$, and the sum reconstructs the correct aggregate response.',
  },
      '$z = \\max(z_1, z_2, \\ldots, z_t)
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The final signature response is the sum $z = \\sum_{i \\in S} z_i$ of all participant shares. This works because the Lagrange coefficients are already embedded in each $z_i$, and the sum reconstructs the correct aggregate response.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The final signature response is the sum $z = \\sum_{i \\in S} z_i$ of all participant shares. This works because the Lagrange coefficients are already embedded in each $z_i$, and the sum reconstructs the correct aggregate response.',
  },
];
