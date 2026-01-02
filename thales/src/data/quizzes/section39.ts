import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 39: Quaternions Applied to Number Theory
 */
export const section39Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Who first proved that every natural number is a sum of four squares?',
    options: ['Euler', 'Lagrange', 'Fermat', 'Gauss'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'J. L. Lagrange proved in 1770 that every natural number can be expressed as the sum of four perfect squares. This is known as Lagrange\'s Four-Square Theorem.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is an integer quaternion?',
    options: [
      'A quaternion with rational coefficients',
      'A quaternion with integer coefficients',
      'A quaternion with norm equal to 1',
      'A quaternion that represents an integer',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'An integer quaternion (also called a Lipschitz integer) is a quaternion whose coefficients a₀, a₁, a₂, a₃ are all integers.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why does proving every prime is a norm of an integer quaternion prove Lagrange\'s theorem?',
    options: [
      'Because all numbers are prime',
      'Because N(ab) = N(a)N(b) and every n is a product of primes',
      'Because quaternions contain all integers',
      'Because primes are the only numbers that matter',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Since the norm is multiplicative (N(ab) = N(a)N(b)) and every natural number is a product of primes, if each prime is a norm of an integer quaternion, then so is every natural number.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What does Euler\'s Lemma guarantee for every odd prime p?',
    options: [
      'p is the sum of two squares',
      'There exist x, y such that x² + y² + 1 = mp with 0 < m < p',
      'p divides some quaternion norm',
      'p can be factored in the quaternions',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Euler\'s Lemma states that for every odd prime p, there exist integers x and y such that x² + y² + 1 = mp, where m is a positive integer less than p.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'How is 7 expressed as a sum of four squares?',
    options: [
      '7 = 2² + 1² + 1² + 1²',
      '7 = 3² + 0² + 0² + 0²',
      '7 = 2² + 2² + 0² + 0²',
      '7 = 1² + 1² + 1² + 1²',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation:
      '7 = 4 + 1 + 1 + 1 = 2² + 1² + 1² + 1². Note that 7 requires all four squares since 7 ≡ 7 (mod 8) and cannot be written as a sum of three squares.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Which numbers CANNOT be expressed as sums of three perfect squares?',
    options: [
      'Numbers of the form 4k + 3',
      'Numbers of the form 8k + 7',
      'All odd numbers',
      'Prime numbers',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Numbers of the form 8k + 7 (i.e., 7, 15, 23, 31, ...) cannot be expressed as sums of three perfect squares. They require all four squares in Lagrange\'s theorem.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What technique is used to show that the minimal multiplier m₀ equals 1?',
    options: [
      'Induction',
      'Contradiction',
      'Descent argument',
      'Direct computation',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The proof uses a descent argument: assuming m₀ > 1, we construct a smaller multiplier m₁ < m₀ that still works, contradicting the minimality of m₀. This forces m₀ = 1.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'How is the prime 2 expressed as a sum of four squares?',
    options: [
      '2 = 2² + 0² + 0² + 0²',
      '2 = 1² + 1² + 0² + 0²',
      '2 = 1² + 1² + 1² + 1²',
      '2 cannot be expressed as four squares',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      '2 = 1² + 1² + 0² + 0² = 1 + 1 + 0 + 0. This is the simplest case and shows that 2 is the norm of the integer quaternion 1 + i₁.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'What can be said about sums of cubes compared to sums of squares?',
    options: [
      'Every integer is a sum of four cubes',
      'Every integer is a sum of five cubes, but four is unknown',
      'Every integer is a sum of three cubes',
      'Cubes are easier to work with than squares',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'Every integer can be written as a sum of five cubes (allowing negative cubes). However, it is not known whether every integer can be written as a sum of four cubes.',
  },
];
