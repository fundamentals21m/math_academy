import type { QuizQuestion } from './types';

export const section08Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'numeric',
    question: 'What is the type number of the shutdown message?',
    correctAnswer: 38,
    numericRange: { min: 30, max: 50, precision: 0 },
    difficulty: 'medium',
    explanation: 'The shutdown message has type 38 and signals intent to close the channel.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is forbidden after both peers have sent shutdown?',
    options: [
      'Sending commitment_signed',
      'Sending revoke_and_ack',
      'Updating fees',
      'Adding new HTLCs',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'After both peers send shutdown, no new HTLCs can be added. Existing HTLCs must be resolved before closing.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'In the legacy closing protocol (closing_signed), who pays the closing fee?',
    options: [
      'Both parties equally',
      'The funder',
      'Whichever party initiated shutdown',
      'The fundee',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'In the legacy protocol, the funder pays the entire closing transaction fee.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What is a benefit of mutual close over unilateral close?',
    options: [
      'More features',
      'Higher security',
      'Immediate access to funds (no timelock)',
      'Lower minimum balance',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Mutual close provides immediate access to funds with no CSV delay, lower fees, and better privacy.',
  },
  {
    id: 5,
    type: 'text',
    question: 'What feature allows pre-committing to a closing address during channel open? (with underscores)',
    correctAnswer: 'option_upfront_shutdown_script',
    difficulty: 'hard',
    explanation: 'option_upfront_shutdown_script allows peers to commit to a closing address during channel opening, preventing fund redirection after node compromise.',
  },
];
