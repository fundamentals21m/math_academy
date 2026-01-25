import type { QuizQuestion } from './types';

export const section14Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What colors should be used consistently for verification status?',
    options: [
      'Green for verified, yellow for unknown, red for warning',
      'Blue for all states',
      'Only text labels, no colors',
      'Colors should change randomly',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Consistent color coding helps users quickly understand verification status: green (safe), yellow (caution), red (danger).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Why is cross-device verification more secure?',
    options: [
      'It doesn\\\\'t add security, just convenience',
      'Different devices have different encryption',
      'An attacker would need to compromise multiple devices and networks',
      'Mobile phones are more secure',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Verifying from a separate device (e.g., phone on cellular) means an attacker needs to compromise both network paths.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Should verification errors block users from transacting?',
    options: [
      'Yes - always block unverified transactions',
      'No - show a warning but allow proceeding with caution',
      'Only for amounts over $1000',
      'Errors should be hidden from users',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Branta is an additional safety layer. When unavailable, warn users but don\'t prevent all transactions.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What accessibility consideration is important for verification UI?',
    options: [
      'Use only bright colors',
      'Make all text very small',
      'Disable keyboard navigation',
      'Don\\\'t rely solely on color - use icons and text labels too',
    ],
    correctIndex: 3,
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
