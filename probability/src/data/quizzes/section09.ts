import type { QuizQuestion } from './types';

export const section09Questions: QuizQuestion[] = [
  {
    id: 's09-q1',
    type: 'multiple-choice',
    question: 'Axiom 1 of probability states that for any event $E$:',
    options: [
      '$P(E) \\geq 0$',
      '$P(E) = 1$',
      '$P(E) \\leq 1$',
      '$P(E) = 0$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Axiom 1 (Non-negativity) states that $P(E) \\geq 0$ for any event $E$. Probabilities cannot be negative.'
  },
  {
    id: 's09-q2',
    type: 'multiple-choice',
    question: 'Axiom 2 states that $P(S)$ equals:',
    options: [
      '$0$',
      '$1$',
      '$\\frac{1}{2}$',
      'It depends on the experiment'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Axiom 2 (Normalization) states that $P(S) = 1$. The probability of the entire sample space is 1 (something must happen).'
  },
  {
    id: 's09-q3',
    type: 'multiple-choice',
    question: 'Axiom 3 (Countable Additivity) applies to events that are:',
    options: [
      'Independent',
      'Dependent',
      'Mutually exclusive',
      'Complementary'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Axiom 3 states that for mutually exclusive events $E_1, E_2, \\ldots$, $P(\\bigcup E_i) = \\sum P(E_i)$.'
  },
  {
    id: 's09-q4',
    type: 'numeric',
    question: 'A die is loaded so that 6 is twice as likely as other numbers. If $P(i) = p$ for $i \\neq 6$ and $P(6) = 2p$, what is $p$? (Give answer as a decimal)',
    correctAnswer: 0.142857,
    numericRange: { min: 0, max: 1, precision: 2 },
    difficulty: 'medium',
    explanation: 'By Axiom 2: $5p + 2p = 1$, so $7p = 1$ and $p = 1/7 \\approx 0.14$.'
  },
  {
    id: 's09-q5',
    type: 'multiple-choice',
    question: 'For the loaded die where $P(i) = 1/7$ for $i \\neq 6$ and $P(6) = 2/7$, what is $P(\\text{even})$?',
    options: [
      '$2/7$',
      '$3/7$',
      '$1/2$',
      '$4/7$'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '$P(\\text{even}) = P(2) + P(4) + P(6) = \\frac{1}{7} + \\frac{1}{7} + \\frac{2}{7} = \\frac{4}{7}$'
  },
  {
    id: 's09-q6',
    type: 'multiple-choice',
    question: 'A probability mass function (PMF) must satisfy:',
    options: [
      '$p_i \\geq 0$ and $\\sum_i p_i = 1$',
      '$p_i < 0$ for some $i$',
      '$\\sum_i p_i = 0$',
      '$p_i = 1$ for all $i$'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'A PMF assigns probabilities $p_i = P(\\{s_i\\})$ to each outcome such that $p_i \\geq 0$ for all $i$ and $\\sum_i p_i = 1$.'
  }
];
