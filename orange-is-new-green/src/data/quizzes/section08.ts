import type { QuizQuestion } from './types';

export const section08Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What was the cumulative return of a covered short position from 2016 to 2023?',
    options: [
      '+50%',
      '+100%',
      '+140%',
      '+200%'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A $100 position held in covered shorts since 2016 would have yielded approximately +140% return.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What was the Sharpe ratio of Bitcoin covered shorts since inception?',
    options: [
      '0.79',
      '1.79',
      '2.79',
      '3.79'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The Sharpe ratio was 3.79—something very few fund managers can achieve, indicating excellent risk-adjusted returns.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What percentage of all possible covered short trades (>1 week) since inception were profitable?',
    options: [
      '72%',
      '81%',
      '91.7%',
      '99%'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Only 8.3% of trades incurred losses, meaning 91.7% of all possible covered short positions were profitable.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In the current Bitcoin cycle, what percentage of funding events have been positive?',
    options: [
      '65%',
      '72%',
      '81%',
      '95%'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'During the current cycle (since May 2020 halving), 81% of funding events have been positive, up from the historical 72%.',
  },
];
