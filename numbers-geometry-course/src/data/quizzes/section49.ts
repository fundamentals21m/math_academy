import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 49: Inverses mod n
 */
export const section49Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'When does a have a multiplicative inverse mod n?',
    options: [
      'When a < n',
      'When gcd(a, n) = 1',
      'When a is prime',
      'When n is even',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'An element a has an inverse mod n if and only if gcd(a, n) = 1, meaning a and n are coprime.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is 3⁻¹ mod 7?',
    options: [
      '2',
      '3',
      '6',
      '5',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'We need 3x ≡ 1 (mod 7). Testing: 3 × 5 = 15 = 2 × 7 + 1 ≡ 1. So 3⁻¹ ≡ 5 (mod 7).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which element does NOT have an inverse mod 10?',
    options: [
      '1',
      '3',
      '7',
      '4',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'gcd(4, 10) = 2 ≠ 1, so 4 has no inverse mod 10. The others (1, 3, 7) are coprime to 10.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'What is φ(7)?',
    correctAnswer: 6,
    numericRange: { min: 6, max: 6, precision: 0 },
    difficulty: 'easy',
    explanation:
      'For prime p, φ(p) = p - 1. Since 7 is prime, φ(7) = 6.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which algorithm finds multiplicative inverses?',
    options: [
      'Sieve of Eratosthenes',
      'Newton\\\'s method',
      'Extended Euclidean Algorithm',
      'Binary search',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The extended Euclidean algorithm finds x, y such that ax + ny = gcd(a,n). When gcd(a,n) = 1, x is the inverse of a mod n.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'What is φ(8)?',
    correctAnswer: 4,
    numericRange: { min: 4, max: 4, precision: 0 },
    difficulty: 'medium',
    explanation:
      'φ(8) = φ(2³) = 2²(2-1) = 4. The units mod 8 are {1, 3, 5, 7}.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'In RSA cryptography, what makes computing φ(n) difficult?',
    options: [
      'n = pq for large unknown primes p and q',
      'n is very large',
      'The algorithm is too slow',
      'φ(n) doesn\\\\'t exist for composite n',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'For n = pq, φ(n) = (p-1)(q-1). Without knowing p and q, computing φ(n) is as hard as factoring n.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What is the group of units (Z/6Z)*?',
    options: [
      '{1, 2, 3, 4, 5}',
      '{1, 2, 4, 5}',
      '{1, 5}',
      '{0, 1, 2, 3, 4, 5}',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The units mod 6 are elements coprime to 6. Only 1 and 5 have gcd 1 with 6. So (Z/6Z)* = {1, 5}.',
  },
];
