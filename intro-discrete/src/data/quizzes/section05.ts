import type { QuizQuestion } from './types';

export const section05Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: "What does Fermat's Little Theorem state when $p$ is prime and $p \\nmid a$?",
    options: [
      '$a^{p-1} \\equiv 1 \\pmod{p}$',
      '$a^p \\equiv 1 \\pmod{p}$',
      '$a^{p-1} \\equiv 0 \\pmod{p}$',
      '$a \\equiv p \\pmod{p-1}$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: "Fermat's Little Theorem: $a^{p-1} \\equiv 1 \\pmod{p}$ when $p$ is prime and $p \\nmid a$.",
  },
  {
    id: 2,
    type: 'numeric',
    question: 'Calculate $\\phi(20)$, where $\\phi$ is Euler\'s totient function.',
    correctAnswer: 8,
    numericRange: { min: 1, max: 20, precision: 0 },
    difficulty: 'medium',
    explanation: '$\\phi(20) = \\phi(4)\\phi(5) = 2 \\times 4 = 8$. The integers 1-20 coprime to 20 are: 1, 3, 7, 9, 11, 13, 17, 19.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: "What does Euler's Theorem state when $\\gcd(a, n) = 1$?",
    options: [
      '$a^{\\phi(n)} \\equiv 1 \\pmod{n}$',
      '$a^n \\equiv 1 \\pmod{\\phi(n)}$',
      '$\\phi(a) \\equiv 1 \\pmod{n}$',
      '$a \\equiv \\phi(n) \\pmod{n}$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: "Euler's Theorem generalizes Fermat's: $a^{\\phi(n)} \\equiv 1 \\pmod{n}$ when $\\gcd(a, n) = 1$.",
  },
  {
    id: 4,
    type: 'numeric',
    question: 'Using Fermat\'s Little Theorem, find $2^{100} \\mod 17$.',
    correctAnswer: 16,
    numericRange: { min: 0, max: 16, precision: 0 },
    difficulty: 'medium',
    explanation: '$2^{16} \\equiv 1 \\pmod{17}$ by FLT. $100 = 6 \\times 16 + 4$, so $2^{100} \\equiv 2^4 = 16 \\pmod{17}$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In RSA, the public key is $(n, a)$. What must be kept secret?',
    options: [
      'The prime factors $p$ and $q$ of $n$, and $\\phi(n)$',
      'Only $n$',
      'Only $a$',
      'The encrypted message'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Security depends on keeping $p$, $q$, and $\\phi(n) = (p-1)(q-1)$ secret.',
  },
  {
    id: 6,
    type: 'numeric',
    question: 'If $p$ is prime, what is $\\phi(p)$?',
    correctAnswer: 0,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: 'For a prime $p$, every integer from 1 to $p-1$ is coprime to $p$, so $\\phi(p) = p - 1$. (Enter $p-1$ symbolically as the answer depends on $p$.)',
  },
];
