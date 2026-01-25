import type { QuizQuestion } from './types';

export const section22Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'For power utility $u(c) = c^{1-\\gamma}/(1-\\gamma)$, the marginal utility is:',
    options: [
      '$u\\'(c) = \\ln(c)
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Taking the derivative: u\'(c) = c^(-γ). Marginal utility decreases as consumption increases.',
  },
      '$u\\'(c) = c^{1-\\gamma}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Taking the derivative: u\'(c) = c^(-γ). Marginal utility decreases as consumption increases.',
  },
      '$u\\'(c) = c^{-\\gamma}
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Taking the derivative: u\'(c) = c^(-γ). Marginal utility decreases as consumption increases.',
  },
      '$u\\'(c) = \\gamma c
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Taking the derivative: u\'(c) = c^(-γ). Marginal utility decreases as consumption increases.',
  },
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Taking the derivative: u\'(c) = c^(-γ). Marginal utility decreases as consumption increases.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The optimal payout formula for power utility is:',
    options: [
      '$D(t) = W_0 / t
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Solving the Euler-Lagrange equation for power utility gives D(t) = A × g^t, where g = (β/v)^(1/γ)—geometric growth.',
  },
      '$D(t) = \\lambda \\cdot t
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Solving the Euler-Lagrange equation for power utility gives D(t) = A × g^t, where g = (β/v)^(1/γ)—geometric growth.',
  },
      '$D(t) = A \\cdot e^{-t}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Solving the Euler-Lagrange equation for power utility gives D(t) = A × g^t, where g = (β/v)^(1/γ)—geometric growth.',
  },
      '$D(t) = A \\cdot g^t$ where $g = (\\beta/v)^{1/\\gamma}
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Solving the Euler-Lagrange equation for power utility gives D(t) = A × g^t, where g = (β/v)^(1/γ)—geometric growth.',
  },
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Solving the Euler-Lagrange equation for power utility gives D(t) = A × g^t, where g = (β/v)^(1/γ)—geometric growth.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For log utility ($\\gamma = 1$) with $\\beta = v$, optimal payouts are:',
    options: [
      'Growing at rate $v
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'With γ = 1 and β = v: g = (β/v)^(1/1) = 1. Payouts are constant over time.',
  },
      'Declining at rate $\\beta
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'With γ = 1 and β = v: g = (β/v)^(1/1) = 1. Payouts are constant over time.',
  },
      'Zero',
      'Flat ($g = 1$)',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'With γ = 1 and β = v: g = (β/v)^(1/1) = 1. Payouts are constant over time.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'As risk aversion $\\gamma \\to \\infty$, optimal payouts:',
    options: [
      'Grow explosively',
      'Approach flat ($g \\to 1$)',
      'Decline rapidly',
      'Become unpredictable',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'As γ → ∞, g = (β/v)^(1/γ) → 1 regardless of β and v. Highly risk-averse investors want perfectly stable consumption.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Risk-neutral investors ($\\gamma \\to 0$) prefer:',
    options: [
      'Random payouts',
      'Flat payouts',
      'Declining payouts',
      'Rapidly growing payouts that maximize expected wealth',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Risk-neutral investors care only about expected value, not variance. They prefer to maximize expected wealth, accepting volatility.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The constant $A$ in the optimal formula is determined by:',
    options: [
      'The budget constraint (EPV of payouts = initial wealth)',
      'The risk aversion parameter',
      'The interest rate alone',
      'Government regulations',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The constant A is chosen so that the expected present value of all payouts equals the initial wealth W_0—the budget/fairness constraint.',
  },
];
