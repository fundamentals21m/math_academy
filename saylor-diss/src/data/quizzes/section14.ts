import type { QuizQuestion } from './types';

export const section14Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does the baseline simulation demonstrate?',
    options: [
      'Constant chaos',
      'The system finding a stable equilibrium',
      'Immediate revolution',
      'Economic collapse',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The baseline simulation shows the system settling into a stable equilibrium with balanced tensions.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What type of equilibrium does the model typically reach?',
    options: [
      'Perfect harmony with no tensions',
      'Complete popular dominance',
      'A dynamic balance with ongoing but manageable tensions',
      'Complete aristocratic dominance',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The equilibrium involves ongoing tensions that are balanced, not eliminated.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What happens when the model starts far from equilibrium?',
    options: [
      'It stays far from equilibrium',
      'Immediate system collapse',
      'Nothing happens',
      'It oscillates before settling',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The system oscillates as it adjusts, then settles toward equilibrium.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The baseline results support Machiavelli\'s view that stability comes from:',
    options: [
      'Balanced tensions between competing interests',
      'Eliminating all factions',
      'Perfect executive control',
      'External military strength',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Machiavelli argued stability comes from balanced tensions, not from eliminating conflict.',
  },
];
