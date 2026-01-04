import type { QuizQuestion } from './types';

export const section03Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How are prices determined in a free market?',
    options: [
      'By government decree',
      'By the interaction of supply and demand',
      'By the cost of production alone',
      'By agreement among producers'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Market prices emerge from the interaction of buyers\' demand schedules and sellers\' supply schedules.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is consumer sovereignty?',
    options: [
      'Consumers control the government',
      'Consumer preferences ultimately direct production decisions',
      'Consumers can buy whatever they want',
      'Consumers vote on what should be produced'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Consumer sovereignty means producers must satisfy consumer wants to earn profits. Consumer spending directs what gets produced.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What role do prices serve in the economy?',
    options: [
      'They make goods more expensive',
      'They coordinate economic activity by conveying information about scarcity',
      'They benefit sellers at the expense of buyers',
      'They are arbitrary numbers'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Prices communicate information about relative scarcity and value, allowing millions of people to coordinate their plans.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'According to Rothbard, what causes a good\'s market price to rise?',
    options: [
      'Producer greed',
      'Increased demand or decreased supply',
      'Government intervention only',
      'Inflation only'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Prices rise when demand increases (more buyers at each price) or supply decreases (fewer units available).',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the law of demand?',
    options: [
      'Higher prices lead to higher demand',
      'Lower prices lead to lower demand',
      'As price rises, quantity demanded falls, ceteris paribus',
      'Demand is unrelated to price'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The law of demand states that, all else equal, as the price of a good rises, the quantity demanded decreases.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Why can\'t central planners replicate market price formation?',
    options: [
      'They lack computers',
      'They lack the dispersed knowledge that only market prices can aggregate',
      'They are not smart enough',
      'Markets are illegal under central planning'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Market prices aggregate knowledge dispersed among millions of individuals. No central authority can possess this information.',
  },
];
