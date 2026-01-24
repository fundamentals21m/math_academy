import type { QuizQuestion } from './types';

export const section10Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What HTTP method is used to verify a payment with Branta?',
    options: [
      'POST',
      'PUT',
      'PATCH',
      'GET',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'GET /v1/payments/{payment_string} is used to verify and retrieve information about a registered payment.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does a 404 response from the verification endpoint mean?',
    options: [
      'The address is not registered (never registered or expired)',
      'The API key is invalid',
      'The server is down',
      'The address format is invalid',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '404 Not Found indicates the payment is not registered - either it was never registered or the TTL has expired.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'If verification returns a different platform than expected, what should you do?',
    options: [
      'Proceed anyway, platform names vary',
      'Do NOT proceed - this may indicate an address swap attack',
      'Contact Branta support',
      'Retry the verification',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'A platform mismatch is a strong indicator of address swap attack. The attacker registered their address under a different name.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What field in the verification response shows who registered the address?',
    correctAnswer: 'platform',
    difficulty: 'easy',
    explanation: 'The "platform" field in the response shows the name of the merchant or business that registered the address.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why should Lightning invoices be URL-encoded when used in the GET request path?',
    options: [
      'To compress the data',
      'For additional security',
      'They may contain special characters that break the URL',
      'Lightning invoices don\'t need encoding',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Lightning invoices often contain special characters that need to be URL-encoded to be safely included in the request path.',
  },
];
