import type { QuizQuestion } from './types';

export const section41Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does BIP-125 define?',
    options: [
      'Block replacement',
      'Opt-in Replace-by-Fee (RBF)',
      'Transaction batching',
      'Fee estimation',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'BIP-125 defines opt-in Replace-by-Fee for transaction replacement.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'How does a transaction signal RBF replaceability?',
    options: [
      'Flag in witness data',
      'Version number 2',
      'nSequence less than 0xfffffffe',
      'Special output script',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'An input with nSequence < 0xfffffffe signals the transaction is replaceable.',
  },
  {
    id: 3,
    type: 'text',
    question: 'RBF allows replacing a transaction with one paying a higher _____.',
    correctAnswer: 'fee',
    difficulty: 'easy',
    explanation: 'RBF enables replacing unconfirmed transactions with higher-fee versions.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The replacement transaction must:',
    options: [
      'Have fewer inputs',
      'Be smaller in size',
      'Have more signatures',
      'Pay more total fees than the original',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'BIP-125 requires replacements to pay more in absolute fees.',
  },
];
