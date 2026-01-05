import type { QuizQuestion } from './types';

/**
 * Quiz questions for Section 0: The Natural Numbers
 */
export const section00Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What are the natural numbers?',
    options: [
      'All positive and negative whole numbers',
      'The objects produced by the counting process: $1, 2, 3, 4, \\ldots$',
      'All fractions between 0 and 1',
      'Numbers that occur in nature',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Natural numbers are defined as the objects produced by the counting process: $1, 2, 3, 4, \\ldots$ They are the simplest mathematical objects, yet they are defined by an infinite process.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the technique of "infinite descent" used to prove?',
    options: [
      'That certain things exist',
      'That certain things are impossible',
      'That sequences always converge',
      'That all numbers are rational',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'Infinite descent proves impossibility: if assuming something exists leads to an infinite descending sequence of natural numbers (which is impossible), then the assumption must be false.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question:
      'In the proof that $\\sqrt{2}$ is irrational, what happens when we assume $m^2 = 2n^2$?',
    options: [
      'We find that $m$ and $n$ must both be odd',
      'We get smaller numbers $m_1, n_1$ with $m_1^2 = 2n_1^2$, leading to infinite descent',
      'We prove that $m = n$',
      'We find a unique solution',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'Starting from $m^2 = 2n^2$, we show both $m$ and $n$ are even, giving $m_1^2 = 2n_1^2$ with $m_1 < m$. Repeating creates an infinite descending sequence, which is impossible.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What does "irrational" mean in the context of numbers?',
    options: [
      'The number makes no sense',
      'The number is negative',
      'The number is not a ratio of natural numbers',
      'The number is very large',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation:
      'The word "irrational" simply means "not a ratio." An irrational number like $\\sqrt{2}$ cannot be expressed as a fraction $m/n$ where $m$ and $n$ are natural numbers.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is an Egyptian fraction?',
    options: [
      'A fraction used only in ancient Egypt',
      'A sum of distinct unit fractions (fractions of the form $1/n$)',
      'Any fraction less than 1',
      'A fraction with denominator 10',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation:
      'An Egyptian fraction is a sum of distinct unit fractions. For example, $\\frac{2}{3} = \\frac{1}{2} + \\frac{1}{6}$ is an Egyptian fraction representation.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question:
      'Which fraction equals $\\frac{1}{2} + \\frac{1}{6}$?',
    options: ['$\\frac{1}{3}$', '$\\frac{2}{3}$', '$\\frac{1}{8}$', '$\\frac{3}{4}$'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      '$\\frac{1}{2} + \\frac{1}{6} = \\frac{3}{6} + \\frac{1}{6} = \\frac{4}{6} = \\frac{2}{3}$',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question:
      "In Fibonacci's method for Egyptian fractions, why does the process always terminate?",
    options: [
      'Because the denominator increases',
      'Because the numerator decreases, and we cannot descend infinitely',
      'Because fractions have a maximum size',
      'Because there are only finitely many unit fractions',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation:
      "Fibonacci's method works by repeatedly subtracting the largest unit fraction. Each step decreases the numerator of the remaining fraction. By infinite descent, a decreasing sequence of natural numbers must terminate.",
  },
  {
    id: 8,
    type: 'multiple-choice',
    question:
      'If $m^2 = 2n^2$ and $m$ is even, what can we conclude about $n$?',
    options: [
      '$n$ must be odd',
      '$n$ must also be even',
      '$n$ must equal $m$',
      'Nothing can be concluded about $n$',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation:
      'If $m = 2m_1$, then $4m_1^2 = 2n^2$, so $n^2 = 2m_1^2$. This means $n^2$ is even, which implies $n$ is even (since the square of an odd number is odd).',
  },
];
