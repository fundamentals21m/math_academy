import type { QuizQuestion } from './types';

export const section24Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The "Montaigne dogma" claims that:',
    options: [
      'One person\'s gain is necessarily another\'s loss',
      'Trade benefits all parties',
      'Markets create harmony',
      'Profit rewards foresight'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Montaigne dogma is the false belief that economic exchange is zero-sum—that one party\'s gain must come from another\'s loss. Mises refutes this by showing that voluntary exchange benefits all parties.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Profit in a market economy is a reward for:',
    options: [
      'Exploitation of workers',
      'Monopoly power',
      'Correctly anticipating consumer needs and organizing production efficiently',
      'Political connections',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Profit rewards superior foresight—correctly anticipating what consumers will want. Losses punish misjudgment. This profit-and-loss system directs resources to their most valued uses.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Voluntary exchange is characterized by:',
    options: [
      'One party gaining at the other\\'s expense',
      'Government supervision',
      'Equal outcomes for both parties',
      'Mutual benefit—both parties expect to gain',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '"The deal is always advantageous both for the buyer and the seller." Trade is not zero-sum—both parties gain, or the exchange would not occur voluntarily.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The division of labor transforms human relations by:',
    options: [
      'Creating class conflict',
      'Turning potential conflict into cooperation and mutual benefit',
      'Increasing inequality',
      'Eliminating individual differences',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The division of labor transforms potential conflict into harmony. Everyone benefits from the productivity multiplier of specialization.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Modern international conflicts arise primarily from:',
    options: [
      'Market competition',
      'Capitalism itself',
      'Government interference with trade like tariffs and quotas',
      'Population growth',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Mises argues that conflicts arise not from capitalism but from interventionism—tariffs, quotas, and currency controls that block peaceful exchange and create rivalry between nations.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Private property in a market economy functions as:',
    options: [
      'A social function—owners must serve consumers to profit',
      'Absolute control by owners',
      'Government privilege',
      'A source of conflict',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Ownership under capitalism is conditional on productive use. Property becomes a mandate to deploy resources productively—owners who fail to serve consumers lose their property to those who will.',
  },
];
