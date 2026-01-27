import type { QuizQuestion } from './types';

export const section03Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is Winston\'s job at the Ministry of Truth?',
    options: ['Altering historical records to match current Party positions', 'Creating new propaganda', 'Broadcasting news reports', 'Interrogating thought criminals'],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Winston works in the Records Department, altering historical documents to ensure they always match the Party\'s current version of events.'
  },
  {
    id: 2,
    type: 'text',
    question: 'What is the name for the incinerator slots where old documents are destroyed?',
    correctAnswer: 'memory hole',
    difficulty: 'easy',
    explanation: 'Memory holes are slots connected to incinerators where documents are destroyed. The term has entered common usage to describe the deliberate erasure of inconvenient facts.'
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What happens to people who have been "vaporized"?',
    options: ['They are sent to labor camps', 'All records of their existence are erased', 'They are executed publicly', 'They are exiled to other countries'],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'When someone is vaporized, they become an "unperson"—all records of their existence are deleted, and they are erased from history as if they never existed.'
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Who is the fictional hero Winston invents to replace a vaporized comrade?',
    options: ['Comrade Jones', 'Comrade Smith', 'Comrade Ogilvy', 'Comrade Wilson'],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Winston creates Comrade Ogilvy, complete with a heroic backstory and noble death, to replace the vaporized Comrade Withers in historical records.'
  }
];
