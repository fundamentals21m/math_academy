import type { QuizQuestion } from './types';

export const section17Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How does the model compare different regime types?',
    options: [
      'By moral judgment',
      'By historical examples only',
      'By varying parameters representing executive power and accountability',
      'By popular opinion polls'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Different regimes are modeled by varying parameters for executive power, constraints, and accountability.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does the model suggest about unconstrained executive power?',
    options: [
      'It always produces the best outcomes',
      'It always leads to prosperity',
      'It has no effect',
      'It can amplify oscillations and instability'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Strong unconstrained executives can amplify oscillations during crises rather than dampen them.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What advantage does mixed government show in the model?',
    options: [
      'More stable feedback and self-correction',
      'Faster decision-making',
      'More military strength',
      'More popular entertainment'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Mixed government provides stabilizing feedback through checks and balances.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The model supports Machiavelli\'s preference for:',
    options: [
      'Pure monarchy',
      'Mixed republican government',
      'Pure democracy',
      'Anarchy'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The model supports Machiavelli\'s advocacy for mixed government combining different elements.',
  },
];
