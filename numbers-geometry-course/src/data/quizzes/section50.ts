import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 50: The Theorems of Fermat and Wilson
 */
export const section50Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Fermat\'s Little Theorem state?',
    options: [
      'a^n ≡ 1 (mod n) for all a',
      '(p-1)! ≡ 1 (mod p)',
      'p divides a^p - a for all primes p',
      'a^(p-1) ≡ 1 (mod p) when gcd(a,p) = 1 and p is prime',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'Fermat\'s Little Theorem states that a^(p-1) ≡ 1 (mod p) when p is prime and a is not divisible by p.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Using Fermat\'s theorem, what is 2^10 mod 11?',
    options: [
      '0',
      '2',
      '1',
      '10',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Since 11 is prime, Fermat says 2^10 ≡ 1 (mod 11). Indeed, p-1 = 10.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What does Wilson\'s Theorem state?',
    options: [
      '(p-1)! ≡ -1 (mod p) if and only if p is prime',
      'n! ≡ 0 (mod n) for all n',
      '(p-1)! ≡ 1 (mod p) for prime p',
      'p! ≡ p (mod p)',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Wilson\'s Theorem characterizes primes: p > 1 is prime if and only if (p-1)! ≡ -1 (mod p).',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'What is 4! mod 5?',
    correctAnswer: 4,
    numericRange: { min: 4, max: 4, precision: 0 },
    difficulty: 'easy',
    explanation:
      '4! = 24 = 25 - 1 = 5 × 5 - 1 ≡ -1 ≡ 4 (mod 5). This verifies Wilson\'s theorem for p = 5.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why is Wilson\'s theorem impractical for primality testing?',
    options: [
      'It only works for some primes',
      'It requires knowing φ(p)',
      'It gives probabilistic results',
      'Computing (p-1)! is too slow for large p',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Computing (p-1)! requires p-2 multiplications and the number grows extremely fast. For large p, this is impractical.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What is Euler\'s generalization of Fermat\'s theorem?',
    options: [
      'a^n ≡ 1 (mod n)',
      'a^φ(n) ≡ 1 (mod n) when gcd(a,n) = 1',
      '(n-1)! ≡ -1 (mod n)',
      'a^n ≡ a (mod n)',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Euler\'s theorem states a^φ(n) ≡ 1 (mod n) when gcd(a,n) = 1. For prime n, φ(n) = n-1, giving Fermat.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question:
      'In the proof of Fermat\'s theorem, what key fact is used about multiplication by a (mod p)?',
    options: [
      'It permutes the non-zero elements',
      'It adds 1 to each element',
      'It maps everything to 0',
      'It doubles each element',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'Since gcd(a,p) = 1, multiplying by a is a bijection on (Z/pZ)*. The set {a, 2a, ..., (p-1)a} is a permutation of {1, 2, ..., p-1}.',
  },
  {
    id: 8,
    type: 'numeric',
    question: 'Using Fermat\'s theorem, if 3^6 ≡ 1 (mod 7), what is 3^100 mod 7?',
    correctAnswer: 4,
    numericRange: { min: 4, max: 4, precision: 0 },
    difficulty: 'hard',
    explanation:
      '100 = 6 × 16 + 4. So 3^100 = (3^6)^16 × 3^4 ≡ 1 × 81 ≡ 81 mod 7 = 77 + 4 = 4.',
  },
];
