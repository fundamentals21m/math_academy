import type { QuizQuestion } from './types';

export const section39Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the main advantage of FROST over the Stinson-Strobl threshold Schnorr scheme?',
    options: [
      'FROST uses smaller keys',
      'FROST supports larger threshold values',
      'FROST requires only one round of communication during signing (vs. three)',
      'FROST uses different elliptic curves',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'FROST achieves single-round signing by using a preprocessing phase for nonce commitments. Stinson-Strobl requires three rounds during signing. This makes FROST significantly more practical for real-world deployments.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How does FROST compare to the Gennaro et al. threshold DSA scheme?',
    options: [
      'FROST is less secure but faster',
      'FROST requires more participants',
      'FROST uses RSA instead of elliptic curves',
      'FROST produces standard Schnorr signatures, while Gennaro produces DSA signatures',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'FROST produces standard Schnorr signatures compatible with Bitcoin\'s BIP340, while Gennaro et al. targets threshold DSA (ECDSA). Since Bitcoin adopted Schnorr via Taproot, FROST is the natural choice for Bitcoin applications.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What security property does FROST sacrifice compared to robust threshold schemes?',
    options: [
      'Guaranteed output (robustness) - FROST may abort if parties misbehave',
      'Unforgeability',
      'Privacy of the secret key',
      'Compatibility with standard verification',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'FROST is not robust: if a malicious party submits an invalid share, the protocol aborts. Robust schemes can complete despite $t-1$ Byzantine faults. FROST trades robustness for efficiency (fewer rounds) and identifies misbehavers.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'How does FROST\'s DKG (Distributed Key Generation) compare to Pedersen DKG?',
    options: [
      'FROST uses the same Pedersen DKG without modification',
      'FROST eliminates the need for DKG entirely',
      'FROST uses a trusted dealer instead of DKG',
      'FROST adds proofs of knowledge to prevent rogue key attacks',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'FROST enhances Pedersen DKG with proofs of knowledge (Schnorr proofs) for each participant\'s polynomial. This prevents rogue key attacks where a malicious party could bias the resulting public key.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What makes FROST more suitable for Bitcoin than MuSig alone?',
    options: [
      'FROST requires fewer on-chain bytes',
      'FROST allows a threshold $(t, n)$ of signers rather than requiring all $n$ signers',
      'FROST is faster to verify',
      'FROST uses post-quantum cryptography',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'MuSig requires all $n$ participants to sign (it\'s an $n$-of-$n$ scheme). FROST allows any $t$-of-$n$ threshold, providing fault tolerance if some signers are unavailable. For custody solutions, this flexibility is essential.',
  },
];
