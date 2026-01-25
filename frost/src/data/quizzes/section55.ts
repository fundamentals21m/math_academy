import type { QuizQuestion } from './types';

export const section55Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What equation is used to verify a FROST signature share $z_i$ from participant $i$?',
    options: [
      '$z_i = d_i + e_i \\cdot \\rho_i
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Each signature share is verified by checking $z_i \\cdot G = R_i + c \\cdot \\lambda_i \\cdot Y_i$, where $R_i$ is the commitment, $c$ is the challenge, and $Y_i$ is the public share.',
  },
      '$z_i \\cdot Y_i = R_i
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Each signature share is verified by checking $z_i \\cdot G = R_i + c \\cdot \\lambda_i \\cdot Y_i$, where $R_i$ is the commitment, $c$ is the challenge, and $Y_i$ is the public share.',
  },
      '$z_i = H(m) \\cdot x_i
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Each signature share is verified by checking $z_i \\cdot G = R_i + c \\cdot \\lambda_i \\cdot Y_i$, where $R_i$ is the commitment, $c$ is the challenge, and $Y_i$ is the public share.',
  },
      '$z_i \\cdot G = R_i + c \\cdot \\lambda_i \\cdot Y_i
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Each signature share is verified by checking $z_i \\cdot G = R_i + c \\cdot \\lambda_i \\cdot Y_i$, where $R_i$ is the commitment, $c$ is the challenge, and $Y_i$ is the public share.',
  },
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Each signature share is verified by checking $z_i \\cdot G = R_i + c \\cdot \\lambda_i \\cdot Y_i$, where $R_i$ is the commitment, $c$ is the challenge, and $Y_i$ is the public share.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why is signature share verification important in FROST?',
    options: [
      'To speed up the signing process',
      'To encrypt the signature',
      'To generate the public key',
      'To identify malicious signers who submit invalid shares',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Verification catches malicious or malfunctioning signers before aggregation. Without it, a single bad share would invalidate the entire signature with no way to identify the culprit.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What happens if a signature share fails verification?',
    options: [
      'The protocol automatically fixes it',
      'All shares are discarded',
      'The signer should be identified and excluded, and signing restarted',
      'The share is used anyway',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A failed verification indicates the signer provided an incorrect share (malicious or buggy). The coordinator should exclude that signer and restart with a valid subset.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In the verification equation $z_i \\cdot G = R_i + c \\cdot \\lambda_i \\cdot Y_i$, what does $\\lambda_i$ represent?',
    options: [
      'The Lagrange coefficient for signer $i$',
      'The signer\'s private key',
      'A random nonce',
      'The message hash'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$\\lambda_i$ is the Lagrange coefficient that weights signer $i$\'s contribution based on which signers are participating in this signing session.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the computational cost of verifying all signature shares compared to skipping verification?',
    options: [
      'No additional cost',
      'One scalar multiplication per share, but catches invalid shares early',
      'Doubles the total signing time',
      'Requires solving discrete logarithms',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Verification requires ~2 point multiplications per share. This is worthwhile because catching bad shares before aggregation saves having to debug failed final signatures.',
  },
];
