import type { QuizQuestion } from './types';

export const section19Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The CRRA (power) utility function is:',
    options: [
      '$u(c) = \\frac{c^{1-\\gamma}}{1-\\gamma}
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'CRRA (Constant Relative Risk Aversion) utility is u(c) = c^(1-γ)/(1-γ), where γ is the risk aversion parameter.',
  },
      '$u(c) = c^2
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'CRRA (Constant Relative Risk Aversion) utility is u(c) = c^(1-γ)/(1-γ), where γ is the risk aversion parameter.',
  },
      '$u(c) = e^c
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'CRRA (Constant Relative Risk Aversion) utility is u(c) = c^(1-γ)/(1-γ), where γ is the risk aversion parameter.',
  },
      '$u(c) = c + \\gamma
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'CRRA (Constant Relative Risk Aversion) utility is u(c) = c^(1-γ)/(1-γ), where γ is the risk aversion parameter.',
  },
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'CRRA (Constant Relative Risk Aversion) utility is u(c) = c^(1-γ)/(1-γ), where γ is the risk aversion parameter.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In CRRA utility, $\\gamma = 0$ corresponds to:',
    options: [
      'Log utility',
      'High risk aversion',
      'Infinite risk aversion',
      'Risk neutral (linear utility)',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'When γ = 0, the utility function becomes u(c) = c (linear), representing risk neutrality—only expected value matters, not variance.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In CRRA utility, $\\gamma = 1$ corresponds to:',
    options: [
      'Quadratic utility',
      'Risk neutrality',
      'Log utility $u(c) = \\ln(c)
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'When γ = 1, CRRA utility becomes log utility u(c) = ln(c), a commonly used utility function.',
  },
      'High risk aversion',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'When γ = 1, CRRA utility becomes log utility u(c) = ln(c), a commonly used utility function.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In the lifetime expected utility formula $U = \\sum_t {}_tp_x \\cdot \\beta^t \\cdot u(c_t)$, the term $\\beta^t$ represents:',
    options: [
      'Time discount factor (impatience)',
      'Survival probability',
      'Investment return',
      'Risk aversion',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'β^t is the time discount factor—it reflects "impatience" or time preference, making future utility worth less than present utility.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Higher values of $\\gamma$ indicate:',
    options: [
      'Lower risk aversion',
      'Risk neutrality',
      'Higher risk aversion (preference for stable consumption)',
      'No effect on preferences',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Higher γ means higher risk aversion—the person has a stronger preference for stable, predictable consumption over volatile consumption.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Why is CRRA utility commonly used in financial optimization?',
    options: [
      'It\\\'s the only utility function that exists',
      'It has tractable mathematical properties and closed-form solutions',
      'Government regulations require it',
      'It maximizes investment returns',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'CRRA utility is popular because: optimal consumption scales with wealth, risk tolerance is proportional to wealth, and closed-form solutions exist for many problems.',
  },
];
