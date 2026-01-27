import type { QuizQuestion } from './types';

export const section07Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is wrong with the standard economic definition of monopoly according to Hoppe?',
    options: [
      'It is too narrow',
      'It treats the ability to set prices—which every seller has—as special monopoly power',
      'It only applies to large corporations',
      'It ignores international competition'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Every seller is the "sole seller" of their particular product at their particular location at their particular moment. The question is not whether someone has pricing power but how they acquired their market position.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is a "free market monopoly"?',
    options: [
      'A monopoly granted by the government',
      'A position achieved through superior service to consumers',
      'A firm with no competitors',
      'An illegal business practice'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A free market monopoly is a position achieved through superior service—better products, lower prices, or more effective customer service. It lasts only as long as the firm continues satisfying consumers better than alternatives.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the ONLY source of harmful monopoly power according to Hoppe?',
    options: [
      'Natural economies of scale',
      'Superior technology',
      'Government coercion creating legal barriers to entry',
      'Brand loyalty'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Harmful monopoly power can only exist when backed by government coercion. On a free market, excessive prices attract competitors. Only legal barriers to entry can prevent this competitive process.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Which is NOT an example of a government-created monopoly?',
    options: [
      'Occupational licensing requirements',
      'A firm that dominates through lower prices and better service',
      'Utility franchises',
      'Taxi medallion systems'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'A firm that achieves dominance through lower prices and better service is a free market monopoly, earned through consumer satisfaction, not a government-created coercive monopoly.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'How does Hoppe view competition?',
    options: [
      'A static state with many firms selling identical products',
      'A dynamic process of discovery where entrepreneurs try different approaches',
      'A government-regulated system',
      'An inefficient duplication of effort'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Competition is a dynamic process of discovery where entrepreneurs try different approaches, products, and prices to better serve consumers. Some succeed and grow; others fail and exit.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What does a firm temporarily dominating its market through superior performance indicate?',
    options: [
      'Competition has failed',
      'The market needs regulation',
      'Competition is working successfully',
      'Consumers are being exploited'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'A firm that dominates through superior performance is evidence of competition working, not evidence of competition failing. Success through serving consumers better is exactly what competition should produce.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'What is ironic about antitrust laws according to Hoppe?',
    options: [
      'They are enforced by monopolists',
      'They punish firms for serving consumers too well',
      'They were written by economists',
      'They reduce prices'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Antitrust prosecution is triggered by success—large market shares, low prices ("predatory"), same prices as competitors ("price fixing"), or different prices ("price discrimination"). Any pricing strategy can trigger prosecution if a firm is successful enough.',
  },
  {
    id: 8,
    type: 'multiple-choice',
    question: 'What is Hoppe\'s solution to the monopoly problem?',
    options: [
      'Stronger antitrust enforcement',
      'Breaking up large corporations',
      'Removal of legal barriers to competition',
      'Government price controls'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The solution is not more government intervention but less—removing legal barriers to competition rather than prosecuting successful competitors. The problem is government-created monopoly, so the solution is removing government protection.',
  },
];
