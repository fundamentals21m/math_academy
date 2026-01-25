import type { QuizQuestion } from './types';

export const section24Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Extreme Value Theorem states that a continuous function on a closed interval $[a,b]$:',
    options: [
      'Has no extrema',
      'Is differentiable',
      'Is monotonic',
      'Attains its maximum and minimum',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'EVT: continuous functions on closed bounded intervals attain max and min values.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why does $f(x) = 1/x$ on $(0, 1)$ NOT contradict the EVT?',
    options: [
      '$f$ is not continuous',
      '$f$ is not bounded',
      'The interval $(0, 1)$ is not closed',
      '$f$ has a maximum',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The EVT requires a closed interval. $(0,1)$ is open, so EVT doesn\'t apply.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'On $[0, 2]$, the function $f(x) = x^2 - 2x$ attains its minimum at:',
    options: [
      '$x = 1$',
      '$x = 0$',
      '$x = 2$',
      '$x = -1$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '$f\'(x) = 2x - 2 = 0$ gives $x = 1$. Check: $f(0) = 0$, $f(1) = -1$, $f(2) = 0$. Min at $x = 1$.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'What is the maximum value of $f(x) = -x^2 + 4x$ on $[0, 3]$?',
    correctAnswer: 4,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: '$f\'(x) = -2x + 4 = 0$ gives $x = 2$. $f(2) = -4 + 8 = 4$. Check endpoints: $f(0) = 0$, $f(3) = 3$. Max is 4.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'A continuous function on a closed interval is:',
    options: [
      'Always unbounded',
      'Bounded',
      'Always zero somewhere',
      'Differentiable'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Continuous functions on closed bounded intervals are bounded (they attain max and min).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The EVT is a consequence of which property of real numbers?',
    options: [
      'Completeness (least upper bound property)',
      'Field axioms',
      'Associativity',
      'Commutativity',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The EVT relies on the completeness of the real numbers.',
  },
];
