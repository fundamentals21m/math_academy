import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 30: Pythagorean Triples in Euclid
 */
export const section30Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Euclid\'s formula for Pythagorean triples is:',
    options: [
      '$a = u + v$, $b = u - v$, $c = uv
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Euclid\'s formula is a = 2uv, b = u² - v², c = u² + v². Substituting any natural numbers u > v gives a Pythagorean triple.',
  },
      '$a = 2uv$, $b = u^2 - v^2$, $c = u^2 + v^2
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'Euclid\'s formula is a = 2uv, b = u² - v², c = u² + v². Substituting any natural numbers u > v gives a Pythagorean triple.',
  },
      '$a = u$, $b = v$, $c = \\sqrt{u^2 + v^2}
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'Euclid\'s formula is a = 2uv, b = u² - v², c = u² + v². Substituting any natural numbers u > v gives a Pythagorean triple.',
  },
      '$a = u^2$, $b = v^2$, $c = u^2 + v^2
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'Euclid\'s formula is a = 2uv, b = u² - v², c = u² + v². Substituting any natural numbers u > v gives a Pythagorean triple.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'Euclid\'s formula is a = 2uv, b = u² - v², c = u² + v². Substituting any natural numbers u > v gives a Pythagorean triple.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Using Euclid\'s formula with $u = 2$, $v = 1$, which triple do we get?',
    options: ['(3, 4, 5)', '(5, 12, 13)', '(8, 15, 17)', '(6, 8, 10)'],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      'With u = 2, v = 1: a = 2(2)(1) = 4, b = 4 - 1 = 3, c = 4 + 1 = 5. So we get the triple (3, 4, 5).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question:
      'What key theorem from number theory is used to prove Euclid\'s parameterization?',
    options: [
      'The Pythagorean theorem',
      'Fermat\\'s Last Theorem',
      'Unique prime factorization',
      'The quadratic formula',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'The proof relies on unique prime factorization. If the product of relatively prime numbers is a square, then each factor must itself be a square.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What does "relatively prime" mean?',
    options: [
      'Both numbers are prime',
      'The numbers differ by 1',
      '$\\gcd(x, y) = 1
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'Two numbers x and y are relatively prime when gcd(x, y) = 1, meaning they share no common prime divisor.',
  },
      'One number divides the other',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Two numbers x and y are relatively prime when gcd(x, y) = 1, meaning they share no common prime divisor.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question:
      'For a primitive Pythagorean triple using Euclid\'s formula, which conditions on $u$ and $v$ are required?',
    options: [
      '$u$ and $v$ are both odd',
      '$u$ and $v$ are both even',
      '$u = 2v
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'For a primitive triple, we need gcd(u, v) = 1 (relatively prime) and one of u, v even while the other is odd (opposite parities). This ensures the triple has no common divisor.',
  },
      '$\\gcd(u, v) = 1$ and opposite parities',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation:
      'For a primitive triple, we need gcd(u, v) = 1 (relatively prime) and one of u, v even while the other is odd (opposite parities). This ensures the triple has no common divisor.',
  },
  {
    id: 6,
    type: 'numeric',
    question:
      'Using $u = 3$, $v = 2$ in Euclid\'s formula, what is the value of $c = u^2 + v^2$?',
    correctAnswer: 13,
    numericRange: { min: 1, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: 'c = u² + v² = 9 + 4 = 13. This gives the triple (5, 12, 13).',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question:
      'If relatively prime numbers $x$ and $y$ have product $xy$ that is a square, what can we conclude?',
    options: [
      '$x = y
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'If gcd(x, y) = 1 and xy is a square, then both x and y must be squares. This follows from unique prime factorization: each prime appears an even number of times in the product, and since x and y share no primes, each must have even exponents.',
  },
      '$x$ and $y$ are both squares',
      'Nothing special',
      '$x + y$ is a square',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'If gcd(x, y) = 1 and xy is a square, then both x and y must be squares. This follows from unique prime factorization: each prime appears an even number of times in the product, and since x and y share no primes, each must have even exponents.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'In which book of Euclid\'s Elements does the treatment of Pythagorean triples appear?',
    options: [
      'Book X',
      'Book I',
      'Book V',
      'Book XIII',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation:
      'Euclid treats Pythagorean triples in Book X (Lemma 1 to Proposition 28), where he sets out to find two square numbers whose sum is also a square.',
  },
];
