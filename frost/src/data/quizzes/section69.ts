import type { QuizQuestion } from './types';

export const section69Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What fundamental mathematical insight enables FROST\'s threshold property?',
    options: [
      'Prime factorization is hard',
      'Polynomial interpolation: $t$ points determine a degree $t-1$ polynomial',
      'Hash functions are one-way',
      'Elliptic curves have no solutions',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Shamir\'s secret sharing uses polynomial interpolation: any $t$ points on a degree $t-1$ polynomial determine it uniquely, but $t-1$ points reveal nothing.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What societal problem does FROST address?',
    options: [
      'Slow computers',
      'The concentration of trust and single points of failure',
      'Expensive electricity',
      'Complex mathematics',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'FROST distributes trust across multiple parties, eliminating single points of failure where one person or system can act unilaterally or be compromised.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'How does FROST embody the principle of "trust minimization"?',
    options: [
      'By requiring trust in a central authority',
      'By reducing trust assumptions: no single party can sign or recover the key',
      'By using trusted hardware',
      'By trusting mathematics is wrong',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'FROST minimizes trust by distributing the secret. Security relies on the assumption that fewer than $t$ parties are compromised, not on trusting any single entity.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What does FROST demonstrate about the relationship between mathematics and security?',
    options: [
      'Mathematics is unnecessary for security',
      'Mathematical structures (polynomials, groups) directly enable security guarantees',
      'Security requires physical measures only',
      'Mathematics makes systems less secure',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'FROST shows how abstract mathematics (polynomial interpolation, elliptic curve groups) translates directly into practical security guarantees for real-world systems.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the enduring lesson from FROST for building trustworthy systems?',
    options: [
      'Trust a single authority completely',
      'Distribute trust, verify cryptographically, and design for adversarial environments',
      'Avoid using mathematics',
      'Security is impossible',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'FROST teaches that security comes from distributing trust (threshold), cryptographic verification (Schnorr proofs), and assuming adversaries exist (Byzantine tolerance).',
  },
];
