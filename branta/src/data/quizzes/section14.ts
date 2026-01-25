import type { QuizQuestion } from './types';

export const section14Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What colors should be used consistently for verification status?',
    options: [
      'Blue for all states',
      'Green for verified, yellow for unknown, red for warning',
      'Only text labels, no colors',
      'Colors should change randomly',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Consistent color coding helps users quickly understand verification status: green (safe), yellow (caution), red (danger).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why is cross-device verification more secure?',
    options: [
      'It doesn\'t add security, just convenience',
      'Different devices have different encryption',
      'Mobile phones are more secure',
      'An attacker would need to compromise multiple devices and networks'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Verifying from a separate device (e.g., phone on cellular) means an attacker needs to compromise both network paths.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Should verification errors block users from transacting?',
    options: [
      'Yes - always block unverified transactions',
      'Only for amounts over $1000',
      'No - show a warning but allow proceeding with caution',
      'Errors should be hidden from users',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Branta is an additional safety layer. When unavailable, warn users but don\'t prevent all transactions.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What accessibility consideration is important for verification UI?',
    options: [
      'Don\\'t rely solely on color - use icons and text labels too',
      'Use only bright colors',
      'Make all text very small',
      'Disable keyboard navigation',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'For accessibility, verification status should be conveyed through multiple means: color, icons, and text labels.',
  },
  {
    id: 5,
    type: 'text',
    question: 'What is the URL for Branta\'s web-based address verification? (Start with https://guardrail...)',
    correctAnswer: 'https://guardrail.branta.pro/v1/verify/address',
    difficulty: 'hard',
    explanation: 'Branta provides web verification pages at guardrail.branta.pro/v1/verify/address for universal browser access.',
  },
];
