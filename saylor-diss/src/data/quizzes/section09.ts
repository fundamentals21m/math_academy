import type { QuizQuestion } from './types';

export const section09Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In the model, what determines total economic output?',
    options: [
      'Executive decree',
      'Foreign trade only',
      'A production function based on capital and labor',
      'Random chance'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Output is determined by a production function that combines capital and labor inputs.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How is output distributed in the model?',
    options: [
      'Equally to all citizens',
      'To the executive only',
      'By random lottery',
      'Among factions based on their relative power'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Distribution is determined by the relative power and influence of each faction.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What role does the executive play in economic distribution?',
    options: [
      'Influences distribution through policy, within constraints',
      'Complete control over all distribution',
      'No role—markets decide',
      'Only controls foreign trade'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The executive influences but doesn\'t fully control distribution—political realities constrain choices.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What happens when one faction\'s share of output increases?',
    options: [
      'Everyone benefits equally',
      'Other factions\' shares must decrease',
      'Total output automatically increases',
      'Nothing changes for other factions'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Distribution is a zero-sum game—increasing one faction\'s share reduces others\' shares.',
  },
];
