import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 48: Pythagorean Triangles and Fermat's Last Theorem
 */
export const section48Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is a primitive Pythagorean triple?',
    options: [
      'Any triple (x, y, z) with x² + y² = z²',
      'A triple (x, y, z) with x² + y² = z² and gcd(x, y, z) = 1',
      'A triple where x, y, z are all prime',
      'The smallest Pythagorean triple',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'A primitive Pythagorean triple satisfies x² + y² = z² with gcd(x, y, z) = 1. Non-primitive triples are just multiples of primitive ones.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the parametrization of primitive Pythagorean triples (with y even)?',
    options: [
      'x = u + v, y = u - v, z = uv',
      'x = u² - v², y = 2uv, z = u² + v²',
      'x = 2u, y = 2v, z = 2(u + v)',
      'x = u/v, y = v/u, z = 1',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'For primitive triples with y even, we have x = u² - v², y = 2uv, z = u² + v² where gcd(u, v) = 1, u > v, and u, v are not both odd.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If gcd(m, n) = 1 and mn is a perfect square, what can we conclude?',
    options: [
      'm + n is a square',
      'm - n is a square',
      'Both m and n are perfect squares',
      'm = n',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'This key lemma follows from the divisor counting function: τ(mn) = τ(m)τ(n) when gcd(m,n) = 1, and τ(x) is odd iff x is a square.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Who proved Fermat\'s Last Theorem completely in 1994?',
    options: [
      'Pierre de Fermat',
      'Leonhard Euler',
      'Andrew Wiles',
      'Carl Friedrich Gauss',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Andrew Wiles of Princeton University proved Fermat\'s Last Theorem in 1994, building on work by Ribet, Taniyama, Shimura, Mazur, Frey, and Taylor.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which case of Fermat\'s Last Theorem did Fermat himself prove?',
    options: [
      'n = 3',
      'n = 4',
      'n = 5',
      'All odd primes',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Fermat proved the n = 4 case using his method of descent. The n = 3 case was later proved by Euler, and other cases took centuries more.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What is Fermat\'s "method of descent"?',
    options: [
      'Finding smaller and smaller approximations',
      'Showing a solution implies a smaller solution, which is impossible',
      'Reducing to simpler equations',
      'Computing limits as n approaches infinity',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The method of descent shows that if a solution exists, there must be a strictly smaller solution. This chain cannot continue infinitely for positive integers, giving a contradiction.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'How long was Fermat\'s Last Theorem an open problem?',
    options: [
      '50 years',
      '150 years',
      '350 years',
      '1000 years',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Fermat wrote his famous marginal note around 1637, and Wiles proved the theorem in 1994, making it an open problem for approximately 350 years.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'Who knew the parametrization of Pythagorean triples ~4000 years ago?',
    options: [
      'The Greeks',
      'The Egyptians',
      'The Mesopotamians',
      'The Chinese',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'According to Neugebauer, the Mesopotamians (Babylonians) knew how to generate Pythagorean triples about 4000 years ago, as evidenced by clay tablets like Plimpton 322.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question: 'What stronger result did Fermat actually prove for n = 4?',
    options: [
      'x⁴ + y⁴ = z⁴ has no solutions',
      'x⁴ + y⁴ = z² has no solutions',
      'x⁴ - y⁴ = z⁴ has no solutions',
      'x² + y² = z⁴ has no solutions',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'Fermat proved the stronger result that x⁴ + y⁴ = z² has no positive integer solutions. Since any solution to x⁴ + y⁴ = z⁴ would give x⁴ + y⁴ = (z²)², this implies the n = 4 case of FLT.',
  },
];
