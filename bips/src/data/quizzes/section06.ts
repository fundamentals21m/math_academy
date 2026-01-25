import type { QuizQuestion } from './types';

export const section06Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is a soft fork in Bitcoin?',
    options: [
      'A wallet software update',
      'A backward-incompatible consensus change',
      'A backward-compatible consensus change',
      'A mining pool split',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'A soft fork is backward-compatible: old nodes still accept blocks from upgraded nodes.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is a hard fork?',
    options: [
      'A mining difficulty adjustment',
      'A backward-compatible consensus change',
      'A network partition',
      'A backward-incompatible consensus change',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'A hard fork is backward-incompatible: old nodes reject blocks from upgraded nodes.',
  },
  {
    id: 3,
    type: 'text',
    question: 'What mechanism did BIP-9 introduce for activating soft forks (hint: uses block version)?',
    correctAnswer: 'version bits',
    difficulty: 'medium',
    explanation: 'BIP-9 introduced version bits signaling, allowing miners to signal readiness for soft forks.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why does Bitcoin prefer soft forks over hard forks?',
    options: [
      'They are faster to implement',
      'They maintain network compatibility',
      'They require less code',
      'Miners prefer them',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Soft forks maintain network compatibility, allowing gradual upgrades without splitting the chain.',
  },
];
