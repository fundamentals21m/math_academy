import type { QuizQuestion } from './types';

export const section51Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In elliptic curve cryptography, what is the result of adding a point $P$ to itself (point doubling)?',
    options: [
      'The identity element $\\mathcal{O}$',
      'A new point $2P$ on the curve',
      'The inverse point $-P$',
      'An undefined operation',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Point doubling ($P + P = 2P$) produces a new point on the curve by drawing a tangent line at $P$ and finding where it intersects the curve.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What special case must be handled when adding two elliptic curve points $P$ and $Q$?',
    options: [
      'When $P$ and $Q$ have the same $x$-coordinate but different $y$-coordinates',
      'When both points have positive coordinates',
      'When the sum exceeds the field order',
      'When the points are both generators',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'When $P$ and $Q$ share the same $x$-coordinate but have different $y$-coordinates, they are inverses ($Q = -P$), and $P + Q = \\mathcal{O}$ (the identity element).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For the secp256k1 curve used in Bitcoin, what is the coordinate field?',
    options: [
      'Real numbers $\\mathbb{R}$',
      'Integers modulo a 256-bit prime $p$',
      'Complex numbers $\\mathbb{C}$',
      'Rational numbers $\\mathbb{Q}$',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'secp256k1 uses a prime field $\\mathbb{F}_p$ where $p = 2^{256} - 2^{32} - 977$, meaning all coordinates are integers modulo this large prime.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why is modular inversion computationally expensive in elliptic curve arithmetic?',
    options: [
      'It requires solving a discrete logarithm',
      'It uses the extended Euclidean algorithm with $O(\\log p)$ iterations',
      'It cannot be computed for prime fields',
      'It always requires floating point operations',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Modular inversion (finding $a^{-1} \\mod p$) uses the extended Euclidean algorithm, which is expensive compared to multiplication. This is why projective coordinates are often used to avoid inversions.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What technique reduces the number of modular inversions in elliptic curve multi-scalar multiplication?',
    options: [
      'Using projective or Jacobian coordinates',
      'Increasing the field size',
      'Using floating point approximations',
      'Reducing the number of points',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Projective coordinates $(X:Y:Z)$ represent a point as $(X/Z, Y/Z)$ or similar, allowing multiple operations before a single final inversion to convert back to affine coordinates.',
  },
];
