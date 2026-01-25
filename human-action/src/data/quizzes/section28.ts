import type { QuizQuestion } from './types';

export const section28Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'A truly "neutral" tax that does not affect market behavior:',
    options: [
      'Is impossible—every tax changes behavior',
      'Can be achieved through proportional taxation',
      'Exists in most modern economies',
      'Is the goal of good tax policy'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'In a changing economy with unequal incomes, no tax can be truly neutral. Every tax affects different people differently, changing their behavior and distorting market outcomes.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Fiscal (revenue) and nonfiscal (behavior change) tax objectives:',
    options: [
      'Can both be fully achieved simultaneously',
      'Conflict—maximum revenue and maximum behavior change are mutually exclusive',
      'Are always compatible',
      'Only matter for sin taxes'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'If a tax fully achieves its nonfiscal goal (stopping consumption), revenue falls to zero. Maximum revenue requires continued consumption. The two goals are irreconcilable.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Differential taxation (taxing some activities more than others) achieves:',
    options: [
      'The same results as direct commands—a 100% tariff equals an import ban',
      'Only revenue effects',
      'Perfect neutrality',
      'Optimal resource allocation',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Differential taxation produces the same effects as direct intervention. High taxes on an industry are equivalent to restricting it. The method differs but the result is identical.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Chief Justice Marshall observed that "the power to tax involves:',
    options: [
      'The power to create wealth',
      'The power to govern wisely',
      'The power to redistribute',
      'The power to destroy"'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: '"The power to tax involves the power to destroy." Above certain rates, taxes cease to be revenue measures and become weapons against the market economy.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'When tax rates become very high, they:',
    options: [
      'Generate maximum revenue',
      'Have no behavioral effects',
      'Become self-defeating—reducing the tax base and total revenue',
      'Increase economic efficiency',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Above certain rates, taxes become self-defeating. They reduce productive activity, discourage investment, and can actually reduce total revenue as the tax base shrinks.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Total confiscation through taxation (100% rates) is equivalent to:',
    options: [
      'Progressive taxation',
      'Socialism—the elimination of private property',
      'Efficient revenue collection',
      'Modern tax policy'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Complete expropriation of income and wealth through taxation ends the market economy entirely. This is not intervention but socialism—the elimination of private property.',
  },
];
