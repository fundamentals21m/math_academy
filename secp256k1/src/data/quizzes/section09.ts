import type { QuizQuestion } from './types';

export const section09Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the fundamental security assumption underlying secp256k1?',
    options: [
      'RSA problem',
      'Elliptic Curve Discrete Logarithm Problem (ECDLP)',
      'Factoring large primes',
      'Collision resistance of SHA-256'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'All secp256k1 security rests on ECDLP: given $G$ and $Q = dG$, finding $d$ is computationally infeasible.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How does Shor\'s algorithm threaten elliptic curve cryptography?',
    options: [
      'It makes signing slower',
      'It can solve ECDLP in polynomial time on a quantum computer',
      'It only affects RSA, not ECC',
      'It has already broken Bitcoin'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Shor\'s algorithm would reduce ECDLP from exponential to polynomial time, making secp256k1 insecure on sufficiently large quantum computers.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is "harvest now, decrypt later"?',
    options: [
      'A farming technique',
      'Recording encrypted data today to decrypt when quantum computers exist',
      'A type of signature aggregation',
      'A Bitcoin mining strategy'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Adversaries may store encrypted communications now, waiting for quantum computers to break the encryption later.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which post-quantum cryptography approach was standardized by NIST?',
    options: [
      'secp512k1',
      'Lattice-based (CRYSTALS-Dilithium)',
      'Larger RSA keys',
      'Quantum key distribution'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'NIST selected lattice-based schemes like CRYSTALS-Dilithium and hash-based SPHINCS+ as post-quantum signature standards.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why does secp256k1 remain popular despite newer curves like Ed25519?',
    options: [
      'It\'s faster than all alternatives',
      'Extensive auditing, no suspicious parameters, and massive network effects',
      'It\'s the only curve that works with Bitcoin',
      'NIST mandates its use'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'secp256k1 has years of battle-testing, simple parameters with no hidden backdoors, and is the de facto standard for blockchain cryptography.',
  },
];
