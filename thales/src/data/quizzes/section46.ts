import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 46: Linear Diophantine Equations
 */
export const section46Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'When does the equation ax + by = c have integer solutions?',
    options: [
      'Always',
      'When a and b are coprime',
      'When gcd(a, b) divides c',
      'When c is prime',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'The equation ax + by = c has integer solutions if and only if gcd(a, b) divides c. This is because any linear combination ax + by is divisible by gcd(a, b).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Does 15x + 21y = 100 have integer solutions?',
    options: [
      'Yes, because 15 and 21 are both odd',
      'No, because gcd(15, 21) = 3 does not divide 100',
      'Yes, because 100 > 15 + 21',
      'No, because 100 is even',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'gcd(15, 21) = 3, and 3 does not divide 100 (since 100 = 33 × 3 + 1). Therefore no integer solutions exist.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question:
      'If (x₀, y₀) is one solution of ax + by = c with gcd(a,b) = 1, what is the general solution?',
    options: [
      'x = x₀ + at, y = y₀ + bt',
      'x = x₀ + bt, y = y₀ - at',
      'x = x₀ - bt, y = y₀ + at',
      'x = x₀ + ct, y = y₀ - ct',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The general solution is x = x₀ + bt and y = y₀ - at for integer t. Adding bt to x and subtracting at from y keeps ax + by constant.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'How do continued fractions help solve ax + by = c?',
    options: [
      'They give the decimal expansion of c',
      'The penultimate convergent provides a particular solution',
      'They factor a and b into primes',
      'They only work for quadratic equations',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'The penultimate convergent pₙ₋₁/qₙ₋₁ of a/b satisfies pₙqₙ₋₁ - pₙ₋₁qₙ = ±1, which gives a particular solution that can be scaled by c.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question:
      'For x = -20 + 11t and y = 10 - 5t, which constraints determine positive solutions?',
    options: [
      't > 0 and t < 10',
      't > 20/11 and t < 10/5',
      't > -20/11 and t < 10/5',
      't can be any integer',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      'For x > 0: -20 + 11t > 0 means t > 20/11 ≈ 1.82. For y > 0: 10 - 5t > 0 means t < 2. Since no integer satisfies 1.82 < t < 2, there are no positive solutions.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question:
      'Why must any common divisor of a and b also divide ax + by?',
    options: [
      'Because x and y are integers',
      'Because any divisor of a and b divides any linear combination',
      'Because gcd(a, b) = 1',
      'Because c must be positive',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'If d divides both a and b, then a = da\' and b = db\' for integers a\', b\'. Thus ax + by = d(a\'x + b\'y), so d divides ax + by.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question:
      'What is the first step in solving 25x + 55y = 50?',
    options: [
      'Divide by 50',
      'Find gcd(25, 55) and check divisibility',
      'Guess a solution',
      'Convert to a quadratic equation',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'First find gcd(25, 55) = 5 and verify 5 divides 50. Then simplify to 5x + 11y = 10 (dividing everything by 5) before finding solutions.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'Who gave the first complete solution to linear Diophantine equations?',
    options: [
      'Diophantus of Alexandria',
      'Euclid',
      'Brahmagupta of India',
      'Fibonacci',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'While named after Diophantus (~250 AD), who allowed rational solutions, Brahmagupta of India (628 AD) gave the first complete solution for integer solutions.',
  },
  {
    id: 9,
    type: 'multiple-choice',
    question:
      'If 5x + 11y = 10 has solution (x₀, y₀) = (-20, 10), how many integer solutions exist?',
    options: [
      'None',
      'Exactly one',
      'Exactly two',
      'Infinitely many',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation:
      'Once one solution exists, there are infinitely many: x = -20 + 11t, y = 10 - 5t for all integers t. Each integer t gives a different valid solution.',
  },
];
