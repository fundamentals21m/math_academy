import type { QuizQuestion } from './types';

export const section00Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What are the two fundamental operations of calculus?',
    options: [
      'Addition and subtraction',
      'Multiplication and division',
      'Exponentiation and logarithms',
      'Differentiation and integration',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The two pillars of calculus are differentiation (measuring rates of change) and integration (measuring accumulation).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does differentiation measure?',
    options: [
      'Instantaneous rate of change',
      'Total area under a curve',
      'The average of a function',
      'The maximum value of a function',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'Differentiation measures instantaneous rate of change—how fast something is changing at a specific moment.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What does integration compute?',
    options: [
      'The slope at a point',
      'Accumulated totals (such as area under a curve)',
      'The speed of an object',
      'The derivative of a function',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Integration computes accumulated totals—adding up infinitely many infinitesimal pieces to find areas, volumes, and other quantities.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'The word "calculus" comes from the Latin word for:',
    options: [
      'Infinite',
      'Change',
      'Small stone (used for counting)',
      'Mathematics',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: '"Calculus" comes from the Latin word for a small stone or pebble, which were used for counting on an abacus.',
  },
  {
    id: 5,
    type: 'text',
    question: 'What mathematical concept did calculus require to make rigorous—the idea of approaching a value without reaching it?',
    correctAnswer: 'limit',
    difficulty: 'medium',
    explanation: 'The concept of a limit—approaching a value arbitrarily closely without necessarily reaching it—is the foundation of rigorous calculus.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Which of the following is NOT a typical application of calculus?',
    options: [
      'Determining prime numbers',
      'Calculating the orbit of a planet',
      'Finding the optimal shape for a bridge',
      'Modeling population growth'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'Prime number theory is part of number theory, not calculus. Calculus deals with continuous change, not discrete counting problems.',
  },
];
