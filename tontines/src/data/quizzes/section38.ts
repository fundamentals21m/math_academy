import type { QuizQuestion } from './types';

export const section38Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Adverse selection in tontines occurs because:',
    options: [
      'Health has no effect on participation',
      'Everyone joins regardless of health',
      'Healthier people expect to benefit and join, while unhealthier people avoid joining',
      'Only unhealthy people join',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Adverse selection occurs when healthier people (expecting to outlive others) join, while unhealthier people (expecting to die early and subsidize others) avoid.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'If a tontine is priced assuming $\\ddot{a}_{65} = 14.2$ but actual pool members have $\\ddot{a}_{65}^{\\text{select}} = 15.6$, the payout shortfall is approximately:',
    options: [
      '5%',
      '15%',
      '20%',
      '9%',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Expected rate: 1/14.2 = 7.04%. Actual rate: 1/15.6 = 6.41%. Shortfall = (7.04% - 6.41%)/7.04% = 8.9% ≈ 9%.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Research shows US private annuitants live approximately how much longer than the general population?',
    options: [
      '5% longer',
      '10% longer',
      '19% longer',
      '30% longer',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'US private annuitants have life expectancy of 22.1 years vs 18.5 for general population—about 19% longer, demonstrating significant adverse selection.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The most effective solution to adverse selection is:',
    options: [
      'Mandatory participation',
      'Higher payouts',
      'Lower fees',
      'Marketing campaigns',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Mandatory participation eliminates self-selection entirely because everyone must join, resulting in only ~1% selection cost vs 9% for voluntary.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Pension plan members show much smaller adverse selection (+4%) because:',
    options: [
      'They have higher incomes',
      'They are healthier',
      'They receive better healthcare',
      'Participation is typically mandatory or strongly encouraged'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Pension plan members show minimal adverse selection because participation is typically mandatory or strongly encouraged, eliminating self-selection.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Health underwriting as a solution to adverse selection involves:',
    options: [
      'Ignoring health differences',
      'Requiring medical exams and stratifying into health-based pools with different payout rates',
      'Only accepting healthy members',
      'Guaranteeing equal payouts regardless of health',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Health underwriting stratifies members into pools (preferred/standard/substandard) with different payout rates—healthier get lower payouts, sicker get higher.',
  },
];
