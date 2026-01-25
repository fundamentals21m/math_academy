import type { QuizQuestion } from './types';

export const section08Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does BIP-9 introduce for soft fork activation?',
    options: [
      'Version bits signaling',
      'Block height activation',
      'User activated soft fork',
      'Mining pool voting'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'BIP-9 introduces version bits signaling, allowing miners to signal readiness for multiple soft forks simultaneously.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'How many bits are available for signaling different soft forks in BIP-9?',
    correctAnswer: 29,
    numericRange: { min: 1, max: 32, precision: 0 },
    difficulty: 'hard',
    explanation: 'BIP-9 uses bits 0-28 of the block version field, providing 29 bits for parallel soft fork signaling.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the default activation threshold in BIP-9?',
    options: [
      '51% of blocks in a period',
      '75% of blocks in a period',
      '100% of blocks in a period',
      '95% of blocks in a period',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'BIP-9 requires 95% of blocks in a 2016-block difficulty period to signal readiness.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What happens if a BIP-9 soft fork doesn\'t activate before its end time?',
    correctAnswer: 'fails',
    difficulty: 'medium',
    explanation: 'If the threshold isn\'t reached before the timeout, the soft fork fails and the signaling bit becomes available for reuse.',
  },
];
