import type { QuizQuestion } from './types';

export const section02Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is an infinitesimal?',
    options: [
      'A very large number',
      'The number zero',
      'A quantity greater than zero but smaller than any positive number',
      'A negative number'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'An infinitesimal is a quantity that is positive but smaller than any positive number you can name—a concept central to early calculus.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Who called infinitesimals "the ghosts of departed quantities"?',
    options: [
      'Isaac Newton',
      'Gottfried Leibniz',
      'Archimedes',
      'Bishop George Berkeley'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Bishop George Berkeley criticized infinitesimals in 1734, mockingly calling them "ghosts of departed quantities" because they seemed to be zero and not-zero simultaneously.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What mathematical concept replaced infinitesimals in rigorous calculus?',
    options: [
      'Limits',
      'Complex numbers',
      'Vectors',
      'Matrices'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The limit concept, developed in the 19th century, provided a rigorous foundation for calculus without requiring actual infinitesimals.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What is the name of the mathematician who proved that there are different sizes of infinity using his diagonal argument?',
    correctAnswer: 'Cantor',
    difficulty: 'medium',
    explanation: 'Georg Cantor showed that the real numbers are "more infinite" than the natural numbers using his famous diagonal argument.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which type of infinity is larger?',
    options: [
      'The set of natural numbers (1, 2, 3, ...)',
      'The set of real numbers (including irrationals)',
      'The set of rational numbers (fractions)',
      'The set of integers (..., -2, -1, 0, 1, 2, ...)'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The real numbers are uncountably infinite—a larger infinity than the natural numbers, integers, or rationals (which are all countably infinite).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What distinguishes "potential infinity" from "actual infinity"?',
    options: [
      'Potential infinity is a completed totality; actual infinity is a process',
      'They are the same concept with different names',
      'Potential infinity is a process that continues without end; actual infinity is a completed totality',
      'Potential infinity only applies to negative numbers'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Potential infinity refers to a process that can continue indefinitely (counting forever). Actual infinity treats an infinite collection as a completed whole (the set of all natural numbers).',
  },
];
