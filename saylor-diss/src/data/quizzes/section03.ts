import type { QuizQuestion } from './types';

export const section03Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'What are the two fundamental elements in system dynamics models?',
    options: [
      'Stocks and flows',
      'Inputs and outputs',
      'Variables and constants',
      'Causes and effects',
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'System dynamics models are built from stocks (accumulations) and flows (rates of change).',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'A stock in system dynamics represents:',
    options: [
      'The rate of change of a variable',
      'An accumulation that changes over time',
      'A constant parameter',
      'An external input',
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Stocks are accumulations—like water in a bathtub, money in an account, or political support.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What type of feedback loop amplifies change?',
    options: [
      'Negative feedback',
      'Neutral feedback',
      'Positive feedback',
      'Static feedback',
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Positive (reinforcing) feedback loops amplify change, while negative (balancing) loops resist it.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In the bathtub analogy, what represents a "flow"?',
    options: [
      'The water level',
      'The size of the tub',
      'The temperature of the water',
      'The faucet adding water',
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Flows are the rates that change stocks—like the faucet adding water or the drain removing it.',
  },
];
