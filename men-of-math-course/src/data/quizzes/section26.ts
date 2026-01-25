import type { QuizQuestion } from './types';

export const section26Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'George Boole founded which branch of mathematics fundamental to computer science?',
    options: [
      'Calculus',
      'Geometry',
      'Boolean algebra',
      'Statistics',
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Boolean algebra, the mathematics of logic with AND, OR, NOT operations, is foundational for computing.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'In Boolean algebra, variables take values of:',
    options: [
      'Any real number',
      'Positive integers',
      'Complex numbers',
      'True or false (1 or 0)',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Boolean variables are binary: true/false, 1/0, on/off.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'Boole\'s major work "An Investigation of the Laws of Thought" (1854) applied algebra to:',
    options: [
      'Logic and reasoning',
      'Physics',
      'Chemistry',
      'Economics',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Boole showed that logical reasoning could be expressed algebraically.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Boole was largely:',
    options: [
      'University educated',
      'Self-taught',
      'Trained by Gauss',
      'A child prodigy from nobility',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Boole was self-taught, never attending university before becoming a professor.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Boolean algebra is used in:',
    options: [
      'Only mathematics',
      'Fluid dynamics',
      'Only philosophy',
      'Digital circuits and computer programming'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Boolean algebra is the foundation of digital circuits, programming logic, and database queries.',
  },
  {
    id: 6,
    type: 'text',
    question: 'What logical operation is denoted by ∧ (conjunction) in Boolean algebra?',
    correctAnswer: 'and',
    difficulty: 'easy',
    explanation: 'The AND operation (∧) returns true only when both inputs are true.',
  },
];
