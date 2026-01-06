import type { QuizQuestion } from './types';

export const section05Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Which of the following is NOT one of the three implications for money managers discussed?',
    options: [
      'Elusive positive yields',
      'Money market funds\' resurgence',
      'Rising cryptocurrency adoption',
      'Looming government intrusion'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The three implications are: elusive positive yields, money market funds\' resurgence, and looming government intrusion. Cryptocurrency adoption was not specifically listed.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What percentage of global FX transactions remain USD-denominated?',
    options: [
      '50%',
      '65%',
      '86%',
      '95%'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '86% of FX transactions remain USD-denominated, demonstrating the dollar\'s continued dominance in global finance.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What key attributes would an ideal alternative deposit facility have?',
    options: [
      'Government backing and FDIC insurance',
      'Resistance to seizure and capability for positive real returns',
      'High volatility and maximum leverage',
      'Anonymous transactions and unlimited supply'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The ideal deposit facility would be resistant to seizure while capable of yielding positive real returns in USD.',
  },
];
