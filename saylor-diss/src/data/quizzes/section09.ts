import type { QuizQuestion } from './types';

export const section09Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'In the model, what determines total economic output?',
    options: [
      'Executive decree',
      'Foreign trade only',
      'Random chance',
      'A production function based on capital and labor',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Output is determined by a production function that combines capital and labor inputs.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How is output distributed in the model?',
    options: [
      'Equally to all citizens',
      'Among factions based on their relative power',
      'To the executive only',
      'By random lottery',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Distribution is determined by the relative power and influence of each faction.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What role does the executive play in economic distribution?',
    options: [
      'Complete control over all distribution',
      'No role—markets decide',
      'Influences distribution through policy, within constraints',
      'Only controls foreign trade',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The executive influences but doesn\'t fully control distribution—political realities constrain choices.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What happens when one faction\'s share of output increases?',
    options: [
      'Other factions\\' shares must decrease',
      'Everyone benefits equally',
      'Total output automatically increases',
      'Nothing changes for other factions',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Distribution is a zero-sum game—increasing one faction\'s share reduces others\' shares.',
  },
];
