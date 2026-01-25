import type { QuizQuestion } from './types';

export const section46Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is Taproot (BIP340/BIP341) in Bitcoin?',
    options: [
      'A new cryptocurrency built on Bitcoin',
      'A layer-2 scaling solution',
      'An upgrade enabling Schnorr signatures and a key/script spending structure',
      'A privacy coin mixer',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Taproot (activated November 2021) introduced BIP340 Schnorr signatures and BIP341\'s key-path/script-path spending structure. The key path allows spending with just a signature, while the script path reveals complex conditions only if needed.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How does FROST integrate with Taproot\'s key path?',
    options: [
      'FROST signatures are incompatible with Taproot',
      'FROST requires revealing the script path',
      'Taproot must be modified to support FROST',
      'The FROST group public key becomes the Taproot internal key for key-path spending',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The FROST group\'s aggregated public key $Y$ serves as the Taproot internal key. When all threshold participants cooperate, they produce a standard BIP340 Schnorr signature for key-path spending - indistinguishable from a single-signer spend.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What privacy benefit does FROST+Taproot provide?',
    options: [
      'Transaction amounts are hidden',
      'Threshold signatures look identical to single-signer transactions on-chain',
      'Sender addresses are anonymized',
      'Transaction history is deleted after confirmation',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A FROST threshold signature is a standard 64-byte Schnorr signature. On-chain observers cannot distinguish a 3-of-5 FROST spend from a single person spending with one key. This hides the multi-party nature of custody.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the "tweak" in Taproot key derivation, and how does it affect FROST?',
    options: [
      'A small adjustment to improve performance',
      'An error correction code',
      'A random value added for privacy',
      'The public key is tweaked by $t = H(P \\| m)$ where $m$ is the Merkle root of scripts',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The Taproot output key is $Q = P + [t]G$ where $t = \\text{hash}(P \\| m)$ commits to scripts. FROST participants must account for this tweak when signing: the effective secret becomes $s + t$, requiring adjustment in the signing protocol.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What happens if FROST participants cannot cooperate (e.g., key loss)?',
    options: [
      'The Taproot script path can provide fallback spending conditions',
      'Funds are permanently lost',
      'Bitcoin miners can recover the funds',
      'The threshold automatically decreases',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Taproot\'s script path provides fallback conditions. For example, after a timelock, a backup key or different threshold might spend. This combines FROST\'s efficiency in the happy path with script-based recovery in exceptional cases.',
  },
];
