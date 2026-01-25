import type { QuizQuestion } from './types';

export const section17Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The heterogeneity problem in tontines arises when:',
    options: [
      'Members contribute different amounts',
      'Members with different mortality risks are treated equally',
      'Interest rates fluctuate',
      'The pool is too small'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The heterogeneity problem occurs when members with different ages, sexes, and health statuses contribute equally and receive equal shares, causing healthier members to benefit at sicker ones\' expense.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In the Alice (female) vs Bob (male) example, both age 65, who is expected to gain?',
    options: [
      'Bob gains approximately $8,000',
      'Neither gains—it\\'s perfectly fair',
      'Both gain equally',
      'Alice gains approximately $8,000',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Alice (female, e_65=20.7 years) has EPV ≈ $108,000 while Bob (male, e_65=18.0 years) has EPV ≈ $92,000. Alice gains about $8,000 at Bob\'s expense because she\'s expected to live longer.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which is NOT a source of heterogeneity in tontine pools?',
    options: [
      'Health status',
      'Investment return rate',
      'Age differences',
      'Sex differences',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Investment return rate is not a source of heterogeneity among members—it applies equally to the whole pool. Age, sex, and health create different mortality expectations among members.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In an equal-share tontine with heterogeneous members:',
    options: [
      'Everyone has EPV = contribution',
      'Sicker members always gain more',
      'Age differences don\\'t matter',
      'Healthier members have EPV > contribution; sicker members have EPV < contribution',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Healthier/younger members who are more likely to survive have EPV > contribution (they gain), while sicker/older members have EPV < contribution (they lose).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The heterogeneity problem creates:',
    options: [
      'Adverse selection—healthy people want to join, sick people don\\'t',
      'Higher returns for everyone',
      'Lower administrative costs',
      'Perfect actuarial fairness',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'When healthy members systematically gain and sick members lose, healthy people are attracted to join while sick people avoid the tontine—this is adverse selection.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The solution to the heterogeneity problem is to:',
    options: [
      'Exclude all unhealthy members',
      'Require larger contributions from healthy members',
      'Adjust payouts based on each member\'s mortality risk',
      'Use shorter payout periods'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'To make tontines fair for heterogeneous groups, payouts should be adjusted based on mortality risk—members with lower survival probability should receive higher payouts per dollar contributed.',
  },
];
