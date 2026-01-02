import type { QuizQuestion } from './types';

export const section52Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Proposition II.3 states that (a+b)·b equals:',
    options: [
      'a² + b²',
      'a·b + b²',
      '2ab',
      '(a+b)²'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'II.3 proves that the rectangle contained by the whole and one segment equals the rectangle of the segments plus the square on that segment.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'Which Book I propositions are essential for the proof of II.3?',
    options: [
      'I.1 and I.2',
      'I.31 and I.46',
      'I.47 and I.48',
      'I.4 and I.5'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'II.3 uses I.31 (constructing parallels) and I.46 (constructing squares) to set up the geometric proof.',
  },
];
