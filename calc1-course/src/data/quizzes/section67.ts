import type { QuizQuestion } from './types';

export const section67Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'An alternating series has the form:',
    options: [
      '$\\sum a_n$ where all $a_n > 0
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Alternating series: terms alternate in sign.',
  },
      '$\\sum (-1)^n a_n$ where $a_n > 0
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Alternating series: terms alternate in sign.',
  },
      '$\\sum (-1)^n$ only',
      'Any series with negative terms',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Alternating series: terms alternate in sign.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The Alternating Series Test (Leibniz): $\\sum (-1)^n a_n$ converges if:',
    options: [
      '$a_n > 0$ only',
      '$a_n$ increasing',
      '$a_n \\to 1
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Leibniz test: need $a_n$ decreasing to 0.',
  },
      '$a_n$ decreasing and $a_n \\to 0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Leibniz test: need $a_n$ decreasing to 0.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Leibniz test: need $a_n$ decreasing to 0.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The alternating harmonic series $\\sum_{n=1}^{\\infty} \\frac{(-1)^{n+1}}{n}$:',
    options: [
      'Converges to $\\ln 2
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The alternating harmonic series converges to $\\ln 2$.',
  },
      'Diverges',
      'Converges to 1',
      'Converges to $e
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The alternating harmonic series converges to $\\ln 2$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The alternating harmonic series converges to $\\ln 2$.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A series is absolutely convergent if:',
    options: [
      '$\\sum a_n$ converges',
      '$\\sum |a_n|$ converges',
      '$a_n \\to 0
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Absolute convergence: $\\sum |a_n|$ converges.',
  },
      'All terms are positive',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Absolute convergence: $\\sum |a_n|$ converges.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Absolute convergence implies:',
    options: [
      'Conditional convergence',
      'Divergence',
      'Nothing',
      'Ordinary convergence',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'If $\\sum |a_n|$ converges, then $\\sum a_n$ converges.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The alternating harmonic series is:',
    options: [
      'Absolutely convergent',
      'Divergent',
      'Conditionally convergent',
      'Both absolutely and conditionally convergent',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Converges but not absolutely (harmonic series diverges).',
  },
];
