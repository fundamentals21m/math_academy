import type { QuizQuestion } from './types';

export const section22Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Differential rent applies to:',
    options: [
      'All factors of production with varying productivity',
      'Land only, due to its unique properties',
      'Agricultural products exclusively',
      'Government-owned property'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Mises argues that differential rent is not unique to land—it applies to all factors of production. Superior workers, better machines, and prime locations all generate differential returns.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Marginal land is defined as:',
    options: [
      'The most fertile land available',
      'Land owned by the government',
      'The least productive land under cultivation, yielding no rent',
      'Land set aside for conservation',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Marginal land is the least productive land under cultivation, which yields no rent. More productive land earns differential rent above this baseline.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Secure property rights lead to:',
    options: [
      'Short-term exploitation of resources',
      'Sustainable, long-term land management',
      'Higher taxes and government revenue',
      'Reduced investment',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'When people have secure ownership, they rationally invest in long-term improvements. Uncertain property rights lead to exploitation and environmental degradation.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The "myth of the soil" refers to:',
    options: [
      'The scientific study of agriculture',
      'The declining fertility of farmland',
      'Ancient religious beliefs',
      'Romantic agrarianism that views farming as morally superior'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Mises critiques romantic agrarianism—the view that agriculture is morally superior and the soil has mystical properties. This ideology justifies wasteful agricultural subsidies.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Land prices are determined by:',
    options: [
      'Historical purchase costs',
      'Government assessments',
      'Neighboring property values',
      'The capitalized value of expected future net returns',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Land prices reflect the capitalized value of expected future returns, discounted at the prevailing interest rate. Changes in expected conditions immediately affect present values.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Environmental destruction often results from:',
    options: [
      'Uncertain property rights that discourage long-term stewardship',
      'Private property rights',
      'Market competition',
      'Consumer demand',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'When users lack secure title or fear expropriation, they rationally exploit resources without regard for long-term consequences. The "tragedy of the commons" stems from absent or uncertain property rights.',
  },
];
