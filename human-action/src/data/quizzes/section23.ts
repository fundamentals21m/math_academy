import type { QuizQuestion } from './types';

export const section23Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Mises argues that raw economic data without theory is:',
    options: [
      'Meaningless—theory is required to interpret facts',
      'The only reliable source of knowledge',
      'Sufficient for policy decisions',
      'More objective than theoretical analysis',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: '"There is no such thing as a mere recording of unadulterated facts apart from any reference to theories." Data requires theoretical frameworks to be meaningful.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In the market economy, who truly holds power?',
    options: [
      'Consumers through their spending decisions',
      'Large corporations',
      'Government regulators',
      'Wealthy entrepreneurs',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Consumer preferences constitute the only lasting power in markets. Entrepreneurs who don\'t serve consumers lose their capital to those who do.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'External costs arise from:',
    options: [
      'Market competition',
      'Incomplete property rights',
      'Consumer sovereignty',
      'Entrepreneurial greed',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'External costs result from incomplete property rights. When owners don\'t bear all costs of their decisions, they disregard disadvantages borne by others.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Short-run and long-run effects of market changes:',
    options: [
      'Are always identical',
      'Only matter for government policy',
      'Often diverge dramatically',
      'Can be ignored in economic analysis',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Markets require adjustment time. Short-run and long-run effects often diverge dramatically, leading to policy errors when only immediate effects are considered.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'The solution to external costs is:',
    options: [
      'Abolishing markets entirely',
      'Government ownership of all property',
      'Price controls',
      'Better defined and enforced property rights',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'External costs arise from incomplete property rights, not from markets. The solution is to better define property rights so decision-makers face full consequences.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Critics claiming economics ignores power misunderstand that:',
    options: [
      'Economics is purely mathematical',
      'Government should control all power',
      'Power is irrelevant to economics',
      'Market power is consumer power—entrepreneurs serve or lose capital'
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Economics accounts for power but reveals that in markets, entrepreneurs have no power independent of consumer satisfaction. Their capital is a mandate to serve consumers, revocable at any time.',
  },
];
