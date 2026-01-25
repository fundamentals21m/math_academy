import type { QuizQuestion } from './types';

export const section00Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the main purpose of Branta?',
    options: [
      'Bitcoin wallet storage',
      'Cryptocurrency exchange',
      'Mining pool management',
      'Pre-payment verification for Bitcoin transactions',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Branta provides pre-payment verification, allowing users to confirm payment addresses belong to the intended recipient before sending funds.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which of the following attack types does Branta NOT address?',
    options: [
      '51% attacks on the Bitcoin network',
      'Phishing attacks',
      'Address swap attacks',
      'Man-in-the-middle exploits',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Branta addresses phishing, address swaps, MITM attacks, and supply chain compromises. 51% attacks are a consensus-level issue that Branta does not address.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is Guardrail?',
    options: [
      'A type of Bitcoin wallet',
      'A hardware security device',
      'Branta\'s flagship verification product',
      'A Lightning Network node',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Guardrail is Branta\'s flagship product that enables pre-payment verification for Bitcoin and Lightning transactions.',
  },
  {
    id: 4,
    type: 'text',
    question: 'According to Branta, approximately how much is lost to transaction-related attacks yearly since 2024? (Enter the amount in billions, e.g., "1" for $1 billion)',
    correctAnswer: '1',
    difficulty: 'medium',
    explanation: 'Branta reports over $1 billion in yearly losses since 2024 from transaction-related attacks.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which Bitcoin protocols does Branta support?',
    options: [
      'Only Bitcoin on-chain',
      'Bitcoin on-chain, Lightning Network, and Ark',
      'Only Lightning Network',
      'Bitcoin and Ethereum',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Branta supports verification across Bitcoin on-chain transactions, Lightning Network, and the Ark protocol.',
  },
];
