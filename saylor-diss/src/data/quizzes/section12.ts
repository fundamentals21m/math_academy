import type { QuizQuestion } from './types';

export const section12Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What triggers rebellion in the model?',
    options: [
      'Any level of discontent',
      'Executive decision',
      'Discontent exceeding a threshold',
      'Random events'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Rebellion occurs when discontent exceeds a threshold where action becomes preferable to suffering.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the difference between rebellion and revolution in the model?',
    options: [
      'They are the same',
      'Rebellion is foreign; revolution is domestic',
      'Revolution is peaceful; rebellion is violent',
      'Rebellion is smaller scale; revolution transforms the system'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Rebellion challenges the executive while revolution fundamentally transforms the political system.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which faction is more likely to successfully rebel?',
    options: [
      'The aristocracy, due to organization and resources',
      'The populace, due to numbers alone',
      'Neither can succeed',
      'Whichever is more religious'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The aristocracy\'s better organization and resources make their rebellions more likely to succeed.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What does the threshold for rebellion depend on?',
    options: [
      'Only the level of oppression',
      'Costs and risks of rebellion vs. costs of continued suffering',
      'The phase of the moon',
      'Foreign military strength'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The threshold balances the costs of rebellion against the costs of continued suffering.',
  },
];
