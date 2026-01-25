import type { QuizQuestion } from './types';

export const section03Questions: QuizQuestion[] = [
  {
    id: 's03-q1',
    type: 'multiple-choice',
    question: 'What is the main obstacle to bitcoin self-custody according to the book?',
    options: [
      'Technical knowledge of cryptography',
      'Cost of hardware wallets',
      'Internet connectivity',
      'Protecting a 12- or 24-word seed phrase'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Hardware wallets have become extremely intuitive, making the only real obstacle to bitcoin self-custody one\'s ability to protect a 12- or 24-word seed phrase.'
  },
  {
    id: 's03-q2',
    type: 'multiple-choice',
    question: 'What technology issue does the book identify with Coinbase\'s custody?',
    options: [
      'It uses pre-Segwit addresses',
      'It lacks multi-signature capabilities',
      'It doesn\'t support hardware wallets',
      'It requires KYC verification'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Coinbase\'s custody technology predates best practices developed since the Blocksize War, particularly Segregated Witness (Segwit), using pre-Segwit addresses.'
  },
  {
    id: 's03-q3',
    type: 'multiple-choice',
    question: 'Which ETF provider manages custody in-house rather than using Coinbase?',
    options: [
      'BlackRock (IBIT)',
      'Fidelity (FBTC)',
      'Grayscale (GBTC)',
      'Bitwise (BITB)'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Fidelity manages all custody in-house for their FBTC ETF, unlike BlackRock, Grayscale, and Bitwise who use Coinbase.'
  },
  {
    id: 's03-q4',
    type: 'multiple-choice',
    question: 'What happens if a mistake makes bitcoin unspendable?',
    options: [
      'The exchange can recover it',
      'Insurance will cover the loss',
      'There is no bailout possible',
      'The government can intervene'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Holding bitcoin in self-custody differs from fiat because there is no bailout possible - mistakes that make bitcoin unspendable are permanent and irreversible.'
  },
  {
    id: 's03-q5',
    type: 'multiple-choice',
    question: 'According to the book, what does the ETF provide at a cost?',
    options: [
      'Tax advantages and lower fees',
      'Superior custody and direct ownership',
      'Privacy and anonymity',
      'Price exposure but enormous counterparty risk'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'The ETF provides easy exposure to bitcoin\'s price volatility but at an enormous level of counterparty risk - it\'s not true bitcoin ownership.'
  }
];
