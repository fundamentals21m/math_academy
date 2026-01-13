import type { QuizQuestion } from './types';

export const section04Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Given private key $d$, how is the public key $Q$ computed?',
    options: [
      '$Q = d / G$',
      '$Q = d \\cdot G$ (scalar multiplication)',
      '$Q = d + G$',
      '$Q = H(d)$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The public key is computed as $Q = d \\cdot G$, where $G$ is the generator point and $d$ is the private key scalar.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What algorithm efficiently computes scalar multiplication $dG$?',
    options: [
      'Binary search',
      'Double-and-add',
      'Trial division',
      'Euclidean algorithm'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Double-and-add processes each bit of $d$, doubling at each step and adding $G$ when the bit is 1. This reduces operations from $O(d)$ to $O(\\log d)$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'How many bytes is a compressed secp256k1 public key?',
    options: [
      '32 bytes',
      '33 bytes',
      '64 bytes',
      '65 bytes'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Compressed keys are 33 bytes: 1 byte prefix (02 or 03 for y-parity) plus 32 bytes for the x-coordinate.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why can we recover $y$ from just $x$ and a parity bit?',
    options: [
      '$y$ is always zero',
      'For each $x$, there are at most two valid $y$ values (one even, one odd)',
      'The curve equation is linear',
      '$y$ equals $x$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'From $y^2 = x^3 + 7$, there are two square roots: $y$ and $-y = p - y$. One is even, one is odd, so the parity bit selects which.',
  },
  {
    id: 5,
    type: 'text',
    question: 'Approximately how many bits of security does a 256-bit elliptic curve key provide?',
    correctAnswer: '128',
    difficulty: 'hard',
    explanation: 'Due to Pollard\'s rho attack requiring $\\sqrt{n} \\approx 2^{128}$ operations, a 256-bit curve provides 128-bit security.',
  },
];
