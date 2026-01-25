import type { QuizQuestion } from './types';

export const section11Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What happens when a payment registration\'s TTL expires?',
    options: [
      'The registration is moved to an archive',
      'A warning is sent to the merchant',
      'The registration continues indefinitely',
      'The registration is automatically deleted and verification returns 404',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'After TTL expires, Branta automatically removes the registration. Verification queries will return 404 Not Found.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'If you provide an invalid TTL, what is the default value in seconds (equal to 7 days)?',
    correctAnswer: 604800,
    numericRange: { min: 600000, max: 610000, precision: 0 },
    difficulty: 'medium',
    explanation: 'Invalid TTL values default to 604,800 seconds (7 days).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the recommended approach for addresses that need to remain verifiable indefinitely?',
    options: [
      'Contact Branta for permanent registration',
      'Use a special "permanent" flag',
      'Use maximum TTL and re-register periodically',
      'Set TTL to 0 for no expiry',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'For persistent addresses, use the maximum 1-year TTL and set up automated re-registration before expiry.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'How does TTL contribute to security?',
    options: [
      'It encrypts the registration data',
      'Old or potentially compromised addresses auto-expire, limiting attack windows',
      'It prevents brute force attacks',
      'TTL has no security benefits',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'TTL is a security feature that ensures stale or compromised registrations don\'t persist indefinitely.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'For an e-commerce checkout with a 1-hour payment window, what TTL would you use?',
    options: [
      '3600 seconds',
      '60 seconds',
      '86400 seconds',
      '1 hour (as a string)',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: '1 hour = 60 minutes × 60 seconds = 3600 seconds. TTL should match your payment window.',
  },
];
