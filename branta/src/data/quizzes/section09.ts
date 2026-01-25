import type { QuizQuestion } from './types';

export const section09Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What HTTP method is used to register a payment with Branta?',
    options: [
      'GET',
      'PUT',
      'POST',
      'DELETE',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'POST /v1/payments is used to register a new payment with Branta.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'What is the maximum TTL in seconds (equivalent to 1 year)?',
    correctAnswer: 31536000,
    numericRange: { min: 30000000, max: 32000000, precision: 0 },
    difficulty: 'medium',
    explanation: 'The maximum TTL is 31,536,000 seconds, which equals 1 year.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'What is the minimum TTL in seconds?',
    correctAnswer: 30,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'easy',
    explanation: 'The minimum TTL is 30 seconds. Shorter values are not allowed.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What status code indicates a successful payment registration?',
    options: [
      '201 Created',
      '200 OK',
      '204 No Content',
      '202 Accepted',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'A successful registration returns 201 Created with the payment details in the response body.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the purpose of the alt_payments field?',
    options: [
      'To provide fallback API endpoints',
      'To register alternative payment methods (like both on-chain and Lightning)',
      'To specify backup TTL values',
      'To list previous payment addresses',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The alt_payments field allows registering multiple payment options that customers will also see as verified alternatives.',
  },
];
