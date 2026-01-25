import type { QuizQuestion } from './types';

export const section09Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How many trading days per year do traditional markets operate?',
    options: [
      '200',
      '365',
      '300',
      '252',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Traditional markets operate approximately 252 days per year (9-5, weekdays excluding holidays), while Bitcoin trades 365 days per year, 24/7.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What advantage does Bitcoin MMF offer during events like the Silicon Valley Bank collapse?',
    options: [
      'Ability to reposition immediately (including weekends)',
      'Lower fees',
      'Higher yields',
      'Better customer service',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Unlike traditional markets which required waiting 3 days (until Monday), Bitcoin markets allow immediate repositioning even on weekends.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What does "seizure resistance" mean for a Bitcoin MMF?',
    options: [
      'It cannot be hacked',
      'It cannot be frozen or confiscated by any single government',
      'It cannot lose value',
      'It cannot be traded',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Seizure resistance means the assets cannot be frozen or confiscated by a single government or coalition, unlike traditional banking assets.',
  },
];
