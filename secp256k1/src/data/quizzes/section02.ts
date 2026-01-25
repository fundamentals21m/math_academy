import type { QuizQuestion } from './types';

export const section02Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Why can\'t we use real numbers for cryptography?',
    options: [
      'Real numbers are too small',
      'Real numbers don\\\\'t support addition',
      'Real numbers are not defined mathematically',
      'Real numbers require infinite precision and cause rounding errors',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Cryptographic operations must be exact. Real numbers would require infinite storage and cause rounding errors that break security.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is $17 \\mod 5$?',
    options: [
      '$2
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$17 = 3 \\cdot 5 + 2$, so the remainder is $2$. Therefore $17 \\mod 5 = 2$.',
  },
      '$3
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$17 = 3 \\cdot 5 + 2$, so the remainder is $2$. Therefore $17 \\mod 5 = 2$.',
  },
      '$5
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$17 = 3 \\cdot 5 + 2$, so the remainder is $2$. Therefore $17 \\mod 5 = 2$.',
  },
      '$12
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$17 = 3 \\cdot 5 + 2$, so the remainder is $2$. Therefore $17 \\mod 5 = 2$.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$17 = 3 \\cdot 5 + 2$, so the remainder is $2$. Therefore $17 \\mod 5 = 2$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'How do you compute division in a finite field?',
    options: [
      'Regular division, then take mod',
      'Multiply by the modular inverse',
      'Division is not possible in finite fields',
      'Subtract until the result is less than the divisor',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'In a finite field, $a / b = a \\cdot b^{-1}$ where $b^{-1}$ is the multiplicative inverse: the number such that $b \\cdot b^{-1} \\equiv 1 \\pmod{p}$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'According to Fermat\'s Little Theorem, if $p$ is prime, then $a^{p-1} \\equiv$ ?',
    options: [
      '$0 \\pmod{p}
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Fermat\'s Little Theorem states that for prime $p$ and $a \\not\\equiv 0$, we have $a^{p-1} \\equiv 1 \\pmod{p}$.',
  },
      '$p \\pmod{p}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Fermat\'s Little Theorem states that for prime $p$ and $a \\not\\equiv 0$, we have $a^{p-1} \\equiv 1 \\pmod{p}$.',
  },
      '$1 \\pmod{p}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Fermat\'s Little Theorem states that for prime $p$ and $a \\not\\equiv 0$, we have $a^{p-1} \\equiv 1 \\pmod{p}$.',
  },
      '$a \\pmod{p}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Fermat\'s Little Theorem states that for prime $p$ and $a \\not\\equiv 0$, we have $a^{p-1} \\equiv 1 \\pmod{p}$.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Fermat\'s Little Theorem states that for prime $p$ and $a \\not\\equiv 0$, we have $a^{p-1} \\equiv 1 \\pmod{p}$.',
  },
  {
    id: 5,
    type: 'text',
    question: 'Using Fermat\'s Little Theorem, $a^{-1} \\equiv a^{p-?} \\pmod{p}$. What number fills the blank?',
    correctAnswer: '2',
    difficulty: 'hard',
    explanation: 'Since $a^{p-1} \\equiv 1$, we have $a \\cdot a^{p-2} \\equiv 1$, so $a^{-1} \\equiv a^{p-2} \\pmod{p}$.',
  },
];
