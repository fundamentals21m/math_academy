import type { QuizQuestion } from './types';

export const section11Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What "category error" do crypto investors make according to the authors?',
    options: [
      'Treating crypto tokens like software equity when they lack the underlying value accrual',
      'Confusing Bitcoin with other cryptocurrencies',
      'Investing too early in projects',
      'Focusing too much on technology',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Investors apply software VC logic (bet on potential winners, tokens will accrue value like equity) but tokens don\'t have equity-like claims on future cash flows or productive assets.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why doesn\'t the "bet on platforms" logic work for crypto according to the authors?',
    options: [
      'There are too many platforms',
      'Platforms are too expensive',
      'Platforms don\\\\\'t generate token holder value—fees go to validators, not token holders',
      'Platforms are too complex to evaluate',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Unlike software companies where shareholders benefit from growth, crypto platform fees typically go to validators or are burned—token holders don\'t have claims on operating profits.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What happens to crypto token values when speculation stops?',
    options: [
      'They stabilize at fair value',
      'They convert to equity',
      'They increase due to scarcity',
      'They crash because there\\\\'s no underlying cash flow or productive asset to support price',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Unlike equity backed by productive businesses, crypto tokens have no underlying cash flows. When speculative interest wanes, there\'s nothing to support the price.',
  },
];
