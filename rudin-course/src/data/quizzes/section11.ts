import type { QuizQuestion } from './types';

export const section11Questions: QuizQuestion[] = [
  {
    id: 'sec11-q1',
    type: 'multiple-choice',
    question: 'A set $P$ is perfect if:',
    options: [
      '$P$ is open',
      '$P$ contains all rationals',
      '$P$ is finite',
      '$P$ is closed and every point of $P$ is a limit point of $P$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'A perfect set is closed and has no isolated points—every point is a limit point. This means $P = P\'$ where $P\'$ is the set of limit points.',
  },
  {
    id: 'sec11-q2',
    type: 'multiple-choice',
    question: 'The Cantor set is constructed by:',
    options: [
      'Repeatedly removing the open middle third from each remaining interval',
      'Taking the union of all intervals of length $1/3^n$',
      'Taking all rationals in $[0,1]$',
      'Taking all irrationals in $[0,1]$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Cantor set starts with $[0,1]$, removes $(1/3, 2/3)$, then removes the middle thirds of remaining intervals, and continues. The Cantor set is what remains after infinitely many steps.',
  },
  {
    id: 'sec11-q3',
    type: 'multiple-choice',
    question: 'The Cantor set is:',
    options: [
      'Countable and perfect',
      'Uncountable and perfect',
      'Countable and not perfect',
      'Empty'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Cantor set is uncountable (it bijects with all sequences of 0s and 2s in base 3) and perfect (closed with no isolated points).',
  },
  {
    id: 'sec11-q4',
    type: 'multiple-choice',
    question: 'What is the "total length" (Lebesgue measure) of the Cantor set?',
    options: [
      '$1$',
      '$1/3$',
      '$0$',
      '$\\infty$'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The removed intervals have total length $1/3 + 2/9 + 4/27 + \\cdots = (1/3)/(1 - 2/3) = 1$. So the Cantor set has measure $1 - 1 = 0$, yet it is uncountable.',
  },
  {
    id: 'sec11-q5',
    type: 'multiple-choice',
    question: 'Every nonempty perfect set in $\\mathbb{R}^k$ is:',
    options: [
      'Finite',
      'Countable',
      'Open',
      'Uncountable'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Rudin proves that every nonempty perfect set in $\\mathbb{R}^k$ is uncountable. The proof uses the fact that perfect sets cannot be written as a countable union of singletons, combined with the Baire category theorem ideas.',
  },
];
