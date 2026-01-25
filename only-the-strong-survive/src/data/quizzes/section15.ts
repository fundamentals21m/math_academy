import type { QuizQuestion } from './types';

export const section15Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What historical example do the authors use to illustrate sound money principles?',
    options: [
      'Renaissance Florence and the gold florin',
      'The Roman Empire',
      'Ancient Egypt',
      'Medieval England',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The authors reference Florence\'s gold florin as a historical example of sound money that facilitated commerce and trust—paralleling Bitcoin\'s potential role today.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What made the Florentine florin successful as money?',
    options: [
      'Government decree',
      'Backing by real estate',
      'Low transaction fees',
      'Consistent gold content that merchants could trust across borders',
    ],
    correctIndex: 3,
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
      'Both were rejected by merchants initially',
      'Both use gold as backing',
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Like the florin, Bitcoin provides reliable, predictable monetary properties (fixed supply, transparent rules) that don\'t depend on political actors—enabling trustless commerce.',
  },
];
