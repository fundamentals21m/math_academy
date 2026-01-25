import type { QuizQuestion } from './types';

export const section03Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is the primary characteristic of phishing attacks?',
    options: [
      'They directly attack the Bitcoin network',
      'They require physical access to devices',
      'They exploit human psychology rather than technical vulnerabilities',
      'They only target large corporations',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Phishing attacks target the human element through deception and impersonation, bypassing technical security measures.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which social engineering tactic uses artificial time pressure?',
    options: [
      'Greed',
      'Fear',
      'Authority',
      'Urgency',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Urgency creates artificial time pressure ("Only 2 hours left!") to prevent victims from thinking critically.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is Business Email Compromise (BEC)?',
    options: [
      'A company losing access to their email server',
      'Attackers intercept business communications to modify payment details',
      'Employees accidentally sending sensitive information',
      'Email servers being overloaded with traffic',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'BEC involves attackers intercepting business communications, often to modify invoice payment addresses to redirect funds.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'In the July 2020 Twitter Bitcoin hack, approximately how much (in thousands of USD) did victims send to the scam within hours?',
    correctAnswer: 120,
    numericRange: { min: 100, max: 150, precision: 0 },
    difficulty: 'hard',
    explanation: 'Despite being an obvious scam, victims sent over $120,000 worth of Bitcoin to the compromised accounts within hours.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'How does Branta break the phishing attack chain?',
    options: [
      'By providing verified identity registration that attackers cannot fake',
      'By filtering phishing emails',
      'By blocking access to fake websites',
      'By encrypting all communications',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Branta\'s registration system means legitimate businesses have their addresses on record. Phishing addresses won\'t match registered data.',
  },
];
