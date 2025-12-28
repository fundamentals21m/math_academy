import type { QuizQuestion } from './types';

export const section12Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Newton\'s Second Law $F = ma$ is fundamentally:',
    options: [
      'An algebraic equation',
      'A differential equation (since $a = \\frac{d^2x}{dt^2}$)',
      'A trigonometric identity',
      'A statistical formula'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Since acceleration is the second derivative of position, $F = ma$ is really $F = m\\frac{d^2x}{dt^2}$—a differential equation.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'What did Maxwell\'s equations, expressed through calculus, predict?',
    options: [
      'The existence of atoms',
      'Electromagnetic waves traveling at the speed of light',
      'The structure of crystals',
      'The age of the universe'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Maxwell\'s differential equations predicted electromagnetic waves at light speed—revealing that light itself is electromagnetic.',
  },
  {
    id: 3,
    type: 'text',
    question: 'What type of equation is the Schrödinger equation, which governs quantum mechanics?',
    correctAnswer: 'differential',
    difficulty: 'medium',
    explanation: 'The Schrödinger equation is a partial differential equation that describes how quantum wave functions evolve in time.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'In Einstein\'s general relativity, gravity is described as:',
    options: [
      'A force between masses',
      'Curvature of spacetime, expressed through differential geometry',
      'The absence of matter',
      'Pure energy'
    ],
    correctIndex: 1,
    difficulty: 'hard',
    explanation: 'General relativity describes gravity not as a force but as curvature of spacetime, using differential geometry—an extension of calculus to curved spaces.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Why is calculus called "the language of physics"?',
    options: [
      'Physicists speak Latin',
      'The fundamental laws of physics are expressed as differential equations',
      'Calculus was invented by a physicist',
      'Physics doesn\'t use mathematics'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'From Newton\'s laws to Maxwell\'s equations to quantum mechanics, the fundamental laws of physics are all expressed through calculus.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'The heat equation describes:',
    options: [
      'How objects fall',
      'How heat diffuses through a material over time',
      'The color of heated objects',
      'The creation of fire'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The heat equation is a partial differential equation that describes how temperature distributes itself through a material over time.',
  },
];
