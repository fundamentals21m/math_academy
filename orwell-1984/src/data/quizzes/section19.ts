import type { QuizQuestion } from './types';

export const section19Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is O\'Brien\'s true role?',
    options: ['Winston\'s torturer', 'A Brotherhood leader', 'A double agent working against the Party', 'The real Goldstein'],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'O\'Brien was never part of the Brotherhood—he is revealed to be Winston\'s torturer, systematically destroying and remaking his mind.'
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does O\'Brien do when Winston says he sees four fingers?',
    options: ['He agrees', 'He shocks him until Winston says five', 'He gives him food', 'He releases him'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'O\'Brien holds up four fingers and shocks Winston until he says "five"—but he wants Winston to truly see five, not just say it.'
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'According to O\'Brien, what helped write Goldstein\'s book?',
    options: ['The Brotherhood', 'Foreign governments', 'O\'Brien himself', 'Winston\'s diary'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'O\'Brien reveals he helped write Goldstein\'s book—the entire "Brotherhood" conspiracy was a trap designed by the Party.'
  }
];
