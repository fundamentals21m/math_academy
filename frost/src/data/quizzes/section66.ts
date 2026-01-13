import type { QuizQuestion } from './types';

export const section66Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What Bitcoin upgrade enabled Schnorr signatures, making FROST directly applicable?',
    options: [
      'SegWit',
      'Taproot (BIP-340, BIP-341)',
      'Lightning Network',
      'Bitcoin Cash fork',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Taproot, activated in November 2021, introduced BIP-340 Schnorr signatures to Bitcoin, enabling direct use of FROST for threshold Bitcoin custody.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How does FROST enhance Bitcoin privacy compared to traditional multisig?',
    options: [
      'By encrypting transactions',
      'FROST signatures look identical to single-key signatures on-chain',
      'By using larger keys',
      'By requiring more confirmations',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'FROST produces a single Schnorr signature indistinguishable from a regular signature, hiding the threshold structure and improving privacy over exposed $m$-of-$n$ scripts.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is MuSig2, and how does it relate to FROST?',
    options: [
      'A different cryptocurrency',
      'A multi-signature scheme for Bitcoin that shares design principles with FROST',
      'A mining algorithm',
      'A wallet software',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'MuSig2 is a 2-round multi-signature protocol for Bitcoin. FROST generalizes to threshold signatures but shares the same cryptographic foundations.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What role might FROST play in Bitcoin Layer 2 solutions like Lightning?',
    options: [
      'Replacing the Lightning protocol',
      'Enabling threshold-secured Lightning channels and watchtowers',
      'Increasing block size',
      'Mining new bitcoins',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'FROST could secure Lightning channels with threshold signatures, distribute watchtower operation, and enable more sophisticated channel factories.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What improvement does FROST bring to Bitcoin institutional custody?',
    options: [
      'Faster block confirmations',
      'Flexible $t$-of-$n$ custody without on-chain complexity or fee overhead',
      'Higher Bitcoin prices',
      'Reduced energy consumption',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Institutions can implement flexible threshold policies (e.g., 3-of-5 executives) with a single signature on-chain, reducing fees and hiding the custody structure.',
  },
];
