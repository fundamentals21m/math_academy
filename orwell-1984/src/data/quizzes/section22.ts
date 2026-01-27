import type { QuizQuestion } from './types';

export const section22Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What does Room 101 contain?',
    options: ['The worst thing in the world—different for each person', 'Execution equipment', 'Big Brother himself', 'Goldstein\'s hideout'],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Room 101 contains "the worst thing in the world"—the one thing no individual can endure. For Winston, this is rats.'
  },
  {
    id: 2,
    type: 'text',
    question: 'What creature does Winston fear more than anything?',
    correctAnswer: 'rats',
    difficulty: 'easy',
    explanation: 'Winston has a deep, irrational terror of rats. O\'Brien uses this knowledge to break him completely.'
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What does Winston scream to save himself from the rats?',
    options: ['I love Big Brother!', 'Do it to Julia!', 'Kill me instead!', 'I confess!'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Winston screams "Do it to Julia! Not me! Julia!"—genuinely wishing his suffering on the woman he loved. This is the ultimate betrayal.'
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why is Winston\'s cry "Do it to Julia!" significant?',
    options: ['It shows he never loved her', 'It is a code phrase for the Brotherhood', 'It is the ultimate betrayal—he meant it with his whole being', 'It saves Julia\'s life'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Julia said only if they could make her stop loving Winston would that be "the real betrayal." In Room 101, Winston commits exactly this.'
  }
];
