import type { QuizQuestion } from './types';

export const section20Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How does mainstream economics typically treat pollution?',
    options: [
      'As a crime',
      'As irrelevant to economics',
      'As a negative externality requiring government intervention',
      'As a property rights violation',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Mainstream economics treats pollution as a negative externality—a cost imposed on others not reflected in market prices. Because the polluter doesn\'t bear the full cost, he pollutes more than is "socially optimal."',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How does the property rights approach view pollution?',
    options: [
      'As an externality to be managed',
      'As natural and acceptable',
      'As a trespass or rights violation to be prevented or compensated',
      'As government responsibility',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'The property rights approach views pollution as a trespass to be prevented or compensated. When a factory damages my property or health, it is violating my rights. The remedy is legal action, not regulation.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What did Ronald Coase show about externalities?',
    options: [
      'Government must always intervene',
      'If property rights are well defined and transaction costs low, parties can bargain to efficient outcomes',
      'Externalities don\'t exist',
      'Only courts can solve externalities',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Coase showed that if property rights are well defined and transaction costs are low, parties can bargain to an efficient outcome regardless of initial rights assignment. This suggests clear property rights may be more important than regulation.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What happened to common law protections against pollution in the 19th-20th centuries?',
    options: [
      'Courts increasingly denied remedies to pollution victims in the name of "progress"',
      'They were strengthened',
      'They remained unchanged',
      'They were expanded internationally',
    ],
    correctIndex: 0,
    difficulty: 'hard',
    explanation: 'Courts increasingly denied remedies to pollution victims in the name of "progress" and "economic development." This judicial dereliction created a vacuum that environmental regulation was supposed to fill.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the better solution than environmental regulation according to this section?',
    options: [
      'More government agencies',
      'Voluntary corporate programs',
      'International treaties',
      'Restoring and strengthening common law protections for property rights'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The better solution would be to restore and strengthen common law protections for property rights. Government regulation substituted political for legal determination of acceptable pollution levels.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What legal mechanism allows many affected people to aggregate claims against polluters?',
    options: [
      'Class action lawsuits',
      'Individual lawsuits',
      'Arbitration',
      'Mediation'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Class action lawsuits offer a way to aggregate claims and reduce transaction costs when pollution affects many people. Lawyers have incentives to organize affected parties and pursue large judgments.',
  },
];
