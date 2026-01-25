import type { QuizQuestion } from './types';

export const section02Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is a major limitation of traditional Bitcoin multisig for threshold security?',
    options: [
      'It cannot support more than 2 participants',
      'Each signature adds ~64 bytes on-chain, making transactions expensive',
      'It requires all participants to be online simultaneously',
      'It only works with ECDSA, not Schnorr signatures',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Traditional multisig requires each participant to submit a separate signature (~64 bytes each) on-chain. A 5-of-7 multisig requires 5 signatures, causing chain bloat and higher fees.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why does Shamir Secret Sharing (SSS) alone fail to provide threshold signatures?',
    options: [
      'SSS only works with prime fields, not elliptic curves',
      'SSS cannot support thresholds greater than 3',
      'To use the secret for signing, shares must be reconstructed in one place',
      'SSS requires trusted setup that cannot be verified'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'SSS is designed to reconstruct static secrets. To create a signature, the secret $s$ must be reassembled on a single computer, creating a single point of failure at the moment of reconstruction.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What privacy weakness exists in on-chain Bitcoin multisig transactions?',
    options: [
      'The transaction amounts are visible to all observers',
      'The message being signed is published in plaintext',
      'The threshold structure (e.g., 2-of-3) is revealed on-chain',
      'The IP addresses of participants are logged',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'On-chain multisig reveals the exact threshold structure to all observers. Everyone can see that Alice uses 2-of-3, which may leak information about her security setup.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In Shamir Secret Sharing, what mathematical object encodes the secret?',
    options: [
      'The constant term $f(0)$ of a polynomial',
      'The leading coefficient of a polynomial',
      'The hash of all polynomial coefficients',
      'The product of all share values'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'In Shamir Secret Sharing, the secret $s$ is encoded as the constant term of a polynomial: $f(0) = s$. The polynomial is $f(x) = s + a_1 x + a_2 x^2 + \\ldots + a_{t-1} x^{t-1}$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which combination of properties does FROST achieve that neither multisig nor SSS alone can provide?',
    options: [
      'Threshold property and quantum resistance',
      'Unlimited participants and zero transaction fees',
      'Instant finality and cross-chain compatibility',
      'On-chain efficiency, privacy, and no secret reconstruction',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'FROST uniquely combines: on-chain efficiency (single signature), privacy (threshold hidden), and security (secret never reconstructed). Multisig lacks efficiency/privacy; SSS reconstructs the secret.',
  },
];
