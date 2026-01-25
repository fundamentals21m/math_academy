import type { QuizQuestion } from './types';

export const section31Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In the utility framework, higher risk aversion $\\gamma$ means:',
    options: [
      'More focus on achieving great outcomes',
      'No effect on preferences',
      'More focus on avoiding bad outcomes',
      'Preference for variable income',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Higher γ means more risk aversion—the person cares more about avoiding bad outcomes than achieving great ones.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'At $\\gamma = 3$ (moderate risk aversion), the utility ranking is:',
    options: [
      'Fair Annuity > Natural Tontine > Loaded Annuity',
      'Loaded Annuity > Natural Tontine > Fair Annuity',
      'Natural Tontine > Fair Annuity > Loaded Annuity',
      'All products have equal utility',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Fair Annuity > Natural Tontine > Loaded Annuity. Fair annuities would be best, but they don\'t exist—against actual market annuities, tontines win.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For moderate risk aversion ($\\gamma = 3$), the breakeven annuity loading is approximately:',
    options: [
      '20%',
      '0.5%',
      '10%',
      '2.5%'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'At γ = 3, breakeven loading is about 2.5%. If annuity loading were only 2.5%, you\'d be indifferent—but actual loadings are 12-18%.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Even at extreme risk aversion ($\\gamma = 10$), the breakeven loading is:',
    options: [
      '5%',
      '10%',
      '15%',
      '0.5%',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Even at γ = 10, breakeven loading is only 0.5%—still well below market rates of 12-18%. Tontines dominate for any reasonable risk aversion.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The analysis assumes all EXCEPT:',
    options: [
      'Guaranteed tontine payouts',
      'Large tontine pool',
      'Fair pool composition',
      'Similar investment returns',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The analysis assumes large pool, fair composition, similar returns, and rational decision-making—but NOT guaranteed tontine payouts (that\'s an annuity feature).',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The mathematical conclusion for any reasonable risk aversion is:',
    options: [
      'Annuities always dominate tontines',
      'Tontines dominate market annuities due to the gap between breakeven and actual loading',
      'Neither product is preferable',
      'Only risk-neutral investors should use tontines',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'For any reasonable γ ≤ 10, tontines dominate market annuities. The theoretical preference for guaranteed income is overwhelmed by the practical reality of annuity pricing.',
  },
];
