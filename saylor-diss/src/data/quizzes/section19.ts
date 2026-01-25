import type { QuizQuestion } from './types';

export const section19Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is "social inertia" in the model?',
    options: [
      'People being lazy',
      'Slow economic growth',
      'Political equilibria resist change with remarkable persistence',
      'Population decline'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Social inertia means established political equilibria—good or bad—resist change.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why does the model show that "obvious solutions often backfire"?',
    options: [
      'People are irrational',
      'Magic',
      'The model is wrong',
      'Complex feedback loops produce counter-intuitive dynamics'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Complex feedback loops mean interventions can have opposite effects from intended.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What does the model suggest about concentrating executive power during crisis?',
    options: [
      'Can amplify rather than dampen instability',
      'Always bad',
      'Always good',
      'Has no effect'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Stronger executives can amplify oscillations during crises rather than stabilize them.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The model supports the view that some political friction is:',
    options: [
      'Always harmful',
      'Functional and stabilizing',
      'Irrelevant',
      'Only aesthetic'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Friction between factions can be stabilizing by preventing any group from going too far.',
  },
];
