import type { QuizQuestion } from './types';

export const section04Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the first step in building a system dynamics model?',
    options: [
      'Identifying the problem and system boundary',
      'Running simulations',
      'Writing equations',
      'Validating results',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The modeling process begins with problem identification and defining system boundaries.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How are system dynamics models typically validated?',
    options: [
      'By proving them mathematically',
      'By testing behavior against known patterns and historical data',
      'By expert opinion alone',
      'By popular vote',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Models are validated by comparing their behavior to known patterns and historical outcomes.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What does "sensitivity analysis" test in a model?',
    options: [
      'How sensitive users are to the interface',
      'How quickly the model runs',
      'How model behavior changes when parameters vary',
      'How accurate the graphics are',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Sensitivity analysis examines how changes in parameters affect model behavior.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'System dynamics was pioneered at which institution?',
    options: [
      'Harvard',
      'Stanford',
      'Cambridge',
      'MIT',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'System dynamics was developed by Jay Forrester at MIT in the 1950s-60s.',
  },
];
