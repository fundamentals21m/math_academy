import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 62: Factorizing a Sum of Two Squares (Advanced)
 */
export const section62Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the first step in finding a² + b² = p for prime p ≡ 1 (mod 4)?',
    options: [
      'Find m with m² ≡ -1 (mod p)',
      'Compute the GCD of p and i',
      'Compute p mod 4',
      'Factor p as a product of primes',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'We first find m such that m² ≡ -1 (mod p), which exists since p ≡ 1 (mod 4).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Once we have m² ≡ -1 (mod p), what do we compute next?',
    options: [
      'm³ (mod p)',
      'p/m',
      'gcd(p, m + i) in Z[i]',
      'The prime factorization of m',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'We compute gcd(p, m + i) using the Euclidean algorithm in the Gaussian integers.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the Diophantus identity?',
    options: [
      '(a + b)² = a² + 2ab + b²',
      'a² + b² = (a + bi)(a - bi)',
      'gcd(a, b) · lcm(a, b) = ab',
      '(a² + b²)(c² + d²) = (ac - bd)² + (ad + bc)²',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'The Diophantus identity shows the product of two sums of squares is a sum of squares.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is 9² mod 41?',
    options: [
      '1',
      '-1 (i.e., 40)',
      '0',
      '9',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      '9² = 81 = 2 × 41 - 1 = 82 - 1, so 9² ≡ -1 (mod 41).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why does the algorithm work?',
    options: [
      'Because gcd(p, m + i) gives a Gaussian prime with norm p',
      'Because p is prime',
      'Because m² = -1 exactly',
      'Because the Euclidean algorithm always terminates',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'The GCD is a Gaussian prime π with N(π) = p, giving us p = a² + b² where π = a + bi.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Using Diophantus identity, what is 5 × 13 as a sum of two squares?',
    options: [
      '65 = 8² + 1²',
      '65 = 7² + 4²',
      'Both A and B',
      '65 = 6² + 5²',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      '5 = 1² + 2², 13 = 2² + 3². The identity gives 65 = 4² + 7² or 65 = 1² + 8² (two different ways).',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'How is the Diophantus identity related to Gaussian integers?',
    options: [
      'It is equivalent to N(αβ) = N(α)N(β)',
      'It proves the existence of i',
      'It defines multiplication in Z[i]',
      'It proves unique factorization',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'The identity follows from the multiplicativity of the norm: |αβ|² = |α|²|β|².',
  },
  {
    id: 8,
    type: 'numeric',
    question: 'What is N(5 - 4i)?',
    correctAnswer: 41,
    numericRange: { min: 41, max: 41, precision: 0 },
    difficulty: 'easy',
    explanation:
      'N(5 - 4i) = 5² + (-4)² = 25 + 16 = 41.',
  },
];
