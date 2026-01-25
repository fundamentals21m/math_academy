import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 7: Perfect Numbers
 */
export const section07Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is a perfect number?',
    options: [
      'A number that is divisible by all single-digit numbers',
      'A number equal to the sum of its proper divisors',
      'A number that is both prime and even',
      'A number whose digits sum to 10',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'A perfect number equals the sum of its proper divisors. For example, 6 = 1 + 2 + 3, and 28 = 1 + 2 + 4 + 7 + 14. They can also be described as numbers that are "amicable with themselves."',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What are the first two perfect numbers?',
    options: [
      '4 and 8',
      '10 and 15',
      '6 and 28',
      '12 and 24',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'The first two perfect numbers are 6 (= 1+2+3) and 28 (= 1+2+4+7+14). The third and fourth perfect numbers are 496 and 8128.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: "According to Euclid's theorem, when is $2^{m-1}(2^m - 1)$ a perfect number?",
    options: [
      'When $2^m - 1$ is prime',
      'When m is any positive integer',
      'When m is even',
      'When $2^m - 1$ is a perfect square',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      "Euclid proved in Book IX of the Elements that $2^{m-1}(2^m - 1)$ is perfect whenever $2^m - 1$ is prime. This connects perfect numbers to Mersenne primes.",
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What are Mersenne primes?',
    options: [
      'Primes that are also perfect numbers',
      'Primes that end in 7',
      'Primes of the form $2^m - 1
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      'Mersenne primes are primes of the form $2^m - 1$, named after Father Marin Mersenne (1588-1648). Examples include 3, 7, 31, and 127.',
  },
      'Primes discovered by Mersenne',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Mersenne primes are primes of the form $2^m - 1$, named after Father Marin Mersenne (1588-1648). Examples include 3, 7, 31, and 127.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For $2^m - 1$ to possibly be prime, what condition must m satisfy?',
    options: [
      'm must be a perfect square',
      'm must be prime',
      'm must be even',
      'm must be a power of 2',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'For $2^m - 1$ to be prime, m must be prime. If m = ab with a, b > 1, then $2^m - 1$ can be factored. However, the converse is not true: $2^{11} - 1 = 2047 = 23 × 89$ is not prime even though 11 is prime.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What did Frank Nelson Cole prove in his famous 1903 lecture?',
    options: [
      'That there are infinitely many perfect numbers',
      'That odd perfect numbers exist',
      'That perfect numbers are always even',
      'That $2^{67} - 1$ is not prime, disproving Mersenne',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation:
      'In 1903, Cole silently calculated $2^{67} - 1$ and then the product 193,707,721 × 761,838,257,287. The results matched, proving that $2^{67} - 1$ is not prime and Mersenne was wrong. He received a standing ovation.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What did Euler prove about even perfect numbers?',
    options: [
      'That every even perfect number has Euclid\'s form $2^{m-1}(2^m - 1)
    correctIndex: 0,
    difficulty: 'medium',
    explanation:
      "Euler (1707-1783) proved that every even perfect number has the form $2^{m-1}(2^m - 1)$ where $2^m - 1$ is prime. This is the converse of Euclid's theorem, showing that Euclid's formula gives ALL even perfect numbers.",
  },
      'That they are all less than one billion',
      'That there are exactly 10 even perfect numbers',
      'That even perfect numbers are always divisible by 6',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation:
      "Euler (1707-1783) proved that every even perfect number has the form $2^{m-1}(2^m - 1)$ where $2^m - 1$ is prime. This is the converse of Euclid's theorem, showing that Euclid's formula gives ALL even perfect numbers.",
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'Which of these is still an open problem in mathematics?',
    options: [
      'Whether 6 is a perfect number',
      'Whether 28 equals the sum of its proper divisors',
      'Whether Euclid\\\'s perfect number formula is correct',
      'Whether there are infinitely many Mersenne primes',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation:
      'Two major open problems remain: (1) Are there infinitely many Mersenne primes? (2) Do odd perfect numbers exist? Both have been unsolved for centuries.',
  },
  {
    id: 9,
    type: 'numeric',
    question: 'What is the third perfect number? (Hint: Use $m = 5$ in Euclid\'s formula)',
    correctAnswer: 496,
    numericRange: { min: 1, max: 1000, precision: 0 },
    difficulty: 'medium',
    explanation:
      'Using Euclid\'s formula with m = 5: $2^4(2^5 - 1) = 16 × 31 = 496$. This is the third perfect number after 6 and 28.',
  },
];
