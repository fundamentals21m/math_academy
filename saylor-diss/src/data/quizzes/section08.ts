import type { QuizQuestion } from './types';

export const section08Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What type of equations form the core of the system dynamics model?',
    options: [
      'Integrating equations (differential equations)',
      'Linear equations',
      'Algebraic equations only',
      'Statistical equations',
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The model uses integrating (differential) equations where stocks accumulate flows over time.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What does the general form "Stock(t) = Stock(t-dt) + (Inflow - Outflow) × dt" represent?',
    options: [
      'A static relationship',
      'A market equilibrium',
      'How accumulations change over time',
      'A probability distribution',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'This equation shows how a stock changes based on the difference between inflows and outflows.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What determines the rate of change of discontent in the model?',
    options: [
      'External events only',
      'The gap between aspirations and actual conditions',
      'Random factors only',
      'Executive decrees',
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Discontent changes based on the gap between what factions expect and what they receive.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In the model, how are the three factions\' behaviors interconnected?',
    options: [
      'They operate independently',
      'Only the executive affects the others',
      'Only through external shocks',
      'Through feedback loops where each affects the others',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'The model captures feedback loops where each faction\'s behavior affects the others.',
  },
];
