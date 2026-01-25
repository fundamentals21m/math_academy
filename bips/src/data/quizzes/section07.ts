import type { QuizQuestion } from './types';

export const section07Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Which section of a BIP explains why the change is needed?',
    options: [
      'Abstract',
      'Motivation',
      'Specification',
      'Rationale'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'The Motivation section explains the problem being solved and why the change is necessary.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Where would you find the technical details of how a BIP works?',
    options: [
      'Motivation',
      'Abstract',
      'Specification',
      'Copyright'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The Specification section contains the detailed technical description of the proposal.',
  },
  {
    id: 3,
    type: 'text',
    question: 'What section discusses potential security concerns with a BIP?',
    correctAnswer: 'Security Considerations',
    difficulty: 'medium',
    explanation: 'The Security Considerations section analyzes potential security implications of the proposal.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'BIPs are typically released under which type of license?',
    options: [
      'No license specified',
      'Proprietary license',
      'GPL only',
      'Public domain or permissive license'
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'BIPs are typically released under public domain (CC0) or permissive licenses like BSD-2-Clause.',
  },
];
