import type { QuizQuestion } from './types';

export const section44Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The three pillars of efficient lifetime income according to tontine theory are:',
    options: [
      'Mortality mathematics, risk pooling, and utility optimization',
      'Insurance, annuities, and investments',
      'Stocks, bonds, and real estate',
      'Social Security, pensions, and savings',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The three pillars are: Mortality Mathematics (survival functions), Risk Pooling (sharing mortality risk), and Utility Optimization (natural tontine).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A "Tontine-Annuity Hybrid" product would feature:',
    options: [
      'Only guaranteed payments',
      'Only variable payments',
      'A guaranteed floor plus variable mortality credits as upside',
      'No mortality component',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Tontine-Annuity Hybrids combine a guaranteed annuity floor (e.g., 4%) with additional variable mortality credits (0-3%) for upside.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'A "Healthcare Tontine" would be structured to:',
    options: [
      'Have constant payouts throughout retirement',
      'Only pay for medical emergencies',
      'Increase payouts faster than standard mortality credits, matching rising healthcare costs',
      'Decrease payouts over time',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Healthcare Tontines are designed to increase payouts faster than standard mortality credits, with payouts indexed to healthcare inflation.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'A "DeFi Tontine" using smart contracts would still face the challenge of:',
    options: [
      'Calculating mortality credits',
      'Death verification (oracle problem)',
      'Investment management',
      'None—smart contracts solve everything',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Even blockchain-based tontines face the oracle problem—how to reliably verify deaths without a trusted third party.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Lorenzo de Tonti invented the tontine in:',
    options: [
      '1753',
      '1453',
      '1553',
      '1653'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Lorenzo de Tonti invented the tontine in 1653 as a novel financing mechanism for the French government.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The policy recommendation to "clarify legal status" means creating:',
    options: [
      'A distinct regulatory category for "mortality-pooled retirement products"',
      'Stricter insurance regulations',
      'Banning tontines entirely',
      'No regulation at all'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'The recommendation is to create a distinct regulatory category separate from insurance and securities for mortality-pooled products.',
  },
];
