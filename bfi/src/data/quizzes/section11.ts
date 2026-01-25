import type { QuizQuestion } from './types';

export const section11Questions: QuizQuestion[] = [
  {
    id: 's11-q1',
    type: 'multiple-choice',
    question: 'What accounting standard fixed the bitcoin accounting problem?',
    options: [
      'FAS 87',
      'GAAP 2024',
      'FASB ASU 2023-08',
      'SEC Rule 10b-5'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'FASB issued Accounting Standards Update 2023-08 (ASU 2023-08), which clarified that bitcoin should be accounted for using mark-to-market treatment.'
  },
  {
    id: 's11-q2',
    type: 'multiple-choice',
    question: 'Under the old "goodwill" treatment, how was bitcoin valued?',
    options: [
      'Always marked to market',
      'Carried at cost forever',
      'Ignored on balance sheets',
      'Written down when price dropped, but never written back up'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Under the old interpretation, bitcoin was held constant and written down during drawdowns, but never written back up - making it hard to show investors the benefits of holding bitcoin.'
  },
  {
    id: 's11-q3',
    type: 'multiple-choice',
    question: 'What is "operating profitability" in the context of bitcoin treasury deployment?',
    options: [
      'Operating revenue less operating expenses, excluding extraordinary items',
      'Total company revenue',
      'Bitcoin price appreciation',
      'Dividends paid to shareholders'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Operating profitability is operating revenue less operating expenses - what the company expects to experience on a "run-rate" basis under typical conditions.'
  },
  {
    id: 's11-q4',
    type: 'multiple-choice',
    question: 'How can a company use bitcoin to improve operating profitability?',
    options: [
      'By mining bitcoin',
      'By regularly selling bitcoin gains and including them in operating revenue',
      'By issuing bitcoin-backed bonds',
      'By converting all assets to bitcoin'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Companies can deploy their treasury by regularly selling a portion of bitcoin into rising markets and getting accountants to include those gains in operating revenue.'
  },
  {
    id: 's11-q5',
    type: 'multiple-choice',
    question: 'What does the book say about using bitcoin treasury to improve profitability?',
    options: [
      'It\'s an accounting trick to fool investors',
      'It should only be used during bear markets',
      'It\'s not actually a corporate finance trick - bitcoin genuinely lowers costs over time',
      'It requires government approval'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'This is not accounting trickery - bitcoin genuinely lowers costs over time because USD underperforms BTC by design, but there is opportunity cost in deploying bitcoin.'
  }
];
