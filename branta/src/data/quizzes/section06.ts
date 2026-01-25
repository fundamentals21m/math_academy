import type { QuizQuestion } from './types';

export const section06Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the core function of Guardrail?',
    options: [
      'Processing Bitcoin payments',
      'Enabling merchants to register addresses and customers to verify them',
      'Storing Bitcoin private keys',
      'Mining Bitcoin transactions',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Guardrail is a verification system where merchants register their addresses and customers can verify those addresses before sending funds.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does "zero custody" mean in the context of Guardrail?',
    options: [
      'Branta never has access to private keys or funds',
      'Payments are processed instantly',
      'No fees are charged',
      'Registrations never expire',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Zero custody means Branta only stores registration data, never private keys or funds. There\'s no custody risk.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Which payment types does Guardrail support?',
    options: [
      'Only Bitcoin addresses',
      'Only Lightning invoices',
      'On-chain Bitcoin addresses and Lightning invoices',
      'Credit card payments',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Guardrail supports both on-chain Bitcoin addresses (all formats) and Lightning Network BOLT11 invoices.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What is the authentication method used for Guardrail API requests? (Two words)',
    correctAnswer: 'bearer token',
    difficulty: 'medium',
    explanation: 'Guardrail uses Bearer token authentication, where API keys are passed in the Authorization header.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the benefit of Guardrail\'s web verification pages?',
    options: [
      'They provide faster verification',
      'They work without internet',
      'They store transaction history',
      'Anyone can verify addresses from any browser without apps or login',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Web verification pages at guardrail.branta.pro provide universal access - anyone can verify addresses from any device with a browser.',
  },
];
