import type { QuizQuestion } from './types';

export const section13Questions: QuizQuestion[] = [
  {
    id: 's13-q1',
    type: 'multiple-choice',
    question: 'What hockey strategy is used as an analogy for pension bitcoin allocation?',
    options: [
      'Line change',
      'Power play',
      'Penalty kill',
      'Pulling the goalie'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The "Pulling the Goalie" strategy from hockey - when losing near the end of a game, removing the goalkeeper to add an extra attacker - is the analogy used for pension bitcoin strategy.'
  },
  {
    id: 's13-q2',
    type: 'multiple-choice',
    question: 'What is the success rate of "pulling the goalie" vs. a "Hail Mary" pass?',
    options: [
      'Pulling the goalie is 18-20% vs. Hail Mary\'s 8.3%',
      'Hail Mary is more successful',
      'Both have equal success rates',
      'Neither strategy works'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Pulling the goalie has an 18-20% success rate - more than double the Hail Mary\'s ~8.3% - making it a calculated risk rather than desperation.'
  },
  {
    id: 's13-q3',
    type: 'multiple-choice',
    question: 'What special tax advantage do qualified pension plans have?',
    options: [
      'Lower income tax rates',
      'They never pay capital gains tax on investments',
      'Tax credits for contributions',
      'Delayed tax payments'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Tax-qualified pension plans don\'t ever pay capital gains tax on their investments - a massive advantage for accumulating bitcoin gains over long time horizons.'
  },
  {
    id: 's13-q4',
    type: 'multiple-choice',
    question: 'Which pension fund invested $100 million in FTX before it went bankrupt?',
    options: [
      'CalPERS',
      'Wisconsin Pension Fund',
      'Ontario Teachers Pension Plan',
      'UK Universities Superannuation Scheme'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Ontario Teachers Pension Plan invested $100 million in FTX, which went bankrupt with its CEO ending up in prison.'
  },
  {
    id: 's13-q5',
    type: 'multiple-choice',
    question: 'According to the book, what bitcoin allocation is justified for pensions?',
    options: [
      '50%',
      '1-5%',
      '10-20%',
      '100%'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The book argues that 100% allocation is justified for pensions, given they are a medium-term problem and most will outlive the next two bitcoin halving cycles (eight years).'
  }
];
