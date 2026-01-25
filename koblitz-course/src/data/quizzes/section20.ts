import type { QuizQuestion } from './types';

export const section20Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'ECPP (Elliptic Curve Primality Proving) produces:',
    options: [
      'A probable prime',
      'The factorization of $n
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'ECPP generates a certificate that can be independently verified, proving primality.',
  },
      'An approximation of primality',
      'A verifiable certificate of primality',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'ECPP generates a certificate that can be independently verified, proving primality.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Goldwasser-Kilian algorithm uses elliptic curves to:',
    options: [
      'Prove primality by finding curves with specific group orders',
      'Factor large numbers',
      'Compute discrete logs',
      'Generate random primes',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'It finds curves where the group order has a large prime factor, enabling recursive primality proof.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Schoof\'s algorithm computes:',
    options: [
      'Discrete logarithms on elliptic curves',
      'The j-invariant of a curve',
      'Optimal curve parameters',
      'The number of points on an elliptic curve over $\\mathbb{F}_p
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Schoof\'s algorithm counts $\\#E(\\mathbb{F}_p)$ in polynomial time.',
  },
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Schoof\'s algorithm counts $\\#E(\\mathbb{F}_p)$ in polynomial time.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'ECPP is compared to which deterministic primality test?',
    options: [
      'Miller-Rabin',
      'Fermat test',
      'AKS',
      'Lucas test',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'AKS is deterministic polynomial-time, but ECPP is faster in practice.',
  },
  {
    id: 5,
    type: 'text',
    question: 'What does the "PP" in ECPP stand for?',
    correctAnswer: 'Primality Proving',
    difficulty: 'easy',
    explanation: 'ECPP = Elliptic Curve Primality Proving.',
  },
];
