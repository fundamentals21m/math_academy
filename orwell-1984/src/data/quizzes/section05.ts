import type { QuizQuestion } from './types';

export const section05Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'How does the Party view sexual desire?',
    options: ['As dangerous energy that could be directed against it', 'As a healthy expression of human nature', 'As unimportant to political life', 'As something to be encouraged for population growth'],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Party views sexual desire as dangerous because it creates private loyalties outside the Party\'s control and directs energy away from political devotion.'
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What was Winston\'s wife Katharine\'s attitude toward sex?',
    options: ['She enjoyed it as an act of rebellion', 'She approached it as a "duty to the Party"', 'She refused to participate entirely', 'She was passionate and loving'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Katharine approached sex as a "duty to the Party"—an unpleasant obligation for producing children, with all pleasure removed.'
  },
  {
    id: 3,
    type: 'text',
    question: 'What organization promotes complete celibacy among its members?',
    correctAnswer: 'Junior Anti-Sex League',
    difficulty: 'medium',
    explanation: 'The Junior Anti-Sex League promotes complete celibacy as an ideal, viewing sexual restraint as a form of political virtue.'
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Why can\'t Winston and Katharine divorce?',
    options: ['They still love each other', 'They have children together', 'Divorce is not permitted by the Party', 'Winston refuses to sign the papers'],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Divorce is not permitted in Oceania, though separation is common when couples produce no children.'
  }
];
