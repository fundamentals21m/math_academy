import type { QuizQuestion } from './types';

export const section42Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Life expectancy at age 65 has increased from approximately:',
    options: [
      '20 years (1960) to 30 years today',
      '15 years (1960) to 20+ years today',
      '5 years (1960) to 10 years today',
      '10 years (1960) to 15 years today',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Life expectancy at 65 has increased from 15 years (1960) to 20+ years today. Many retirements now span 25-35 years.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Traditional defined-benefit pensions have declined from covering:',
    options: [
      '80% of workers (1980) to 60% today',
      '50% of workers (1980) to 30% today',
      '38% of workers (1980) to under 15% today',
      '25% of workers (1980) to 20% today',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Traditional DB pensions covered 38% of workers in 1980 but under 15% today—a major shift in retirement risk from employers to individuals.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The "4% rule" problem includes all EXCEPT:',
    options: [
      'Many retirements now exceed 30 years',
      'Low interest rates reduce safe withdrawal rates',
      'No adjustment for actual mortality',
      'Guaranteed to never run out of money',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The 4% rule has problems: retirements exceed 30 years, low rates reduce safe withdrawals, and there\'s no mortality adjustment. It does NOT guarantee money won\'t run out.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'At age 95, a tontine with $250k initial investment might pay approximately:',
    options: [
      '$10,000/year (same as age 65)',
      '$13,000/year (same as annuity)',
      '$5,000/year (depleted savings)',
      '$21,000/year (growing with mortality credits)',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Unlike the 4% rule (depleted) or annuity (flat $13k), tontine payments grow to ~$21,000/year by age 95 due to mortality credits.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Social Security replaces approximately what percentage of pre-retirement income for median earners?',
    options: [
      '80%',
      '40%',
      '20%',
      '60%',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Social Security replaces only about 40% of pre-retirement income for median earners—and faces long-term funding challenges.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'A key tontine advantage over annuities is:',
    options: [
      'Growing income from mortality credits exactly when healthcare costs rise',
      'Guaranteed fixed payments',
      'No longevity risk',
      'Insurance company backing'
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Tontines provide growing income from mortality credits—increasing payouts at older ages when healthcare costs typically rise most.',
  },
];
