import type { QuizQuestion } from './types';

export const section24Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Let $(a_n)$ be a bounded sequence. Which of the following correctly defines $\\limsup_{n \\to \\infty} a_n$?',
    options: [
      '$\\sup_{n \\geq 1} \\inf_{k \\geq n} a_k
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The limit superior is defined as $\\limsup_{n \\to \\infty} a_n = \\inf_{n \\geq 1} \\sup_{k \\geq n} a_k$. This is the infimum of the sequence of suprema of tails.',
  },
      '$\\sup_{n \\geq 1} a_n
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The limit superior is defined as $\\limsup_{n \\to \\infty} a_n = \\inf_{n \\geq 1} \\sup_{k \\geq n} a_k$. This is the infimum of the sequence of suprema of tails.',
  },
      '$\\lim_{n \\to \\infty} \\sup_{k \\leq n} a_k
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The limit superior is defined as $\\limsup_{n \\to \\infty} a_n = \\inf_{n \\geq 1} \\sup_{k \\geq n} a_k$. This is the infimum of the sequence of suprema of tails.',
  },
      '$\\inf_{n \\geq 1} \\sup_{k \\geq n} a_k
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The limit superior is defined as $\\limsup_{n \\to \\infty} a_n = \\inf_{n \\geq 1} \\sup_{k \\geq n} a_k$. This is the infimum of the sequence of suprema of tails.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The limit superior is defined as $\\limsup_{n \\to \\infty} a_n = \\inf_{n \\geq 1} \\sup_{k \\geq n} a_k$. This is the infimum of the sequence of suprema of tails.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For the sequence $a_n = (-1)^n \\left(1 + \\frac{1}{n}\\right)$, what is $\\limsup_{n \\to \\infty} a_n$?',
    options: [
      '$0
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'For even $n$, $a_n = 1 + \\frac{1}{n} \\to 1$. For odd $n$, $a_n = -1 - \\frac{1}{n} \\to -1$. The limsup captures the largest limit point, which is $1$.',
  },
      '$-1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For even $n$, $a_n = 1 + \\frac{1}{n} \\to 1$. For odd $n$, $a_n = -1 - \\frac{1}{n} \\to -1$. The limsup captures the largest limit point, which is $1$.',
  },
      '$2
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For even $n$, $a_n = 1 + \\frac{1}{n} \\to 1$. For odd $n$, $a_n = -1 - \\frac{1}{n} \\to -1$. The limsup captures the largest limit point, which is $1$.',
  },
      '$1
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For even $n$, $a_n = 1 + \\frac{1}{n} \\to 1$. For odd $n$, $a_n = -1 - \\frac{1}{n} \\to -1$. The limsup captures the largest limit point, which is $1$.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For even $n$, $a_n = 1 + \\frac{1}{n} \\to 1$. For odd $n$, $a_n = -1 - \\frac{1}{n} \\to -1$. The limsup captures the largest limit point, which is $1$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which statement about limit points of a sequence is TRUE?',
    options: [
      'An unbounded sequence cannot have any limit points',
      'A sequence can have at most two limit points',
      'A bounded sequence always has at least one limit point',
      'Every limit point of a sequence is also a limit of the sequence',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'By the Bolzano-Weierstrass theorem, every bounded sequence has a convergent subsequence, so it has at least one limit point. A sequence can have infinitely many limit points, and limit points need not be limits of the full sequence.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'Let $a_n = \\frac{n \\mod 3}{n}$ where $n \\mod 3 \\in \\{0, 1, 2\\}$. What is $\\liminf_{n \\to \\infty} a_n$?',
    correctAnswer: 0,
    numericRange: { min: -1, max: 1, precision: 2 },
    difficulty: 'medium',
    explanation: 'Since $n \\mod 3 \\in \\{0, 1, 2\\}$, we have $0 \\leq a_n \\leq \\frac{2}{n}$. For infinitely many $n$ (multiples of 3), $a_n = 0$. Thus $\\liminf a_n = 0$.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For any bounded sequence $(a_n)$, which inequality always holds?',
    options: [
      '$\\liminf_{n \\to \\infty} a_n \\leq \\limsup_{n \\to \\infty} a_n$',
      '$\\liminf_{n \\to \\infty} a_n = \\limsup_{n \\to \\infty} a_n$',
      '$\\liminf_{n \\to \\infty} a_n < \\limsup_{n \\to \\infty} a_n$',
      '$\\liminf_{n \\to \\infty} a_n \\geq \\limsup_{n \\to \\infty} a_n$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'We always have $\\liminf a_n \\leq \\limsup a_n$. Equality holds if and only if the sequence converges (to that common value).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'A sequence $(a_n)$ converges to $L$ if and only if:',
    options: [
      '$\\limsup_{n \\to \\infty} a_n = L$',
      '$\\limsup_{n \\to \\infty} a_n = \\liminf_{n \\to \\infty} a_n = L$',
      '$\\liminf_{n \\to \\infty} a_n = L$',
      '$\\limsup_{n \\to \\infty} a_n + \\liminf_{n \\to \\infty} a_n = 2L$'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A sequence converges if and only if its limsup and liminf are equal. When they are equal, the common value is the limit of the sequence.',
  },
];
