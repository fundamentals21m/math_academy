import type { QuizQuestion } from './types';

export const section00Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does "self-custody" mean in the context of Bitcoin wallets?',
    options: [
      'You maintain exclusive control of your private keys',
      'A bank holds your bitcoin for you',
      'Your wallet is connected to the internet',
      'You can only store small amounts',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Self-custody means you maintain exclusive control of your private keys, without relying on any third party. This is often summarized as "not your keys, not your coins."',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which Lightning implementations does Zeus support?',
    options: [
      'Only LND',
      'Only Core Lightning',
      'Zeus only works with the embedded node',
      'LND, Core Lightning, and LndHub',
    ],
    correctIndex: 3,
    difficulty: 'medium',
    explanation: 'Zeus supports multiple Lightning implementations including LND, Core Lightning (CLN), and LndHub, giving users flexibility in their node choice.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What is the difference between Remote Node Mode and Embedded Node Mode?',
    options: [
      'Remote requires internet, embedded works offline',
      'Remote connects to external hardware, embedded runs on your phone',
      'Remote is faster, embedded is more secure',
      'There is no difference',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Remote Node Mode connects Zeus to your own Lightning node running on separate hardware, while Embedded Node Mode runs a lightweight LND node directly on your mobile device.',
  },
  {
    id: 4,
    type: 'text',
    question: 'What license is Zeus released under?',
    correctAnswer: 'AGPL',
    difficulty: 'hard',
    explanation: 'Zeus is fully open source under the AGPL v3 (GNU Affero General Public License) license, making its code publicly auditable.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Which Greek god inspired the name "Zeus" for this wallet?',
    options: [
      'Apollo, god of the sun',
      'Poseidon, god of the sea',
      'Zeus, god of lightning',
      'Hermes, god of merchants',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'The name "Zeus" comes from the Greek god of lightning - a fitting name for a Lightning Network wallet that aims to give users powerful control over their bitcoin.',
  },
];
