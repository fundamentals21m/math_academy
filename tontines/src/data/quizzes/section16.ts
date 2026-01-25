import type { QuizQuestion } from './types';

export const section16Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The EPV formula for a classic tontine member is:',
    options: [
      '$\\text{EPV} = C / \\ddot{a}_x$',
      '$\\text{EPV} = D_t \\times n_t$',
      '$\\text{EPV} = P \\times r$',
      '$\\text{EPV} = \\sum_{t=1}^{\\omega} {}_tp_{65} \\cdot D_t \\cdot v^t$'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'For each year, we calculate: survival probability × payout × discount factor, then sum over all years.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Is the classic tontine actuarially fair?',
    options: [
      'No, it systematically exploits younger members',
      'No, payouts are too high',
      'Yes, EPV equals the contribution despite wild payout variation',
      'Yes, but only for members over 80',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Despite payouts ranging from $4,040 to $800,000, the classic tontine IS actuarially fair—EPV equals the $100,000 contribution.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The classic tontine\'s fairness result holds only if:',
    options: [
      'Interest rates remain constant',
      'All members have the same mortality risk',
      'The pool size is at least 100',
      'No members withdraw early'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Actuarial fairness requires all members to have identical mortality. Different ages, health statuses, or genders create unfairness.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The heterogeneity problem arises when:',
    options: [
      'Pool members have different mortality risks but are treated equally',
      'Interest rates vary over time',
      'Administrative costs are too high',
      'The pool is too small',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The heterogeneity problem: real pools have members with different mortality (ages, health, gender) but classic tontines treat everyone equally, creating unfairness.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'In the example calculation, Year 1\'s contribution to EPV ($3,838) uses which values?',
    options: [
      '$D_1 = $3,838, $_1p_{65} = 1.0, v = 1.0$',
      '$D_1 = $4,000, $_1p_{65} = 0.99, v = 0.96$',
      '$D_1 = $4,040, $_1p_{65} = 0.95, v = 0.95$',
      '$D_1 = $4,040, $_1p_{65} = 0.988, v = 0.962$'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Year 1 EPV contribution = $4,040 × 0.988 × 0.962 ≈ $3,838, using the actual payout, survival probability, and discount factor.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Which creates unfairness in a classic tontine with mixed membership?',
    options: [
      'Different ages, health statuses, or genders among members',
      'Different contribution amounts',
      'Variable investment returns',
      'Pool size fluctuation'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'When Alice is healthier than Bob, Carol is 70 while David is 65, or Eve is female (longer life expectancy), the classic tontine treating them equally creates unfairness.',
  },
];
