import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 14: The Impossibility of Solving Classical Problems
 */
export const section14Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question:
      'Which mathematician proved that π is transcendental, thereby proving that squaring the circle is impossible?',
    options: [
      'Wantzel in 1837',
      'Hermite in 1873',
      'Lindemann in 1882',
      'Gauss in 1796',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Ferdinand von Lindemann proved in 1882 that π is transcendental (not the root of any polynomial with rational coefficients). Since ruler and compass can only construct algebraic numbers, squaring the circle is impossible.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question:
      'What is the difference between an algebraic number and a transcendental number?',
    options: [
      'Algebraic numbers are irrational; transcendental numbers are rational',
      'Algebraic numbers are roots of polynomials with rational coefficients; transcendental numbers are not',
      'Algebraic numbers can be written as fractions; transcendental numbers cannot',
      'Algebraic numbers are complex; transcendental numbers are real',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'An algebraic number is a root of some polynomial equation with rational (or equivalently, integer) coefficients. A transcendental number is not a root of any such polynomial. Examples: √2 is algebraic (root of x²-2=0), but π and e are transcendental.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question:
      'According to the Rational Root Lemma, if p/q (in lowest terms) is a rational root of a polynomial with integer coefficients, what must be true?',
    options: [
      'p must divide the leading coefficient and q must divide the constant term',
      'p must divide the constant term and q must divide the leading coefficient',
      'Both p and q must be prime numbers',
      'p + q must equal the degree of the polynomial',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'The Rational Root Lemma states that if p/q is a rational root (in lowest terms) of aₙxⁿ + ... + a₁x + a₀ = 0, then p divides a₀ (the constant term) and q divides aₙ (the leading coefficient).',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question:
      'Using the Rational Root Lemma, why does x³ - 2 = 0 have no rational solutions?',
    options: [
      'Because 2 is prime',
      'Because the only possible rational roots are ±1 and ±2, and none of them work',
      'Because the equation has degree 3',
      'Because the coefficient of x² is zero',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'By the Rational Root Lemma, any rational root p/q must have p dividing 2 and q dividing 1. So the only possibilities are ±1, ±2. Testing: 1³-2=-1, (-1)³-2=-3, 2³-2=6, (-2)³-2=-10. None equal zero, so ∛2 is irrational.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question:
      'In Wantzel\'s proof, what is the field F[√c] when F is a field and c is in F?',
    options: [
      'All numbers of the form a + b√c where a, b are in F',
      'All square roots of numbers in F',
      'All rational multiples of √c',
      'The intersection of F with the real numbers',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'F[√c] is the field extension consisting of all numbers of the form a + b√c where a and b are elements of F. This is itself a field — closed under addition, subtraction, multiplication, and division.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question:
      'What is the key insight in Wantzel\'s impossibility proof for the classical problems?',
    options: [
      'Circles can only intersect lines at rational points',
      'If a cubic equation has a solution in F[√c], it already has a solution in F',
      'All constructible numbers are rational',
      'Cube roots can be expressed as iterated square roots',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'Wantzel\'s key proposition states: if a cubic equation with coefficients in F has a root in F[√c], then it already has a root in F itself. This means no amount of square root extensions can reach a genuine cubic root.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question:
      'Why can the regular 17-gon be constructed with ruler and compass?',
    options: [
      'Because 17 is a prime number',
      'Because 17 = 2⁴ + 1 is a Fermat prime',
      'Because 17 is an odd number',
      'Because cos(360°/17) is rational',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Gauss proved that a regular n-gon is constructible if and only if n is a product of a power of 2 and distinct Fermat primes (primes of the form 2^(2^k) + 1). Since 17 = 2⁴ + 1 is a Fermat prime, the regular 17-gon is constructible.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question:
      'Which of the following is a Fermat prime?',
    options: [
      '7 (since 7 = 2³ - 1)',
      '31 (since 31 = 2⁵ - 1)',
      '257 (since 257 = 2⁸ + 1 = 2^(2³) + 1)',
      '127 (since 127 = 2⁷ - 1)',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'A Fermat prime has the form 2^(2^k) + 1. For k=3: 2^(2³) + 1 = 2⁸ + 1 = 257, which is prime. The known Fermat primes are 3, 5, 17, 257, and 65537. The numbers 7, 31, 127 are Mersenne primes (of form 2ⁿ - 1), not Fermat primes.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question:
      'Which mathematician first proved that doubling the cube and trisecting an arbitrary angle are impossible with ruler and compass?',
    options: [
      'Gauss in 1796',
      'Wantzel in 1837',
      'Lindemann in 1882',
      'Euclid around 300 BC',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Pierre Wantzel published the first rigorous proof in 1837 that doubling the cube and trisecting an arbitrary angle are impossible with ruler and compass. The proof shows these problems require cube roots, which cannot be obtained through any sequence of square root extensions.',
  },
];
