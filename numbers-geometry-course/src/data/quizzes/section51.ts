import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 51: The Chinese Remainder Theorem
 */
export const section51Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What condition must the moduli satisfy for the Chinese Remainder Theorem?',
    options: [
      'They must all be prime',
      'They must be pairwise coprime',
      'They must be consecutive integers',
      'They must all be even',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'CRT requires the moduli to be pairwise coprime, meaning gcd(mᵢ, mⱼ) = 1 for all i ≠ j.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question:
      'If m₁ = 3 and m₂ = 5, what is the modulus of the unique solution guaranteed by CRT?',
    options: ['8', '15', '3', '5'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'The solution is unique modulo M = m₁ × m₂ = 3 × 5 = 15.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'Find x such that x ≡ 1 (mod 2) and x ≡ 2 (mod 3). Give the smallest positive answer.',
    correctAnswer: 5,
    numericRange: { min: 5, max: 5, precision: 0 },
    difficulty: 'medium',
    explanation:
      'We need odd numbers: 1, 3, 5, 7, ... and check mod 3. 1 ≡ 1, 3 ≡ 0, 5 ≡ 2 (mod 3). So x = 5.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Who is credited with the earliest form of the Chinese Remainder Theorem?',
    options: ['Euclid', 'Sun Zi', 'Fermat', 'Euler'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'The Chinese mathematician Sun Zi (3rd century) posed problems that led to this theorem.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What algebraic structure does CRT establish between Z/mnZ and Z/mZ × Z/nZ?',
    options: [
      'Homomorphism',
      'Isomorphism',
      'Subset relationship',
      'No relationship',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'When gcd(m,n) = 1, CRT gives a ring isomorphism: Z/mnZ ≅ Z/mZ × Z/nZ.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Why can CRT speed up RSA decryption?',
    options: [
      'It makes factoring easier',
      'Operations can be done mod p and mod q separately',
      'It reduces the key size',
      'It eliminates the need for prime numbers',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'In RSA with n = pq, CRT allows computing x^d mod p and x^d mod q separately, then combining. This is faster.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'If gcd(m,n) = 1, what does CRT imply about φ(mn)?',
    options: [
      'φ(mn) = φ(m) + φ(n)',
      'φ(mn) = φ(m) × φ(n)',
      'φ(mn) = φ(m) - φ(n)',
      'φ(mn) = φ(m)/φ(n)',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'CRT implies the multiplicativity of Euler\'s totient: φ(mn) = φ(m)φ(n) when gcd(m,n) = 1.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question:
      'Can we apply CRT to solve x ≡ 1 (mod 4) and x ≡ 3 (mod 6)?',
    options: [
      'Yes, the answer is unique mod 24',
      'Yes, but there are multiple solutions',
      'No, because 4 and 6 are not coprime',
      'No, because the remainders are different',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'gcd(4, 6) = 2 ≠ 1, so CRT does not directly apply. We would need additional conditions for a solution.',
  },
];
