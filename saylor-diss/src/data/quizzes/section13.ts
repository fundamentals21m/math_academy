import type { QuizQuestion } from './types';

export const section13Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What determines executive policy decisions in the model?',
    options: [
      'Random choice',
      'Divine inspiration',
      'Optimization rules based on maintaining power',
      'Popular vote'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The executive follows decision rules that optimize for maintaining power and stability.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How does the model represent executive "rationality"?',
    options: [
      'Perfect knowledge of the future',
      'Following fixed rules regardless of circumstances',
      'Complete irrationality',
      'Bounded rationality with imperfect information'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The executive has bounded rationality—making decisions with imperfect information.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What constraint limits executive decision-making?',
    options: [
      'The need to maintain minimum coalition support',
      'No constraints exist',
      'Religious law only',
      'Foreign approval'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The executive must maintain minimum coalition support, limiting policy choices.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'How does the executive respond to increasing discontent?',
    options: [
      'Ignore it completely',
      'Adjust policies to reduce the discontent',
      'Always increase repression',
      'Always increase benefits'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The executive adjusts policies in response to discontent, though with delays and constraints.',
  },
];
