import type { QuizQuestion } from './types';

export const section09Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'According to Rothbard, what is the definition of a monopoly?',
    options: [
      'Any large company',
      'The most efficient producer in an industry',
      'A sole seller protected from competition by government grant',
      'Any company with significant market share'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Rothbard defines monopoly as a grant of exclusive privilege by government, not simply being a sole seller.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the difference between monopoly price and competitive price?',
    options: [
      'Monopoly price is always higher',
      'On a free market, there is no valid distinction—all prices are "competitive"',
      'Monopoly price benefits consumers',
      'Competitive price is set by government',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Rothbard argues the monopoly/competitive price distinction is meaningless on the free market; all prices reflect supply and demand.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Can a company become a harmful monopoly through market success alone?',
    options: [
      'Yes, size alone creates monopoly power',
      'Yes, if it has more than 50% market share',
      'No, because all monopolies are beneficial',
      'No, only government barriers can create harmful monopoly positions',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'On a free market, even a sole producer cannot exploit consumers because potential competition constrains behavior.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What does Rothbard say about antitrust laws?',
    options: [
      'They protect consumers from monopoly',
      'They are essential for free markets',
      'They often punish efficient firms and protect less efficient competitors',
      'They should be strengthened',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Rothbard argues antitrust laws actually harm competition by punishing success and protecting less efficient firms.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why doesn\'t monopoly theory apply to unique goods?',
    options: [
      'It does apply to unique goods',
      'Every producer of a differentiated product is technically a "sole seller"',
      'Unique goods are not traded on markets',
      'Government exempts unique goods',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Every product is somewhat unique; if "monopoly" meant sole seller of a specific item, everyone would be a monopolist.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What type of monopoly does Rothbard consider harmful?',
    options: [
      'Only government-granted exclusive privileges that bar competition',
      'Any monopoly is harmful',
      'Monopolies that earn profits',
      'Monopolies with high market share',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Only monopolies created by government barriers to entry are harmful; market-created positions face potential competition.',
  },
];
