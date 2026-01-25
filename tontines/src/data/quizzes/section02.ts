import type { QuizQuestion } from './types';

export const section02Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The Armstrong Investigation (1905) exposed widespread corruption in:',
    options: [
      'Commercial banks',
      'Government bonds',
      'Tontine insurance companies',
      'Stock exchanges',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'New York State Senator William Armstrong led an investigation that exposed widespread corruption in tontine insurance companies, leading to their effective ban.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Insurance company executives misused tontine assets for:',
    options: [
      'Conservative bond investments',
      'Policyholder dividends',
      'Infrastructure development',
      'Lavish salaries, risky speculation, and bribery of legislators',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Companies like Equitable Life used massive tontine assets as personal slush funds—lavish salaries, risky speculation, and bribery of legislators.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The "perverse incentive" in classic tontines was that:',
    options: [
      'People were encouraged to save too much',
      'Fewer survivors meant more money for each remaining member',
      'Companies were motivated to increase payouts',
      'Government regulation became too strict'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'In a tontine, fewer survivors means more money for each remaining member. This created a dark incentive structure that became the subject of murder mysteries.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which famous authors wrote tontine murder mysteries?',
    options: [
      'Agatha Christie and Robert Louis Stevenson',
      'Shakespeare and Milton',
      'Hemingway and Fitzgerald',
      'Dickens and Austen',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Real and imagined murder plots became literary staples—Agatha Christie and Robert Louis Stevenson both wrote tontine murder mysteries.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The scandal that ended tontines was fundamentally about:',
    options: [
      'Corporate corruption, not the tontine concept',
      'Excessive government regulation',
      'The tontine mechanism itself',
      'Poor investment returns',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The scandal was about corporate corruption, not the tontine mechanism itself. Modern tontine proposals address these issues through transparency and proper regulation.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Modern tontine proposals differ from historical ones by eliminating:',
    options: [
      'Mortality pooling',
      'Investment returns',
      'Age-based contributions',
      'The last-survivor jackpot that created perverse incentives',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Modern proposals eliminate the last-survivor jackpot by smoothing payouts over time, removing the motive for members to benefit from others\' deaths.',
  },
];
