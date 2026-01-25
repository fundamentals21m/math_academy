import type { QuizQuestion } from './types';

export const section21Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'To derive the optimal payout condition, we differentiate the Lagrangian with respect to:',
    options: [
      '$\\lambda$ (the Lagrange multiplier)',
      '$W_0$ (initial wealth)',
      '$D(t)$ (the payout at time $t$)',
      '$r$ (interest rate)',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'We take the derivative with respect to D(t), the control variable, and set it to zero to find the first-order optimality condition.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In the Euler-Lagrange derivation, what cancels from both sides?',
    options: [
      'The discount factor $v^t
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The survival probability _tp_x appears in both terms and cancels, simplifying the optimality condition.',
  },
      'The payout $D(t)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The survival probability _tp_x appears in both terms and cancels, simplifying the optimality condition.',
  },
      'The utility function $u
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The survival probability _tp_x appears in both terms and cancels, simplifying the optimality condition.',
  },
      'The survival probability $_tp_x
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The survival probability _tp_x appears in both terms and cancels, simplifying the optimality condition.',
  },
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The survival probability _tp_x appears in both terms and cancels, simplifying the optimality condition.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Euler-Lagrange optimality condition is:',
    options: [
      '$D(t) = W_0 / t
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The optimal condition states: u\'(D(t)) = λ × (v/β)^t. Marginal utility at time t equals a constant times (v/β)^t.',
  },
      '$u\\'(D(t)) = \\lambda \\cdot (v/\\beta)^t
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The optimal condition states: u\'(D(t)) = λ × (v/β)^t. Marginal utility at time t equals a constant times (v/β)^t.',
  },
      '$D(t) = \\lambda
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The optimal condition states: u\'(D(t)) = λ × (v/β)^t. Marginal utility at time t equals a constant times (v/β)^t.',
  },
      '$u(D(t)) = v^t
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The optimal condition states: u\'(D(t)) = λ × (v/β)^t. Marginal utility at time t equals a constant times (v/β)^t.',
  },
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The optimal condition states: u\'(D(t)) = λ × (v/β)^t. Marginal utility at time t equals a constant times (v/β)^t.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If $\\beta = v$ (no time preference), the optimal payouts are:',
    options: [
      'Flat (constant marginal utility)',
      'Growing exponentially',
      'Declining exponentially',
      'Zero'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'When β = v, (v/β)^t = 1 for all t, so marginal utility is constant across time, implying flat payouts.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'If $\\beta > v$ (impatient—values present more than market), optimal payouts:',
    options: [
      'Grow over time (marginal utility grows)',
      'Are flat',
      'Decline over time',
      'Are unpredictable',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'When β > v, (v/β)^t < 1 and decreases with t, so optimal marginal utility grows with t, meaning payouts grow over time.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The Euler-Lagrange equation tells us:',
    options: [
      'The total amount to invest',
      'The survival probability function',
      'The pool size needed',
      'How optimal payouts should change over time',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The Euler-Lagrange equation reveals how optimal payouts should change over time—the exact form depends on the utility function.',
  },
];
