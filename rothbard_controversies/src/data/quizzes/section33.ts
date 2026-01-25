import type { QuizQuestion } from './types';

export const section33Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is protectionism?',
    options: [
      'Environmental protection',
      'Government policies that restrict imports to protect domestic producers',
      'Consumer protection laws',
      'National security measures',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Protectionism refers to government policies—tariffs, quotas, regulations—that restrict imports to protect domestic producers from foreign competition.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Who benefits from protective tariffs?',
    options: [
      'All citizens equally',
      'The government only',
      'Foreign producers',
      'Protected industries at the expense of consumers and other industries',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Tariffs benefit protected industries at the expense of consumers (who pay higher prices) and other industries (which may face retaliation and higher input costs). The benefits are concentrated; the costs are diffused.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the "infant industry" argument for protection?',
    options: [
      'New industries need temporary protection until they can compete',
      'Industries need childcare services',
      'Industries should never receive protection',
      'Only old industries should be protected',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The infant industry argument claims new industries need temporary protection to develop. Critics note that industries rarely outgrow protection and that private capital markets can fund promising ventures without tariffs.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is the "jobs" argument for tariffs and what is wrong with it?',
    options: [
      'Tariffs save jobs in protected industries but destroy jobs elsewhere through higher costs and retaliation',
      'Tariffs always create jobs',
      'Tariffs only affect foreign jobs',
      'Jobs are not affected by trade policy'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Tariffs may save jobs in protected industries but destroy jobs in industries that export, use imported inputs, or serve consumers with less spending power. The jobs saved are visible; the jobs lost are invisible.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why are tariffs politically popular despite their economic costs?',
    options: [
      'They benefit everyone',
      'Economists support them',
      'The benefits are concentrated in vocal industries while the costs are diffuse across consumers',
      'They are easy to understand',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Tariffs concentrate benefits on well-organized producer groups who lobby intensely, while diffusing costs across millions of consumers who each pay a little more but lack incentive to organize against protection.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What is a government tax on imported goods called?',
    options: [
      'Quota',
      'Subsidy',
      'Excise',
      'Tariff',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A tariff is a tax on imports. It raises the price of foreign goods, protecting domestic producers while harming consumers and reducing overall economic efficiency.',
  },
];
