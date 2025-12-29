import type { QuizQuestion } from './types';

export const section05Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is Fermat\'s Last Theorem?',
    options: [
      'Every even number is the sum of two primes',
      'There are infinitely many prime numbers',
      'No three positive integers satisfy $a^n + b^n = c^n$ for $n > 2$',
      'Every number is the sum of four squares'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Fermat claimed no solutions exist for $a^n + b^n = c^n$ when $n > 2$. It was proved by Andrew Wiles in 1995.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Fermat\'s Little Theorem states that if $p$ is prime and $a$ is not divisible by $p$, then:',
    options: [
      '$a^p = a$',
      '$a^{p-1} \\equiv 1 \\pmod{p}$',
      '$a + p$ is prime',
      '$a^2 \\equiv -1 \\pmod{p}$'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Fermat\'s Little Theorem: $a^{p-1} \\equiv 1 \\pmod{p}$ for prime $p$ and $\\gcd(a,p)=1$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What mathematical field did Fermat help create through his correspondence with Pascal?',
    options: [
      'Calculus',
      'Probability theory',
      'Group theory',
      'Topology'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Fermat and Pascal exchanged letters about gambling problems, founding the mathematical theory of probability.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Fermat developed a method to find tangent lines that anticipated:',
    options: [
      'Integration',
      'Differentiation',
      'Limits',
      'Series'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Fermat\'s method of adequality for finding tangents was a precursor to differential calculus.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'How many years passed between Fermat stating his Last Theorem (1637) and its proof?',
    correctAnswer: 358,
    numericRange: { min: 350, max: 370, precision: 0 },
    difficulty: 'medium',
    explanation: 'Fermat\'s Last Theorem was stated in 1637 and proved by Andrew Wiles in 1995, a span of 358 years.',
  },
  {
    id: 6,
    type: 'text',
    question: 'Fermat was not a professional mathematician. What was his actual profession?',
    correctAnswer: 'lawyer',
    difficulty: 'medium',
    explanation: 'Fermat was a lawyer and jurist who pursued mathematics as an amateur, yet made professional-level contributions.',
  },
];
