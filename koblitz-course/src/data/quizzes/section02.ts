import type { QuizQuestion } from './types';

export const section02Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is $17 \\bmod 5$?',
    options: [
      '$2
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$17 = 3 \\cdot 5 + 2$, so $17 \\equiv 2 \\pmod{5}$.',
  },
      '$0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$17 = 3 \\cdot 5 + 2$, so $17 \\equiv 2 \\pmod{5}$.',
  },
      '$3
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$17 = 3 \\cdot 5 + 2$, so $17 \\equiv 2 \\pmod{5}$.',
  },
      '$4
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$17 = 3 \\cdot 5 + 2$, so $17 \\equiv 2 \\pmod{5}$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$17 = 3 \\cdot 5 + 2$, so $17 \\equiv 2 \\pmod{5}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'According to Fermat\'s Little Theorem, if $p$ is prime and $\\gcd(a, p) = 1$, then:',
    options: [
      '$a^p \\equiv 1 \\pmod{p}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Fermat\'s Little Theorem: $a^{p-1} \\equiv 1 \\pmod{p}$ when $p$ is prime and $\\gcd(a,p) = 1$.',
  },
      '$a^{2p} \\equiv 1 \\pmod{p}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Fermat\'s Little Theorem: $a^{p-1} \\equiv 1 \\pmod{p}$ when $p$ is prime and $\\gcd(a,p) = 1$.',
  },
      '$a^{p-1} \\equiv 1 \\pmod{p}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Fermat\'s Little Theorem: $a^{p-1} \\equiv 1 \\pmod{p}$ when $p$ is prime and $\\gcd(a,p) = 1$.',
  },
      '$a^{p+1} \\equiv 1 \\pmod{p}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Fermat\'s Little Theorem: $a^{p-1} \\equiv 1 \\pmod{p}$ when $p$ is prime and $\\gcd(a,p) = 1$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Fermat\'s Little Theorem: $a^{p-1} \\equiv 1 \\pmod{p}$ when $p$ is prime and $\\gcd(a,p) = 1$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'Using Fermat\'s Little Theorem, what is $2^{10} \\bmod 11$?',
    correctAnswer: 1,
    numericRange: { min: 0, max: 10, precision: 0 },
    difficulty: 'medium',
    explanation: 'Since $11$ is prime and $\\gcd(2,11)=1$, by Fermat\'s Little Theorem: $2^{10} \\equiv 1 \\pmod{11}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What does Euler\'s theorem generalize?',
    options: [
      'The Euclidean algorithm',
      'The Chinese Remainder Theorem',
      'Quadratic reciprocity',
      'Fermat\\\\\'s Little Theorem',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Euler\'s theorem ($a^{\\phi(n)} \\equiv 1 \\pmod{n}$) generalizes Fermat\'s Little Theorem to composite moduli.',
  },
  {
    id: 5,
    type: 'numeric',
    question: 'What is $\\phi(12)$, the Euler totient of 12?',
    correctAnswer: 4,
    numericRange: { min: 1, max: 12, precision: 0 },
    difficulty: 'easy',
    explanation: 'Numbers coprime to 12 in $\\{1,...,11\\}$: 1, 5, 7, 11. So $\\phi(12) = 4$.',
  },
];
