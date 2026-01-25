import type { QuizQuestion } from './types';

export const section200Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Proposition VII.21 state about relatively prime numbers?',
    options: [
      'Numbers relatively prime to one another are the least of those having the same ratio',
      'Relatively prime numbers are always odd',
      'Two primes are always relatively prime',
      'Relatively prime numbers have no common factors except primes',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'VII.21: If gcd(a,b) = 1 (relatively prime), then a:b is already in lowest terms. No smaller pair of numbers can represent the same ratio.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which pair is in lowest terms (relatively prime)?',
    options: [
      '8:12',
      '15:25',
      '9:15',
      '7:11',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '7 and 11 are both prime and different, so gcd(7,11) = 1. They are relatively prime, meaning 7:11 is already in lowest terms. The other pairs share common factors.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why is VII.21 important for reducing fractions?',
    options: [
      'It shows that reduction always terminates',
      'It provides an algorithm for reduction',
      'It proves that lowest terms are unique: relatively prime pairs are exactly the reduced form',
      'It shows all fractions can be converted to decimals',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'VII.21 establishes that relatively prime numbers ARE the least in their ratio. This means the reduced form of a fraction is characterized precisely by the coprimality of numerator and denominator.',
  },
];
