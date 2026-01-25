import type { QuizQuestion } from './types';

export const section32Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The optimal retirement income strategy for most retirees is:',
    options: [
      'Neither—use only savings',
      '100% annuity',
      '100% tontine',
      'A blend of annuity (floor) and tontine (upside)'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'For most retirees, the optimal strategy combines both: annuity for guaranteed floor covering essentials, tontine for efficient mortality credit capture.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In the portfolio mix example, a 60% annuity + 40% tontine blend achieves:',
    options: [
      'Lower utility than either pure strategy',
      'Higher utility than either pure strategy',
      'Same utility as 100% annuity',
      'Same utility as 100% tontine',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The blend achieves utility of 85.6, higher than both 100% annuity (83.1) and 100% tontine (84.8)—diversification works.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'For a risk-tolerant investor ($\\gamma = 1$), the optimal tontine allocation is approximately:',
    options: [
      '20%',
      '80%',
      '50%',
      '100%'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'For low risk aversion (γ = 1), optimal allocation is about 80% tontine, 20% annuity.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'For a highly risk-averse investor ($\\gamma = 10$), the optimal tontine allocation is approximately:',
    options: [
      '15%',
      '50%',
      '80%',
      '95%',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'For high risk aversion (γ = 10), optimal allocation is only about 15% tontine, 85% annuity—more guarantees preferred.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The practical implementation approach is:',
    options: [
      'Size annuity to cover essential expense gap, put remainder in tontine',
      'Avoid both products entirely',
      'Put everything in tontine first, then buy annuity',
      'Split everything 50/50 regardless of situation',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The practical approach: calculate essential expense gap, size annuity to cover it (securing a floor), then allocate the remainder to tontine for efficient upside.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Blending works due to all EXCEPT:',
    options: [
      'Diminishing marginal utility (first guaranteed dollars most valuable)',
      'Imperfect correlation between annuity and tontine risks',
      'Annuities having higher expected returns',
      'Efficiency arbitrage (tontines capture mortality credits)',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Blending works because of diminishing marginal utility, imperfect correlation, and efficiency arbitrage—NOT because annuities have higher returns (tontines do).',
  },
];
