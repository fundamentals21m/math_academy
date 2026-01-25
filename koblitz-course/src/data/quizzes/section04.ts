import type { QuizQuestion } from './types';

export const section04Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How many elements are in the finite field $\\mathbb{F}_{27}$?',
    options: [
      '$27
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '$\\mathbb{F}_{27}$ has exactly 27 elements. Note that $27 = 3^3$, a prime power.',
  },
      '$26
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\mathbb{F}_{27}$ has exactly 27 elements. Note that $27 = 3^3$, a prime power.',
  },
      '$28
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\mathbb{F}_{27}$ has exactly 27 elements. Note that $27 = 3^3$, a prime power.',
  },
      '$81
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\mathbb{F}_{27}$ has exactly 27 elements. Note that $27 = 3^3$, a prime power.',
  },
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: '$\\mathbb{F}_{27}$ has exactly 27 elements. Note that $27 = 3^3$, a prime power.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which of the following can be the order of a finite field?',
    options: [
      '$6
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Finite fields exist only for prime powers. $16 = 2^4$ is a prime power; 6, 10, 15 are not.',
  },
      '$16
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Finite fields exist only for prime powers. $16 = 2^4$ is a prime power; 6, 10, 15 are not.',
  },
      '$10
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Finite fields exist only for prime powers. $16 = 2^4$ is a prime power; 6, 10, 15 are not.',
  },
      '$15
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Finite fields exist only for prime powers. $16 = 2^4$ is a prime power; 6, 10, 15 are not.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Finite fields exist only for prime powers. $16 = 2^4$ is a prime power; 6, 10, 15 are not.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'In $\\mathbb{F}_7$, what is $3^{-1}$ (the multiplicative inverse of 3)?',
    correctAnswer: 5,
    numericRange: { min: 1, max: 6, precision: 0 },
    difficulty: 'medium',
    explanation: '$3 \\cdot 5 = 15 \\equiv 1 \\pmod{7}$, so $3^{-1} = 5$ in $\\mathbb{F}_7$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the multiplicative group $\\mathbb{F}_p^*$ isomorphic to?',
    options: [
      'The integers mod $p$',
      'A cyclic group of order $p$',
      'A cyclic group of order $p+1$',
      'A cyclic group of order $p-1$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$\\mathbb{F}_p^* = \\mathbb{F}_p \\setminus \\{0\\}$ has $p-1$ elements and is cyclic.',
  },
  {
    id: 5,
    type: 'text',
    question: 'What polynomial is used to construct $\\mathbb{F}_{p^n}$ from $\\mathbb{F}_p$?',
    correctAnswer: 'irreducible',
    difficulty: 'medium',
    explanation: '$\\mathbb{F}_{p^n}$ is constructed as $\\mathbb{F}_p[x]/(f(x))$ where $f$ is an irreducible polynomial of degree $n$.',
  },
];
