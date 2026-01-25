import type { QuizQuestion } from './types';

export const section06Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What is Proposition I.6 the converse of?',
    options: [
      'Proposition I.5',
      'Proposition I.4',
      'Proposition I.3',
      'Proposition I.1',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'I.6 is the converse of I.5: if two angles of a triangle are equal, then the sides opposite them are equal.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What proof technique does Euclid use in I.6?',
    options: [
      'Direct proof',
      'Proof by superposition',
      'Proof by contradiction (reductio ad absurdum)',
      'Proof by exhaustion',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Euclid assumes the sides are unequal and derives a contradiction using I.4.',
  },
];
