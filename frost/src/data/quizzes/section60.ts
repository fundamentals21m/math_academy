import type { QuizQuestion } from './types';

export const section60Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Why is FROST potentially vulnerable to quantum computers?',
    options: [
      'Quantum computers can break hash functions',
      'Shor\'s algorithm can solve the discrete logarithm problem underlying elliptic curves',
      'Quantum computers can guess nonces',
      'FROST uses quantum-vulnerable encryption',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Shor\'s algorithm can efficiently compute discrete logarithms, breaking the security of elliptic curve cryptography including FROST\'s Schnorr signatures.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What type of cryptography is being developed to resist quantum attacks?',
    options: [
      'Longer elliptic curve keys',
      'Post-quantum cryptography based on lattices, codes, or hashes',
      'Faster classical computers',
      'Double encryption',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Post-quantum cryptography uses mathematical problems believed to be hard for both classical and quantum computers, such as lattice-based or hash-based schemes.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is a major challenge in creating post-quantum threshold signatures?',
    options: [
      'Post-quantum schemes do not support signatures',
      'Threshold versions require new protocols as the algebraic structure differs from elliptic curves',
      'Quantum computers already exist',
      'Hash functions are quantum-vulnerable',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Post-quantum schemes (like lattice-based) have different mathematical structures than elliptic curves, requiring new threshold protocol designs rather than direct FROST adaptation.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What timeline do cryptographers estimate for quantum computers threatening current cryptography?',
    options: [
      'They already do',
      'Estimates range from 10-30 years, but preparation should start now',
      'Never',
      'Within 1 year',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'While cryptographically-relevant quantum computers are years away, the threat is taken seriously. Migration takes time, so research and preparation are ongoing.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is "crypto-agility" in the context of FROST deployments?',
    options: [
      'Fast signing speed',
      'The ability to migrate to new cryptographic primitives when needed',
      'Using multiple keys simultaneously',
      'Agile software development for crypto',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Crypto-agility means designing systems that can transition to new algorithms (like post-quantum schemes) without complete redesign when threats materialize.',
  },
];
