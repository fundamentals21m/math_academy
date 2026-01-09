import type { QuizQuestion } from './types';

export const section12Questions: QuizQuestion[] = [
  {
    id: 's12-e01',
    type: 'multiple-choice',
    question: 'What is the prime factorization of 84?',
    difficulty: 'easy',
    options: ['$2^2 \\cdot 3 \\cdot 7$', '$2 \\cdot 3^2 \\cdot 7$', '$2^2 \\cdot 21$', '$4 \\cdot 21$'],
    correctIndex: 0,
    explanation:
      '$84 = 4 \\times 21 = 2^2 \\times 3 \\times 7$. Note that $21$ and $4$ are not prime, so $4 \\cdot 21$ is not a prime factorization.',
  },
  {
    id: 's12-e02',
    type: 'multiple-choice',
    question:
      'According to Euclid\'s Lemma, if a prime $p$ divides $ab$, then:',
    difficulty: 'easy',
    options: [
      '$p$ divides $a + b$',
      '$p$ divides $a$ and $p$ divides $b$',
      '$p$ divides $a$ or $p$ divides $b$',
      '$p$ divides $a - b$',
    ],
    correctIndex: 2,
    explanation:
      'Euclid\'s Lemma states that if a prime $p$ divides a product $ab$, then $p$ must divide at least one of the factors. It doesn\'t have to divide both.',
  },
  {
    id: 's12-m01',
    type: 'numeric',
    question:
      'How many positive divisors does $72 = 2^3 \\cdot 3^2$ have?',
    difficulty: 'medium',
    correctAnswer: 12,
    explanation:
      'The number of divisors is $(3+1)(2+1) = 4 \\times 3 = 12$. These are: 1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72.',
  },
  {
    id: 's12-m02',
    type: 'multiple-choice',
    question:
      'Using prime factorizations, what is $\\gcd(48, 180)$? Given: $48 = 2^4 \\cdot 3$ and $180 = 2^2 \\cdot 3^2 \\cdot 5$.',
    difficulty: 'medium',
    options: ['4', '6', '12', '36'],
    correctIndex: 2,
    explanation:
      '$\\gcd(48, 180) = 2^{\\min(4,2)} \\cdot 3^{\\min(1,2)} \\cdot 5^{\\min(0,1)} = 2^2 \\cdot 3^1 \\cdot 5^0 = 4 \\times 3 = 12$.',
  },
  {
    id: 's12-h01',
    type: 'multiple-choice',
    question:
      'Why does unique factorization fail in $\\mathbb{Z}[\\sqrt{-5}]$ (numbers $a + b\\sqrt{-5}$)?',
    difficulty: 'hard',
    options: [
      'There are no primes in this system',
      'The number 6 has two genuinely different factorizations',
      'Multiplication is not commutative',
      'Negative numbers cannot be factored',
    ],
    correctIndex: 1,
    explanation:
      'In $\\mathbb{Z}[\\sqrt{-5}]$, $6 = 2 \\times 3 = (1 + \\sqrt{-5})(1 - \\sqrt{-5})$. Both $2, 3$ and $1 \\pm \\sqrt{-5}$ are irreducible (cannot be factored further), but they give different factorizations of 6.',
  },
  {
    id: 's12-h02',
    type: 'numeric',
    question:
      'If $\\gcd(a, b) = 15$ and $\\text{lcm}(a, b) = 180$, what is $a \\cdot b$?',
    difficulty: 'hard',
    correctAnswer: 2700,
    explanation:
      'By the product formula, $\\gcd(a,b) \\cdot \\text{lcm}(a,b) = a \\cdot b$. Therefore $a \\cdot b = 15 \\times 180 = 2700$.',
  },
];
