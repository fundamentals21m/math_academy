import type { QuizQuestion } from './types';

export const section34Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Canada\'s Variable Payment Life Annuity (VPLA) was legislated in:',
    options: [
      '2015-2016',
      '2019-2020',
      '2010-2011',
      '2024-2025'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'VPLA was proposed in 2019, with the Income Tax Act amended in 2024 and implementation rules finalized in 2025.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'The basic VPLA payout formula divides account balance by:',
    options: [
      'A fixed number (20 years)',
      'The number of pool members',
      'Expected years remaining ($\\ddot{a}_{x+t}$)',
      'The investment return rate',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'VPLA payouts follow Payment_t = B_t / ä_{x+t}, dividing account balance by expected remaining lifetime.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Canadian VPLA smoothing mechanism uses a "one-third rule" which means:',
    options: [
      'One-third of assets are held in reserve',
      'Payments adjust by at most one-third of the indicated change per year',
      'One-third of mortality credits go to a buffer',
      'Only one-third of members receive payments each year'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The one-third rule smooths volatility by adjusting payments by only one-third of the indicated change each year.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'If current payment is $35,000 and indicated payment is $38,000, the smoothed new payment is:',
    options: [
      '$35,000',
      '$37,000',
      '$38,000',
      '$36,000',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Change = 1/3 × ($38,000 - $35,000) = $1,000. New payment = $35,000 + $1,000 = $36,000.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Canadian VPLA risk management requires all EXCEPT:',
    options: [
      'Buffer reserves (1-2%)',
      'Conservative mortality assumptions',
      'Guaranteed minimum payouts',
      'Actuarial certification',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'VPLAs do NOT have guaranteed minimum payouts—that would make them annuities. They have conservative assumptions, certification, and buffer reserves.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The mortality adjustment factor $\\ddot{a}_{x+t}/\\ddot{a}_{x+t+1}$ in VPLAs is:',
    options: [
      'Always greater than 1',
      'Always less than 1',
      'Equal to 1',
      'Random'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'This factor is always > 1 because remaining life expectancy decreases with age, providing a natural "longevity bonus."',
  },
];
