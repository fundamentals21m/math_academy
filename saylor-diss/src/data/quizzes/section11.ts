import type { QuizQuestion } from './types';

export const section11Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In the model, discontent is primarily driven by:',
    options: [
      'Absolute poverty levels',
      'Weather conditions',
      'The gap between expectations and reality',
      'Foreign propaganda'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Discontent arises from the gap between what factions expect and what they actually receive.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How do expectations change in the model?',
    options: [
      'They remain constant',
      'They are random',
      'They are set by the executive',
      'They adjust based on recent experience'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Expectations adapt over time based on recent experience—good times raise expectations.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why might improving conditions paradoxically increase discontent?',
    options: [
      'Expectations rise faster than improvements can be sustained',
      'People become lazier',
      'The executive becomes weaker',
      'Foreign enemies become stronger'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Improvements raise expectations, and if they can\'t be sustained, the gap widens.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Discontent in the model is modeled as a:',
    options: [
      'Constant value',
      'Stock that accumulates over time',
      'Random variable',
      'External input'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Discontent is a stock that accumulates or depletes based on the aspiration-reality gap.',
  },
];
