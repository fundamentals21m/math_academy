import type { QuizQuestion } from './types';

export const section03Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'During what event did Newton develop his method of fluxions (calculus)?',
    options: [
      'The Great Fire of London',
      'The English Civil War',
      'The Great Plague of 1665-66',
      'The Glorious Revolution'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Newton developed calculus during the plague years of 1665-66 when Cambridge University was closed and he retreated to his family farm.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What did Newton call his version of calculus?',
    options: [
      'The method of limits',
      'The method of fluxions',
      'Differential calculus',
      'The method of infinitesimals'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Newton called his calculus "the method of fluxions," imagining quantities as flowing like water through time.',
  },
  {
    id: 3,
    type: 'text',
    question: 'What notation did Newton use to denote a derivative with respect to time? (Use a single letter with the appropriate mark)',
    correctAnswer: 'ẋ',
    difficulty: 'hard',
    explanation: 'Newton used a dot above a variable to indicate its derivative: $\\dot{x}$ for velocity (derivative of position) and $\\ddot{x}$ for acceleration.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'What famous insight did Newton have involving a falling apple?',
    options: [
      'Apples fall faster than oranges',
      'The same force that makes apples fall also keeps the Moon in orbit',
      'Apples always fall straight down',
      'The Earth attracts apples but not the Moon'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Newton realized that the same gravitational force pulling the apple downward is what curves the Moon\'s path into an orbit around Earth.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'What is the title of Newton\'s masterwork on physics and calculus, published in 1687?',
    options: [
      'The Elements',
      'Principia Mathematica',
      'On the Origin of Species',
      'Dialogue Concerning Two Chief World Systems'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Newton\'s "Principia Mathematica" (Mathematical Principles of Natural Philosophy) laid the foundation for classical mechanics.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'Why did Newton present his physics using geometry rather than calculus in the Principia?',
    options: [
      'He hadn\'t invented calculus yet',
      'Geometry was easier to understand',
      'He believed geometry would be more acceptable to readers',
      'Calculus didn\'t apply to physics'
    ],
    correctIndex: 2,
    difficulty: 'hard',
    explanation: 'Newton deliberately used classical geometry in the Principia, believing it would be more acceptable to readers—though this made the book nearly unreadable.',
  },
];
