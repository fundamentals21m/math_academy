import type { QuizQuestion } from './types';

export const section17Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How does the model compare different regime types?',
    options: [
      'By moral judgment',
      'By historical examples only',
      'By popular opinion polls',
      'By varying parameters representing executive power and accountability',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Different regimes are modeled by varying parameters for executive power, constraints, and accountability.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does the model suggest about unconstrained executive power?',
    options: [
      'It always produces the best outcomes',
      'It can amplify oscillations and instability',
      'It always leads to prosperity',
      'It has no effect',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Strong unconstrained executives can amplify oscillations during crises rather than dampen them.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What advantage does mixed government show in the model?',
    options: [
      'Faster decision-making',
      'More military strength',
      'More stable feedback and self-correction',
      'More popular entertainment',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Mixed government provides stabilizing feedback through checks and balances.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The model supports Machiavelli\'s preference for:',
    options: [
      'Mixed republican government',
      'Pure monarchy',
      'Pure democracy',
      'Anarchy',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The model supports Machiavelli\'s advocacy for mixed government combining different elements.',
  },
];
