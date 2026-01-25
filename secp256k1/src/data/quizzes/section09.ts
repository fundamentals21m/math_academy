import type { QuizQuestion } from './types';

export const section09Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the fundamental security assumption underlying secp256k1?',
    options: [
      'RSA problem',
      'Factoring large primes',
      'Elliptic Curve Discrete Logarithm Problem (ECDLP)',
      'Collision resistance of SHA-256',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'All secp256k1 security rests on ECDLP: given $G$ and $Q = dG$, finding $d$ is computationally infeasible.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How does Shor\'s algorithm threaten elliptic curve cryptography?',
    options: [
      'It makes signing slower',
      'It only affects RSA, not ECC',
      'It has already broken Bitcoin',
      'It can solve ECDLP in polynomial time on a quantum computer',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Shor\'s algorithm would reduce ECDLP from exponential to polynomial time, making secp256k1 insecure on sufficiently large quantum computers.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is "harvest now, decrypt later"?',
    options: [
      'Recording encrypted data today to decrypt when quantum computers exist',
      'A farming technique',
      'A type of signature aggregation',
      'A Bitcoin mining strategy',
    ],
    correctIndex: 0,
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
      'Quantum key distribution',
      'Larger RSA keys',
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
      'It\\\'s faster than all alternatives',
      'It\\\'s the only curve that works with Bitcoin',
      'Extensive auditing, no suspicious parameters, and massive network effects',
      'NIST mandates its use',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'secp256k1 has years of battle-testing, simple parameters with no hidden backdoors, and is the de facto standard for blockchain cryptography.',
  },
];
