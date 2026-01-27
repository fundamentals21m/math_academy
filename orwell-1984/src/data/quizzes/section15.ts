import type { QuizQuestion } from './types';

export const section15Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What privilege does O\'Brien have that shocks Winston?',
    options: ['All of the above', 'He has a servant', 'He can turn off his telescreen', 'He has real wine'],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'O\'Brien\'s Inner Party apartment has luxuries unimaginable to Outer Party members: a servant, real wine, and most shockingly, a telescreen that can be turned off.'
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What is the one thing Winston and Julia refuse to do for the Brotherhood?',
    options: ['Commit murder', 'Separate and never see each other again', 'Throw acid in a child\'s face', 'Betray their country'],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'They agree to everything—murder, sabotage, betraying their country—but refuse to separate. This reveals their fatal weakness.'
  },
  {
    id: 3,
    type: 'text',
    question: 'What is the title of Goldstein\'s book that O\'Brien promises to give Winston?',
    correctAnswer: 'Theory and Practice of Oligarchical Collectivism',
    difficulty: 'hard',
    explanation: '"The Theory and Practice of Oligarchical Collectivism" explains how the Party maintains power.'
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'When O\'Brien toasts, what does Winston toast to?',
    options: ['The future', 'Big Brother', 'The past', 'The Brotherhood'],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'When O\'Brien asks what to toast, Winston says "To the past"—revealing his deepest longing.'
  }
];
