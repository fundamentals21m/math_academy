import type { QuizQuestion } from './types';

export const section07Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the "executive dilemma" in Machiavelli\'s framework?',
    options: [
      'Choosing between war and peace',
      'Deciding on tax rates',
      'Selecting advisors',
      'Satisfying one faction means alienating another',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The executive dilemma is that satisfying one faction tends to alienate the other.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why does Machiavelli say it\'s better to be feared than loved (if one must choose)?',
    options: [
      'Love is unreliable and fear is more durable',
      'Fear is more enjoyable',
      'It\\\\'s easier to be feared',
      'People prefer feared leaders',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Machiavelli argues fear creates more reliable obedience than love, which depends on others\' will.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What does the executive need to maintain power?',
    options: [
      'Just aristocratic support',
      'Just popular support',
      'A sufficient coalition of support',
      'Foreign military aid',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The executive needs a sufficient coalition—enough combined support to prevent rebellion.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'According to Machiavelli, when is cruelty justified?',
    options: [
      'Never',
      'When used decisively to establish order, not prolonged',
      'Always, to maintain fear',
      'Only against foreigners',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Machiavelli argues cruelties should be committed all at once at the beginning, not prolonged over time.',
  },
];
