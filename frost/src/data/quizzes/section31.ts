import type { QuizQuestion } from './types';

export const section31Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does the coordinator send to initiate a FROST signing round?',
    options: [
      'Only the message $m
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The coordinator sends $(m, B)$ where $m$ is the message to sign and $B$ is the list of commitments from all participants in the signing set $S$.',
  },
      'The secret key',
      'The message $m$ and commitment list $B = [(i, D_i, E_i) : i \\in S]
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The coordinator sends $(m, B)$ where $m$ is the message to sign and $B$ is the list of commitments from all participants in the signing set $S$.',
  },
      'The final signature',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The coordinator sends $(m, B)$ where $m$ is the message to sign and $B$ is the list of commitments from all participants in the signing set $S$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In what order does each signer compute values during FROST signing?',
    options: [
      'Binding value $\\rho_i$, commitment $R_i$, group commitment $R$, challenge $c$, signature share $z_i
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Each signer computes: (1) binding $\\rho_i = H_1(i, m, B)$, (2) own commitment $R_i = D_i + [\\rho_i]E_i$, (3) group commitment $R = \\sum R_j$, (4) challenge $c = H_2(R, Y, m)$, (5) share $z_i$.',
  },
      'Challenge, binding value, signature share',
      'Signature share, then verification',
      'Random number, then hash',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Each signer computes: (1) binding $\\rho_i = H_1(i, m, B)$, (2) own commitment $R_i = D_i + [\\rho_i]E_i$, (3) group commitment $R = \\sum R_j$, (4) challenge $c = H_2(R, Y, m)$, (5) share $z_i$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the verification equation the coordinator uses to check each signature share $z_i$?',
    options: [
      '$[z_i]G = Y_i
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The coordinator verifies $[z_i]G \\stackrel{?}{=} R_i + [\\lambda_i \\cdot c]Y_i$. This works because $z_i = k_i + \\lambda_i \\cdot s_i \\cdot c$ and $R_i = [k_i]G$, $Y_i = [s_i]G$.',
  },
      '$[z_i]G = R
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The coordinator verifies $[z_i]G \\stackrel{?}{=} R_i + [\\lambda_i \\cdot c]Y_i$. This works because $z_i = k_i + \\lambda_i \\cdot s_i \\cdot c$ and $R_i = [k_i]G$, $Y_i = [s_i]G$.',
  },
      '$[z_i]G = R_i + [\\lambda_i \\cdot c]Y_i
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The coordinator verifies $[z_i]G \\stackrel{?}{=} R_i + [\\lambda_i \\cdot c]Y_i$. This works because $z_i = k_i + \\lambda_i \\cdot s_i \\cdot c$ and $R_i = [k_i]G$, $Y_i = [s_i]G$.',
  },
      '$z_i = s_i
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The coordinator verifies $[z_i]G \\stackrel{?}{=} R_i + [\\lambda_i \\cdot c]Y_i$. This works because $z_i = k_i + \\lambda_i \\cdot s_i \\cdot c$ and $R_i = [k_i]G$, $Y_i = [s_i]G$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The coordinator verifies $[z_i]G \\stackrel{?}{=} R_i + [\\lambda_i \\cdot c]Y_i$. This works because $z_i = k_i + \\lambda_i \\cdot s_i \\cdot c$ and $R_i = [k_i]G$, $Y_i = [s_i]G$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'After all valid shares $z_i$ are collected, how is the final signature response $z$ computed?',
    options: [
      '$z = z_1 \\cdot z_2 \\cdot ... \\cdot z_t
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The final response is simply the sum of all signature shares: $z = \\sum_{i \\in S} z_i$. This aggregation produces the valid Schnorr response.',
  },
      '$z = \\sum_{i \\in S} z_i
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The final response is simply the sum of all signature shares: $z = \\sum_{i \\in S} z_i$. This aggregation produces the valid Schnorr response.',
  },
      '$z = \\max(z_1, z_2, ..., z_t)
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The final response is simply the sum of all signature shares: $z = \\sum_{i \\in S} z_i$. This aggregation produces the valid Schnorr response.',
  },
      '$z = z_1 / z_2
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The final response is simply the sum of all signature shares: $z = \\sum_{i \\in S} z_i$. This aggregation produces the valid Schnorr response.',
  },
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The final response is simply the sum of all signature shares: $z = \\sum_{i \\in S} z_i$. This aggregation produces the valid Schnorr response.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the final output of the FROST signing protocol?',
    options: [
      'Just the response $z
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The output is a standard Schnorr signature $\\sigma = (R, z)$ where $R$ is the group commitment and $z$ is the aggregated response. This verifies against the group public key $Y$.',
  },
      'All individual shares $z_1, z_2, ...
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The output is a standard Schnorr signature $\\sigma = (R, z)$ where $R$ is the group commitment and $z$ is the aggregated response. This verifies against the group public key $Y$.',
  },
      'The secret key $s
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The output is a standard Schnorr signature $\\sigma = (R, z)$ where $R$ is the group commitment and $z$ is the aggregated response. This verifies against the group public key $Y$.',
  },
      'The signature pair $\\sigma = (R, z)
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The output is a standard Schnorr signature $\\sigma = (R, z)$ where $R$ is the group commitment and $z$ is the aggregated response. This verifies against the group public key $Y$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The output is a standard Schnorr signature $\\sigma = (R, z)$ where $R$ is the group commitment and $z$ is the aggregated response. This verifies against the group public key $Y$.',
  },
];
