import type { QuizQuestion } from './types';

export const section205Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition VII.26 prove about products of relatively prime pairs?',
    options: [
      'Products of relatively prime numbers are always prime',
      'If each of two numbers is relatively prime to each of two others, the products are relatively prime',
      'Relatively prime pairs multiply to give perfect squares',
      'The product of all relatively prime pairs is infinite'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'VII.26: If gcd(a,c) = 1, gcd(a,d) = 1, gcd(b,c) = 1, and gcd(b,d) = 1, then gcd(ab, cd) = 1. Cross-relative primality implies product relative primality.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If gcd(2,3) = 1, gcd(2,5) = 1, gcd(7,3) = 1, and gcd(7,5) = 1, what is gcd(14,15)?',
    options: [
      '1',
      '7',
      '2',
      '5'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'By VII.26, since 2 and 7 are each relatively prime to both 3 and 5, we have gcd(2 times 7, 3 times 5) = gcd(14, 15) = 1.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'VII.26 generalizes which earlier propositions?',
    options: [
      'VII.23 only',
      'VII.24 and VII.25',
      'VII.20 and VII.21',
      'VII.16 and VII.17'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'VII.26 extends VII.24 (products preserve coprimality with a single number) and VII.25 (squares of coprimes are coprime). It shows the most general form: pairwise coprimality of factors implies coprimality of products.',
  },
];
