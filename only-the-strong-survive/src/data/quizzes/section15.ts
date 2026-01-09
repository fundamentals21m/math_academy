import type { QuizQuestion } from './types';

export const section15Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What historical example do the authors use to illustrate sound money principles?',
    options: [
      'The Roman Empire',
      'Renaissance Florence and the gold florin',
      'Ancient Egypt',
      'Medieval England'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The authors reference Florence\'s gold florin as a historical example of sound money that facilitated commerce and trust—paralleling Bitcoin\'s potential role today.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What made the Florentine florin successful as money?',
    options: [
      'Government decree',
      'Consistent gold content that merchants could trust across borders',
      'Backing by real estate',
      'Low transaction fees'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The florin\'s success came from predictable, trustworthy gold content. Merchants knew exactly what they were getting—reliability that enabled commerce across political boundaries.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'How do the authors connect Florence to Bitcoin?',
    options: [
      'Both were created in Italy',
      'Both represent sound, predictable money that enables trust without relying on political authority',
      'Both use gold as backing',
      'Both were rejected by merchants initially'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Like the florin, Bitcoin provides reliable, predictable monetary properties (fixed supply, transparent rules) that don\'t depend on political actors—enabling trustless commerce.',
  },
];
