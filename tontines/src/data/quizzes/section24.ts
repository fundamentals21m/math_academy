import type { QuizQuestion } from './types';

export const section24Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The natural tontine\'s utility loss compared to the truly optimal tontine is:',
    options: [
      'Less than 1% of lifetime wealth',
      'More than 50% of lifetime wealth',
      '5-10% of lifetime wealth',
      '20-30% of lifetime wealth',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Milevsky & Salisbury (2015) proved that for any risk aversion γ, the utility loss from using the natural tontine instead of the truly optimal one is less than 1% of lifetime wealth.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'For log utility ($\\gamma = 1$), the natural tontine achieves approximately what efficiency?',
    options: [
      '99.5%',
      '75%',
      '85%',
      '92%'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'For log utility (γ = 1), the natural tontine captures about 99.5% of the optimal utility—nearly perfect.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For realistic risk aversions ($\\gamma = 1-5$), the natural tontine captures:',
    options: [
      'Less than 80% of optimal utility',
      '80-90% of optimal utility',
      'More than 97% of optimal utility',
      'Exactly 100% of optimal utility',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'For realistic risk aversion values (γ = 1-5), the natural tontine captures more than 97% of the optimal utility.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The natural tontine\'s major practical advantage is:',
    options: [
      'It requires knowing each person\\'s exact risk aversion',
      'It maximizes returns for all members',
      'It eliminates all mortality risk',
      'It can be used without knowing individual preferences—"approximately right" for everyone',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Unlike the truly optimal tontine (which requires knowing each person\'s γ), the natural tontine works well for everyone without knowing individual preferences.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The natural tontine automatically provides all EXCEPT:',
    options: [
      'Smooth payout growth',
      'Adjustment for mortality (higher payouts when fewer survive)',
      'Guaranteed returns',
      'Actuarial fairness (EPV = contribution)',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The natural tontine adjusts for mortality, maintains fairness, and provides smooth growth, but it does not guarantee returns—payouts depend on actual mortality.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'For extremely high risk aversion ($\\gamma \\to \\infty$), the natural tontine\'s efficiency:',
    options: [
      'Improves to 100%',
      'Drops to around 92%',
      'Stays above 99%',
      'Falls below 50%',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'For extreme risk aversion (γ → ∞), efficiency drops to around 92%. These investors want perfectly flat payouts, which the natural tontine doesn\'t provide.',
  },
];
