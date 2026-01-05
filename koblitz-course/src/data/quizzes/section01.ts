import type { QuizQuestion } from './types';

export const section01Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is $\\gcd(48, 18)$?',
    options: ['$2$', '$3$', '$6$', '$9$'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Using Euclidean algorithm: $48 = 2 \\cdot 18 + 12$, $18 = 1 \\cdot 12 + 6$, $12 = 2 \\cdot 6 + 0$. So $\\gcd(48, 18) = 6$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which statement about the Euclidean algorithm is TRUE?',
    options: [
      'It always requires $n$ steps for $n$-digit numbers',
      'The number of steps is at most $5$ times the number of digits',
      'It only works for prime numbers',
      'It requires factoring both numbers first'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Lamé proved the number of steps is at most $5$ times the number of digits of the smaller number.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'If $\\gcd(a, b) = d$, we can write $d = ax + by$ for some integers $x, y$. For $\\gcd(35, 15) = 5$, what is $x$ if $5 = 35x + 15(-2)$?',
    correctAnswer: 1,
    numericRange: { min: -10, max: 10, precision: 0 },
    difficulty: 'medium',
    explanation: '$35(1) + 15(-2) = 35 - 30 = 5$, so $x = 1$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the complexity of the Euclidean algorithm for computing $\\gcd(a, b)$?',
    options: [
      '$O(a + b)$',
      '$O(ab)$',
      '$O(\\log(\\min(a,b)))$ bit operations',
      '$O((\\log a)(\\log b))$ bit operations'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The Euclidean algorithm takes $O((\\log a)(\\log b))$ bit operations, making it efficient for large numbers.',
  },
  {
    id: 5,
    type: 'text',
    question: 'What is the name of the identity that expresses $\\gcd(a,b)$ as a linear combination $ax + by$?',
    correctAnswer: "Bezout",
    difficulty: 'medium',
    explanation: "Bézout's identity states that $\\gcd(a,b) = ax + by$ for some integers $x$ and $y$.",
  },
];
