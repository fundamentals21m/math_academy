import type { QuizQuestion } from './types';

export const section02Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is an address swap attack?',
    options: [
      'Converting Bitcoin addresses between different formats',
      'Replacing a legitimate Bitcoin address with an attacker-controlled one',
      'Exchanging addresses between two wallets',
      'Updating an address when it runs out of funds',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'An address swap attack occurs when an attacker substitutes a legitimate Bitcoin address with one they control, redirecting funds.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is clipboard hijacking?',
    options: [
      'A technique to steal passwords from the clipboard',
      'Intercepting clipboard data over the network',
      'Malware that replaces copied Bitcoin addresses automatically',
      'A bug in Bitcoin wallet software',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Clipboard hijacking is when malware monitors the system clipboard and automatically replaces any copied Bitcoin address with an attacker\'s address.',
  },
  {
    id: 3,
    type: 'numeric',
    question: 'In one of the largest documented address swap attacks, how many millions of dollars were lost in a single transaction?',
    correctAnswer: 68,
    numericRange: { min: 0, max: 100, precision: 0 },
    difficulty: 'medium',
    explanation: 'A victim lost over $68 million in a single address swap attack where the attacker had created a matching vanity address.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'How does Branta prevent address swap attacks?',
    options: [
      'By encrypting all Bitcoin addresses',
      'By blocking suspicious transactions',
      'By requiring two-factor authentication',
      'By providing independent verification of registered addresses',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Branta provides an independent verification system where merchants register addresses. Attackers cannot register their addresses as belonging to legitimate businesses.',
  },
  {
    id: 5,
    type: 'text',
    question: 'What type of address can attackers generate to match the first several characters of a target address? (One word)',
    correctAnswer: 'vanity',
    difficulty: 'medium',
    explanation: 'Vanity addresses are Bitcoin addresses generated to have specific character patterns, which attackers can use to create addresses that look similar to legitimate ones.',
  },
];
