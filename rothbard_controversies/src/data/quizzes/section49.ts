import type { QuizQuestion } from './types';

export const section49Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the main policy criticism of Austrian economics?',
    options: [
      'Critics argue laissez-faire leads to market failures, inequality, and instability',
      'It recommends too much government',
      'It supports socialism',
      'It is too practical',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Critics argue that Austrian free-market prescriptions lead to market failures (externalities, monopolies), inequality, and economic instability that government intervention could prevent.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How do Austrians respond to market failure arguments?',
    options: [
      'Markets do fail regularly',
      'Government should intervene',
      'Market failures don\\'t matter',
      'Government failure is typically worse than market failure; private solutions exist',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Austrians argue that government interventions create their own failures—public choice problems, unintended consequences, knowledge problems. Private solutions through property rights and contracts often work better.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What criticism does Austrian economics face regarding inequality?',
    options: [
      'Austrians focus too much on equality',
      'Critics argue free markets generate unacceptable inequality requiring redistribution',
      'Inequality doesn\\'t exist',
      'Austrians support redistribution',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Critics argue free markets generate inequality that is morally unacceptable. Austrians respond that market inequality reflects voluntary exchange and productivity; forced redistribution violates rights.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'How do Austrians respond to claims that ABCT is not supported by evidence?',
    options: [
      'They abandon the theory',
      'Evidence is irrelevant',
      'ABCT predicts exact dates',
      'Historical business cycles consistently show credit expansion preceding busts',
    ],
    correctIndex: 3,
    difficulty: 'hard',
    explanation: 'Austrians point to historical evidence: major busts—1929, 2008—followed credit expansions. They acknowledge ABCT cannot predict exact timing but argue the causal pattern is clear.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the "heartless" criticism of Austrian policy prescriptions?',
    options: [
      'Austrians don\'t care about economics',
      'Critics argue Austrian opposition to intervention ignores suffering of vulnerable populations',
      'Austrians support welfare states',
      'The criticism is about methodology',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Critics argue that opposing minimum wages, welfare, and bailouts ignores the suffering these policies supposedly alleviate. Austrians respond that such policies often harm the intended beneficiaries.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What type of failure do critics claim justifies government intervention in markets?',
    options: [
      'Government failure',
      'System failure',
      'Market failure',
      'Policy failure'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Market failure arguments claim that externalities, public goods, and asymmetric information justify government intervention. Austrians counter that government failure is typically worse.',
  },
];
