import type { QuizQuestion } from './types';

export const section16Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How does the model respond to external shocks (like famine or war)?',
    options: [
      'Oscillates before returning to equilibrium or collapsing',
      'Ignores them completely',
      'Immediately improves',
      'Remains perfectly stable',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Shocks cause oscillations; whether the system recovers depends on shock severity and system resilience.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What determines whether the system recovers from a shock?',
    options: [
      'Luck alone',
      'Foreign intervention',
      'The size of the shock relative to system resilience',
      'Executive wishes',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Recovery depends on whether the shock exceeds the system\'s capacity to absorb and adjust.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What can happen if a shock pushes discontent past the rebellion threshold?',
    options: [
      'Automatic recovery',
      'System regime change or collapse',
      'Nothing',
      'Improved stability',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Shocks that push discontent past thresholds can trigger rebellion and regime change.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why might a stable system suddenly collapse after years of apparent stability?',
    options: [
      'Random bad luck',
      'The executive got bored',
      'Foreign magic',
      'A shock that exceeds accumulated resilience',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Systems can appear stable while slowly losing resilience, then collapse when a shock hits.',
  },
];
