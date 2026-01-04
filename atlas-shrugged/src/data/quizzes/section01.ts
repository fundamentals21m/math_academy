import type { QuizQuestion } from './types';

export const section01Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What revolutionary product has Hank Rearden developed?',
    options: [
      'A new type of steel alloy',
      'Rearden Metal, a stronger and lighter alloy',
      'An improved railroad engine',
      'A new oil refining process'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Hank Rearden has spent ten years developing Rearden Metal, a revolutionary alloy that is stronger, lighter, and more durable than traditional steel.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does the chapter title "The Chain" primarily refer to?',
    options: [
      'The chains binding workers to their jobs',
      'A decorative chain Dagny wears',
      'The chain of business relationships and supply dependencies',
      'The railroad chain of command'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The chapter explores the interconnected chain of business relationships, suppliers, and producers that keeps the economy functioning.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Why are suppliers hesitant to work with Rearden Metal?',
    options: [
      'The price is too high',
      'Fear of the unknown and pressure from competitors',
      'It requires special equipment they do not have',
      'Government regulations prohibit its use'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Suppliers are hesitant due to fear of the untested metal and social/business pressure from those who oppose innovation and competition.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is Dagny Taggart\'s attitude toward using Rearden Metal for her railroad?',
    options: [
      'She is cautious and wants more testing',
      'She refuses to consider it',
      'She embraces it as the solution to her problems',
      'She defers to her brother\'s judgment'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Dagny recognizes Rearden Metal\'s superiority and is eager to use it for rebuilding the Rio Norte Line, despite others\' objections.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What philosophical concept does the chapter introduce through business relationships?',
    options: [
      'The inevitability of government intervention',
      'The mutual dependence of productive individuals',
      'The superiority of collective decision-making',
      'The impossibility of honest business dealings'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'The chapter shows how productive individuals form a chain of mutual value exchange, where each person\'s success depends on others\' competence and integrity.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'How does Rearden view his relationship with his suppliers?',
    options: [
      'As adversarial negotiations to be won',
      'As necessary evils he must tolerate',
      'As partnerships based on mutual self-interest and competence',
      'As charity he extends to less capable people'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Rearden values business relationships built on mutual competence and fair exchange, seeing them as proper partnerships rather than exploitation.',
  },
];
