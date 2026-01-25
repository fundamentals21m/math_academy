import type { QuizQuestion } from './types';

export const section12Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is Max Weber\'s doctrine of Wertfreiheit?',
    options: [
      'Social science should describe and explain without making value judgments',
      'Economists should advocate for their values',
      'Science should replace values',
      'Values are more important than facts',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Wertfreiheit (value-freedom) holds that social science should describe and explain without evaluating or prescribing. The scientist analyzes cause and effect; the citizen advocates policies.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What implicit value does the concept of "efficiency" presuppose?',
    options: [
      'No values at all',
      'That government knows best',
      'That we should care about making people better off by their own standards',
      'That prices should be controlled',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'When economists say a market is efficient (no one can be made better off without making others worse off), they presuppose that we should care about making people better off by their own standards—a value judgment.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'According to Austrian analysis, why does voluntary exchange have normative relevance?',
    options: [
      'Government requires it',
      'If exchange is mutually beneficial, restrictions on it harm those who would have traded',
      'It maximizes GDP',
      'It follows the law',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If voluntary exchange benefits both parties, then restrictions on exchange harm those who would have traded. The economist\'s analysis implies that if we value welfare, we should generally allow free trade.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the relationship between economics and ethics according to this section?',
    options: [
      'They are complementary; economics informs ethical judgments by revealing consequences',
      'They are completely separate',
      'Economics replaces ethics',
      'Ethics replaces economics',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Economics and ethics are complementary. Economic analysis informs ethical judgments by revealing consequences, but ethical judgments also inform economic analysis by determining which consequences we care about.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'How can an economist evaluate policies while respecting value-freedom?',
    options: [
      'By ignoring consequences',
      'By deferring to politicians',
      'By assuming all values are equal',
      'By evaluating policies as means to given ends without pronouncing on the ends themselves'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'The economist can evaluate policies as means to given ends without pronouncing on the ends. If price controls are advocated to help the poor, he can show they create shortages—outcomes the advocates presumably don\'t desire.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What principle suggests that removing artificial restrictions on trade is desirable because all parties to voluntary exchange gain by their own standards?',
    options: [
      'Majority rule',
      'Pareto optimality',
      'Unanimity',
      'Utilitarianism',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'The unanimity criterion suggests that removing restrictions on voluntary exchange is desirable because all parties gain by their own standards—the economist can recommend this without imposing values.',
  },
];
