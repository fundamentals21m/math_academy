import type { QuizQuestion } from './types';

export const section32Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the law of comparative advantage?',
    options: [
      'Trade only benefits the stronger party',
      'Only exports benefit a country',
      'Both parties benefit from trade when each specializes in what they produce at lower relative cost',
      'Trade is zero-sum',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Comparative advantage shows that trade benefits both parties when each specializes in what they produce at lower relative (opportunity) cost. Even if one party is more efficient at everything, specialization and trade improve both.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the mercantilist fallacy about trade?',
    options: [
      'Trade is beneficial only when a country exports more than it imports',
      'Trade always benefits everyone',
      'Trade should be free',
      'Trade reduces national wealth'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Mercantilism held that exports are good and imports are bad—that trade balances determine prosperity. This ignores that imports are the gain from trade; exports are what we give up to get them.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why does it not matter who has a trade "surplus" or "deficit"?',
    options: [
      'Trade balances determine everything',
      'Deficits are always bad',
      'Surpluses guarantee prosperity',
      'Trade is always balanced—you give something to get something',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Trade is always balanced. When we import more goods than we export, we are exporting money, bonds, or claims on assets. A "trade deficit" often means foreigners are investing in the domestic economy.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'From the Austrian perspective, why should trade policy focus on individuals, not nations?',
    options: [
      'Nations are more important',
      'Only individuals trade—"nations" do not have interests apart from individuals',
      'Individual trade is too small to matter',
      'Nations make better decisions',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Only individuals trade. "Nations" are collections of individuals with different interests. Restricting trade benefits some individuals (protected producers) at the expense of others (consumers).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is David Ricardo famous for explaining?',
    options: [
      'The labor theory of value',
      'Business cycle theory',
      'Comparative advantage—how trade benefits all participants',
      'The quantity theory of money',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'David Ricardo formalized comparative advantage, showing that specialization and trade benefit all parties even when one is more productive at everything. This remains the foundation of trade theory.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What economic law shows that both parties benefit from trade through specialization?',
    options: [
      'Supply and demand',
      'Diminishing returns',
      'Economies of scale',
      'Comparative advantage',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Comparative advantage demonstrates that trade benefits everyone when each party specializes in producing goods at their lowest relative cost.',
  },
];
