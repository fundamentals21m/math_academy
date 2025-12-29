import type { QuizQuestion } from './types';

export const section12Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'Laplace is famous for his work on what physical system?',
    options: [
      'Electromagnetism',
      'Celestial mechanics (the solar system)',
      'Thermodynamics',
      'Quantum mechanics'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Laplace\'s Mécanique Céleste analyzed the stability of the solar system using Newtonian mechanics.',
  },
  {
    id: 2,
    type: 'multiple-choice',
    question: 'When Napoleon asked Laplace about God\'s role in his celestial mechanics, Laplace replied:',
    options: [
      '"God is everywhere in my equations"',
      '"I had no need of that hypothesis"',
      '"That is beyond mathematics"',
      '"God set the initial conditions"'
    ],
    correctIndex: 1,
    difficulty: 'easy',
    explanation: 'Laplace famously told Napoleon "Je n\'avais pas besoin de cette hypothèse" (I had no need of that hypothesis).',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'The Laplace transform converts functions of time to functions of:',
    options: [
      'Position',
      'Complex frequency',
      'Temperature',
      'Angle'
    ],
    correctIndex: 1,
    difficulty: 'medium',
    explanation: 'The Laplace transform $\\mathcal{L}\\{f(t)\\} = F(s)$ converts time-domain functions to the complex frequency domain.',
  },
  {
    id: 4,
    type: 'multiple-choice',
    question: 'Laplace\'s equation $\\nabla^2 \\phi = 0$ describes:',
    options: [
      'Wave propagation',
      'Heat flow',
      'Steady-state potential fields',
      'Fluid turbulence'
    ],
    correctIndex: 2,
    difficulty: 'medium',
    explanation: 'Laplace\'s equation describes steady-state situations where there are no sources or sinks.',
  },
  {
    id: 5,
    type: 'multiple-choice',
    question: 'Laplace\'s demon is a thought experiment about:',
    options: [
      'Evil in the world',
      'Perfect deterministic prediction',
      'The heat death of the universe',
      'Mathematical paradoxes'
    ],
    correctIndex: 1,
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
