import type { QuizQuestion } from './types';

export const section12Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Laplace is famous for his work on what physical system?',
    options: [
      'Electromagnetism',
      'Thermodynamics',
      'Celestial mechanics (the solar system)',
      'Quantum mechanics'
    ],
    correctIndex: 2,
    difficulty: 'easy',
    explanation: 'Laplace\'s Mécanique Céleste analyzed the stability of the solar system using Newtonian mechanics.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'When Napoleon asked Laplace about God\'s role in his celestial mechanics, Laplace replied:',
    options: [
      '"God is everywhere in my equations"',
      '"God set the initial conditions"',
      '"That is beyond mathematics"',
      '"I had no need of that hypothesis"'
    ],
    correctIndex: 3,
    difficulty: 'easy',
    explanation: 'Laplace famously told Napoleon "Je n\'avais pas besoin de cette hypothèse" (I had no need of that hypothesis).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Laplace transform converts functions of time to functions of:',
    options: [
      'Complex frequency',
      'Position',
      'Temperature',
      'Angle'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Laplace transform $\\mathcal{L}\\{f(t)\\} = F(s)$ converts time-domain functions to the complex frequency domain.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Laplace\'s equation $\\nabla^2 \\phi = 0$ describes:',
    options: [
      'Wave propagation',
      'Steady-state potential fields',
      'Heat flow',
      'Fluid turbulence'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'Laplace\'s equation describes steady-state situations where there are no sources or sinks.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Laplace\'s demon is a thought experiment about:',
    options: [
      'Evil in the world',
      'The heat death of the universe',
      'Perfect deterministic prediction',
      'Mathematical paradoxes'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Laplace\'s demon could predict all future events given complete knowledge of all positions and velocities.',
  },
  {
    id: 6,
    type: 'text',
    question: 'What major work did Laplace write on the mathematical theory of chance?',
    correctAnswer: 'probability',
    difficulty: 'medium',
    explanation: 'Laplace\'s Théorie Analytique des Probabilités (1812) was foundational for probability theory.',
  },
];
