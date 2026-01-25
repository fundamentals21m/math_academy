import type { QuizQuestion } from './types';

export const section196Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition VII.17 state about products and measurement?',
    options: [
      'If a number measures two others, it measures their product',
      'If a product is measured by a number, then one of the factors is measured by it',
      'Products are always measured by primes',
      'If a number multiplied by another produces a third, then the third is measured by the second',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'VII.17: If a times b = c, then c is measured by b (and by a). In other words, factors of a product divide that product.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If 7 times 5 = 35, what does VII.17 tell us?',
    options: [
      '35 is prime',
      '35 measures both 5 and 7',
      '5 measures 35 and 7 measures 35',
      'The GCD of 5 and 7 is 35',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'By VII.17, since 7 times 5 = 35, both factors (5 and 7) measure the product 35. Indeed, 35 = 5 times 7 = 7 times 5.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'VII.17 is essentially the converse of which modern statement?',
    options: [
      'If ab = c, then a|c and b|c',
      'If a|c and b|c, then ab|c',
      'If a|b and b|c, then a|c',
      'If gcd(a,b) = 1, then ab = lcm(a,b)',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'VII.17 says that if a times b = c, then a divides c and b divides c. This is the statement that factors of a product divide the product.',
  },
];
