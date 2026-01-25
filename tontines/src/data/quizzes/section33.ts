import type { QuizQuestion } from './types';

export const section33Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Group Self-Annuitization (GSA) was introduced in 2005 by:',
    options: [
      'Milevsky and Salisbury',
      'Forman and Sabin',
      'The Insurance Institute',
      'Piggott, Valdez, and Detzel',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'GSA was introduced in 2005 by economists Piggott, Valdez, and Detzel as a revolutionary retirement pooling concept.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In GSA, mortality credits are:',
    options: [
      'Hidden in the fee structure',
      'Guaranteed by an insurance company',
      'Calculated explicitly and distributed transparently',
      'Paid only to the last survivor'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A key feature of GSA is that mortality credits are calculated explicitly and distributed clearly to survivors.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In the GSA example with 100 members, $100k each, 6% return, and 1 death, the effective yield per survivor is approximately:',
    options: [
      '8.0%',
      '6.0%',
      '7.13%',
      '6.5%',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The $7,131 payment per survivor on $100,000 contribution gives an effective yield of 7.13%, exceeding the 6% investment return due to mortality credits.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'GSA uses a cohort-based design where members:',
    options: [
      'Must all be exactly the same age',
      'Can be any age with complex weighting',
      'Are grouped randomly regardless of age',
      'Join age-appropriate cohorts (e.g., 65-year-olds together)',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'GSA uses cohort-based design where members of similar ages join together, simplifying actuarial calculations.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Compared to traditional annuities, GSA has:',
    options: [
      'Variable payments and higher expected returns',
      'Guaranteed payments and lower expected returns',
      'Guaranteed payments and higher expected returns',
      'Variable payments and lower expected returns',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'GSA has variable (not guaranteed) payments but higher expected returns because there is no insurer taking a cut.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Which is NOT an advantage of GSA over traditional annuities?',
    options: [
      'Greater transparency',
      'Guaranteed income',
      'Investment flexibility',
      'No insurer default risk',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Guaranteed income is a feature of traditional annuities, not GSA. GSA advantages include transparency, flexibility, and no insurer risk.',
  },
];
