import type { QuizQuestion } from './types';

export const section87Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is a Bitcoin vault?',
    options: [
      'A hardware wallet',
      'A mining operation',
      'A block explorer',
      'A contract with time-delayed withdrawal and recovery',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Vaults add time delays allowing response to unauthorized access attempts.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'CTV vaults protect against:',
    options: [
      'Double spending',
      'Block reorgs',
      'Instant theft from key compromise',
      'Mining attacks',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Time delays give owners time to recover funds during theft attempts.',
  },
  {
    id: 3,
    type: 'text',
    question: 'The recovery path in a vault sends funds to _____ storage.',
    correctAnswer: 'cold',
    difficulty: 'medium',
    explanation: 'Recovery typically sends funds to secure cold storage.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Vault security relies on:',
    options: [
      'Monitoring and time to respond',
      'Network consensus',
      'Mining power',
      'Block size',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Vaults need monitoring to detect unauthorized unvaulting.',
  },
];
