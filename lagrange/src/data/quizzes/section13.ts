import type { QuizQuestion } from './types';

export const section13Questions: QuizQuestion[] = [
  {
    id: 1,
    type: 'multiple-choice',
    question: 'The period of a Foucault pendulum at latitude $\\lambda$ is given by:',
    options: [
      '$T = \\frac{24 \\text{ h}}{\\sin\\lambda}$',
      '$T = \\frac{24 \\text{ h}}{\\cos\\lambda}$',
      '$T = 24 \\text{ h} \\cdot \\sin\\lambda$',
      '$T = 24 \\text{ h}$'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'The Foucault pendulum precesses with period $T = \\frac{24 \\text{ h}}{\\sin\\lambda}$. At the poles ($\\lambda = 90°$), it completes one rotation in 24 hours. At the equator ($\\lambda = 0°$), it does not precess.',
  },
  {
    id: 2,
    type: 'numeric',
    question: 'At what latitude (in degrees) does a Foucault pendulum have a precession period of exactly 48 hours?',
    correctAnswer: 30,
    numericRange: { min: 0, max: 90, precision: 0 },
    difficulty: 'medium',
    explanation: 'From $T = \\frac{24}{\\sin\\lambda}$, we have $48 = \\frac{24}{\\sin\\lambda}$, so $\\sin\\lambda = 0.5$, giving $\\lambda = 30°$.',
  },
  {
    id: 3,
    type: 'multiple-choice',
    question: 'What physical effect causes the Foucault pendulum to precess?',
    options: [
      'The Coriolis force acting on the moving pendulum bob',
      'The centrifugal force pushing the pendulum outward',
      'Air resistance in the rotating atmosphere',
      'Gravitational variations due to Earth\'s rotation'
    ],
    correctIndex: 0,
    difficulty: 'easy',
    explanation: 'The Coriolis force, which acts perpendicular to the pendulum\'s velocity, causes the plane of oscillation to slowly rotate. This is a direct demonstration of Earth\'s rotation.',
  },
  {
    id: 4,
    type: 'numeric',
    question: 'At the North Pole ($\\lambda = 90°$), how many degrees does the Foucault pendulum\'s plane of oscillation rotate in one hour?',
    correctAnswer: 15,
    numericRange: { min: 0, max: 360, precision: 0 },
    difficulty: 'easy',
    explanation: 'At the North Pole, the pendulum completes $360°$ in 24 hours. Therefore, in one hour it rotates $\\frac{360°}{24} = 15°$.',
  },
  {
    id: 5,
    type: 'text',
    question: 'Who first demonstrated the rotation of the Earth using a pendulum in Paris in 1851?',
    correctAnswer: 'Foucault',
    difficulty: 'easy',
    explanation: 'Leon Foucault demonstrated his famous pendulum at the Pantheon in Paris in 1851, providing direct evidence of Earth\'s rotation.',
  },
  {
    id: 6,
    type: 'multiple-choice',
    question: 'In which direction does the Foucault pendulum appear to rotate when viewed from above in the Northern Hemisphere?',
    options: [
      'Clockwise',
      'Counterclockwise',
      'It oscillates without rotating',
      'It depends on the initial direction of swing'
    ],
    correctIndex: 0,
    difficulty: 'medium',
    explanation: 'In the Northern Hemisphere, the Foucault pendulum appears to rotate clockwise when viewed from above. This is because the Earth rotates counterclockwise beneath it.',
  },
];
