import type { QuizQuestion } from './types';

export const section16Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A continued fraction represents a number as:',
    options: [
      'A sum of unit fractions',
      'A nested sequence of integer quotients',
      'A product of primes',
      'A decimal expansion',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Continued fractions: $a_0 + \\cfrac{1}{a_1 + \\cfrac{1}{a_2 + \\cdots}}$.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The continued fraction expansion of a rational number is:',
    options: [
      'Infinite',
      'Periodic',
      'Finite',
      'Undefined',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Rational numbers have finite continued fractions; irrationals have infinite expansions.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The convergents of a continued fraction are:',
    options: [
      'Rational approximations $p_k/q_k
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Convergents $p_k/q_k$ are the best rational approximations with denominator $\\leq q_k$.',
  },
      'The partial quotients',
      'The remainders',
      'The denominators only',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Convergents $p_k/q_k$ are the best rational approximations with denominator $\\leq q_k$.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'The continued fraction $[1; 2, 2]$ equals $1 + 1/(2 + 1/2)$. What is the numerator when simplified?',
    correctAnswer: 7,
    numericRange: { min: 1, max: 20, precision: 0 },
    difficulty: 'medium',
    explanation: '$[1;2,2] = 1 + 1/(2 + 1/2) = 1 + 1/(5/2) = 1 + 2/5 = 7/5$.',
  },
  {
    id: 5,
    type: 'text',
    question: 'What is the continued fraction expansion of $\\sqrt{2}$ characterized by (hint: it repeats)?',
    correctAnswer: 'periodic',
    difficulty: 'medium',
    explanation: '$\\sqrt{2} = [1; \\overline{2}]$ has a periodic (repeating) continued fraction.',
  },
];
