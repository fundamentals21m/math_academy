import type { QuizQuestion } from './types';

export const section20Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The tontine optimization problem seeks to find:',
    options: [
      'The longest survival time',
      'The payout schedule $D(t)$ that maximizes expected lifetime utility',
      'The largest possible pool size',
      'The highest interest rate',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The optimization problem chooses the payout schedule D(t) for all t to maximize expected lifetime utility subject to the budget constraint.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The actuarial fairness constraint in the optimization is:',
    options: [
      '$\\sum_t {}_tp_x \\cdot v^t \\cdot D(t) = W_0$',
      '$D(t) = W_0$ for all $t$',
      '$\\sum_t D(t) = W_0$',
      '$D(0) = W_0$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The fairness constraint says the expected present value of all payouts must equal the initial contribution: Σ _tp_x × v^t × D(t) = W_0.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Lagrangian method is used because:',
    options: [
      'It solves constrained optimization problems',
      'It\\'s the only mathematical method available',
      'It calculates interest rates',
      'It measures survival probabilities',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Lagrangian method is a standard technique for solving constrained optimization—here we maximize utility subject to the budget/fairness constraint.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The Lagrange multiplier $\\lambda$ in the optimization represents:',
    options: [
      'The interest rate',
      'The marginal value of an extra dollar of wealth',
      'The survival probability',
      'The risk aversion parameter',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The Lagrange multiplier λ is the "shadow price" of the budget constraint—it tells us how much additional utility we would get from one more dollar of wealth.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The optimization objective function is:',
    options: [
      '$\\max_t D(t)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'We maximize expected lifetime utility: Σ _tp_x × β^t × u(D(t)), summing utility from each year weighted by survival probability and time preference.',
  },
      '$\\sum_t D(t)
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'We maximize expected lifetime utility: Σ _tp_x × β^t × u(D(t)), summing utility from each year weighted by survival probability and time preference.',
  },
      '$\\sum_t {}_tp_x \\cdot \\beta^t \\cdot u(D(t))
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'We maximize expected lifetime utility: Σ _tp_x × β^t × u(D(t)), summing utility from each year weighted by survival probability and time preference.',
  },
      '$W_0 \\times r
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'We maximize expected lifetime utility: Σ _tp_x × β^t × u(D(t)), summing utility from each year weighted by survival probability and time preference.',
  },
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'We maximize expected lifetime utility: Σ _tp_x × β^t × u(D(t)), summing utility from each year weighted by survival probability and time preference.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The optimal payout schedule is found where:',
    options: [
      'All payouts are equal',
      'Payouts grow at the interest rate',
      'Payouts decline at the mortality rate',
      'We can\\'t improve utility by shifting money between years without violating the budget',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The optimum occurs where no reallocation of payouts between years can increase utility without violating the budget constraint—the first-order conditions are satisfied.',
  },
];
