import type { QuizQuestion } from './types';

export const section03Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What social problem does Bitcoin\'s distributed ledger solve?',
    options: [
      'The double-spending problem without a trusted third party',
      'Making payments faster',
      'Reducing transaction fees',
      'Enabling anonymous transactions',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Bitcoin solves the double-spending problem—ensuring digital money can\'t be spent twice—without requiring a trusted central authority to verify transactions.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What makes Bitcoin\'s ledger "immutable"?',
    options: [
      'Legal protections',
      'Government backing',
      'The small block size',
      'The accumulated proof-of-work makes rewriting history prohibitively expensive',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Immutability comes from the accumulated proof-of-work. To change past transactions, an attacker would need to redo all the work since then while outpacing the rest of the network—an economically prohibitive task.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What does "uncheatable" mean in the context of Bitcoin?',
    options: [
      'No one can steal bitcoin',
      'Mining difficulty never changes',
      'The rules cannot be changed by any single party or coalition',
      'Transaction fees are fixed',
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: '"Uncheatable" means the consensus rules (like the 21 million supply cap) cannot be unilaterally changed. The distributed nature makes it extremely difficult for any party to impose rule changes others don\'t accept.',
  },
];
