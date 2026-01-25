import type { QuizQuestion } from './types';

export const section30Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is tax avoidance?',
    options: [
      'Illegal evasion of tax obligations',
      'Moving to another country',
      'Refusing to file tax returns',
      'Legal strategies to minimize tax liability'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Tax avoidance is legal—using permitted strategies to minimize tax liability. Unlike tax evasion, which is illegal, avoidance operates within the law by using deductions, credits, and timing strategies.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is a "tax shelter"?',
    options: [
      'A government building',
      'An investment or arrangement designed primarily to reduce tax liability',
      'A charitable organization',
      'A retirement account',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A tax shelter is an investment or arrangement designed primarily to reduce tax liability. While legal, they may be economically inefficient—resources are devoted to tax reduction rather than productive use.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the economic waste created by tax avoidance?',
    options: [
      'Resources devoted to legal compliance and tax planning instead of production',
      'Lost government revenue',
      'Higher prices for consumers',
      'Unemployment',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Tax avoidance consumes real resources—accountants, lawyers, consultants all working on tax planning rather than productive activities. These compliance costs are a deadweight loss to the economy.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'How do complex tax codes affect small businesses versus large corporations?',
    options: [
      'They affect both equally',
      'Small businesses benefit more',
      'Large corporations can better afford tax planning, giving them competitive advantage',
      'Neither is affected'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Complex tax codes favor large corporations with resources for sophisticated tax planning. Small businesses cannot afford the same expertise, putting them at a competitive disadvantage.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What would reduce the deadweight costs of tax avoidance?',
    options: [
      'Higher tax rates',
      'Simpler tax codes with fewer loopholes and lower rates',
      'More IRS enforcement',
      'More tax regulations',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Simpler tax codes with fewer loopholes and lower rates would reduce incentives for avoidance. When rates are low and rules are simple, there is less benefit from expensive tax planning.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What legal practice involves using strategies to minimize tax liability?',
    options: [
      'Tax evasion',
      'Tax fraud',
      'Tax avoidance',
      'Tax exemption',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Tax avoidance is the legal practice of minimizing taxes through permitted strategies. It differs from evasion, which is illegal, but still creates economic inefficiencies.',
  },
];
