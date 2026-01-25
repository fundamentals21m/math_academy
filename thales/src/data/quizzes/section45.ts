import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 45: The Fundamental Theorem of Arithmetic
 */
export const section45Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does the Fundamental Theorem of Arithmetic state?',
    options: [
      'Every integer is the sum of four squares',
      'There are infinitely many primes',
      'Every integer > 1 has a unique prime factorization',
      'The gcd of two numbers can be found by division'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'The Fundamental Theorem of Arithmetic states that every positive integer greater than 1 can be expressed as a product of primes in exactly one way (up to ordering).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does Bézout\'s Identity say about gcd(a, b)?',
    options: [
      'gcd(a,b) = a - b',
      'gcd(a,b) is always prime',
      'gcd(a,b) = ax + by for some integers x, y',
      'gcd(a,b) divides a × b',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Bézout\'s Identity states that gcd(a,b) is the smallest positive integer that can be expressed as ax + by for integer coefficients x and y.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If a divides bc and gcd(a,b) = 1, what can we conclude?',
    options: [
      'a divides c',
      'a divides b',
      'b divides c',
      'a = bc'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'This is the Fundamental Lemma of Arithmetic. Since a and b share no common factors (gcd = 1), all the prime factors of a must come from c, so a divides c.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If a prime p divides bc, what can we conclude?',
    options: [
      'p divides b + c',
      'p divides b or p divides c',
      'p divides b - c',
      'p = b or p = c'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'This is a special case of the Fundamental Lemma: if prime p divides bc, then p divides b or p divides c (or both). This is because gcd(p, b) is either 1 or p.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why is the smallest divisor > 1 of any integer n > 1 always prime?',
    options: [
      'By the definition of prime numbers',
      'Because n is always prime',
      'By Euclid\\'s Algorithm',
      'Because if it were composite, its factors would be smaller divisors',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'If the smallest divisor d > 1 were composite, say d = ab with 1 < a < d, then a would also divide n, contradicting that d was smallest.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'How does the uniqueness of prime factorization follow from the Fundamental Lemma?',
    options: [
      'If p₁...pᵣ = q₁...qₛ, then p₁ must equal some qⱼ',
      'By counting divisors',
      'By Euclid\\'s Algorithm',
      'By induction on the sum of exponents',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'If p₁...pᵣ = q₁...qₛ, then p₁ divides q₁...qₛ. By the Fundamental Lemma (applied repeatedly), p₁ must equal some qⱼ. Cancel and repeat.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'How can continued fractions help find x, y in gcd(a,b) = ax + by?',
    options: [
      'The quotients are x and y',
      'The pₙ₋₁ and qₙ₋₁ from the second-to-last convergent give x, y',
      'The convergents provide candidate solutions',
      'Only works when gcd = 1',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'From the continued fraction a/b = (a₀,...,aₙ), we get aqₙ₋₁ - bpₙ₋₁ = ±d where d = gcd(a,b). So x = ±qₙ₋₁ and y = ∓pₙ₋₁.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'In which number system does unique factorization fail?',
    options: [
      'The integers ℤ',
      'The rationals ℚ',
      'The natural numbers ℕ',
      'ℤ[√-5]',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'In ℤ[√-5], we have 6 = 2 × 3 = (1+√-5)(1-√-5), two different factorizations into irreducibles. This failure motivated Kummer and Dedekind to develop ideal theory.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'Who gave the first complete solution to linear Diophantine equations?',
    options: [
      'Euclid',
      'Brahmagupta',
      'Diophantus',
      'Fermat',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'While Diophantus (c. 250 AD) studied these equations with rational solutions, Brahmagupta of India (628 AD) gave the first complete solution for integer solutions.',
  },
];
