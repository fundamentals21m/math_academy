import type { QuizQuestion } from './types';

export const section05Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Hoppe argue anyone who engages in argumentation implicitly accepts?',
    options: [
      'The authority of the state',
      'Democratic decision-making',
      'Self-ownership',
      'Majority rule'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Anyone who engages in argumentation implicitly accepts self-ownership—the exclusive right to control their own body—because the very act of arguing presupposes control over one\'s own body.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is a "performative contradiction"?',
    options: [
      'A logical fallacy in economic reasoning',
      'When one\'s argument contradicts what one must presuppose to make the argument',
      'A type of mathematical proof',
      'A debate technique'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'A performative contradiction occurs when the very act of making an argument presupposes the truth of what one is arguing against. Arguing against self-ownership while using one\'s own body to argue is such a contradiction.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the "prior-later distinction" in property rights?',
    options: [
      'Property should go to whoever needs it most',
      'First users and producers have a better claim than late-comers',
      'Later generations have priority over earlier ones',
      'Property rights expire after a certain time'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The prior-later distinction holds that first users and producers have a better claim to resources than late-comers who did not use or produce them. This is logically necessary for any workable property system.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why is late-comer ethics impossible to implement?',
    options: [
      'It would be too expensive',
      'No one would be allowed to do anything without consent from all possible future people',
      'It requires too much bureaucracy',
      'People would refuse to follow it'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'If late-comers had equal rights to resources, you would need consent from everyone who might ever exist, including the unborn. Since you cannot wait forever, simply surviving requires rejecting late-comer ethics.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why does Hoppe say contracts can only exist under the natural theory of property?',
    options: [
      'Contracts require government enforcement',
      'Contracts require recognition of prior ownership claims',
      'Contracts are a modern invention',
      'Contracts require a common language'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'Contracts are agreements based on mutual recognition of each party\'s prior ownership claims to things acquired before the agreement. Under late-comer ethics, no one could have prior claims, so no contracts could exist.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'What is the nonaggression principle?',
    options: [
      'Nations should not declare war',
      'It is wrong to initiate physical force against another\'s body or property',
      'Verbal aggression is as bad as physical aggression',
      'Self-defense is always wrong'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The nonaggression principle states that it is wrong to initiate physical force against another person\'s body or justly acquired property. This is presupposed by anyone who engages in argumentation.',
  },
  {
    id: 7,
    type: 'multiple-choice',
    question: 'Why is socialism morally indefensible according to Hoppe?',
    options: [
      'It produces less wealth',
      'People don\'t like it',
      'It violates property rights that anyone must accept to argue for anything',
      'It is not democratic'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Socialism involves aggression against natural property owners, violating the very principles (self-ownership, nonaggression) that anyone must accept in order to argue for anything at all.',
  },
  {
    id: 8,
    type: 'text',
    question: 'What is the name of the act by which a person establishes property rights over previously unowned resources?',
    correctAnswer: 'original appropriation',
    difficulty: 'medium',
    explanation: 'Original appropriation is the act by which a person uses previously unowned resources, mixing their labor with nature, thereby establishing an objective link and property claim that no late-comer can match.',
  },
];
