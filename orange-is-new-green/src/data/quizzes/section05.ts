import type { QuizQuestion } from './types';

export const section05Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Which of the following is NOT one of the three implications for money managers discussed?',
    options: [
      'Elusive positive yields',
      'Money market funds\\\\' resurgence',
      'Rising cryptocurrency adoption',
      'Looming government intrusion',
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
      '95%',
      '86%',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: '86% of FX transactions remain USD-denominated, demonstrating the dollar\'s continued dominance in global finance.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What key attributes would an ideal alternative deposit facility have?',
    options: [
      'Resistance to seizure and capability for positive real returns',
      'Government backing and FDIC insurance',
      'Anonymous transactions and unlimited supply',
      'High volatility and maximum leverage',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The ideal deposit facility would be resistant to seizure while capable of yielding positive real returns in USD.',
  },
];
