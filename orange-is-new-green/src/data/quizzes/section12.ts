import type { QuizQuestion } from './types';

export const section12Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Which is an advantage of DLCs over centralized exchanges?',
    options: [
      'Higher capital efficiency',
      'Better liquidity',
      'Privacy and self-custody',
      'Lower transaction fees',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'DLCs offer privacy (even the oracle doesn\'t know contract details) and self-custody (no deposit to exchanges required).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is a major disadvantage of DLCs?',
    options: [
      'Capital inefficiency—both parties must fully collateralize all outcomes',
      'They are illegal',
      'They cannot be used for Bitcoin',
      'They require government approval',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'DLCs suffer from capital inefficiency because both parties must send sufficient collateral to cover all possible contract outcomes, unlike centralized exchanges that use net positioning.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Are DLCs completely trustless?',
    options: [
      'Yes, they require no trust at all',
      'Yes, but only on Lightning Network',
      'No, they require trust in the government',
      'No, they still require trust in the oracle (but this is more limited than exchange trust)'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'DLCs still require oracle trust, but this is more limited and transparent than trusting exchanges, custodians, and the banking system.',
  },
];
