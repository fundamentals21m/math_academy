import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 26: The Seventeenth Century in France
 */
export const section26Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What role did Marin Mersenne play in 17th century mathematics?',
    options: [
      'He invented calculus',
      'He was the king\\\\'s official mathematician',
      'He served as a clearinghouse for mathematical ideas through correspondence',
      'He founded the first mathematical journal',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Mersenne was a Franciscan friar who corresponded with virtually all active mathematicians of his day, including Descartes, Fermat, Pascal, Galileo, and Torricelli. His cell in Paris became a meeting place where mathematicians could exchange ideas.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is a Mersenne prime?',
    options: [
      'Any prime number discovered by Mersenne',
      'A prime that divides a perfect number',
      'A prime with an even number of digits',
      'A prime of the form 2^p - 1 where p is also prime',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'A Mersenne prime is a prime number of the form 2^p - 1 where p is also prime. Examples include 3, 7, 31, and 127. The largest known primes are typically Mersenne primes.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What revolutionary concept did Desargues introduce in projective geometry?',
    options: [
      'Negative numbers',
      'The Cartesian coordinate system',
      'Points at infinity where parallel lines meet',
      'Imaginary numbers',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Desargues introduced the concept of points at infinity, where parallel lines are considered to meet. This was revolutionary for projective geometry, which studies properties preserved under projection.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'How did Descartes die?',
    options: [
      'In a duel over a mathematical dispute',
      'From pneumonia after 5 AM lessons with Queen Christina of Sweden',
      'Of old age in Paris',
      'Executed for heresy',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Queen Christina of Sweden invited Descartes to teach her philosophy, but she insisted on lessons at 5 AM. The cold Swedish winter and early hours proved fatal—Descartes caught pneumonia and died in 1650.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What does Descartes\'s Rule of Signs determine?',
    options: [
      'Whether a number is positive or negative',
      'The sign of a derivative',
      'The bounds on positive and negative roots of a polynomial',
      'Whether two quantities are equal',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Descartes\'s Rule of Signs states that the number of positive roots of a polynomial equals the number of sign changes in its coefficients (or less by an even number), and similarly for negative roots using p(-x).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What does Fermat\'s Little Theorem state?',
    options: [
      'a^(p-1) ≡ 1 (mod p) for prime p and a not divisible by p',
      'x^n + y^n = z^n has no solutions for n > 2',
      'Every even number is the sum of two primes',
      'The sum of divisors of a perfect number equals twice the number',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'Fermat\'s Little Theorem states that if p is prime and a is not divisible by p, then a^(p-1) ≡ 1 (mod p). This theorem is fundamental in modern cryptography, including RSA encryption.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'How long did it take to prove Fermat\'s Last Theorem?',
    options: [
      '50 years (proved in 1715)',
      '150 years (proved in 1815)',
      '258 years (proved in 1923)',
      '358 years (proved in 1994)',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'Fermat wrote his famous marginal note around 1637. The theorem was finally proved by Andrew Wiles in 1994—358 years later—using advanced techniques from algebraic geometry that Fermat could not have known.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What did Pascal build at age 18?',
    options: [
      'A telescope',
      'A calculating machine (the Pascaline)',
      'A pendulum clock',
      'A printing press',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Pascal built the Pascaline, an early mechanical calculator, at age 18 to help his father with tax calculations. This was one of the first mechanical calculators ever built.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'What problem led Pascal and Fermat to found probability theory?',
    options: [
      'The problem of points (dividing stakes in an interrupted game)',
      'The problem of finding prime numbers',
      'The problem of squaring the circle',
      'The problem of the bridges of Königsberg',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'In 1654, a gambler named the Chevalier de Méré posed the "problem of points" to Pascal: how should stakes be divided if a game is interrupted? Pascal\'s correspondence with Fermat about this problem founded probability theory.',
  },
];
