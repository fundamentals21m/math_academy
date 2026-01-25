import type { QuizQuestion } from './types';

export const section15Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Fermat\'s factorization method represents $n$ as:',
    options: [
      '$n = p + q$',
      '$n = a^2 - b^2 = (a-b)(a+b)$',
      '$n = 2^k \\cdot m$',
      '$n = p^a \\cdot q^b$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Fermat factorization: $n = a^2 - b^2 = (a-b)(a+b)$ gives factors when $a, b$ are found.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Fermat\'s method is most efficient when:',
    options: [
      'Factors are close together (near $\\sqrt{n}$)',
      'Factors are small',
      'One factor is 2',
      'Factors differ greatly in size',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'When $p \\approx q \\approx \\sqrt{n}$, the search for $a = (p+q)/2$ starts near $\\sqrt{n}$.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'To factor $n = 91$ by Fermat\'s method, we start with $a = \\lceil\\sqrt{91}\\rceil$. What is this value?',
    correctAnswer: 10,
    numericRange: { min: 1, max: 20, precision: 0 },
    difficulty: 'easy',
    explanation: '$\\sqrt{91} \\approx 9.54$, so $\\lceil\\sqrt{91}\\rceil = 10$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The difference of squares identity $a^2 - b^2 = (a-b)(a+b)$ requires:',
    options: [
      '$a$ and $b$ both odd',
      '$a$ and $b$ both even',
      '$a$ and $b$ coprime',
      '$a > b$'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'For non-trivial factorization, we need $a > b > 0$ so that $a - b > 0$ and $a + b > a - b$.',
  },
  {
    id: 5,
    type: 'text',
    question: 'What is the name of the technique that improves Fermat\'s method using factor bases?',
    correctAnswer: 'sieve',
    difficulty: 'hard',
    explanation: 'The quadratic sieve extends Fermat\'s ideas using smooth numbers and a factor base.',
  },
];
